// PROFUND — teste pentru provocarea zilei (v2). Rulare: node tests/fff-v2.test.mjs
import {launch, check, summary, hOverflow, axeRun} from "./_lib.mjs";

console.log("1. mâna zilei e determinată de dată + dificultate");
{
  const {browser, page, st} = await launch();
  await page.waitForTimeout(500);
  check("0 erori", st.errs.length === 0, st.errs);
  check("0 cereri de rețea", st.net.length === 0, st.net);
  const r = await page.evaluate(() => {
    const a = ProfundDaily.handFor('2026-10-26', 'easy'), b = ProfundDaily.handFor('2026-10-26', 'easy');
    const c = ProfundDaily.handFor('2026-10-27', 'easy'), d = ProfundDaily.handFor('2026-10-26', 'deep');
    return {same: JSON.stringify(a) === JSON.stringify(b), diffDay: JSON.stringify(a) !== JSON.stringify(c), diffLvl: JSON.stringify(a) !== JSON.stringify(d), len: a.length, blocks: new Set(a.map(x => x.bi)).size};
  });
  check("aceeași dată/dificultate → aceeași mână", r.same);
  check("altă zi → altă mână", r.diffDay);
  check("altă dificultate → altă mână", r.diffLvl);
  check("5 cărți din 5 blocuri distincte", r.len === 5 && r.blocks === 5, r);
  // aceeași mână în limbi diferite (indicii nu depind de limbă)
  const bi = []; 
  for (const l of ['ro', 'en']) { await page.click(`.lang-toggle button[data-l="${l}"]`); bi.push(await page.evaluate(() => JSON.stringify([...document.querySelectorAll('#dailyHand .dslot')].map(x => x.dataset.i)))); }
  check("limba nu schimbă mâna", bi[0] === bi[1]);
  await browser.close();
}

console.log("2. joc complet, rezultat emoji fără spoilere, serie, persistență");
{
  const {browser, page, st} = await launch({init: () => { const R = Date; const fixed = new R('2026-10-26T10:00:00').getTime(); window.Date = class extends R { constructor(...a) { if (a.length) super(...a); else super(fixed); } static now() { return fixed; } }; }});
  await page.waitForTimeout(400);
  await page.selectOption('#dailyDiff', 'deep');
  const first = await page.textContent('#dailyQ');
  check("prima întrebare afișată", first.length > 10);
  const marks = [2, 3, 1, 0, 2];
  for (const m of marks) await page.click(`#dailyRate [data-m="${m}"]`);
  check("progres 5/5 și buton de partajare", await page.locator('#dailyShare').isVisible());
  const out = await page.inputValue('#dailyOut');
  check("rezultatul conține emoji-urile marcate", out.includes('🌊🔥🌱⏭️🌊'), out);
  check("rezultatul conține data fixată", out.includes('2026-10-26'), out);
  const qs = await page.evaluate(() => BLOCKS.flatMap(b => b.q.flatMap(q => Object.values(q))));
  check("fără spoilere: niciun text de întrebare în rezultat", !qs.some(q => q && out.includes(q)));
  check("serie = 1 zi", /1/.test(await page.textContent('#dailyStreak')) && (await page.evaluate(() => ProfundDaily.streak())) === 1);
  await page.reload(); await page.waitForTimeout(400);
  await page.selectOption('#dailyDiff', 'deep');
  check("starea zilei se păstrează după reîncărcare", (await page.inputValue('#dailyOut')).includes('🌊🔥🌱⏭️🌊'));
  const kk = await page.evaluate(() => Object.keys(localStorage));
  check("stocare cu prefixul aplicației", kk.includes('profund_daily'), kk);
  // antrenament: nu se salvează
  const before = await page.evaluate(() => localStorage.getItem('profund_daily'));
  await page.check('#dailyTrain');
  for (let i = 0; i < 5; i++) await page.click('#dailyRate [data-m="1"]');
  check("antrenament: nesalvat", (await page.evaluate(() => localStorage.getItem('profund_daily'))) === before);
  check("antrenament: buton „mână nouă”", await page.locator('#dailyNew').isVisible());
  check("fără depășire orizontală", (await hOverflow(page)) <= 0);
  const ax = await (async () => { const b2 = await launch({bypassCSP: true}); await b2.page.waitForTimeout(300); const r = await axeRun(b2.page); await b2.browser.close(); return r; })();
  check("axe: fără încălcări în secțiunea nouă", ax === null || !ax.some(v => /#zilnic|#daily/.test(v)), ax);
  check("0 erori", st.errs.length === 0, st.errs);
  await browser.close();
}

console.log("3. serie pe zile consecutive");
{
  const {browser, page} = await launch({init: () => {
    const R = Date; const fixed = new R('2026-10-26T10:00:00').getTime();
    window.Date = class extends R { constructor(...a) { if (a.length) super(...a); else super(fixed); } static now() { return fixed; } };
    const full = [1, 2, 3, 1, 2];
    localStorage.setItem('profund_daily', JSON.stringify({h: {'2026-10-25|easy': full, '2026-10-24|deep': full, '2026-10-22|easy': full, '2026-10-26|easy': [1, null, null, null, null]}}));
  }});
  await page.waitForTimeout(400);
  check("ieri+alaltăieri → serie 2 (azi nefinalizat)", (await page.evaluate(() => ProfundDaily.streak())) === 2);
  await browser.close();
}
summary();

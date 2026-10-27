// PROFUND 2.0.1 — nota vizibilă de stare juridică: atribuire către deepcards.org, acordul titularilor NECONFIRMAT (fără a pretinde că există).
// Rulare: node tests/stare-juridica.test.mjs
import {launch, check, summary, axeRun} from "./_lib.mjs";

const NEG = {ro: /nu a fost confirmat/, en: /has not been confirmed/, fr: /n’a pas été confirmé/, it: /non è stato confermato/, es: /no se ha confirmado/, pt: /não foi confirmado/, de: /nicht bestätigt/, hu: /nem megerősített/};
const {browser, page, st} = await launch({reducedMotion: "reduce"});
await page.waitForTimeout(600);
for (const l of Object.keys(NEG)) {
  await page.click(`.lang-toggle button[data-l="${l}"]`);
  await page.waitForTimeout(150);
  for (const id of ["#legal-top", "#legal-foot"]) {
    const el = page.locator(id);
    const txt = await el.innerText();
    check(`${l} ${id}: vizibilă, cu «deepcards.org» și «acordul neconfirmat»`, (await el.isVisible()) && /deepcards\.org/.test(txt) && NEG[l].test(txt), txt.slice(0, 160));
  }
  const html = await page.locator("#legal-top").innerHTML();
  check(`${l}: linkul deepcards.org este https cu rel=noopener`, /href="https:\/\/deepcards\.org\/"[^>]*rel="noopener"/.test(html));
}
await page.click('.lang-toggle button[data-l="ro"]');
await page.waitForTimeout(150);
const ro = await page.locator("#legal-top").innerText();
check("RO: textul nu pretinde că există acord (conține «nu pretinde»)", /nu pretinde că există un astfel de acord/.test(ro) && !/cu acordul titularilor/i.test(ro), ro);
check("0 erori de pagină/CSP și 0 cereri de rețea", st.errs.length === 0 && st.net.length === 0, [st.errs, st.net]);
await browser.close();
{
  const {browser: b2, page: p2} = await launch({reducedMotion: "reduce", bypassCSP: true}); // axe injectează un script inline
  await p2.waitForTimeout(600);
  const ax = await axeRun(p2);
  check("axe: 0 violări (inclusiv contrast) cu nota afișată", ax !== null && ax.length === 0, ax);
  await b2.close();
}
summary();

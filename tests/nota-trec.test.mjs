// Profund: nota „Poți spune «Trec» oricând, fără explicații” (8 limbi). Rulare: node tests/nota-trec.test.mjs
import {launch, check, summary} from "./_lib.mjs";
const {browser, page, st} = await launch({reducedMotion: "reduce"});
await page.waitForTimeout(600);
const ro = await page.locator('[data-i18n="d_passnote"]').allTextContents();
check("nota există (2 locuri) în RO", ro.length === 2 && ro.every(t => /Trec/.test(t) && /fără explicații/.test(t)), ro);
for (const [l, re] of [["en", /Pass/], ["fr", /passe/], ["it", /Passo/], ["es", /Paso/], ["pt", /Passo/], ["de", /Passe/], ["hu", /Passz/]]) {
  await page.click(`#langToggle [data-l="${l}"]`);
  await page.waitForTimeout(150);
  const t = (await page.locator('[data-i18n="d_passnote"]').first().textContent()) || "";
  check("nota tradusă: " + l, re.test(t), t);
}
check("fără erori", st.errs.length === 0, st.errs);
await browser.close(); summary();

# Jurnal de modificări

## 2.0.1 — 2026-10-27 (anterior: v2.0.0)

Recenzie 2026-10-27.

### Implementat
- Notă de stare juridică vizibilă (sus și în subsol), în 8 limbi: întrebările provin din adaptarea după deepcards.org; **acordul titularilor nu a fost confirmat — de clarificat de autor**. Nu se pretinde existența vreunui acord și nu s-a retras nimic.
- Test nou `tests/stare-juridica.test.mjs` (27 verificări).

### Neimplementat și de ce
- Clarificarea efectivă a acordului: depinde de autor/titulari; nu poate fi făcută din cod.
- AI cu niveluri de dificultate: neimplementat în această rundă (necesită calibrare și teste dedicate pe motorul jocului).
- Statistici comune între jocuri: neimplementat (ar cere un spațiu de stocare partajat între aplicații separate, contrar izolării actuale).
- Mod multiplayer local unificat între jocuri: **planificat**, NU acum; jocurile rămân separate.

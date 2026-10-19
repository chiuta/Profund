# Profund

[English](README.md) · [Română](README.ro.md) · **Français** · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Version :** 1.1.0 · **Dernière mise à jour :** 2026-10-14

Un jeu de questions « trade-free » (sans troc) pour des conversations qui ont du sens — #FaraVorbeGoale (#PasDePetitesPhrases).

**Application en ligne :** https://chiuta.github.io/Profund/

![Capture d'écran](screenshot.png)

## Présentation

Profund est un jeu de 150 cartes avec des questions qui ouvrent des conversations, dans un seul fichier HTML. Le texte de l'application le décrit comme une adaptation roumaine / anglaise / française d'après deepcards.org, un projet de l'écosystème TROM. On peut y jouer en ligne (des cartes qui se retournent d'une pression) ou hors ligne, avec des cartes imprimées.

## Fonctionnalités

- Interface en roumain, anglais et français (boutons RO / EN / FR).
- Présentation : ce qu'est le jeu, ses trois idées et ce qui pourrait se passer.
- Quatre modes de jeu décrits : « Ia & Răspunde » (Prends & réponds, 2–6 personnes), « Ghicește » (Devine, 2–6), « Declanșator de conversații » (Déclencheur de conversations, 4–20), « FărăRăspuns – TreciLaAcțiune » (Sans réponse – Passe à l'action, 2–10).
- Jeu en ligne : les questions sont réparties en blocs de 10 ; on appuie sur une carte pour la retourner. Boutons « Carte la întâmplare » (Carte au hasard), « Amestecă pachetul » (Mélanger le paquet), « Următoarea carte » (Carte suivante).
- Joueurs (facultatif, en mémoire uniquement) : on saisit les noms séparés par des virgules et chaque carte tirée indique, à tour de rôle, qui répond.
- Raccourcis clavier dans la zone « Joacă online » (Jouer en ligne) : `Espace` ou `→` = carte suivante, `R` = carte au hasard, `S` = mélanger (inactifs en dehors de la zone de jeu ou dans les champs de texte).
- Favoris et minuterie (dans la zone « Joacă online ») : « ♡ Păstrează cartea » (Garder la carte) marque la carte tirée, et « Descarcă favoritele (text) » (Télécharger les favoris (texte)) enregistre la liste sous `profund-favorite.txt` ; les favoris n'existent qu'en mémoire, jusqu'au rechargement de la page. La minuterie facultative (30 / 60 / 120 s) démarre à chaque carte tirée et affiche « Timpul a expirat. » (Le temps est écoulé.) à la fin (sans son). Textes en RO / EN / FR.
- Jeu hors ligne : « Printează cărțile (PDF) » (Imprimer les cartes (PDF) ; 150 cartes, 3 par rangée, prêtes à découper) et « Descarcă întrebările (text) » (Télécharger les questions (texte)).
- Formulaire de contact qui prépare un e-mail (mailto) à l'auteur.

## Mode d'emploi

1. Choisissez la langue avec les boutons RO / EN / FR en haut.
2. Lisez la section « Moduri de joc » (Modes de jeu) et choisissez-en un.
3. Dans « Joacă online », appuyez sur « Carte la întâmplare » pour une carte, sur « Amestecă pachetul » pour mélanger, puis sur « Următoarea carte ». Quand le paquet est épuisé, mélangez à nouveau.
4. Pour le jeu physique, dans « Joacă offline », appuyez sur « Printează cărțile (PDF) », choisissez « Enregistrer au format PDF » ou imprimez, puis découpez les cartes.
5. « Descarcă întrebările (text) » enregistre les questions dans un fichier texte.
6. Dans « Contact », vous renseignez votre nom, votre e-mail, l'objet et le message, puis vous appuyez sur « Trimite mesajul » (Envoyer le message) : votre client de messagerie s'ouvre avec un message à alexio@trom.tf (l'application n'a pas de serveur).

## Confidentialité et réseau

- Local : seule la langue choisie est conservée, dans le `localStorage` (clé `profund_lang`).
- Réseau : je n'ai trouvé aucun appel `fetch`, ni script ou police externe (les polices sont intégrées au fichier). Le texte de l'application affirme « pas d'argent, pas de données ».
- Les liens du pied de page et les liens de soutien (deepcards.org, tiotrom.com, trade-free.org, Buy Me a Coffee) ne s'ouvrent que si vous cliquez dessus.
- Le formulaire de contact n'envoie pas de données via un serveur ; il utilise `mailto:`.

## Exécution en local / hors ligne

Téléchargez `index.html` et ouvrez-le dans un navigateur ; il fonctionne sans internet (les liens externes nécessitent une connexion).

## Historique / Changelog

### 1.1.0 — 2026-10-14
- Sauvegarde et étiquetage des données (fff-kit).

### 12 octobre 2026 (v1.0.0)
- 1.0.0 — 2026-10-12 : la version et la date de la dernière mise à jour sont affichées dans l'application

### 11 octobre 2026 (troisième entrée)
- Correction du titre du mode en anglais : « LetGuess » → « Guess » (comme « Ghicește » en roumain et « Devine » en français).
- Favoris (téléchargeables en texte) et minuterie facultative par carte, en 3 langues.

### 11 octobre 2026 (deuxième entrée)
- CSP : `script-src` avec un hachage au lieu de `'unsafe-inline'` (il n'y a plus d'attributs `on*` en ligne).
- Champ facultatif « Joueurs » (la ligne du joueur qui répond sur la carte tirée) et raccourcis clavier ; nouveaux textes en RO / EN / FR.

### 11 octobre 2026
- Accessibilité : contenu placé dans <main>, sélecteur de langue sous forme de <nav> étiqueté (axe : 0 violation).
- Les boutons RO / EN / FR n'utilisent plus d'attributs `onclick` en ligne (écouteurs d'événements).

## Licence

Licence MIT — voir le fichier LICENSE

## Droits et attribution

- **Part de l'auteur :** le code de l'application et la contribution originale (l'adaptation, les traductions RO/EN/FR, l'interface). La licence MIT de l'en-tête de `index.html` et de `LICENSE` s'applique **uniquement** à cette part.
- **Part des tiers :** les questions sont adaptées du jeu de cartes [deepcards.org](https://deepcards.org/) (un projet de l'écosystème TROM ; l'application l'indique dans le sous-titre et dans le pied de page). Les originaux restent à leurs titulaires ; **la licence MIT ne les couvre pas**. Les droits sur les matériaux de tiers appartiennent à leurs titulaires. La licence des originaux n'a pas été vérifiée dans ce dépôt.
- **Rectification / retrait :** si vous êtes titulaire de droits ou une personne mentionnée et souhaitez une correction ou un retrait, écrivez à alexio@trom.tf ; nous répondons sous 7 jours.
- La mention est également visible dans l'application (pied de page, RO / EN / FR).

**NON RÉSOLU (l'auteur seul) :** confirmation qu'il détient (ou a obtenu) le droit de publier les questions adaptées sous cette forme, ou indication de la licence des originaux de deepcards.org.

## Auteur

Alexio — Alexandru-Ionuț Chiuță, contact : alexio@trom.tf. L'application le mentionne comme bénévole de TROM.

## English summary

Profund ("Deep") is a single-file trade-free question card game (150 cards) for meaningful conversations, in Romanian, English and French. It offers four ways to play, an optional (memory-only) player list that shows whose turn it is to answer, keyboard shortcuts, an online card deck, print-to-PDF cards and a text download. Only the chosen language is stored in localStorage; no external requests were found, and the contact form uses mailto. Adapted from deepcards.org. The MIT License applies only to the code and the author's original contribution; the original questions remain with their rightsholders. Rectification/withdrawal requests: alexio@trom.tf (reply within 7 days).

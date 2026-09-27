# DuoChat — Guide de déploiement (Suga)

Glitch a fermé son hébergement de projets fin 2025 : on utilise **Suga**
(suga.app) à la place, qui fait tourner ton serveur en continu, sans
mise en veille, gratuitement.

## 1. Créer le projet sur Suga
1. Va sur https://suga.app depuis ton iPhone et crée un compte gratuit
   (aucune carte bancaire demandée).
2. Crée un nouveau projet Node.js.
3. Suga déploie généralement depuis un dépôt Git (GitHub). Si tu n'as pas
   de compte GitHub, crée-en un gratuitement sur https://github.com,
   crée un nouveau dépôt, et mets-y les fichiers fournis ici
   (`package.json`, `server.js`, `public/index.html`).
4. Relie ce dépôt à ton projet Suga : il se déploiera automatiquement.

## 2. Vérifier les fichiers
Le dépôt doit contenir exactement cette structure :
- `package.json`
- `server.js`
- `public/index.html`

## 3. Récupérer l'adresse de ton serveur
Une fois le déploiement terminé, Suga te donne une adresse publique du type :
`https://ton-projet.suga.app`

C'est cette adresse qu'il faudra entrer dans l'appli au premier lancement
(champ "Adresse du serveur").

## 4. Ouvrir l'appli
Ouvre cette même adresse directement dans Safari sur ton iPhone.
Au premier lancement :
- entre ton prénom
- entre l'adresse du serveur (la même que ci-dessus)
- choisis ton code à 4 chiffres

Puis ajoute la page à ton écran d'accueil (bouton Partager → "Sur l'écran d'accueil")
pour qu'elle s'ouvre comme une vraie appli.

## 5. Faire pareil sur le deuxième iPhone
Le contact ouvre la même adresse Glitch, choisit son propre prénom et son propre
code (le code est local à chaque téléphone, indépendant l'un de l'autre).

## Notes
- Suga fait tourner ton conteneur en continu sur son offre gratuite (pas de mise
  en veille comme sur d'anciens services). Les conditions des offres gratuites
  évoluent parfois : vérifie sur suga.app au moment de ton inscription.
- Les messages et la partie de morpion sont stockés en mémoire sur le serveur :
  si le serveur redémarre (mise à jour, veille prolongée), l'historique repart à zéro.
  On peut ajouter un stockage permanent plus tard si besoin.

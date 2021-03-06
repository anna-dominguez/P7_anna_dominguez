# P7_anna_dominguez -- Forum interne Groupomania

Dans ce projet nous avons utilisé [NodeJS](https://nodejs.org/en/), [ReactJS](https://fr.reactjs.org), [Prisma](https://www.prisma.io), [PostgreSQL](https://www.postgresql.org), [axios](https://axios-http.com/docs/example) et [Semantic UI](https://semantic-ui.com) 

## Installation
Pour lancer ce projet, merci d'installer `node` et `npm` en entrant la commande suivante dans un shell:

`brew update`

Puis:

`brew install node`

Vous pouvez vérifier que `node` et `npm` sont bien installés en regardant leurs versions respectives avec:

`node -v` et `npm -v`

Vous pouvez ensuite installer `nodemon` dont nous aurons besoin pour lancer le backend: 
`npm install -g nodemon`

## Architecture générale
L’application web sera composée de plusieurs pages que l'utilisateur soit connecté ou non.

Si l'utilateur n'est pas encore connecté il pourra: 
* Accéder à un formulaire pour créer son compte
* Accéder au formulaire pour se connecter avec un compte préalablement créé
* Accéder à la page d'accueil présentant un post de Groupomania explicant comment fonctionne l'application

Si l'utilisateur est connecté il pourra: 
* Accéder à la page d'accueil où sont présentés tous les posts de ses collègues dans l'ordre chronologique descendant. Il peut également supprimer ses propres posts. Si l'utilsateur est administrateur il peut supprimer les posts de tous les utilsateurs pour modérer le forum
* Accéder à sa page de profil et modifier ses données
* Se déconnecter

## Lancer le projet
Merci de regarder les Readme du [back](https://github.com/Vesta-nna/P7_anna_dominguez/blob/main/back/README.md) et du [front](https://github.com/Vesta-nna/P7_anna_dominguez/tree/main/front) pour connaître l'utilisation du projet


# Installation

Etapes à suivre pour la création d'un nouveau projet:

- Sur GitHub, créer un nouveau repository en utilisant _maps_app_template comme template

- Activer la protection de la branche main (Settings/Branches -> Add branch protection rule -> Branch name pattern = main -> Create)

- Cloner ce nouveau repository en local

```shell
git clone https://github.com/...
```

- Dépendance _maps sur GitHub
  - Ajouter un token dans le fichier .npmrc ([procédure](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)) (la case à cocher **repo** doit être cochée)

  - Installer les dépendances

    ```shell
    pnpm i
    ```

- Dépendance _maps en local

  - Supprimer la dépendance @topomat/maps dans package.json

  - Ajouter _maps_dev

    ```shell
    pnpm add ../_maps_dev
    ```

  - Décommenter la partie server.fs dans le fichier vite.config.js

- Lancer le projet

```shell
pnpm dev
```

# Déploiement sur topomat.ch

Le script deploy.py peut être utilisé faire un build et le copier sur le serveur topomat.ch.

Dans le script, il faut indiquer le répertoire de déploiement sur le serveur.
Il peut être nécessaire de faire d'autre changement dans ce script suivant l'application.

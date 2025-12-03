# Utilisation alternative
Vous avez aussi la possibilité de cloner le repository [GitHub][github], puis d'installer **Renowify** sous forme de _Bookmarklet_
ou sous forme d'_extension Chrome locale_. Vous pouvez également utiliser _Cypress_ ou _Selenium_ pour interagir avec le script.

## Dossier Static
2 scripts sont proposés dans le dossier static :
- renowify_custom.js pour lancer une thématique spécifique de tests automatiques
- renowify_static.js pour lancer tous les tests automatiques
Il faudra modifier la variable d'URL présente en haut de page, pour indiquer le répertoire où vous avez cloné le projet. 

## Bookmarklet
L'installation sous forme de bookmarklet est simple d'utilisation : à l'activation, les tests unitaires sont exécutés et le récapitulatif est affiché dans la barre latérale.
Avec cette option, il n'est pas possible de filtrer les résultats des tests unitaires ni d'activer les outils de vérification manuels.
Pour installer, il suffit de faire un clic droit sur votre barre de favoris et sélectionner "Ajouter un favori" puis copier-coller la ligne ci-dessous dans le champ URL :

`<a class="bookmarklet" href="javascript:(function(){document.body.appendChild(document.createElement('script')).src='VOTRE_DOSSIER/a11y_renowify/static/renowify_static.js';})();" title="Renowify">Renowify</a> `

## Extension Chrome Locale
L'extension chrome locale, permet d'executer les tests unitaires et d'y ajouter vos propres tests unitaires.
Il suffit d'ouvrir la page des [extensions chrome][chrome-ext] et de cliquer sur le bouton "charger l’extension non empaquetée" (le mode developpeur doit être activé) puis selectionner le répertoire où vous avez cloné le projet.

## Cypress / Selenium
Il est possible d'exécuter les tests unitaires de **Renowify** depuis Cypress ou Selenium afin de parcourir rapidement un ensemble de pages.
Pour se faire, il faut itérer sur l'échantillon de pages et injecter pour chacune le script du dossier "static"

## Collaborer
N'hésitez pas à me remonter les problèmes, faux-positifs ou vos suggestions d'améliorations directement sur [GitHub][github]

[chrome-ext]: chrome://extensions/
[github]: https://github.com/nicolasambroise/a11y_renowify
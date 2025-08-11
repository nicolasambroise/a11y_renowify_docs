# Documentation

L'extension **Renowify** est disponible sur le [chrome store][chrome].

Cette extension a été créée pour vérifier des points d'accessibilité des sites AEM mis en place par l'état Luxembourgeois.

## Présentation et utilisation
L'extension propose les fonctionnalités suivantes :
- Execution automatique d'une centaine de tests unitaires et génération d'un récapitulatif dans la barre latérale.
- Plusieurs outils sont disponibles pour vérifier manuellement certain critère d'accessibilité.

Pour utiliser la vérification sur une page de votre site, il suffit de consulter une page dans votre navigateur et de cliquer sur l’extension Chrome **Renowify**.

## Liste des outils disponible dans l'extension Chrome
- Textes alternatifs d'images
- Forcer l'affichage du focus
- Afficher les changements de langue
- Modifier les espacements de caractères
- Afficher les niveaux de titres
- Afficher les attributs Autocomplete
- Afficher les attributs Tableau
- Afficher les 'title' des liens

## Liste des tests unitaire
1. Couleur et contraste
2. Images
3. Liens
4. Formulaire et Autocomplete
5. Element Obligatoire
6. Structure de l'information
7. Configuration des composants AEM
8. Tableau
9. Navigation
10. Balises/attributs obsolètes
11. Changement de langue
12. Boutons
13. Rédacteur
14. Titres
15. Sécurité 
         
Voir la [liste détaillées des tests unitaires](./checks.html)

## Configuration
Il est possible de filtrer pour n'executer que certains tests unitaires :
- Vérification uniquement du contenu saisi par le rédacteur
- Affichage uniquement des Erreurs (Non-conformité au RAWeb)
- Affichage des Erreurs, alertes et bonnes pratiques

Dans les options, il est possible de sélectionner son profil d'utilisateur et de renseigner des licences (pour des tests plus approfondit basés sur Wave et lighthouse).

## Utilisation alternative
Vous avez aussi la possibilité de cloner le repository [GitHub][github], puis d'installer **Renowify** sous forme de _Bookmarklet_
ou sous forme d'_extension Chrome locale_. Vous pouvez également utiliser _Cypress_ ou _Selenium_ pour interagir avec le script.

### Bookmarklet
L'installation sous forme de bookmarklet est simple d'utilisation : à l'activation, les tests unitaires sont executés et le récapitulatif est affiché dans la barre latérale.
Avec cette option, il n'est pas possible de filtrer les résultats des tests unitaires ni d'activer les outils de vérification manuel.
Pour installer, il suffit de faire un clic droit sur votre barre de favoris et sélectionner "Ajouter un favori" puis copier-coller la ligne ci-dessous dans le champ URL :

`<a class="bookmarklet" href="javascript:(function(){document.body.appendChild(document.createElement('script')).src='VOTRE_DOSSIER/a11y_renowify/scripts/script_bookmarklet.js';})();" title="Renowify">Renowify</a> `

### Extension Chrome Locale
L'extension chrome locale, permet d'executer les tests unitaires et d'y ajouter vos propres tests unitaires.
Pour se faire, ouvrir la page des [extensions chrome][chrome] et cliquer sur le bouton "charger l’extension non empaquetée" (le mode developpeur doit être activé) puis selectionner le répertoire où vous avez cloné le projet.

### Cypress / Selenium
Il est possible d'executer les tests unitaires de **Renowify** depuis Cypress ou Selenium afin de parcourir rapidement un ensemble de page.


## Collaborer
N'hésitez pas à me remonter les problèmes, faux-positifs ou vos suggessions d'améliorations directement sur [GitHub][github]


[github]: https://github.com/nicolasambroise/a11y_renowify
[chrome]: chrome://extensions/
[check]: ./checks.html

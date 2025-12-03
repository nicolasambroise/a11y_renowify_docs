# Documentation
Outil d'aide à l'amélioration de l'accessibilité des sites web en suivant le référentiel RAWeb

L'extension **Renowify** est disponible sur le [chrome store][chrome].

## Présentation
Renowify est une **extension de navigateur** pensée pour les **rédacteurs**, **développeurs**, **designers** et **responsables qualité** qui souhaitent rendre leurs sites web plus inclusifs et conformes aux standards d’accessibilité numérique. Facile à utiliser et puissante, elle vous permet d’identifier rapidement les obstacles à l’accessibilité et de les corriger efficacement.

Initialement conçue pour répondre aux exigences du **référentiel RAWeb** et vérifier des points d'accessibilité des sites AEM mis en place par l'état Luxembourgeois.. Renowify s’est transformée en un véritable couteau suisse de l’**audit d’accessibilité**. Elle combine des tests automatisés rigoureux avec des outils d’analyse manuelle pour vous offrir une vision complète de l’état d’accessibilité de vos pages.

Renowify est bien plus qu’un outil technique : c’est une démarche vers un web plus inclusif, équitable et accessible à tous. Que vous soyez développeur, intégrateur ou simplement soucieux de l’expérience utilisateur, Renowify vous aide à faire la différence.

## Fonctionnalités principales
L'extension propose les fonctionnalités suivantes :
- **Analyse automatique** : En un clic, Renowify exécute plus d’une centaine de tests unitaires sur la page en cours et affiche un récapitulatif clair et structuré dans une barre latérale.
- **Outils manuels** : Pour aller plus loin, l’extension propose une série d’outils interactifs qui vous permettent de vérifier visuellement certains critères souvent négligés ou difficiles à détecter automatiquement.

## Comment l’utiliser ?
L’utilisation de Renowify est d’une simplicité déconcertante :
1. Ouvrez la page web que vous souhaitez auditer dans votre navigateur.
2. Cliquez sur l’icône de l’extension Renowify.
3. L’analyse démarre automatiquement et les résultats s’affichent dans la barre latérale.
4. Activez les outils manuels selon vos besoins pour compléter votre audit.

## Pourquoi choisir Renowify ?
- **Gain de temps** : Plus besoin de vérifier chaque critère manuellement, l’extension fait le gros du travail pour vous.
- **Fiabilité** : Basée sur le référentiel RAWeb, elle vous guide vers une conformité solide.
- **Simplicité** : Une interface claire, des résultats lisibles, et une prise en main immédiate.
- **Complémentarité** : Combine tests automatiques et outils manuels pour une couverture maximale.

## Liste des outils disponibles
Voici les outils que vous pouvez activer à tout moment pour inspecter votre page :
1. **Textes alternatifs d’images** : Vérifiez si chaque image dispose d’un attribut alt pertinent.
2. **Affichage du focus clavier** : Mettez en évidence les éléments recevant le focus pour tester la navigation au clavier.
3. **Changements de langue** : Identifiez les zones où une balise explicite est définie.
4. **Espacement des caractères** : Modifiez l’interlettrage pour tester la lisibilité.
5. **Niveaux de titres** : Visualisez la hiérarchie des titres (h1 à h6) pour vérifier leur cohérence.
6. **Attributs Autocomplete** : Affichez les champs de formulaire avec leurs attributs autocomplete.
7. **Attributs Tableau** : Inspectez les balises table et leurs rôles sémantiques.
8. **Titres des liens** : Listez les attributs title des liens pour évaluer leur pertinence.

## Liste des thématiques de test unitaire
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
Dans les options de l'extension, il est possible de sélectionner son profil d'utilisateur.

Les utilisateurs avec le rôle de développeur peuvent filtrer pour n'exécuter que certains tests unitaires :
- Vérification uniquement du contenu saisi par le rédacteur
- Affichage uniquement des Erreurs (Non-conformité au RAWeb)
- Affichage des Erreurs, alertes et bonnes pratiques

## Utilisations alternatives
Plus d'information pour ceux qui veulent [aller plus loin](./more.html)

## Collaborer
N'hésitez pas à me remonter les problèmes, faux-positifs ou vos suggestions d'améliorations directement sur [GitHub][github]

[github]: https://github.com/nicolasambroise/a11y_renowify
[chrome]: https://chromewebstore.google.com/detail/renowify-assistant-access/mkhdnbegllcgboofnojblclnngpecijn
[check]: ./checks.html

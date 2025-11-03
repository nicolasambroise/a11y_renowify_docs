# Liste des tests unitaire

## 1. Couleur et contraste

### 01-A Contraste des textes

**Description** : Pour chaque balise contenant du texte, on vérifie si la couleur du texte par rapport à sa couleur de fond possède un contraste suffisant. Un ratio de 3:1 est requis pour les textes large et en gras, un ratio de 4.5 sinon. 

**Référence** : [RAWeb 3.2](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-3-2)

**Criticité** : Alerte (Orange)

**Filtre** : Développeur

**Sélecteur** : 
<code>p, span, li, strong, h1, h2, h3, h4, h5, small, a:not([disabled]), button:not([disabled]), blockquote, q, dd, dt, label </code>

**Commentaire** : Faux positif possibles dans le cas de background transparent ou non uni (sur une image, sur un pseudo-élement ou sur un dégradé linear-gradiant) ou avec un élément en position absolue. 


### 01-B Contraste des éléments graphique (bordure)

**Description** : Pour chaque champ de saisie et chaque bouton, on vérifiera si cet élément est assez contrasté. Un ratio de 3:1 est requis pour les éléments graphiques.

**Référence** : [RAWeb 3.3](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-3-3)

**Criticité** : Alerte (Orange)

**Filtre** : Développeur

**Sélecteur** :
<code>input:not([disabled]):not([type="file"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled])</code>

**Commentaire** : Faux positif possibles dans le cas de background transparent ou non uni (sur une image, sur un pseudo-élement ou sur un dégradé linear-gradiant) ou avec un élément en position absolue.

### 01-C Contraste des textes de placeholder

**Description** : Pour chaque champ de saisie ayant un placeholder on vérifiera si ce texte est assez contrasté

**Référence** : [RAWeb 3.2](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-3-2)

**Criticité** : Alerte (Orange)

**Filtre** : Développeur

**Sélecteur** :
<code>input[placeholder]:not([disabled]), textarea[placeholder]:not([disabled])</code>

**Commentaire** : Faux positif possibles dans le cas de background transparent ou non uni (sur une image, sur un pseudo-élement ou sur un dégradé linear-gradiant) ou sur certain navigateur qui applique une surchage CSS (une opacité) sur l'élément de placeholder.

### 01-D Contraste de l'outline des éléments

***Check suspendu : TROP de Faux positif.***

**Description** : Pour chaque élément interactif on vérifiera si on utilise l'outline natif du navigateur ou un outline suffisament contrasté

**Référence** : [RAWeb 3.3](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-3-3)

**Criticité** : Alerte (Orange)

**Filtre** : Développeur

**Sélecteur** :
<code>a:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([disabled]), summary</code>

**Commentaire** : Faux positif du à la compatibilité du script avec les différents browser.

### 01-E Presence de dégradé sans couleur de replis

**Description** : Pour chaque élément avec un fond en dégradé CSS (linear-gradient) on vérifiera si une couleur de replis est bien définie

**Référence** : [RAWeb 10.5](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-10-5)

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Développeur

**Sélecteur** :
<code>header, footer, .cmp-section, aside, article</code>

**Commentaire** : Pour des soucis de performance, on ne vérifie que les élements le plus susceptible d'avoir un fond dégradé CSS

### 01-F Presence de déclaration de couleur sur la balise &lt;body&gt;

**Description** : Vérifier sur chaque page qu'une couleur de texte et de fond soit bien définie sur la balise &lt;body&gt;. Vérification également que ce jeu de couleur est assez contrasté.

**Référence** : [RAWeb 10.5](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-10-5)

**Criticité** : Alerte (Orange)

**Filtre** : Développeur

**Sélecteur** :
<code>body</code>

**Commentaire** : Une définition d'un jeu de couleur sur la balise &lt;html&gt; au lieu de &lt;body&gt; entre en conflit avec certains outils d'assistance qui se base sur l'élément :root.

## 2. Images

### 02-A Présence d’un attribut alt sur toutes les images

**Description** : Vérifier la présence d'un attribut alt sur toutes les images.

**Référence** : [RAWeb 1.1](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-1-1)

**Criticité** : Critique (Rouge)

**Sélecteur** :
<code>img, [role="img"]</code>

**Commentaire** : La criticité sera plus faible si l'image possède un nom accessible grâce à d'autres attributs (aria-label, aria-labelledby ou title)

### 02-B Ignorer les images vectorielles

**Description** : Vérifier la présence des attributs aria-hidden=true et focusable=false sur les SVG, afin que ceux-ci soient correctement ignorés par les technologies d'assistance. Vérifier également que le nom accessible n'a pas été induit par un autre moyen (attribut aria-label, attribut aria-labelledby, balise title ou balise desc )

**Référence** : [RAWeb 1.2](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-1-2), [Opquast 111](https://checklists.opquast.com/fr/assurance-qualite-web/chaque-image-decorative-est-dotee-dune-alternative-textuelle-appropriee)

**Criticité** : Critique (Rouge)

**Sélecteur** :
<code>svg</code>

**Commentaire** : Une décision à été prise pour concidérer toutes les images SVG comme décoratives.

### 02-C Alt vide sur les images de résultat de recherche.

**Description** : Vérifier que les miniatures présentes dans les résultats de recherche sont correctement ignorés par les technologies d'assistance.

**Référence** : [RAWeb 1.2](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-1-2)

**Criticité** : Critique (Rouge)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>img:not([alt=""]</code>

**Commentaire** : Une décision à été prise pour concidérer toutes les miniatures de résultat de recherche comme décoratives.

### 02-D Chaque légende est liée à l'image correspondante

**Description** : Vérifier que les textes (copyright/caption/légende) sous l'image sont correctement liés à celle-ci.

**Référence** : [RAWeb 1.9](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-1-9)

**Criticité** : Alerte (Orange)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>img</code>

**Commentaire** : Le RAWeb demande explicitement l'utilisation de la structure &lt;figure&gt;&lt;figcaption&gt;

### 02-E Presence du aria-label sur le &lt;figure&gt; des images légendées

**Description** : Vérifier que la balise &lt;figure&gt; des images légendées possède bien un attribut "aria-label"

**Référence** : [RAWeb 1.9](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-1-9)

**Criticité** : Alerte (Orange)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>figure:not([aria-label]) figcaption</code>

**Commentaire** : L'attribut aria-label devra reprendre le contenu textuel présent dans la balise figcaption.

### 02-F Vérification sur les images atypique

**Description** : Vérification des attributs sur les balises images atypiques : area, embed, object, canvas

**Référence** : [RAWeb 1.1](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-1-1)

**Criticité** : Critique (Rouge)

**Filtre** : Développeur

**Sélecteur** :
<code>area, input[type="image"], embed, object, canvas</code>

### 02-G Nom accessible des images de décoration

**Description** : Les images de décoration ne doivent pas avoir d'attributs permettant de fournir une alternative textuelle

**Référence** : [RAWeb 1.2](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-1-2)

**Criticité** : Critique (Rouge)

**Sélecteur** :
<code>img, area, input[type="image"], embed, object, canvas</code>

### 02-H L'alternative doit être courte et concise

**Description** : L'alternative doit être courte et concise - estimation max 150 caractères

**Référence** : [RAWeb 1.3](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-1-3)

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>img, area, input[type="image"], embed, object, canvas</code>

### 02-I Chaque image-lien est dotée d'une alternative textuelle.

**Description** : Les images seule contenues dans un lien doivent avoir une alternative textuelle non-vide 

**Référence** : [RAWeb 6.1](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-6-1), [Opquast 112](https://checklists.opquast.com/fr/assurance-qualite-web/chaque-image-lien-est-dotee-dune-alternative-textuelle-appropriee)

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>a > img, a > svg</code>

### 02-J Présence d'image redimentionnée

**Description** : Les vignettes et aperçus ne sont pas des images de taille supérieure redimensionnées côté client.

**Référence** : [Opquast 114](https://checklists.opquast.com/fr/assurance-qualite-web/les-vignettes-et-apercus-ne-sont-pas-des-images-de-taille-superieure-redimensionnees-cote-client)

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Site AEM

**Sélecteur** :
<code>img</code>

**Commentaire** : On considère qu'une différence supérieure à 3.5 entre la taille de l'image originel et la taille de l'image affichée est problématique pour de soucis de performance.

## 3. Liens

### 03-A. Verification de la présence du suffix sur les liens externe

**Description** : Vérifier la présence de suffixe " - Nouvelle fenêtre" dans l'attribut title des liens externe.

**Référence** : [Opquast 141](https://checklists.opquast.com/fr/assurance-qualite-web/lutilisateur-est-averti-des-ouvertures-de-nouvelles-fenetres)

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Développeur

**Sélecteur** :
<code>html[lang="fr"] a[target="_blank"]:not([title$="- Nouvelle fenêtre"]):not([title$="- Nouvelle fenêtre (Pdf)"]),html[lang="fr"] a[title$="- Nouvelle fenêtre"]:not([target="_blank"])</code>

### 03-B. Verification de titre vide

**Description** : Vérifier la présence de suffixe " - Nouvelle fenêtre" dans l'attribut title des liens externe.

**Référence** : [RAWeb 6.1](https://accessibilite.public.lu/fr/raweb1/criteres.html#test-6.1.1)

**Criticité** : Critique (Rouge)

**Filtre** : Développeur

**Sélecteur** :
<code>a[title=" "],a[title="Nouvelle fenêtre"],a[title="- Nouvelle fenêtre"],a[title$="Nouvelle fenêtre - Nouvelle fenêtre"], a[title="   - Nouvelle fenêtre"]</code>

### 03-C. Problème de langue dans les suffixes

**Description** : Vérifier la cohérence du suffixe " - Nouvelle fenêtre" par rapport à la langue du contenu.

**Criticité** : Alerte (Orange)

**Filtre** : Développeur

**Sélecteur** :
<code>a[title$="- Nouvelle fenêtre"]:not([lang="fr"]), a[title$="- New window"]:not([lang="en"]), a[title$="- Neues Fenster"]:not([lang="de"]), a[title$="- Nei Fënster"]:not([lang="lb"])</code>

### 03-D. Présence d'un conflit dans les attributs de liens

**Description** : Vérifier l'absence en simultanée des attributs aria-label et aria-labelleby sur le même élément'

**Criticité** : Critique (Rouge)

**Filtre** : Développeur

**Sélecteur** :
<code>a[aria-label][aria-labelledby]</code>

### 03-E. Vérifier que le title reprend à minimum le contenu textuel

**Description** : Vérifier que l'attribut title des liens reprend à minimum le contenu textuel

**Criticité** : Critique (Rouge)

**Sélecteur** :
<code>a[title]</code>

### 03-F. Chaque lien a t'il un intitulé

**Description** : Vérifier la présence de liens dont le contenu est vide. Il faut un contenu textuel entre les balises a, ou une image informative (avec un attribut alt non vide) 

**Référence** : [RAWeb 6.2](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-6-2)

**Criticité** : Critique (Rouge)

**Sélecteur** :
<code>a[href],[role="link"][href]</code>

### 03-G. Présence de liens sans href

**Description** : Vérifier la présence de liens sans destination

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>a:not([href]),[role="link"]:not([href])</code>

**Commentaire** : Une balise a sans href sera considérée comme une balise span par les outils d'assistance. Cependant, dans le contexte AEM, ce type de balise correspond le plus souvent à une destination erronée (erreur 404).

### 03-H. Liens tel: mailto: fax:

**Description** : Présence de liens tel:, fax: ou mailto: non valide

**Criticité** : Critique (Rouge)

**Sélecteur** :
<code> a[href^="mailto:"],a[href^="fax:"],a[href^="tel:"]</code>

**Commentaire** : Regex utilisées :
- Regex mail = /^((?=.+@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*(?:\.[A-Za-z]{2,}))$/;
- Regex phone = /^((\+|00)|\((\+|00)[0-9]{1,4}\))?[0-9+\-\s().]*$/;

### 03-I Lien non pertinent

**Description** : Présence de liens non pertinent sur la page (Par exemple : "ici", "lire la suite", "cliquez ici", "lien")

**Référence** : [Opquast 132](https://checklists.opquast.com/fr/assurance-qualite-web/le-libelle-de-chaque-lien-decrit-sa-fonction-ou-la-nature-du-contenu-vers-lequel-il-pointe)

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>html[lang="fr"] a</code>

### 03-J Attribut target sur les liens externes

**Description** : Présence de l'attribut target="_blank" sur les liens externes. Les liens externes ne doivent pas s'ouvrir dans la fenêtre courante

**Criticité** : Alerte (Orange)

**Filtre** : Développeur

**Sélecteur** :
<code>a[href^="http"]:not([href*="' + root_url + '"]):not([target="_blank"])</code>

**Commentaire** : On ne regarde pas dans les flux sociaux car le contenu provient d'un aggrégateur de contenu

### 03-K Liens Pour en savoir plus

**Description** : Présence d'un trop grand nombre de lien "Pour en voir plus" sur une même page

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>.cmp-focus .focus-more.btn, .cmp-contentbox a.btn</code>

**Commentaire** : On limitera le nombre de liens "Pour en savoir plus" à 15 par page. Redondance de l'information restituée et soucis de performance.

### 03-L Présence de soulignement en dehors de lien

**Description** : Présence de contenu souligné. Il faut réservez le soulignement aux liens pour faciliter la compréhension de l'interface.

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>body *:not(a):not(mark):not(h1):not(h2):not(h3):not(h4):not(h5):not(h6):not(button):not([role="tab"]):not(input)</code>

### 03-M. Présence de liens erroné

**Description** : Présence d'un lien erroné à cause d'un espace present dans l'attribut href

**Criticité** : Alerte (Orange)

**Sélecteur** :
<code>a[href*=" "],[role="link"][href*=" "]</code>

**Commentaire** : Problème régulièrement présent dans les numéros de téléphone 

### 03-N Contraste des liens

**Description** : Un lien non_souligné inclus dans un paragraphe de texte doit être suffisamment contrasté avec le texte environnant

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Développeur

**Sélecteur** :
<code>p > a:not(.btn), li > a</code>

**Commentaire** : Idéalement, toujours souligner les liens. N'est pas pris en compte ici les soulignements alternatifs (shadow, border-bottom, pseudo-element, etc. )

### 03-O. Detecter les liens vers l'environnement de test

**Description** : Présence d'un lien vers un environnement de test

**Criticité** : Alerte (Orange)

**Filtre** : Site AEM

**Sélecteur** :
<code>a</code>

### 03-P. Formalisme des liens de téléchargement

**Description** : Les liens de téléchargement doivent respecter la nomenclature : name (FR, Pdf ,poids)

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>a</code>

### 03-Q Pas 2 liens avec un contenu identique et des cibles différentes

**Description** : Présence de liens avec un contenu identique (titre + aria-label) et des cibles différentes

**Criticité** : Critique (Rouge)

**Sélecteur** :
<code>a[href]</code>

## 4. Formulaire et Autocomplete

### 04-A. Autocomplete sur les champs génériques

**Description** : Absence d'attribut autocomplete ou attribut erroné sur des champs formulaire

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 11.13](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-11-13)

**Sélecteur** :
<code>textarea, input</code>

### 04-B. Format indiqué sur le champ email

**Description** : Présence de l'indication de format de saisi sur le champ email

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 11.10](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-11-10)

**Sélecteur** :
<code>input[type="email"]</code>

### 04-C. Intitulé du bouton d'envoi

**Description** : Vérifier si le bouton de soumission du formulaire de contact possède bien l'intitulé "Prévisualiser puis envoyer"

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Site AEM

**Référence** : [RAWeb 11.12](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-11-12)

**Sélecteur** :
<code>html[lang="fr"] main form button.cmp-form-button[type="SUBMIT"][name="preview"]</code>

### 04-D. Les champs ont bien un label

**Description** : Absence de champ de formulaire avec aucun label ou avec plus d'un label.

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 11.1](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-11-1), [Opquast 67](https://checklists.opquast.com/fr/assurance-qualite-web/chaque-champ-de-formulaire-est-associe-dans-le-code-source-a-une-etiquette-qui-lui-est-propre)

**Sélecteur** :
<code>input:not([aria-label]):not([aria-labelledby]):not([type='hidden']):not([type='submit']):not([type='reset']):not([type='button']), select:not([aria-label]):not([aria-labelledby]), textarea:not([aria-label]):not([aria-labelledby])</code>

### 04-E. Fieldset avec legend

**Description** : Le premier élément à l'intérieur d'une balise fieldset est une balise legend 

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 11.6](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-11-6)

**Sélecteur** :
<code>fieldset</code>

### 04-F. Label de champ obligatoire

**Description** : Un champ de formulaire avec l'attribut required ou aria-required="true" possède un astérisque dans son label. La signification de l'astérisque doit être indiquée en début de formulaire.

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 11.10](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-11-10)

**Sélecteur** :
<code>form [required], form [aria-required="true"]</code>

### 04-G. Pas d'autocomplete sur les champs radio/checkbox

**Description** : Absence d'autocomplete sur un champ de type 'checkbox' ou 'Radiobutton'

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 11.13](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-11-13)

**Sélecteur** :
<code>input[type="checkbox"][autocomplete]:not([autocomplete="off"]),input[type="radio"][autocomplete]:not([autocomplete="off"])</code>

### 04-H. Champ et étiquette accolé

**Description** : Calcul de la distance entre Champ et étiquette accolé en récupérant les positions des centres : Estimé à max 100px pour une distance correcte

**Criticité** : Alerte (Orange)

**Référence** : [RAWeb 11.5](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-11-5), [Opquast 75](https://checklists.opquast.com/fr/assurance-qualite-web/chaque-etiquette-de-formulaire-est-visuellement-rattachee-au-champ-quelle-decrit)

**Sélecteur** :
<code>input[type="checkbox"][autocomplete]:not([autocomplete="off"]),input[type="radio"][autocomplete]:not([autocomplete="off"])</code>

### 04-I Message d'aide

**Description** : Les informations complétant l'étiquette d'un champ sont associées à celui-ci dans le code source avec l'attribut aria-describedby

**Criticité** : Critique (Rouge)

**Filtre** : Développeur

**Référence** : [RAWeb 11.5](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-11-5), [Opquast 75](https://checklists.opquast.com/fr/assurance-qualite-web/chaque-etiquette-de-formulaire-est-visuellement-rattachee-au-champ-quelle-decrit)

**Sélecteur** :
<code>input[aria-describedby]</code>

### 04-J Le format de saisie des champs de formulaire qui le nécessitent est indiqué

**Description** : Présence d'un aria-describedby ou de parenthèses dans le label. La présence de ces éléments permet d'avoir un indice sur un probable format de saisie indiqué. La pertinence de celui-ci n'est pas testé ici.

**Criticité** : Critique (Rouge)

**Référence** : [Opquast 70](https://checklists.opquast.com/fr/assurance-qualite-web/le-format-de-saisie-des-champs-de-formulaire-qui-le-necessitent-est-indique)

**Sélecteur** :
<code>input[type='email']:not([aria-describedby]), input[type='tel']:not([aria-describedby]), input[pattern]:not([aria-describedby]):not([pattern='.*\\S.*'])</code>

**Commentaire** : Viens en complement du test 4-B, avec un périmètre plus large

### 04-K Présence de label de bouton insuffisament pertinent

**Description** : Présence de label de bouton insuffisament précis : éviter les noms comme "Envoyer", "Valider", "Rechercher" ou "Confirmer"

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>input[type='submit'], input[type='reset'], input[type='button']</code>

**Commentaire** : Viens en complement du test 4-C, avec un périmètre plus large

### 04-L Bouton comme dernier élément de formulaire

**Description** : Le bouton de soumission doit être placé en fin de formulaire

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>form > input, form > button</code>

### 04-M Un groupe de Checkbox/Radio doit être structuré dans un fieldset

**Description** : Un groupe de Checkbox/Radio doit être structuré dans un fieldset

**Criticité** : Alerte (Orange)

**Filtre** : Développeur

**Sélecteur** :
<code>input[type="checkbox"],input[type="radio"]</code>

### 04-N Le format de saisie du datepicker est indiqué 

**Description** : Présence d'un aria-describedby ou de parenthèses dans le label. La présence de ces éléments permet d'avoir un indice sur un probable format de saisie indiqué.

**Criticité** : Critique (Rouge)

**Sélecteur** :
<code>input[type='text'].datepicker:not([aria-describedby]), input[type='text'][pattern='([0-9]{2}-){2}[0-9]{4}']:not([aria-describedby])</code>

**Commentaire** : On ne test ici que le datepicker avec type="text". En effet le datepicker natif (avec type="date") ne nécessite pas d'indication de format car celui-ci est géré par le navigateur.

### 04-O. Type pertinent sur les champs de formulaire

**Description** : Vérification que l'attribut type présent sur les champs input correspond à la valeur attendue.

**Criticité** : Critique (Rouge)

**Sélecteur** :
<code>input[name="email"]:not([type="email"]),input[name="tel"]:not([type="tel"]), input[name="phone"]:not([type="tel"]),input[name*="date"]:not([type="date"])</code>

### 04-P - Attribut max-lenght sur les input

**Description** : Présence d'un attribut max-lenght sur un champ de saisi. Cela peut poser des problèmes pour le copier/coller de valeur.

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>input[max-lenght],textarea[max-lenght]</code>


## 5. Element Obligatoire

### 05-A Balise vide

**Description** : Présence d'une balise sans contenu

**Criticité** : Alerte (Orange)

**Référence** : [RAWeb 8.9](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-8-9)

**Sélecteur** :
<code>*:not(.ol-attribution) > :where(p, th, strong, em, a, q, blockquote, aside, ul, li, dl, dd, dt):not([aria-hidden="true"]):not(.mapboxgl-ctrl-logo):empty</code>

### 05-B Balise assimilable à vide

**Description** : Présence de balises vides (ou avec un contenu assimilable à vide : espace, &nbsp; \n)

**Criticité** : Alerte (Orange)

**Référence** : [RAWeb 8.9](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-8-9)

**Sélecteur** :
<code>*:not(.ol-attribution):not([aria-hidden="true"]) > :where(p, th, strong, em, a, q, blockquote, aside, ul, li, dl, dd, dt):not([aria-hidden="true"]):not(.mapboxgl-ctrl-logo):not(:empty)</code>

### 05-C Doctype

**Description** : Vérifier qu'un doctype est correctement déclaré

**Criticité** : Alerte (Orange)

**Référence** : [RAWeb 8.1](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-8-1)

### 05-D. Page title

**Description** : Vérifier qu'un titre de page est défini

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 8.5](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-8-5)

### 05-E. Changement de sens de lecture

**Description** : Vérifier la valeur de définition du sens de lecture et la présence d'éléments avec un sens de lecture de droite vers la gauche

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 8.10](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-8-10)

**Sélecteur** :
<code>[dir]:not([dir="rtl"]):not([dir="ltr"])</code>

### 05-F. Id dupliqué

**Description** : Présence d'Id dupliqué

**Criticité** : Alerte (Orange)

**Référence** : [RAWeb 8.2](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-8-2)

**Sélecteur** :
<code>[id]:not(script):not(link)</code>

### 05-G. Présence de la Govbar

**Description** : Absence de la govbar, vérifier si ce n'est pas un oubli

**Criticité** : None

**Filtre** : Site AEM

**Sélecteur** :
<code>#govbar.govbar</code>

### 05-H. Saut de ligne (double BR)

**Description** : Présence de multiple saut de ligne

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 8.9](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-8-9)

**Sélecteur** :
<code>br + br</code>

### 05-I Metadonnée

**Description** : Le code source de chaque page contient une métadonnée qui en décrit le contenu. Présence de meta name=description

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Site AEM + Page statique

**Référence** : [Opquast 3](https://checklists.opquast.com/fr/assurance-qualite-web/le-code-source-de-chaque-page-contient-une-metadonnee-qui-en-decrit-le-contenu)

**Sélecteur** :
<code>meta[name="description"]</code>

### 05-J Favicon

**Description** : Le code source des pages contient un appel valide à une icône de favori.

**Criticité** : Bonne pratique (Jaune)

**Référence** : [Opquast 99](https://checklists.opquast.com/fr/assurance-qualite-web/le-code-source-des-pages-contient-un-appel-valide-a-un-icone-de-favori)

**Sélecteur** :
<code>link[rel*='icon']</code>

### 05-K Fil d'Ariane

**Description** : Chaque page affiche une information permettant de connaître son emplacement dans l'arborescence du site.

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Site AEM + Développeur + Hors homepage

**Référence** : [Opquast 151](https://checklists.opquast.com/fr/assurance-qualite-web/chaque-page-affiche-une-information-permettant-de-connaitre-son-emplacement-dans-larborescence-du-site)

**Sélecteur** :
<code>.cmp-breadcrumb,.cmp-breadcrumb-demarches</code>

### 05-L Accordeon

**Description** : Le focus clavier est supprimé d'un élément accordéon (balise summary)

**Criticité** : Critique (Rouge)

**Filtre** : Développeur 

**Référence** : [Opquast 160](https://checklists.opquast.com/fr/assurance-qualite-web/le-focus-clavier-nest-ni-supprime-ni-masque)

**Sélecteur** :
<code>summary</code>

### 05-M Texte justifié

**Description** : Les styles ne justifient pas le texte.

**Criticité** : Bonne pratique (Jaune)

**Référence** : [Opquast 186](https://checklists.opquast.com/fr/assurance-qualite-web/les-styles-ne-justifient-pas-le-texte)

**Sélecteur** :
<code>p</code>

### 05-N Texte majuscule

**Description** : Présence de titre en majuscule. Les mises en majuscules à des fins décoratives doivent être effectuées à l'aide des styles.

**Criticité** : Bonne pratique (Jaune)

**Référence** : [Opquast 187](https://checklists.opquast.com/fr/assurance-qualite-web/les-mises-en-majuscules-a-des-fins-decoratives-sont-effectuees-a-laide-des-styles)

**Sélecteur** :
<code>h1,h2,h3,h4,h5,h6</code>

### 05-O Nombre de résultats de recherche

**Description** : La page des résultats de recherche indique le nombre de résultats

**Criticité** : Critique (Rouge)

**Filtre** : Site AEM + Développeur

**Référence** : [Opquast 13](https://checklists.opquast.com/fr/assurance-qualite-web/la-page-des-resultats-de-recherche-indique-le-nombre-de-resultats-le-nombre-de-pages-de-resultats-et-le-nombre-de-resultats-par-page)

**Sélecteur** :
<code>.search-meta-count</code>

### 05-P Section vide

**Description** : Présence de section vide ou sans contenu structuré

**Criticité** : Bonne pratique (Jaune)

**Référence** : [RAWeb 8.9](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-8-9)

**Sélecteur** :
<code>section.cmp-section</code>

### 05-Q Logo

**Description** : Le lien sur le logo redirige vers la page d’accueil et possède un attribut title respectant la nomenclature suivante: «XXX – Accueil»

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>header .logo a</code>

### 05-R Titre de la page

**Description** : Présence d’un titre dans l'onglet navigateur pertinent (par rapport à la Nomenclature : contient à minimum "h1 - Nom du site - Luxembourg")

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Site CTIE

**Sélecteur** :
<code>title</code>

### 05-S - Formalisme du nom de domaine

**Description** :Vérifier que l'URL respecte bien le formalisme des noms de domaine de l'état (Par exemple, en *.public.lu)

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Site CTIE

### 05-T. Contenu textuel directement dans une div

**Description** : Absence de balise de texte autour d'un texte

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>div, section</code>

## 6. Structure de l'information

### 06-A Rôle surchargé sur des listes 

**Description** : Vérifier qu'il n'y a pas d'attribut role sur les containers de liste

**Criticité** : Critique (Rouge)

**Filtre** : Développeur

**Référence** : [RAWeb 9.3](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-9-3)

**Sélecteur** :
<code>ul[role]:not([role="list"]):not([role="listbox"]),ol[role]:not([role="list"]):not([role="tablist"]),li[role]:not([role="listitem"]):not([role="option"]),dl[role]:not([role="listitem"])</code>

**Commentaire** : Quelques exceptions existent comme par exemple pour le système d'onglets.

### 06-B Contenu des listes

**Description** : Vérifier que le liste &lt;ul&gt; et &lt;ol&gt; ne contienne que des &lt;li&gt; ou [role="listitem"]

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 9.3](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-9-3)

**Sélecteur** :
<code>:where(ul,ol,[role="list"]) > *:not(li):not([role="listitem"])</code>

### 06-C Structure de l'en-tête

**Description** : Vérifier que la zone d’en-tête est structurée au moyen d’un élément &lt;header&gt; unique avec un attribut role=banner

**Criticité** : Critique (Rouge)

**Filtre** : Développeur

**Référence** : [RAWeb 9.2](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-9-2)

**Sélecteur** :
<code>header[role="banner"]</code>

### 06-D Zones de navigation principales

**Description** : Vérifier que les zones de navigation principales est structurée au moyen d’un élément &lt;nav&gt;

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Développeur

**Référence** : [RAWeb 9.2](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-9-2)

**Sélecteur** :
<code>nav.page-headernav[role="navigation"]</code>

### 06-E Zone de navigation principales et secondaires

**Description** : Vérifier que l’élément &lt;nav&gt; n’est pas utilisé en dehors de la structuration des zones de navigation principales et secondaires

**Criticité** : Critique (Rouge)

**Filtre** : Développeur

**Référence** : [RAWeb 9.2](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-9-2)

**Sélecteur** :
<code>nav:not([role="navigation"])</code>

### 06-F Zone de contenu principal

**Description** : Vérifier que la zone de contenu principal est structurée au moyen d’un élément &lt;main&gt; ayant l'attribut role="main"

**Criticité** : Critique (Rouge)

**Filtre** : Développeur

**Référence** : [RAWeb 9.2](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-9-2)

**Sélecteur** :
<code>main:not([role="main"])</code>

### 06-G Zone de pied de page

**Description** : Vérifier que la zone de pied de page est structurée au moyen d’un élément &lt;footer&gt; ayant l'attribut role="contentinfo"

**Criticité** : Critique (Rouge)

**Filtre** : Développeur

**Référence** : [RAWeb 9.2](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-9-2)

**Sélecteur** :
<code>footer.page-footer:not([role="contentinfo"])</code>

### 06-H Cadre des iFrames

**Description** : Les iframes doivent avoir un titre et aucun attribut de présentation (noresize, scrolling, width, height)

**Criticité** : Critique (Rouge)

**Filtre** : Développeur

**Référence** : [RAWeb 2.1](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-2-1)

**Sélecteur** :
<code>frame:not([title]),iframe:not([title])</code>

### 06-I Animation Lottie

**Description** : Calculer la durée des animations Lottie et vérifier si des boutons de contrôle sont bien présents. 

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 13.8](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-13-8)

**Sélecteur** :
<code>lottie-player</code>

### 06-J Nombre d'éléments dans les listes

**Description** : Vérifier que le liste &lt;ul&gt; et &lt;ol&gt; contiennent plusieurs éléments

**Criticité** : Alerte (Orange)

**Référence** : [RAWeb 9.3](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-9-3)

**Sélecteur** :
<code>ul, ol, [role="list"]</code>

### 06-K Structure des Abréviations

**Description** : Présence d'abréviation non explicitée

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Développeur

**Sélecteur** :
<code>abbr:not([title])</code>

### 06-L Structure des Accordéons

**Description** : Utilisation de la structure details/summary et vérification que la balise summary ne contient qu'un élément titre Hn

**Criticité** : Alerte (Orange)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>details > summary</code>

### 06-M Structure des Adresses Geoportail

**Description** : Présence d'une carte Geoportail sans adresse visible ou mal structurée

**Criticité** : Critique (Rouge)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>.geoportail-map</code>

### 06-N Structure du composant Sommaire

**Description** : Le sommaire doit être structuré dans une balise &lt;nav&gt; avec un role='navigation' et un attribut aria-label. Le lien ancre vers la section en cours de consultation doit être identifié par l’attribut aria_current="true" ou "step"

**Criticité** : Alerte (Orange)

**Filtre** : Développeur + Site AEM

**Référence** : [RAWeb 10.9](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-10-9)

**Sélecteur** :
<code>.page-bloub</code>

### 06-O Structure du composant Focus

**Description** : Le composant focus doit avoir un titre même si celui_ci est visuellement masqué. Les items du focus doivent être dans une seule et même liste &lt;ul&gt;. Le premier élément informatif dans le DOM de chaque item doit être le titre

**Criticité** : Alerte (Orange)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>.cmp-focus</code>

### 06-P Structure du composant Grid

**Description** : Les items du grid doivent est structuré sous forme de liste (ul, ol ou dl). Le premier élément informatif dans le DOM de chaque item doit être le titre

**Criticité** : Alerte (Orange)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>.cmp-grid</code>

### 06-Q Structure du composant Tab

**Description** : Utilisation d'une structure conforme au design pattern Tabs

**Criticité** : Alerte (Orange)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>.cmp-tabs</code>

### 06-R Structure du composant Back-To-Top

**Description** : L’élément Back_to_Top doit avoir un attribut title ainsi qu’une balise &lt;span&gt; « haut de page »

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>a.back</code>

### 06-S Structure du composant Breadcrumb

**Description** : Les pages secondaires doivent disposer d’un breadcrumb correctement structuré

**Criticité** : Alerte (Orange)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>nav[id^=breadcrumb-], nav.cmp-breadcrumb</code>

### 06-T Structure du composant Panier

**Description** : Le nom de l’étape en cours est présent dans le titre de la page. Les différentes meta doivent être présentées sous forme de liste (&lt;ul&gt; ou &lt;dl&gt;)

**Criticité** : Critique (Rouge)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>.basket</code>

### 06-U Structure du composant Localnav

**Description** : La localnav doit être dans une balise &lt;nav role=’navigation’&gt; avec un attribut aria_labelledby qui cible le h2 précèdent ses différents items de la liste &lt;ul&gt;.

**Criticité** : Critique (Rouge)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>nav.page-localnav</code>

## 7. Configuration des composants AEM

### 07-A Position de bouton menu

**Description** : Le bouton d'ouverture du menu modale doit se trouver à l'intérieur de la balise &lt;nav&gt; de la navigation principale.

**Criticité** : Critique (Rouge)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>button.anchor[data-destination^="#headernav"]:not(.anchor-close)</code>

### 07-B Structure de la recherche

**Description** : Presence de l'attribut aria label, d'un role=search et analyse de la pertinence des attributs title et placeholder 

**Criticité** : Critique (Rouge)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>role[search]</code>

### 07-C Structure des tooltip

**Description** : Présence de tooltip non accessible sur les résultats de recherches AEM

**Criticité** : Critique (Rouge)

**Filtre** : Développeur + Site AEM

**Référence** : [RAWeb 10.13](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-10-13)

**Sélecteur** :
<code>.search-view</code>

### 07-D Structure du menu des langues

**Description** : Présence de l'attribut aria-label sur le menu de selection de langue. Les liens vers les versions linguistiques doivent avoir les attributs lang, hreflang et posséder un attribut title dont le contenu textuel est tel que : « de – Deutsch »

**Criticité** : Critique (Rouge)

**Filtre** : Développeur + Site AEM

**Référence** : [RAWeb 10.13](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-10-13)

**Sélecteur** :
<code>.cmp-languagenavigation__group</code>

### 07-E Structure du player vidéo

**Description** : Présence de l'indication "Lire la vidéo Youtube, voir légende ci-après" sur l'image de la miniature des vidéo

**Criticité** : Alerte (Orange)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>.cmp-multiplayer .player_img img</code>

### 07-F Structure du menu principal

**Description** : Vérification de la conformité du menu

**Criticité** : Critique (Rouge)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>nav#headernav</code>

### 07-G Structure des sous-éléments du menu principal

**Description** : Vérification de la conformité des sous-menus

**Criticité** : Critique (Rouge)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>nav#headernav ul.nav--primary > .nav-item</code>

### 07-H Nombre d'éléments dans les sous rubriques du menu

**Description** : Présence d'un sous-menu contenant moins de 2 éléments dans le menu de navigation principale

**Criticité** : Critique (Rouge)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>header nav .nav-item.has-subnav > ul</code>

### 07-I. Les informations sont placées de manieres exclusive dans l'arborescence du site

**Description** : Nom de menu ou de sous-menu en double dans la navigation principale

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>.nav-item,.subnav-item</code>

### 07-J La balise mark est accompagné d'un soulignement pointillé

**Description** : Le terme recherché (balise mark) doit être mis en relief avec un soulignement pointillé

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>mark</code>

### 07-K. Le logo Renow dans le footer redirige vers renow.public.lu

**Description** : Vérification de la conformité des sous-menus

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>footer .footer__copyright a.renow[href="https://renow.public.lu"] img[alt="Renow"]</code>

### 07-L Présence d'une police de substitution générique

**Description** : Le dernier élément de substitution dans font-family doit être une famille générique : "serif" ou "sans-serif"

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Développeur

**Sélecteur** :
<code>body,h1,h2,h3,p,li,strong,em,a,dt,dd,span</code>

## 8. Tableau

### 08-A Attribut de tableau

**Description** : Présence de l'attribut scope sur les en-têtes de tableau

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 5.7](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-5-7)

**Sélecteur** :
<code>:where([role="table"],table:not([role="presentation"])) th:not([scope="row"]):not([scope="col"]):not([id]):not([headers]):not([role="rowheader"]):not([role="columnheader"]):not(:only-child)</code>

### 08-B Attribut de tableaux deprecated

**Description** : Absence d'attribut obsolete sur un tableau

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 5.7](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-5-7)

**Sélecteur** :
<code>:where([role="table"],table):where([align],[bgcolor],[border],[frame],[cellpadding],[cellspacing],[width],[summary],[rules]</code>

**Commentaire** : Ces attributs sont régulièrement ajoutés lorsque l'on fait un copier/coller depuis Excel ou Word.

### 08-C Attribut de tableaux redondant

**Description** : Absence d'attribut redondant sur l'en-tête tableau

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>th[header], td[header]</code>

### 08-D Tableau de mise en forme

**Description** : Absence d'éléments incompatibles avec un tableau de mise en forme

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 5.8](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-5-8)

**Sélecteur** :
<code>table[role="presentation"][summary], table[role="presentation"] :where(caption,thead,th,tfoot,[role="rowheader"],[role="columnheader"],td[scope],td[headers],td[axis]</code>

### 08-E Tableau sans en-tête

**Description** : Chaque tableau à un en-tête de ligne ou de colonne balisé avec th ou role="columnheader" ou role="rowheader"

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 5.6](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-5-6]

**Sélecteur** :
<code>:where([role="table"],table:not([role="presentation"]))</code>

### 08-F Tableau complexe

**Description** : Chaque tableau de donnée complexe possède un résumé dans une balise caption

**Criticité** : Critique (Rouge)

**Sélecteur** :
<code>table:not([summary]):not([aria-describedby]):not([role="presentation"])</code>

## 9. Navigation

### 09-A Pages obligatoires du plan du site

**Description** : Présence des pages obligatoires dans le plan du site.

**Criticité** : Critique (Rouge)

**Sélecteur** :
<code>.page-footernav, .cmp-sitemap</code>

### 09-B Pages indésirable dans le plan du site

**Description** : Absence des pages techniques dans le plan du site.

**Criticité** : Alerte (Orange)

**Sélecteur** :
<code>.cmp-sitemap</code>

### 09-C Presence d'attributs tabindex positif

**Description** : Presence d'attributs tabindex positif détecté sur la page

**Criticité** : Alerte (Orange)

**Référence** : [RAWeb 12.8](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-12-8)

**Sélecteur** :
<code>[tabindex]:not([tabindex="0"]):not([tabindex="-1"])</code>

### 09-D. Présence de 2 systèmes de navigation

**Description** : Le site doit être muni de 2 systèmes de navigation (exception : One-page, etc.)

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 12.1](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-12-1)

### 09-E Presence du Skiplink

**Description** : Presence du skiplink pour aller à la zone de contenu principale

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 12.7](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-12-7)

**Sélecteur** :
<code>.skiplinks a[href="#main"]</code>

### 09-F Taille des zones cliquable

**Description** : La taille des éléments interactifs minimum attendue est de 24px par 24px (marges comprises)

**Criticité** : Bonne pratique (Jaune)

**Référence** : [WCAG 2.2 SC258](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), [Opquast 181](https://checklists.opquast.com/fr/assurance-qualite-web/la-taille-des-elements-cliquables-est-suffisante)

**Sélecteur** :
<code>a, button, input, select, details, textarea, [tabindex="0"], [tabindex="-1"]</code>

### 09-G Absence des items obligatoire sur la page d'erreur (Accueil, Search, plan, contact)

**Description** : La taille des éléments interactifs minimum attendue est de 24px par 24px (marges comprises)

**Criticité** : Bonne pratique (Jaune)

**Référence** : [WCAG 2.2 SC258](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), [Opquast 181](https://checklists.opquast.com/fr/assurance-qualite-web/la-taille-des-elements-cliquables-est-suffisante)

**Sélecteur** :
<code>a, button, input, select, details, textarea, [tabindex="0"], [tabindex="-1"]</code>


## 10. Balises/attributs obsolètes

### 10-A. Balise obsolete

**Description** : Présence de balise HTML obsolètes ou servant à la présentation de l'information

**Criticité** : Critique (Rouge)

**Référence** : [RAWeb 10.1](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-10-1)

**Sélecteur** :
<code>acronym,applet,basefont,big,center,dir,font,frame,frameset,isindex,noframes,s,strike,tt,u,blink,marquee</code>

### 10-B. Balise obsolete qui ont changé de signification

**Description** : Présence de balises 'i' ou 'b', voir pour les remplacer par 'em' et 'strong' lorsque nécessaire

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>i,b</code>

**Commentaire** : Des libs utilisent la balise i pour l'ajout d'icône.

### 10-C. Attribut obsolete

**Description** : Présence d'attributs HTML obsoletes

**Criticité** : Critique (Rouge)

**Sélecteur** :
<code>link[rev], a[rev],link[charset], a[charset],a[shape],a[coords],img[longdesc], iframe[longdesc],link[target],area[nohref],head[profile],html[version],img[name],meta[scheme],object[archive],object[classid],object[codebase],object[codetype],object[declare],object[standby],param[valuetype],param[type],td[axis],t[axis],td[abbr], t[abbr],td[scope],caption[align], iframe[align], img[align], input[align], object[align], legend[align], table[align], hr[align], div[align], h1[align], h2[align], h3[align], h4[align], h5[align], h6[align], p[align], col[align], colgroup[align], tbody[align], td[align], tfoot[align], th[align], thead[align], tr[align],body[alink],body[link],body[vlink],body[text],body[background],table[bgcolor], tr[bgcolor], td[bgcolor], th[bgcolor], body[bgcolor],table[border], object[border],table[cellpadding],table[cellspacing],col[char], colgroup[char], tbody[char], td[char], tfoot[char], th[char], thead[char],tr[char],col[charoff], colgroup[charoff], tbody[charoff], td[charoff], tfoot[charoff], th[charoff], thead[charoff], tr[charoff],br[clear],dl[compact], menu[compact], ol[compact], ul[compact],table[frame],iframe[frameborder],img[hspace], object[hspace],img[vspace], object[vspace],iframe[marginheight],iframe[marginwidth],hr[noshade],td[nowrap], th[nowrap],table[rules],iframe[scrolling],hr[size],li[type], ol[type], ul[type],col[valign], colgroup[valign], tbody[valign], td[valign], tfoot[valign], th[valign], thead[valign], tr[valign],hr[width], table[width], td[width], th[width], col[width], colgroup[width], pre[width]</code>

**Commentaire** : Des libs utilisent la balise i pour l'ajout d'icône.

### 10-D. Attribut de présentation

**Description** : Présence d'attributs HTML servant à la présentation de l'information

**Criticité** : Critique (Rouge)

**Sélecteur** :
<code>[align], [alink], [background], [bgcolor], [border], [cellpadding], [cellspacing], [char], [charoff], [clear], [color], [compact], [frameborder], [hspace], [link], [marginheight], [marginwidth], [text], [valign], [vlink], [vspace], [size]:not(select), *:not(symbol) > *:not(g):not(svg[aria-hidden="true"]) > [width]:not(img):not(object):not(embed):not(canvas):not(svg):not(rect),*:not(symbol) > *:not(g):not(svg[aria-hidden="true"]) > [height]:not(img):not(object):not(embed):not(canvas):not(svg):not(rect)</code>

**Commentaire** : Des libs utilisent la balise i pour l'ajout d'icône.


## 11. Changement de langue

### 11-A. Absence de lang

**Description** : Aucune langue définie par défaut sur la page sur la balise HTML

**Criticité** : Critique (Rouge)

**Filtre** : Développeur

**Référence** : [RAWeb 8.3](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-8-3), [Opquast 125](https://checklists.opquast.com/fr/assurance-qualite-web/le-code-source-de-chaque-page-indique-la-langue-principale-du-contenu)

**Sélecteur** :
<code>html:not([lang])</code>

### 11-B. Presence de lorem ipsum

**Description** : Présence de "Lorem ipsum" sur la page

**Criticité** : Alerte (Orange)

**Filtre** : Développeur + Environnement de production

**Sélecteur** :
<code>.cmp-text</code>

### 11-C. Texte en langue étrangère

**Description** : Présence de texte en langue étrangère en se basant sur les mots les plus courants de chaques langues

**Criticité** : Alerte (Orange)

**Filtre** : Développeur + Environnement de production

**Sélecteur** :
<code>.cmp-text, .cmp-focus-list-description</code>

**Commentaire** : Cela ne permettra pas de détecter des mots isolés comme Hardware, BabyYear, etc.

## 12. Boutons

### 12-A. Bouton Role search

**Description** : Absence de certaines propriétés sur le champ de recherche (role="search" et aria-label="Globale")

**Criticité** : Critique (Rouge)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>.topsearch:not([role="search"])</code>

### 12-B. Bouton TopSearch

**Description** : Présence d'un problème dans les intitulés du champ de recherche (title et placeholder)

**Criticité** : Critique (Rouge)

**Filtre** : Site AEM

**Sélecteur** :
<code>#topsearch > #search-field-top</code>

### 12-C. Bouton d'ouverture du menu, de la recherche, des filtres ou du sommaire.

**Description** : L'attribut title d'un bouton du site ne reprend pas son contenu textuel

**Criticité** : Critique (Rouge)

**Filtre** : Site AEM

**Sélecteur** :
<code>.topsearch button:not(.anchor-close), button.anchor[data-destination^="#headernav"]:not(.anchor-close), button.anchor[data-destination^="#filters"]:not(.anchor-close), button.anchor[data-destination^="#bloub"]:not(.anchor-close)'
</code>

### 12-D. Button avec role

**Description** : L'attribut title d'un bouton du site ne reprend pas son contenu textuel

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Développeur

**Sélecteur** :
<code>button[role=button]</code>

## 13. Rédacteur

### 13-A. Presence de triple espace

**Description** : Présence de titre avec un attribut role

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>.cmp-text, *:not(.cmp-text) > p</code>

**Commentaire** : Le double espace est considéré comme une erreur d'inattention

### 13-B. Présence de déclaration de taille de texte

**Description** : Taille de police recommandée pour le texte principal : 16px sur desktop et de 14px sur mobile Taille de police minimum recommandée pour le texte secondaire : 12px

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>main .cmp-section *:not(.cmp-contentbox) > .cmp-text p</code>

### 13-C. Element obligatoire dans la déclaration d'accessibilité

**Description** : Vérifier qu'il n'y a pas d'information manquante dans la déclaration d'accessibilité

**Criticité** : Critique (Rouge)

**Commentaire** : Les informations obligatoires vérifiées ici, sont le nom de l'organisme déclarant, l'url du site, l'état de conformité, la date de la déclatation ainsi que l'email de contact.

## 14. Titres

### 14-A Heading avec role

**Description** : Présence de titre avec un attribut role

**Criticité** : Critique (Rouge)

**Sélecteur** :
<code>h1[role]:not([role="heading"]),h2[role]:not([role="heading"]),h3[role]:not([role="heading"]),h4[role]:not([role="heading"]),h5[role]:not([role="heading"]),h6[role]:not([role="heading"])</code>

### 14-B Aria-level sans heading

**Description** : Présence d'attribut aria-level en dehors de titre

**Criticité** : Critique (Rouge)

**Sélecteur** :
<code>[aria-level]:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6):not([role="heading"])</code>

### 14-C. Heading caché au outil d'assistance

**Description** : Présence de titre caché aux outils d'assistance avec aria-hidden

**Criticité** : Critique (Rouge)

**Filtre** : Développeur

**Sélecteur** :
<code>h1[aria-hidden],h2[aria-hidden],h3[aria-hidden],h4[aria-hidden],h5[aria-hidden],h6[aria-hidden]</code>

### 14-D. Heading simulé

**Description** : Présence de texte ressemblant à des titres n'étant pas balisé comme tel - A vérifier au cas par cas

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>b,p:not(.cmp-form__mandatory-text) > strong:first-child ,span > strong:first-child ,div > strong:first-child , *:not(.accordionItem) > *:not(figcaption):not(.article-summary):not(.article-metas):not(.search-metas):not(.cmp-grid__textContainer):not(.feed-item-content):not(.meta-themes):not(.description):not(.meta-published-update) > p:not(.cmp-lastupdate):not(.cmp-form__mandatory-text):not(.at):not(.feed-item-author):not(.orejime-Notice-description):first-child</code>

### 14-E. Saut de titre

**Description** : Présence de sauts de titres dans la hiérarchie de la page.

**Criticité** : Bonne pratique (Jaune)

**Référence** : [RAWeb 9.1](https://accessibilite.public.lu/fr/raweb1/criteres.html#crit-9-1)

**Sélecteur** :
<code>:where(h1,h2,h3,h4,h5,h6,[role="heading"]):not([aria-hidden])</code>

### 14-F. Double balise h1

**Description** : Présence de 2 titres H1 : Conforme seulement si ça fait sens. Pertinence de ceux-ci à vérifier manuellement

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>h1, [role="heading"][aria-level="1"]</code>

## 15. Sécurité 

### 15-A Information de contexte sur les liens

**Description** : Les liens externes qui ouvrent une nouvelle fenêtre ne partagent pas d'information de contexte. Doter chaque lien ayant un attribut target='_blank' d'un attribut rel='noreferrer noopener'.

**Criticité** : Bonne pratique (Jaune)

**Référence** : [Opquast 25](https://checklists.opquast.com/fr/assurance-qualite-web/les-liens-externes-qui-ouvrent-une-nouvelle-fenetre-ne-partagent-pas-dinformation-de-contexte)

**Sélecteur** :
<code>a[target="_blank"]:not([rel~="noreferrer"]):not([rel~="noopener"])</code>

### 15-B Protocole HTTPS pour les liens 

**Description** : Les pages utilisant le protocole HTTPS ne proposent pas de ressources HTTP.

**Criticité** : Bonne pratique (Jaune)

**Référence** : [Opquast 195](https://checklists.opquast.com/fr/assurance-qualite-web/les-pages-utilisant-le-protocole-https-ne-proposent-pas-de-ressources-http)

**Sélecteur** :
<code>a[target="_blank"][href^="http://"]</code>

### 15-C Protocole HTTPS pour la page courante

**Description** : La page courante doit utiliser le protocole HTTPS

**Criticité** : Critique (Rouge)

**Référence** : [Opquast 192](https://checklists.opquast.com/fr/assurance-qualite-web/toutes-les-pages-utilisent-le-protocole-https)

### 15-D Encodage de caractères

**Description** : Le code source de chaque page contient une métadonnée qui définit le jeu de caractères UTF-8

**Criticité** : Bonne pratique (Jaune)

**Référence** : [Opquast 225](https://checklists.opquast.com/fr/assurance-qualite-web/le-code-source-de-chaque-page-contient-une-metadonnee-qui-definit-le-jeu-de-caracteres)

### 15-E Liens vers des documents en téléchargement

**Description** : Vérifiez si les documents peuvent être fournis au format PDF ou HTML

**Criticité** : Bonne pratique (Jaune)

**Sélecteur** :
<code>a[href$=".doc"], a[href$=".docx"], a[href$=".xls"], a[href$=".xlsx"], a[href$=".ppt"], a[href$=".pptx"], a[href$=".txt"]</code>

### 15-G Présence de la modale de cookie

**Description** : Vérifiez la présence de la modale de cookie Orejime

**Criticité** : Bonne pratique (Jaune)

**Filtre** : Développeur + Site AEM

**Sélecteur** :
<code>#orejime</code>
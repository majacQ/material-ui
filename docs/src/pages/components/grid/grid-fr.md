---
title: React Grid component
components: Grid
githubLabel: 'component: Grid'
materialDesign: https://material.io/design/layout/understanding-layout.html
---

# Grid

<p class="description">Le composant responsive Grid de Material Design s'adapte à la taille et à l'orientation de l'écran, garantissant ainsi la cohérence entre les différents agencements.</p>

[Grid](https://material.io/design/layout/responsive-layout-grid.html) créé une cohérence visuelle entre les agencements tout en permettant une certaine flexibilité à travers une grande variété de modèles. Material Design's responsive UI is based on a 12-column grid layout.

{{"component": "modules/components/ComponentLinkHeader.js"}}

> ⚠️ The `Grid` component shouldn't be confused with a data grid; it is closer to a layout grid. For a data grid head to [the `DataGrid` component](/components/data-grid/).

## Comment ça marche

Le système de grille est implémenté avec le composant `Grid`:

- It uses [CSS's Flexible Box module](https://www.w3.org/TR/css-flexbox-1/) for high flexibility.
- Il y a deux types de mise en page : *conteneurs* et *éléments*.
- Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
- Les éléments ont un rembourrage (padding) pour créer l'espacement entre les éléments individuels.
- Il existe cinq points de rupture de grille: xs, sm, md, lg et xl.
- Integer values can be given to each breakpoint, indicating how many of the 12 available columns are occupied by the component when the viewport width satisfies the [breakpoint contraints](/customization/breakpoints/#default-breakpoints).

Si vous êtes **nouveau ou peu familiers avec FlexBox**, nous vous encourageons à lire ce guide [CSS-Tricks flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

## Ecartement

La grille responsive se concentre sur les largeurs d'espacement cohérentes plutôt que sur la largeur des colonnes. Les marges du Material Design et les colonnes suivent un grille carrée de **8px**. The `spacing` prop value is an integer between 0 and 10 inclusive. Par défaut, l'espacement entre deux éléments de la grille suit une fonction linéaire: `sortie (espacement) = espacement * 8px`, par exemple `espacement ={2}` crée un intervalle large de 16px.

Cette fonction de transformation de sortie peut être personnalisée [à l'aide du thème](/customization/spacing/).

{{"demo": "pages/components/grid/SpacingGrid.js", "bg": true}}

## Les grilles fluides

Fluid grids use columns that scale and resize content. A fluid grid's layout can use breakpoints to determine if the layout needs to change dramatically.

### Grille de base

Column widths are integer values between 1 and 12; they apply at any breakpoint and indicate how many columns are occupied by the component.

A value given to a breakpoint applies to all the other breakpoints wider than it (unless overridden, as you can read later in this page). For example, `xs={12}` sizes a component to occupy the whole viewport width regardless of its size.

{{"demo": "pages/components/grid/CenteredGrid.js", "bg": true}}

### Grille avec points d'arrêt

Plusieurs colonnes ont plusieurs largeurs définies, ce qui entraîne une modification de la présentation au point de rupture défini. Width values given to larger breakpoints override those given to smaller breakpoints.

For example, `xs={12} sm={6}` sizes a component to occupy half of the viewport width (6 columns) when viewport width is [600 or more pixels](/customization/breakpoints/#default-breakpoints). For smaller viewports, the component fills all 12 available columns.

{{"demo": "pages/components/grid/FullWidthGrid.js", "bg": true}}

## Interactif

Vous trouverez ci-dessous une démo interactive vous permettant d'explorer les résultats visuels des différents paramètres:

{{"demo": "pages/components/grid/InteractiveGrid.js", "hideToolbar": true, "bg": true}}

## Mise en page automatique

The Auto-layout makes the *items* equitably share the available space. That also means you can set the width of one *item* and the others will automatically resize around it.

{{"demo": "pages/components/grid/AutoGrid.js", "bg": true}}

## Grille complexe

La démo suivante ne suit pas la spécification Material Design, mais illustre comment la grille peut être utilisée pour créer des mises en page complexes.

{{"demo": "pages/components/grid/ComplexGrid.js", "bg": true}}

## Grille imbriquée

The `container` and `item` properties are two independent booleans. They can be combined.

> Un **container** flex est la boîte générée par un élément avec un affichage calculé de `flex` ou `inline-flex`. Les enfants entrants d'un conteneur flex sont appelés éléments** flex **et sont disposés à l'aide du modèle d'agencement Flex.

https://www.w3.org/TR/css-flexbox-1/#box-model

{{"demo": "pages/components/grid/NestedGrid.js", "bg": true}}

⚠️ Defining an explicit width to a Grid element that is flex container, flex item, and has spacing at the same time lead to unexpected behavior, avoid doing it:

```jsx
<Grid spacing={1} container item xs={12}>
```

If you need to do such, remove one of the props.

## Limites

### Marge négative

Il existe une limitation à la marge négative utilisée pour mettre en œuvre l'espacement entre les éléments. This might lead to unexpected behaviors. For instance, to apply a background color, you need to apply `display: flex;` to the parent.

### white-space: nowrap;

La configuration initiale sur les éléments flex est `min-width: auto`. Cela provoque un conflit de positionnement lorsque les enfants utilisent `white-space : nowrap;`. Vous pouvez rencontrer le problème avec :

```jsx
<Grid item xs>
  <Typography noWrap>
```

In order for the item to stay within the container you need to set `min-width: 0`. In order for the item to stay within the container you need to set `min-width: 0`.

```jsx
<Grid item xs zeroMinWidth>
  <Typography noWrap>
```

{{"demo": "pages/components/grid/AutoGridNoWrap.js", "bg": true}}

### direction: column | column-reverse

The `xs`, `sm`, `md`, `lg`, and `xl` props are **not supported** within `direction="column"` and `direction="column-reverse"` containers.

They define the number of grids the component will use for a given breakpoint. They are intended to control **width** using `flex-basis` in `row` containers but they will impact height in `column` containers. If used, these props may have undesirable effects on the height of the `Grid` item elements.

## CSS Grid Layout

Material-UI ne fournit aucune fonctionnalité de grille CSS, mais comme illustré ci-dessous, vous pouvez facilement utiliser CSS Grid pour mettre en page vos pages.

{{"demo": "pages/components/grid/CSSGrid.js", "bg": true}}

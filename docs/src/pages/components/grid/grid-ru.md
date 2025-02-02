---
title: Компонент React Grid
components: Grid
githubLabel: 'component: Grid'
materialDesign: https://material.io/design/layout/understanding-layout.html
---

# Grid

<p class="description">Сетка адаптивного макета Material Design адаптируется к размеру экрана и ориентации, обеспечивая согласованность макетов.</p>

[Сетка](https://material.io/design/layout/responsive-layout-grid.html) создает визуальную согласованность между макетами, позволяя гибко адаптироваться к разнообразным дизайнам. Material Design's responsive UI is based on a 12-column grid layout.

{{"component": "modules/components/ComponentLinkHeader.js"}}

> ⚠️ Компонент `Сетка` не путать с сеткой данных; он ближе к раскладке сетки. Для передачи данных заголовок перейти к: [компоненту `DataGrid`](/components/data-grid/).

## Как это работает

Система сетки реализована с помощью компонента `Grid`:

- It uses [CSS's Flexible Box module](https://www.w3.org/TR/css-flexbox-1/) for high flexibility.
- Существует два типа макетов: *контейнеры* и *элементы*.
- Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
- Элементы имеют отступы для создания промежутков между отдельными элементами.
- Существует пять контрольных точек прерывания сетки: xs, sm, md, lg и xl.
- Integer values can be given to each breakpoint, indicating how many of the 12 available columns are occupied by the component when the viewport width satisfies the [breakpoint contraints](/customization/breakpoints/#default-breakpoints).

Если вы **слабо знакомы (или совсем незнакомы) с Flexbox**, мы рекомендуем Вам прочитать это руководство [CSS-трюки Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

## Интервал

Смысл адаптивной сетки не в равной ширине столбцов, а в равной ширине интервалов между ними. В Material Design величина отступов и ширина столбцов привязаны к базовой сетке с шагом в **8px**. Свойство `spacing` может принимать целочисленные значения от 0 до 10 включительно. По умолчанию расстояние между соседними элементами (GridItem) задано линейной функцией: `output(spacing) = spacing * 8px`, т.е. `spacing={2}` устанавливает значение интервала 16px.

Поведение функции `output` можно изменить, [отредактировав тему](/customization/spacing/).

{{"demo": "pages/components/grid/SpacingGrid.js", "bg": true}}

## Адаптивные сетки

Адаптивные сетки используют столбцы, которые меняют свою ширину и масштабируют размер содержимого. A fluid grid's layout can use breakpoints to determine if the layout needs to change dramatically.

### Базовая сетка

Column widths are integer values between 1 and 12; they apply at any breakpoint and indicate how many columns are occupied by the component.

A value given to a breakpoint applies to all the other breakpoints wider than it (unless overridden, as you can read later in this page). For example, `xs={12}` sizes a component to occupy the whole viewport width regardless of its size.

{{"demo": "pages/components/grid/CenteredGrid.js", "bg": true}}

### Сетка с точками прерывания

Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints.

For example, `xs={12} sm={6}` sizes a component to occupy half of the viewport width (6 columns) when viewport width is [600 or more pixels](/customization/breakpoints/#default-breakpoints). For smaller viewports, the component fills all 12 available columns.

{{"demo": "pages/components/grid/FullWidthGrid.js", "bg": true}}

## Интерактивность

Ниже приведен интерактивный пример, который демонстрирует результаты различных настроек сетки:

{{"demo": "pages/components/grid/InteractiveGrid.js", "hideToolbar": true, "bg": true}}

## Авто-разметка

Автоматическая разметка позволяет *элементам* равномерно распределяться по всему доступному пространству. Это также означает, что вы можете установить ширину одного *элемента* и остальные автоматически изменят свои размеры вокруг него.

{{"demo": "pages/components/grid/AutoGrid.js", "bg": true}}

## Сложная сетка

Следующая демонстрация не соответствует спецификации Material Design, но иллюстрирует, как сетка может использоваться для создания сложных макетов.

{{"demo": "pages/components/grid/ComplexGrid.js", "bg": true}}

## Вложенная сетка

Свойства `container` и `item` - это два независимых логических значения. Они могут быть объединены.

> Flex **контейнер** представляет собой блок, созданный элементом с вычисляемым свойством display `flex` или `inline-flex`. Дочерние элементы flex контейнера называются flex **элементы** и размещаются используя flex-модель.

https://www.w3.org/TR/css-flexbox-1/#box-model

{{"demo": "pages/components/grid/NestedGrid.js", "bg": true}}

⚠️ Defining an explicit width to a Grid element that is flex container, flex item, and has spacing at the same time lead to unexpected behavior, avoid doing it:

```jsx
<Grid spacing={1} container item xs={12}>
```

If you need to do such, remove one of the props.

## Ограничения

### Отрицательный margin

Есть одно ограничение с отрицательным margin, которое мы используем для добавления расстояния между элементами. This might lead to unexpected behaviors. For instance, to apply a background color, you need to apply `display: flex;` to the parent.

### white-space: nowrap;

Первоначальные настройки для flex-элементов (flex items) равны `min-width: auto`. Это вызывает конфликт позиционирования, когда потомки используют `white-space: nowrap;`. Вы можете получить проблему с кодом такого типа:

```jsx
<Grid item xs>
  <Typography noWrap>
```

Чтобы элемент оставался в контейнере, необходимо установить `min-width: 0`. Чтобы элемент оставался в контейнере, необходимо установить `min-width: 0`.

```jsx
<Grid item xs zeroMinWidth>
  <Typography noWrap>
```

{{"demo": "pages/components/grid/AutoGridNoWrap.js", "bg": true}}

### direction: column | column-reverse

Свойства `xs`, `sm`, `md`, `lg`, и `xl` **не поддерживаются** внутри контейнеров с `direction="column"` и `direction="column-reverse"`.

Определяют количество клеток, которое компонент будет использовать для данной точки останова. Они предназначены для контроля **ширины** с помощью `flex-basis` в `row`-контейнерах, но в `column`-контейнерах они повлияют на высоту. При использовании этих свойств возможен побочный эффект в виде изменения высоты  `Grid`-ячеек.

## Макет CSS Grid

Material-UI сам по себе не предоставляет никакой функциональности CSS Grid, но, как видно ниже, вы можете легко использовать CSS Grid в макете страницы.

{{"demo": "pages/components/grid/CSSGrid.js", "bg": true}}

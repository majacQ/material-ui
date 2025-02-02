---
title: Text Field React-Komponente
components: FilledInput, FormControl, FormHelperText, Input, InputAdornment, InputBase, InputLabel, OutlinedInput, TextField
githubLabel: 'component: TextField'
materialDesign: https://material.io/components/text-fields
---

# Textfeld

<p class="description">Text Felder lassen Nutzer Text eingeben und bearbeiten.</p>

[Text fields](https://material.io/design/components/text-fields.html) allow users to enter text into a UI. They typically appear in forms and dialogs.

{{"component": "modules/components/ComponentLinkHeader.js"}}

## TextField

Die `TextField` Wrapper-Komponente ist ein vollständiges Formularsteuerelement, das eine Beschriftung, Eingabe und Hilfetext enthält.

It supports standard, outlined and filled styling.

{{"demo": "pages/components/text-fields/BasicTextFields.js"}}

**Note:** The standard variant of the `TextField` is no longer documented in the [Material Design guidelines](https://material.io/) ([here's why](https://medium.com/google-design/the-evolution-of-material-designs-text-fields-603688b3fe03)), but Material-UI will continue to support it.

## Form props

Standard form attributes are supported e.g. `required`, `disabled`, `type`, etc. as well as a `helperText` which is used to give context about a field's input, such as how the input will be used.

{{"demo": "pages/components/text-fields/FormPropsTextFields.js"}}

## Validierung

The `error` prop toggles the error state, the `helperText` prop can then be used to provide feedback to the user about the error.

{{"demo": "pages/components/text-fields/ValidationTextFields.js"}}

## Mehrzeilig

The `multiline` prop transforms the text field into a [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) or a [TextareaAutosize](/components/textarea-autosize/). Unless the `rows` prop is set, the height of the text field dynamically matches its content (using [TextareaAutosize](/components/textarea-autosize/)). You can use the `rowsMin` and `rowsMax` props to bound it.

{{"demo": "pages/components/text-fields/MultilineTextFields.js"}}

## Selects (auswähler)

The `select` prop makes the text field use the [Select](/components/selects/) component internally.

{{"demo": "pages/components/text-fields/SelectTextFields.js"}}

## Icons

There are multiple ways to display an icon with a text field.

{{"demo": "pages/components/text-fields/InputWithIcon.js"}}

### Eingabeverzierungen

The main way is with an `InputAdornment`. Sie können beispielsweise eine Symbolschaltfläche verwenden, um das Kennwort ein- oder auszublenden. This can be used to add a prefix, a suffix or an action to an input.

{{"demo": "pages/components/text-fields/InputAdornments.js"}}

## Größen

Fancy smaller inputs? Verwenden Sie die `size` Prop.

{{"demo": "pages/components/text-fields/TextFieldSizes.js"}}

The `filled` variant input height can be further reduced by rendering the label outside of it.

{{"demo": "pages/components/text-fields/TextFieldHiddenLabel.js"}}

## Layout

`dense` and `normal` alter other styles to meet the specification. `margin` prop can be used to alter the vertical spacing of inputs. Using `none` (default) will not apply margins to the `FormControl`, whereas `dense` and `normal` will.

`fullWidth` can be used to make the input take up the full width of its container.

{{"demo": "pages/components/text-fields/LayoutTextFields.js"}}

## Uncontrolled vs Controlled

The component can be controlled or uncontrolled.

{{"demo": "pages/components/text-fields/StateTextFields.js"}}

## Komponenten

Das `Textfeld` besteht aus kleineren Komponenten ( [`FormControl`](/api/form-control/), [`Input`](/api/input/), [`FilledInput`](/api/filled-input/), [`InputLabel`](/api/input-label/), [`OutlinedInput`](/api/outlined-input/), und [`FormHelperText`](/api/form-helper-text/) ) welche Sie direkt nutzen können, um Ihre Formulareingaben erheblich anzupassen.

Möglicherweise haben Sie auch festgestellt, dass einige native HTML-Eingabeeigenschaften in der Komponente `TextField` fehlen. Das war Absicht. Die Komponente kümmert sich um die am häufigsten verwendeten Eigenschaften. Anschließend muss der Benutzer die darunter liegende Komponente verwenden, die in der folgenden Demo gezeigt wird. Sie können jedoch `inputProps` (und `InputProps`, `InputLabelProps` Eigenschaften) verwenden, wenn Sie einiges an Boilerplate vermeiden möchten.

{{"demo": "pages/components/text-fields/ComposedTextField.js"}}

## Eingaben

{{"demo": "pages/components/text-fields/Inputs.js"}}

## Farbe (Color)

The `color` prop changes the highlight color of the text field when focused.

{{"demo": "pages/components/text-fields/ColorTextFields.js"}}

## Benutzerdefinierte Eingabe

Hier einige Beispiele zum Anpassen der Komponente. Mehr dazu erfahren Sie auf der [Überschreibungsdokumentationsseite](/customization/how-to-customize/).

{{"demo": "pages/components/text-fields/CustomizedInputs.js"}}

Die Anpassung endet nicht bei CSS. Sie können Komposition verwenden, um benutzerdefinierte Komponenten zu erstellen und Ihrer App ein einzigartiges Gefühl zu verleihen. Nachfolgend ein Beispiel mit der [`InputBase`](/api/input-base/) Komponente, die von Google Maps inspiriert wurde.

{{"demo": "pages/components/text-fields/CustomizedInputBase.js", "bg": true}}

🎨 If you are looking for inspiration, you can check [MUI Treasury's customization examples](https://mui-treasury.com/styles/text-field).

## Einschränkungen

### Shrink

Der Status des Eingabe-Labels "Verkleinern" ist nicht immer korrekt. Das Eingabeetikett soll schrumpfen, sobald die Eingabe etwas anzeigt. Unter bestimmten Umständen können wir den Status "Schrumpfen" nicht ermitteln (Zahleneingabe, Datumseingabe, Stripe-Eingabe). Sie könnten eine Überlappung bemerken.

![schrumpfen](/static/images/text-fields/shrink.png)

Um das Problem zu umgehen, können Sie den Status des Labels "verkleinern" erzwingen.

```jsx
<TextField InputLabelProps={{ shrink: true }} />
```

oder

```jsx
<InputLabel shrink>Contagem</InputLabel>
```

### Floating label

The floating label is absolutely positioned, it won't impact the layout of the page. You need to make sure that the input is larger than the label to display correctly.

### type="number"

Inputs of type="number" have potential usability issues:

- Allowing certain non-numeric characters ('e', '+', '-', '.') and silently discarding others and silently discarding others and silently discarding others and silently discarding others
- Wenn Sie die Komponente zusammenstellen:

and more - see [this article](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/) by the GOV.UK Design System team for a more detailed explanation.

For number validation, one viable alternative is to use the default input type="text" with the _pattern_ attribute, for example:

```jsx
<TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
```

In the future, we might provide a [number input component](https://github.com/mui-org/material-ui/issues/19154).

### Helper text

The helper text prop affects the height of the text field. If two text fields are placed side by side, one with a helper text and one without, they will have different heights. Zum Beispiel:

{{"demo": "pages/components/text-fields/HelperTextMisaligned.js"}}

This can be fixed by passing a space character to the `helperText` prop:

{{"demo": "pages/components/text-fields/HelperTextAligned.js"}}

## Integration with 3rd party input libraries

Sie können Bibliotheken von Drittanbietern verwenden, um eine Eingabe zu formatieren. Sie müssen eine benutzerdefinierte Implementierung des `<input>` -Elements mit der `inputComponent` -Eigenschaft bereitstellen.

Die folgende Demo verwendet die Bibliotheken [react-text-mask](https://github.com/text-mask/text-mask) und [react-number-format](https://github.com/s-yadav/react-number-format). The same concept could be applied to [e.g. react-stripe-element](https://github.com/mui-org/material-ui/issues/16037).

{{"demo": "pages/components/text-fields/FormattedInputs.js"}}

The provided input component should expose a ref with a value that implements the following interface:

```ts
interface InputElement {
  focus(): void;
  value?: string;
}
```

```jsx
const MyInputComponent = React.forwardRef((props, ref) => {
  const { component: Component, ...other } = props;

  // implement `InputElement` interface
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      // logic to focus the rendered component from 3rd party belongs here
    },
    // hiding the value e.g. react-stripe-elements
  }));

  // `Component` will be your `SomeThirdPartyComponent` from below
  return <Component {...other} />;
});

// usage
<TextField
  InputProps={{
    inputComponent: MyInputComponent,
    inputProps: {
      component: SomeThirdPartyComponent,
    },
  }}
/>;
```

## Barrierefreiheit

In order for the text field to be accessible, **the input should be linked to the label and the helper text**. The underlying DOM nodes should have this structure:

```jsx
<FormControl>
  <InputLabel htmlFor="my-input">E-mail-Adresse</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">Wir werden Ihre E-Mail niemals teilen.</FormHelperText>
</FormControl>
```

- Wenn Sie die Komponente `TextField` verwenden, müssen Sie nur eine eindeutige `Id`angeben.
- Wenn Sie die Komponente zusammenstellen:

```jsx
<FormControl>
  <InputLabel htmlFor="my-input">E-mail-Adresse</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">Wir werden Ihre E-Mail niemals teilen.</FormHelperText>
</FormControl>
```

## Ergänzende Projekte

Für fortgeschrittenere Anwendungsfälle können Ihnen folgende Projekte helfen:

- [mui-rff](https://github.com/lookfirst/mui-rff) Bindings for using Material-UI with [React Final Form](https://final-form.org/react).
- [formik-material-ui](https://github.com/stackworx/formik-material-ui): Bindings for using Material-UI with [formik](https://jaredpalmer.com/formik).
- [redux-form-material-ui](https://github.com/erikras/redux-form-material-ui): Bindings for using Material-UI with [Redux Form](https://redux-form.com/).
- [mui-rff](https://github.com/lookfirst/mui-rff): Bindings for using Material-UI with [React Final Form](https://final-form.org/react).

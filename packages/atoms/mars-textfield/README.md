# mars-textfield

# <mars-textfield>
Web component that allows us to show an accessible and beautiful textfield so that users can interact

## Installation
```bash
 npm i @web-inmars/textfield --save
```

## Usage
```html
<script type="module">
  import '@web-inmars/textfield/mars-textfield.js';
</script>

<mars-textfield>
    Click me!
</mars-textfield>
```

## Properties

| Property      | Attribute      | Type      | Default |
|---------------|----------------|-----------|---------|
| `caption`     | `caption`      | `string`  | ""      |
| `disabled`    | `disabled`     | `boolean` | false   |
| `for`         | `for`          | `string`  | ""      |
| `label`       | `label`        | `string`  | ""      |
| `name`        | `name`         | `string`  | ""      |
| `placeholder` | `placeholder`  | `string`  | ""      |
| `showCaption` | `show-caption` | `boolean` | false   |
| `type`        | `type`         | `string`  | "text"  |
| `value`       | `value`        | `string`  | ""      |
| `variant`     | `variant`      | `string`  | ""      |

## Events

| Event      | Type                                             |
|------------|--------------------------------------------------|
| `on-input` | `CustomEvent<{ event: Event & { target: HTMLInputElement; }; value: string; }>` |

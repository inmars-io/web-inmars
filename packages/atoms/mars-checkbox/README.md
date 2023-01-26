# mars-checkbox

# <mars-checkbox>
Web component that allows us to show an accessible and beautiful checkbox so that users can interact

## Installation
```bash
 npm i @web-inmars/checkbox --save
```

## Usage
```html
<script type="module">
  import '@web-inmars/checkbox/mars-checkbox.js';
</script>

<mars-checkbox>
    Click me!
</mars-checkbox>
```

## Properties

| Property      | Attribute      | Type      | Default |
|---------------|----------------|-----------|---------|
| `caption`     | `caption`      | `string`  | ""      |
| `checked`     | `checked`      | `boolean` | false   |
| `disabled`    | `disabled`     | `boolean` | false   |
| `label`       | `label`        | `string`  | ""      |
| `name`        | `name`         | `string`  | ""      |
| `showCaption` | `show-caption` | `boolean` | false   |
| `value`       | `value`        | `string`  | ""      |
| `variant`     | `variant`      | `string`  | ""      |

## Events

| Event       | Type                                             |
|-------------|--------------------------------------------------|
| `on-change` | `CustomEvent<{ event: Event & { target: HTMLInputElement; }; }>` |

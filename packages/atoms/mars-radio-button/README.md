# mars-radio-button

# <mars-radio-button>
Web component that allows us to show an accessible and beautiful radio-button so that users can interact

## Installation
```bash
 npm i @web-inmars/radio-button --save
```

## Usage
```html
<script type="module">
  import '@web-inmars/radio-button/mars-radio-button.js';
</script>

<mars-radio-button>
    Click me!
</mars-radio-button>
```

## Properties

| Property      | Attribute      | Type      | Default |
|---------------|----------------|-----------|---------|
| `caption`     | `caption`      | `string`  | ""      |
| `checked`     | `checked`      | `boolean` | false   |
| `disabled`    | `disabled`     | `boolean` | false   |
| `id`          | `id`           | `string`  | ""      |
| `label`       | `label`        | `string`  | ""      |
| `name`        | `name`         | `string`  | ""      |
| `showCaption` | `show-caption` | `boolean` | false   |
| `value`       | `value`        | `string`  | ""      |
| `variant`     | `variant`      | `string`  | ""      |

## Events

| Event       | Type                           |
|-------------|--------------------------------|
| `on-change` | `CustomEvent<{ event: any; }>` |

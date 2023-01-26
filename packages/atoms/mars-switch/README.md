# mars-switch

# <mars-switch>
Web component that allows us to show an accessible and beautiful switch so that users can interact

## Installation
```bash
 npm i @web-inmars/switch --save
```

## Usage
```html
<script type="module">
  import '@web-inmars/switch/mars-switch.js';
</script>

<mars-switch>
    Click me!
</mars-switch>
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

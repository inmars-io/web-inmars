# mars-textarea

# <mars-textarea>
Web component that allows us to show an accessible and beautiful textarea so that users can interact

## Installation
```bash
  npm i @web-inmars/mars-textarea --save
```

## Usage
```html
<script type="module">
   import 'mars-textarea/mars-textarea.js';
</script>

<mars-textarea>
     I'm a textarea
</mars-textarea>
```

## Properties

| Property      | Attribute      | Type      | Default |
|---------------|----------------|-----------|---------|
| `caption`     | `caption`      | `string`  | ""      |
| `disabled`    | `disabled`     | `boolean` | false   |
| `for`         | `for`          | `string`  | ""      |
| `label`       | `label`        | `string`  | ""      |
| `name`        | `name`         | `string`  | ""      |
| `showCaption` | `show-caption` | `boolean` | false   |
| `value`       | `value`        | `string`  | ""      |
| `variant`     | `variant`      | `string`  | ""      |

## Events

| Event      | Type                                          |
|------------|-----------------------------------------------|
| `on-input` | `CustomEvent<{ event: any; value: string; }>` |

# mars-button

# <mars-button>
Web component that allows us to show an accessible and beautiful button so that users can interact

## Installation
```bash
  npm i @web-inmars/mars-button --save
```

## Usage
```html
<script type="module">
   import 'mars-button/mars-button.js';
</script>

<mars-button>
     Click me!
</mars-button>
```

## Properties

| Property   | Attribute  | Type      | Default  |
|------------|------------|-----------|----------|
| `disabled` | `disabled` | `boolean` | false    |
| `type`     | `type`     | `string`  | "button" |
| `value`    | `value`    | `string`  | ""       |
| `variant`  | `variant`  | `string`  | ""       |

## Events

| Event      | Type                           |
|------------|--------------------------------|
| `on-click` | `CustomEvent<{ event: any; }>` |

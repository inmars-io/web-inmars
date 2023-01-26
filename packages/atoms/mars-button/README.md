# mars-button

# <mars-button>
Web component that allows us to show an accessible and beautiful button so that users can interact

## Installation
```bash
 npm i @web-inmars/button --save
```

## Usage
```html
<script type="module">
  import '@web-inmars/button/mars-button.js';
</script>

<mars-button>
    Click me!
</mars-button>

<mars-button value="Click me!"></mars-button>
```

**Mixins:** BasicEventMixin

## Properties

| Property   | Attribute  | Type      | Default  |
|------------|------------|-----------|----------|
| `disabled` | `disabled` | `boolean` | false    |
| `mode`     | `mode`     | `string`  | ""       |
| `type`     | `type`     | `string`  | "button" |
| `value`    | `value`    | `string`  | ""       |
| `variant`  | `variant`  | `string`  | ""       |

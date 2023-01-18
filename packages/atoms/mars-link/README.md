# mars-link

# <mars-link>
Web component that allows us to show an accessible and beautiful link so that users can interact

## Installation
```bash
 npm i @web-inmars/link --save
```

## Usage
```html
<script type="module">
  import '@web-inmars/link/mars-link.js';
</script>

<mars-link>
    Click me!
</mars-link>
```

## Properties

| Property   | Attribute  | Type      | Default |
|------------|------------|-----------|---------|
| `disabled` | `disabled` | `boolean` | false   |
| `href`     | `href`     | `string`  | ""      |
| `rel`      | `rel`      | `string`  | ""      |
| `target`   | `target`   | `string`  | ""      |
| `type`     | `type`     | `string`  | ""      |
| `value`    | `value`    | `string`  | ""      |
| `variant`  | `variant`  | `string`  | ""      |

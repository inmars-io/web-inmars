# mars-grid

# <mars-grid>
Web component that allows us to show an accessible and beautiful grid so that users can see the content of the page.

## Installation
```bash
  npm i @web-inmars/mars-grid --save
```

## Usage
```html
<script type="module">
   import 'mars-grid/mars-grid.js';
</script>

<mars-grid>
     I'm a container for the items
</mars-grid>
```

## Properties

| Property         | Attribute         | Type      | Default |
|------------------|-------------------|-----------|---------|
| `alignContent`   | `align-content`   | `string`  | ""      |
| `alignItems`     | `align-items`     | `string`  | ""      |
| `containerSize`  | `container-size`  | `string`  | ""      |
| `gap`            | `gap`             | `string`  | ""      |
| `grid`           | `grid`            | `string`  | ""      |
| `gridAutoFlow`   | `grid-auto-flow`  | `string`  | ""      |
| `gridTemplate`   | `grid-template`   | `string`  | ""      |
| `inline`         | `inline`          | `boolean` | false   |
| `justifyContent` | `justify-content` | `string`  | ""      |
| `justifyItems`   | `justify-items`   | `string`  | ""      |
| `placeContent`   | `place-content`   | `string`  | ""      |
| `placeItems`     | `place-items`     | `string`  | ""      |

## Methods

| Method             | Type       |
|--------------------|------------|
| `createRenderRoot` | `(): this` |

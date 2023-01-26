# mars-range

# <mars-range>
Web component that allows us to show an accessible and beautiful range so that users can interact

## Installation
```bash
 npm i @web-inmars/range --save
```

## Usage
```html
<script type="module">
  import '@web-inmars/range/mars-range.js';
</script>

<mars-range>
    Click me!
</mars-range>
```

## Properties

| Property   | Attribute  | Type      | Default |
|------------|------------|-----------|---------|
| `disabled` | `disabled` | `boolean` | false   |
| `label`    | `label`    | `string`  | ""      |
| `max`      | `max`      | `string`  | "100"   |
| `min`      | `min`      | `string`  | "1"     |
| `step`     | `step`     | `string`  | ""      |
| `value`    | `value`    | `string`  | ""      |
| `variant`  | `variant`  | `string`  | ""      |

## Events

| Event         | Type                                             |
|---------------|--------------------------------------------------|
| `range-input` | `CustomEvent<{ event: Event & { target: HTMLInputElement; }; value: string; }>` |

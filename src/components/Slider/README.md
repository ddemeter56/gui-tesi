# Slider
---
A 3rd party slider component with one with from-to range option.

**See examples** at https://simeydotme.github.io/svelte-range-slider-pips/

### Attributes

See Attributes at https://npm.io/package/svelte-range-slider-pips

### Events

See Events at https://npm.io/package/svelte-range-slider-pips

## Features 

See Features at https://npm.io/package/svelte-range-slider-pips


## Example
```jsx
<script>
  import RangeSlider from 'svelte-range-slider-pips';
  export let min;
  export let max;
  export let values;
  export let range;
  export let pushy;
  export let float = true;
</script>

<style>

</style>

<RangeSlider min={min} max={max} {range} {pushy} {float} bind:values={values}/>

```
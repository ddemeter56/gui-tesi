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
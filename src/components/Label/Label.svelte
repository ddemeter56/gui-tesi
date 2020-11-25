<script>
  
  export let label = null;
  export let required;
</script>

<style>
  .required{
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    color:red;
    border-bottom: 1px solid red;
  }
</style>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class:required={required}>{required ? "*"+label: label}
  <slot></slot>
</label>
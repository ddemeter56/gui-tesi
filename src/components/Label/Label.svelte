<script>
  
  export let label = null;
  export let required;
</script>

<style>
  .label{
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: space-between;
  }
  .required{
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: space-between;
    color:red;
  }
  
</style>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="label" class:required={required}>{required ? "*"+label: label}
  <slot></slot>
</label>
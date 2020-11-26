<script>
  export let items;
  export let required = false;
  export let editable = true;
  export let selected = items[0].data;
</script>

<style>
  
</style>


<select bind:value={selected} disabled={!editable} {required}>
    {#each items as { value, label }}
    <option {value}>{label || value}</option>
  {/each}
</select>

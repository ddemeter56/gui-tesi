<script>
  export let items;
  export let required = false;
  export let editable = true;
  export let selected = items[0].data;
  export let icon = '';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher(); 

  
  function itemChanged() {
    console.log(`ITEM CHANGED ${selected}`)
    dispatch('itemChanged', { selected });
  }
</script>

<style>
  .dropdownContainer{
    display:flex;
    align-items: center;
    background-color: rgb(92,92,92);
  }
  img{
    width:25px;
    height:25px;
    padding-left:5px;
  }
</style>


<div class="dropdownContainer">
  {#if icon.length > 1}
    <img src={icon} alt="sort" />
  {/if}
  <!-- svelte-ignore a11y-no-onchange -->
  <select bind:value={selected} disabled={!editable} {required} on:change={itemChanged}>
      {#each items as { value, label }}
      <option {value}>{label || value}</option>
    {/each}
  </select>
</div>

<script>
  import { _ } from "svelte-i18n";
  import { createEventDispatcher } from 'svelte';

  export let showDelete = false;
  export let headers = [];
  export let data = [];

  const dispatch = createEventDispatcher();
  
  function fillTableData(price,header){
    if(header.value === 'categoryType'){
        return $_(`gymRegister.gymPricing.${price[header.value]}`)
    } else if (header.value === 'selectedFacility'){
        if(price[header.value] === 'generalPricing'){
          return $_(`gymRegister.gymPricing.${price[header.value]}`)
        }
    }
    return price[header.value]
  }

  function deleteFromPricing(price) {
		dispatch('deleteFromPricing', { price });
	}
</script>
<style>
.tableContainer {
        width: 100%;
        background-color: white;
    }
    th{
        margin-right:15px;
    }
    td {
        padding:8px;
    }
    .tableHeader{
        background-color: maroon;
        color:rgb(233, 233, 233);
        padding: 8px;
    }
    tr:nth-child(odd){
      background-color: rgb(236, 236, 236);
    }
    .rowData:hover {
      background-color: #ddd;
    }
    .closingMark{
      cursor: pointer;
    }
</style>


<table class="tableContainer">
  <tr>
    {#each headers as header}
      <th class="tableHeader">
        {header.label}
      </th>
    {/each}
  </tr>
  {#each data as price}
    <tr class="rowData">
      {#each headers as header}
        <td>{fillTableData(price,header)}</td>
      {/each}
      {#if showDelete}
        <span class="closingMark" on:click={deleteFromPricing(price)}>&#10060;</span>
      {/if}
    </tr>
  {/each}
</table>
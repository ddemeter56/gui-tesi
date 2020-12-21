<script>
  import Label from '../Label/Label.svelte';
  import Input from '../Input/Input.svelte';
  import Dropdown from '../DropdownSingle/DropdownSingle.svelte';

  export let selectedFacilities;
  export let pricingGeneralData;

  const tableHeaders = ['selectedFacility','categoryType','ticketType','amount','currency','validForDays'];
  $: console.log(selectedFacilities);

  let categories = [  {value : 'Daily' },
                      {value : 'Monthly' },
                      {value : 'Occasional' } ]; 

  let actPrice = {};

  function addToPricing(){
    pricingGeneralData = [...pricingGeneralData, actPrice];
    actPrice = {...actPrice};
  }

</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

<h1>ToDo lista szerűen új árakat hozzáadni a listához</h1>
<Label label="Facility">
  <select bind:value={actPrice.selectedFacility}>
    {#each selectedFacilities as { facility_name, customName }}
    <option value={facility_name ? facility_name : customName}>{facility_name || customName}</option>
  {/each}
  </select>
</Label>

<Label label="Category">
  <Dropdown items={categories} bind:selected={actPrice.categoryType} />
</Label>
<hr />
<Label label="Ticket type">
  <Input type='C' bind:value={actPrice.ticketType} />
</Label>
<hr />
<Label label="Amount">
  <Input type="N" bind:value={actPrice.amount}/>  
</Label>
<hr />
<Label label="Currency">
  <Input type='C' bind:value={actPrice.currency} />
</Label>
<hr />
<Label label="Valid for days">
  <Input type="N" bind:value={actPrice.validForDays} />
</Label>

<button on:click={addToPricing} >Add to list </button>

<hr />
<table>
  <tr>
    {#each tableHeaders as header}
      <th>
        {header}
      </th>
    {/each}
  </tr>
  
    {#each pricingGeneralData as price}
      <tr>
        {#each tableHeaders as header}
          <td>{price[header]}</td>
        {/each}
      </tr>
    {/each}
  
</table>
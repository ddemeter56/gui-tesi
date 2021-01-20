<script>
  import { _ } from "svelte-i18n";
  import Label from "../Label/Label.svelte";
  import Input from "../Input/Input.svelte";
  import Dropdown from "../DropdownSingle/DropdownSingle.svelte";

  export let selectedCertifications;
  export let pricingGeneralData;

  $: tableHeaders = [
    {
      value: "selectedFacility",
      label: $_("gymRegister.gymPricing.selectedFacility"),
    },
    { value: "categoryType", label: $_("gymRegister.gymPricing.categoryType") },
    { value: "ticketType", label: $_("gymRegister.gymPricing.ticketType") },
    { value: "amount", label: $_("gymRegister.gymPricing.amount") },
    { value: "currency", label: $_("gymRegister.gymPricing.currency") },
    { value: "validForDays", label: $_("gymRegister.gymPricing.validForDays") },
  ];

  $: categories = [
    { value: "daily", label: $_("gymRegister.gymPricing.daily") },
    { value: "monthly", label: $_("gymRegister.gymPricing.monthly") },
    { value: "occasional", label: $_("gymRegister.gymPricing.occasional") },
  ];

  let actPrice = {};
  function addToPricing(){
    pricingGeneralData = [...pricingGeneralData, actPrice];
    actPrice = {...actPrice};
  }

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
  
  function deleteFromPricing(el){
    console.log(el)
    let indexOfEl = pricingGeneralData.indexOf(el);
    pricingGeneralData.splice(indexOfEl,1);
    pricingGeneralData = pricingGeneralData;
  }
</script>

<style>
  .tableContainer {
    padding: 5px;
    background-color: rgb(247, 247, 247);
    border: 1px solid rgb(224, 224, 224);
    width: 700px;
  }
  th {
    margin-right: 15px;
  }
  td {
    border: 1px solid #aaa;
  }
  tr:first-child {
    background-color: rgb(162, 218, 255);
  }
  tr:nth-child(even) {
    background-color: #c7efff;
  }

  .closingMark {
    cursor: pointer;
  }
</style>

<Label label="Selected certification">
  <select bind:value={actPrice.selectedFacility}>
    <option value={"generalPricing"}
      >{$_("gymRegister.gymPricing.generalPricing")}</option
    >
    {#each selectedCertifications as { name, customCertification }}
      <option value={name ? name : customCertification}
        >{name || customCertification}</option
      >
    {/each}
  </select>
</Label>

<Label label={$_("gymRegister.gymPricing.categoryType")}>
  <Dropdown items={categories} bind:selected={actPrice.categoryType} />
</Label>
<hr />
<Label label={$_("gymRegister.gymPricing.ticketType")}>
  <Input type="C" bind:value={actPrice.ticketType} />
</Label>
<hr />
<Label label={$_("gymRegister.gymPricing.amount")}>
  <Input type="N" bind:value={actPrice.amount} />
</Label>
<hr />
<Label label={$_("gymRegister.gymPricing.currency")}>
  <Input type="C" bind:value={actPrice.currency} />
</Label>
<hr />
<Label label={$_("gymRegister.gymPricing.validForDays")}>
  <Input type="N" bind:value={actPrice.validForDays} />
</Label>



<button on:click={addToPricing} >{$_('gymRegister.gymPricing.addToList')}</button>

<hr />
<table class="tableContainer">
  <tr>
    {#each tableHeaders as header}
      <th>
        {header.label}
      </th>
    {/each}
  </tr>
  {#each pricingGeneralData as price}
    <tr>
      {#each tableHeaders as header}
        <td>{fillTableData(price, header)}</td>
      {/each}
      <span class="closingMark" on:click={deleteFromPricing(price)}
        >&#10062;</span
      >
    </tr>
  {/each}
</table>

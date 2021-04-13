<script>
  import { _ } from "svelte-i18n";
  import Label from "../Label/Label.svelte";
  import Input from "../Input/Input.svelte";
  import Dropdown from "../DropdownSingle/DropdownSingle.svelte";
  import PriceTable from "../PriceTable/PriceTable.svelte";


  export let selectedSpecializations;
  export let pricingGeneralData;

  $: tableHeaders = [
    { value: "selectedSpecialization", label: $_('ptRegister.ptPricingStep.selectedSpecs') },
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
  
  function deleteFromPricing(el){
    console.log(el)
    let indexOfEl = pricingGeneralData.indexOf(el);
    pricingGeneralData.splice(indexOfEl,1);
    pricingGeneralData = pricingGeneralData;
  }
</script>

<style>
</style>

<Label label={$_('ptRegister.ptPricingStep.selectedSpecs')}>
  <select bind:value={actPrice.selectedSpecialization}>
    <option value={'generalPricing'}>{$_('gymRegister.gymPricing.generalPricing')}</option>
    {#each selectedSpecializations as { name, customName }}
      <option value={name ? name : customName}>
        {name || customName }
      </option>
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

<PriceTable headers={tableHeaders} data={pricingGeneralData} showDelete on:deleteFromPricing={deleteFromPricing} />

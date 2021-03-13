<script>
  import { _ } from "svelte-i18n";
  import Label from '../Label/Label.svelte';
  import Input from '../Input/Input.svelte';
  import Dropdown from '../DropdownSingle/DropdownSingle.svelte';
  import PriceTable from '../PriceTable/PriceTable.svelte';

  export let selectedFacilities;
  export let pricingGeneralData;

  $: tableHeaders = [{value: 'categoryType', label: $_('gymRegister.gymPricing.categoryType')},{value: 'ticketType', label: $_('gymRegister.gymPricing.ticketType')},{value : 'amount', label :$_('gymRegister.gymPricing.amount')},{value: 'validForDays', label: $_('gymRegister.gymPricing.validForDays')}, {value: 'currency', label: $_('gymRegister.gymPricing.currency')}];
  $: console.log(selectedFacilities);

  $: categories = [  {value : 'daily', label: $_('gymRegister.gymPricing.daily') },
                      {value : 'monthly', label: $_('gymRegister.gymPricing.monthly') },
                      {value : 'occasional', label: $_('gymRegister.gymPricing.occasional') } ]; 

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
  
  function deleteFromPricing(event){
    console.log(event.detail.price)
    let indexOfEl = pricingGeneralData.indexOf(event.detail.price);
    pricingGeneralData.splice(indexOfEl,1);
    pricingGeneralData = pricingGeneralData;
  }
</script>

<style>
</style>

<Label label={$_('gymRegister.gymPricing.selectedFacility')}>
  <select bind:value={actPrice.selectedFacility}>
    <option value={'generalPricing'}>{$_('gymRegister.gymPricing.generalPricing')}</option>
    {#each selectedFacilities as { name, customName }}
      <option value={name ? name : customName}>{name || customName}</option>
    {/each}
  </select>
</Label>

<Label label={$_('gymRegister.gymPricing.categoryType')}>
  <Dropdown items={categories} bind:selected={actPrice.categoryType} />
</Label>
<hr />
<Label label={$_('gymRegister.gymPricing.ticketType')}>
  <Input type='C' bind:value={actPrice.ticketType} />
</Label>
<hr />
<Label label={$_('gymRegister.gymPricing.amount')}>
  <Input type="N" bind:value={actPrice.amount}/>  
</Label>
<hr />
<Label label={$_('gymRegister.gymPricing.currency')}>
  <Input type='C' bind:value={actPrice.currency} />
</Label>
<hr />
<Label label={$_('gymRegister.gymPricing.validForDays')}>
  <Input type="N" bind:value={actPrice.validForDays} />
</Label>

<button on:click={addToPricing} >{$_('gymRegister.gymPricing.addToList')}</button>

<hr />

<PriceTable headers={tableHeaders} data={pricingGeneralData} showDelete on:deleteFromPricing={deleteFromPricing}/>
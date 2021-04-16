<script>
  import { _ } from "svelte-i18n";
  import Dropdown from '../DropdownSingle/DropdownSingle.svelte';  
  import PriceTable from '../PriceTable/PriceTable.svelte';


  export let generalPrice = {};
  export let facilityPrices = [];
  export let facilityNames = [];

  let dropDownItems = [ ...facilityNames, {value: 'generalPrice', label:'General Pricing'} ]; 
  let selectedItem = 'generalPrice';

  let prices = [...facilityPrices, generalPrice];
  
  $: tableHeaders = [{value: 'categoryType', label: $_('gymRegister.gymPricing.categoryType')},{value: 'ticketType', label: $_('gymRegister.gymPricing.ticketType')},{value : 'amount', label :$_('gymRegister.gymPricing.amount')},{value: 'validForDays', label: $_('gymRegister.gymPricing.validForDays')}, {value: 'currency', label: $_('gymRegister.gymPricing.currency')}];

  $: selectedPrices = prices.filter((price) => {
    if(price.code === selectedItem) {
      return price;
    }
  })
  $: console.log(selectedPrices);

</script>

<style>
</style>

<div class="gymPricingContaienr">
  <Dropdown items={dropDownItems} bind:selected={selectedItem} />
  {#each prices as price}
    {#if price.code === selectedItem}
    <PriceTable headers={tableHeaders} data={selectedPrices[0].prices} />
    {/if}
  {/each}
</div>
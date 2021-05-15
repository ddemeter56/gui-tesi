<script>
  import { _ } from "svelte-i18n";
  import Dropdown from '../DropdownSingle/DropdownSingle.svelte';  

  export let generalOpening = {};
  export let facilityOpenings = [];
  export let facilityNames = [];

  $: console.log(facilityNames);
  $: console.log(facilityOpenings);

  let openings = [...facilityOpenings.filter((fac) => {if(fac.openings.length > 0){return fac}}), generalOpening];

  
  $: console.log(dropDownItems);
  $: console.log(openings);

  let dropDownItems = [...facilityNames.map((fac) => ({value: fac.facilityCode.code, label: fac.customName === '' ? fac.facilityCode.name : fac.customName})), { value: 'generalOpening', label: 'General Opening'}];
  let selectedItem = 'generalOpening';



  function fillOpenTimes(dayFrom, dayTo){
    if( dayFrom || dayTo ) {
      return `${dayFrom} - ${dayTo}`
    } else {
      return 'Closed';
    }
  }
  

  $: selectedOpening = openings.filter((opening) => {
    if(opening.code === selectedItem) {
      return opening.openings;
    }
  })

  $: console.log(selectedOpening);
  //ToDo  1. lekezelni minden napok
  //      2. lekezelni a null-opkat -> zarva
  function fillOpeningHours(row) {
    console.log(selectedOpening[0].openings[0]);
    switch (row.value) {
      case 'monday':
        return fillOpenTimes(selectedOpening[0].openings[0].mondayFrom, selectedOpening[0].openings[0].mondayTo);
      case 'tuesday':
        return fillOpenTimes(selectedOpening[0].openings[0].tuesdayFrom, selectedOpening[0].openings[0].tuesdayTo);
      case 'wednesday':
        return fillOpenTimes(selectedOpening[0].openings[0].wednesdayFrom, selectedOpening[0].openings[0].wednesdayTo);
      case 'thursday':
        return fillOpenTimes(selectedOpening[0].openings[0].thursdayFrom, selectedOpening[0].openings[0].thursdayTo);
      case 'friday':
        return fillOpenTimes(selectedOpening[0].openings[0].fridayFrom, selectedOpening[0].openings[0].fridayTo); 
      case 'saturday':
        return fillOpenTimes(selectedOpening[0].openings[0].saturdayFrom, selectedOpening[0].openings[0].saturdayTo); 
      case 'sunday':
        return fillOpenTimes(selectedOpening[0].openings[0].sundayFrom, selectedOpening[0].openings[0].sundayTo);        
      default:
        return 'fejezz be pls'
    }
  }
  $: headers = [
    { value: 'monday', label: $_('gymRegister.gymOpeningStep.mondayFrom')},
    { value: 'tuesday', label: $_('gymRegister.gymOpeningStep.tuesdayFrom')},
    { value: 'wednesday', label: $_('gymRegister.gymOpeningStep.wednesdayFrom')},
    { value: 'thursday', label: $_('gymRegister.gymOpeningStep.thursdayFrom')},
    { value: 'friday', label: $_('gymRegister.gymOpeningStep.fridayFrom')},
    { value: 'saturday', label: $_('gymRegister.gymOpeningStep.saturdayFrom')},
    { value: 'sunday', label: $_('gymRegister.gymOpeningStep.sundayFrom')},
  ]



</script>

<style>
  .gym-opening-container{
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
  }
  .gym-opening-day{
    display:inline-block;
    color: #333;
    font-size: 1.2rem;
    font-weight: 500;
  }
  .gym-opening-hours{
    font-weight: 500;
    display:inline-block;
    color: maroon;  
  }
</style>

<Dropdown items={dropDownItems} bind:selected={selectedItem} />

{#each openings as opening}
  {#if opening.code === selectedItem}
      {#each headers as header}
      <div class="gym-opening-container">
        <div class="gym-opening-day">
          {header.label}  
        </div>
        <div class="gym-opening-hours">
          {fillOpeningHours(header)}
        </div>
      </div>
      {/each}
  {/if}
{/each}
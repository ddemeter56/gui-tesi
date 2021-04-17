<script>
  import { _ } from "svelte-i18n";
  import Dropdown from '../DropdownSingle/DropdownSingle.svelte';  

  export let generalOpening = {};
  export let facilityOpenings = [];
  export let facilityNames = [];

  $: console.log(facilityNames);
  let dropDownItems = [...facilityNames, { value: 'generalOpening', label: 'General Opening'}];
  let selectedItem = 'generalOpening';

  let openings = [...facilityOpenings, generalOpening];


  function fillOpenTimes(dayFrom, dayTo){
    if( dayFrom || dayTo ) {
      return `${dayFrom} - ${dayTo}`;
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


  $: console.log(dropDownItems);
  $: console.log(openings);

</script>

<style>
  .tableContainer {
      padding:5px;
  }
  th{
      margin-right:15px;
      padding: 5px;
  }
  td {
      border: 1px solid #aaa;
  }
  tr:first-child{
      background-color: maroon;
      color: white;
  }
  tr {
      background-color: rgb(92, 92, 92);
      color: white;
  }
  .tdInputStyle{
      display: inline;
      padding: 0;
  }
</style>

<Dropdown items={dropDownItems} bind:selected={selectedItem} />

{#each openings as opening}
  {#if opening.code === selectedItem}
      {#each headers as header}
        {header.label}
        {fillOpeningHours(header)}
        <br />
      {/each}
  {/if}
{/each}
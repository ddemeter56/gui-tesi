<script>
  import Label from '../Label/Label.svelte';
  import Input from '../Input/Input.svelte';
  import { gymCodes } from '../../stores/gymCodes.js';
	import { createEventDispatcher } from 'svelte';
  import { gymSearchResult, createQuery } from '../../stores/gymSearchResult.js';

	const dispatch = createEventDispatcher();

  let facilityList = gymCodes.getFacilityCodes();
  let gymSearchParams = {};
  let facilitiesCodes = [];


  function searchedPressed() {
    facilitiesCodes = facilitiesCodes.map((item) => (item.code));
    gymSearchParams = {...gymSearchParams, facilityCodes: facilitiesCodes.join(',')};

    gymSearchResult.searchGyms(createQuery(gymSearchParams));
		dispatch('searchPressed', { pressed: true });
	}

  function onEnterPress(e) {
    console.log(e)
    if(e.keyCode === 13) {
      searchedPressed();
    }
  }
</script>
<style>
  @media only screen and (min-width: 768px) {
    .searchHolder { 
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }

  .searchHolder{
    background-color: #333;
  }
</style>
<svelte:window on:keydown={onEnterPress}/>
<div class="searchHolder scrollable">
  <Label label='Ország'>
    <Input type="C" length=40 bind:value={gymSearchParams.country} />
  </Label>
  <Label label='Város'>
    <Input type="C" length=40 bind:value={gymSearchParams.city} />
  </Label>
  <Label label='Ár tól-ig'>
    <Input type="N" bind:value={gymSearchParams.minPrice} />
    <Input type="N" bind:value={gymSearchParams.maxPrice}/>
  </Label>
  <Label label='Nyitvatartás'>
    <Input type="T" bind:value={gymSearchParams.openBefore}/>
    <Input type="T" bind:value={gymSearchParams.openAfter}/>
  </Label>
  <Label label='Létesítmények'>
    {#await facilityList then facilityList}
      <select class="allFacilityList" multiple bind:value={facilitiesCodes}>
          {#each facilityList.facilities as fac}
              <option value={fac}>{fac.name}</option>
          {/each}
      </select>
    {/await}
  </Label>
  <button style="float:right; margin-right:15px; margin-bottom:15px;" on:click={searchedPressed}>Keresés</button>
</div>
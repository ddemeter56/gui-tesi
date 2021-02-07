<script>
  import Label from '../Label/Label.svelte';
  import Input from '../Input/Input.svelte';
  import { gymCodes } from '../../stores/gymCodes.js';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  let facilityList = gymCodes.getFacilityCodes();

  function searchedPressed() {
		dispatch('searchPressed', { pressed: true });
	}
</script>
<style>
  .searchHolder{
    background-color: #333;
    border-radius: 8px;
  }
</style>

<div class="searchHolder scrollable">
  <Label label='Ország'>
    <Input type="C" length=40 />
  </Label>
  <Label label='Város'>
    <Input type="C" length=40 />
  </Label>
  <Label label='Ár tól-ig'>
    <Input type="N" />
    <Input type="N" />
  </Label>
  <Label label='Létesítmények'>
    {#await facilityList then facilityList}
    <select class="allFacilityList" multiple >
        {#each facilityList.facilities as fac}
            <option value={fac}>{fac.name}</option>
        {/each}
    </select>
    {/await}
  </Label>
  <button style="float:right; margin-right:15px; margin-bottom:15px;" on:click={searchedPressed}>Keresés</button>
</div>
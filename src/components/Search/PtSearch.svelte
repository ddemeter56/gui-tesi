<script>
  import Label from '../Label/Label.svelte';
  import Input from '../Input/Input.svelte';
  import { ptCodes } from '../../stores/ptCodes.js';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  let langsArray = ptCodes.getLangCodes();

  let specsArray = ptCodes.getSpecs();


  let ptSearchParams = {
    specializations: [],
    languageCodes: []
  };
  let facilitiesCodes = [];

  function searchedPressed() {
    ptSearchParams = {...ptSearchParams, facilityCodes: facilitiesCodes.join(',')};

		dispatch('searchPressed', { pressed: true, type: 'pt' });
	}

  function onEnterPress(e) {
    console.log(e)
    if(e.keyCode === 13) {
      searchedPressed();
    }
  }

  $: console.log(langsArray);
  $: console.log(specsArray);
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
    <Input type="C" length=40 bind:value={ptSearchParams.country} />
  </Label>
  <Label label='Város'>
    <Input type="C" length=40 bind:value={ptSearchParams.city} />
  </Label>
  <Label label='Ár tól-ig'>
    <Input type="N" bind:value={ptSearchParams.minPrice} />
    <Input type="N" bind:value={ptSearchParams.maxPrice}/>
  </Label>
  <Label label='Specializálódás'>
    {#await specsArray then specs}
      <select style="height:100px" multiple bind:value={ptSearchParams.specializations}>
          {#each specs.specializations as spec}
              <option value={spec}>{spec.name}</option>
          {/each}
      </select>
    {/await}
  </Label>
  <Label label='Beszélt nyelvek'>
    {#await langsArray then langs}
      <select style="height: 70px" multiple bind:value={ptSearchParams.languageCodes}>
          {#each langs.languages as lang}
              <option value={lang.code}>{lang.name}</option>
          {/each}
      </select>
    {/await}
  </Label>
  <button style="float:right; margin-right:15px; margin-bottom:15px;" on:click={searchedPressed}>Keresés</button>
</div>
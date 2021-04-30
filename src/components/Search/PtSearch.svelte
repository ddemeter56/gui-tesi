<script>
  import Label from '../Label/Label.svelte';
  import Input from '../Input/Input.svelte';
  import { ptCodes } from '../../stores/ptCodes.js';
	import { createEventDispatcher } from 'svelte';
  import { gymSearchResult, createQuery } from '../../stores/gymSearchResult.js';

	const dispatch = createEventDispatcher();
  
  if(!$ptCodes.langCodes) {
    ptCodes.getLangCodes();
  };

  if(!$ptCodes.specs) {
    ptCodes.getSpecs();
  };


  let ptSearchParams = {};
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
    {#if $ptCodes.specs}
      <select style="height:150px" multiple bind:value={ptSearchParams.specializations}>
        {#each $ptCodes.specs as spec}
            <option value={spec}>{spec.name}</option>
        {/each}
      </select>
    {/if}
  </Label>
  <Label label='Beszélt nyelvek'>
    {#if $ptCodes.langCodes}
      <select multiple bind:value={ptSearchParams.languageCodes}>
        {#each $ptCodes.langCodes as lang}
            <option value={lang.code}>{lang.name}</option>
        {/each}
      </select>
    {/if}
  </Label>
  <button style="float:right; margin-right:15px; margin-bottom:15px;" on:click={searchedPressed}>Keresés</button>
</div>
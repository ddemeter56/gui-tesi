<script>
  import { _ } from "svelte-i18n";
  import Label from "../Label/Label.svelte";
  import Input from "../Input/Input.svelte";
  import Dropdown from '../DropdownSingle/DropdownSingle.svelte';

  export let certies;
  export let selectedCerties;

  let groups;
  let selectedGroup;
  let actCerti;
  let customCerti;
  let customVisible = false;
  $: groups = certies.groups.map((i, index) => ({"label": i.group, "index": index, "value": i.certifications}));

  // Duplikátumokat is hozzá lehet adni
  function addToSelectedCerties(){
    selectedCerties = [...selectedCerties, actCerti]
  }

  function addCustom(){
    selectedCerties = [...selectedCerties, {"customCertification" : customCerti}]
  }
</script>
<style>

</style>

<Label required label={$_('ptRegister.ptCertiStep.categories')}>
  <Dropdown items={groups} bind:selected={selectedGroup} />
</Label>

{#if selectedGroup}
  <Label required label={$_('ptRegister.ptCertiStep.categoryCerties')}>
    <select bind:value={actCerti}>
      {#each selectedGroup as certi}
          <option value={certi}>{certi.name === 'rekreációs mozgásprogram-vezető' ? certi.additional : certi.name}</option>
      {/each}
    </select>
  </Label>
  <button on:click={addToSelectedCerties}>{$_('ptRegister.ptCertiStep.addCerti')}</button>
  <button on:click={() => customVisible = !customVisible}> {customVisible ? $_('ptRegister.ptCertiStep.hideCustom') : $_('ptRegister.ptCertiStep.showCustom')} </button>
{/if}

{#if customVisible}
  <hr />
  <Input type="C" length={100} bind:value={customCerti} />
  <button on:click={addCustom}>{$_('ptRegister.ptCertiStep.addCustom')}</button>
{/if}

<hr />
{#if selectedCerties.length > 0}
  {#each selectedCerties as selectedCerti}
    <Label label={`${$_('gymRegister.gymFacilityStep.descFor')} ${selectedCerti.name || selectedCerti.customCertification}`}>
      <Input type='C' length={100} bind:value={selectedCerti.description}/>
    </Label>
    <hr />
  {/each}
{/if}
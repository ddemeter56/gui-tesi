<script>
  import { _ } from "svelte-i18n";
  import Label from "../Label/Label.svelte";
  import Input from "../Input/Input.svelte";

  export let specs;
  export let selectedSpecs;

  let showSpecOther = false;
  let customName;

  function addCustomSpec() {
    selectedSpecs = [...selectedSpecs, {code : null, customName}]
    }
</script>

<style>

</style>

<Label required label={'Specialities'}>
  <select style="height:50vh" multiple bind:value={selectedSpecs}>
    {#each specs.specializations as spec}
        <option value={spec}>{spec.name}</option>
    {/each}
  </select>
</Label>



{#each selectedSpecs as selectedSpec}
  <Label label={`Description for ${selectedSpec.name || selectedSpec.customName}`}>
    <Input type='C' length={100} bind:value={selectedSpec.description}/>
  </Label>
  <hr/>
{/each}

<hr/>
<button on:click={() => {showSpecOther = !showSpecOther}}>{'Add custom'}</button>

{#if showSpecOther}
    <Input type='C' length={50} bind:value={customName} /> 
    <button on:click={addCustomSpec}>{'Add'}</button>
{/if}
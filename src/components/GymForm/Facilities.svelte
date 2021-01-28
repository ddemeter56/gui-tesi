<script>
    import { _ } from "svelte-i18n";
    import Label from "../Label/Label.svelte";
    import Input from "../Input/Input.svelte";
    import Text from '../Text/Text.svelte';
    
    export let facilityGeneralData;
    export let gymFacilityCols;

    $: console.log(gymFacilityCols);

    let facNameOptions = gymFacilityCols;  
    let showFacilityOther = false;

    let customName;
    function addCustomFacility() {
        facilityGeneralData = [...facilityGeneralData, {facility_cd : 1, customName}]
    }
</script>

<style>
    .allFacilityList{
        height:550px;
    }
</style>

<Label label={$_('gymRegister.gymFacilityStep.facilityList')}>
    <select class="allFacilityList" multiple bind:value={facilityGeneralData}>
        {#each facNameOptions.facilities as fac}
            <option value={fac}>{fac.name}</option>
        {/each}
    </select>
</Label>

<hr/>

{#each facilityGeneralData as fac}
    <Label label={`${$_('gymRegister.gymFacilityStep.descFor')} ${fac.name || fac.customName}`}>
        <Input type='C' length={100} bind:value={fac.description}/>
    </Label>
    <hr/>
{/each}

<Text>
    {$_('gymRegister.gymFacilityStep.customFacilityDesc')}
</Text>

<hr />

<button on:click={() => {showFacilityOther = !showFacilityOther}}>{$_('gymRegister.gymFacilityStep.customFacilityButton')}</button>

{#if showFacilityOther}
    <Label label={$_('gymRegister.gymFacilityStep.facilityName')}>
        <Input type='C' length={50} bind:value={customName} /> 
    </Label>
    <button on:click={addCustomFacility}>{$_('gymRegister.gymFacilityStep.addCustomFacilityButton')}</button>
{/if}
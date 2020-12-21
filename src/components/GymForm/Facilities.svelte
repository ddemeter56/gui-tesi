<script>
    import Label from "../Label/Label.svelte";
    import Input from "../Input/Input.svelte";

    
    export let facilityGeneralData;
    export let gymFacilityCols;


    let facNameOptions = gymFacilityCols[0].facilities;  
    let showFacilityOther = false;

    let customName;
    function addCustomFacility() {
        facilityGeneralData = [...facilityGeneralData, {facility_cd : null, customName}]
    }
</script>

<style>
</style>

{#each gymFacilityCols as item}
    
        {#if item.value === 'facilityName'}
            <Label required={item.required} label={item.name}>
                <select multiple bind:value={facilityGeneralData}>
                    {#each facNameOptions as fac}
                        <option value={fac}>{fac.facility_name}</option>
                    {/each}
                </select>
            </Label>
        {/if}
{/each}

<hr/>
{#each facilityGeneralData as fac}
    <Label label={`Description for ${fac.facility_name || fac.customName}`}>
        <Input type='C' length={100} bind:value={fac.description}/>
    </Label>
    <hr/>
{/each}

After you selected your facilities you can add custom ones in case you havent found some
<hr />
<button on:click={() => {showFacilityOther = !showFacilityOther}}>Add more facility</button>
{#if showFacilityOther}
<Input type='C' length={50} bind:value={customName} /> 
<button on:click={addCustomFacility}>Add new facility</button>
{/if}
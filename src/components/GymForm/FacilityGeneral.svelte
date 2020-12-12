<script>
    import Label from "../Label/Label.svelte";
    import Input from "../Input/Input.svelte";
    import { facilityInfos } from "./gymDatas.js";

    const facInfo = facilityInfos.facilityForm;

    const facilityInfo = facilityInfos.facilityForm;

    export let facilityGeneralData;

    let facNameOptions = facInfo[0].facilities;
    console.log(facNameOptions);
    $: console.log(facInfo[1].value);
</script>

<style>
</style>

{#each facInfo as item}
    {#if item.inputType === 'Input'}
        <Label required={item.required} label={item.name}>
            <Input
                type={item.type}
                required={item.required}
                bind:value={facilityGeneralData[item.value]}
                length={item.maxLength} />
        </Label>
    {:else if item.inputType === 'DropDown'}
        {#if item.value === 'facilityName'}
            <Label required={item.required} label={item.name}>
                <select multiple bind:value={facilityGeneralData}>
                    {#each facNameOptions as fac}
                        <option value={fac}>{fac.name}</option>
                    {/each}
                </select>
            </Label>
        {/if}
    {/if}
{/each}

<hr/>
{#each facilityGeneralData as fac}
    {fac.name} 
    <Label label={fac.name + 'Description'}>
        <Input type='C' length={100} bind:value={fac.desc}/>
    </Label>
    <hr/>
{/each}
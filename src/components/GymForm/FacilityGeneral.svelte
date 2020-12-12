<script>
    import Label from "../Label/Label.svelte";
    import Input from "../Input/Input.svelte";
    import {facilityInfos} from './gymDatas.js'


    const facInfo=facilityInfos.facilityForm;
    const facilityInfo=facilityInfos.facilityForm;
    export let facilityGeneralData,mainFacility="gym";

    $:console.log(facInfo[1].value)

</script>

{#each facInfo as item}
  {#if item.inputType==="Input"}
    <Label required={item.required} label={item.name}>
      <Input 
        type={item.type}  
        required={item.required} 
        bind:value={facilityGeneralData[item.value]} 
        length={item.maxLength} />
    </Label>
  {:else if item.inputType==="DropDown"}
    {#if item.value==="facilityName"}
        <Label required={item.required} label={item.name}>
            <select multiple bind:value={facilityGeneralData[item.value]}>
                {#each facInfo[0].facilities as fac}
                    <option value={fac}>
                        {fac}
                    </option>
                {/each}
            </select>
        </Label>
    {:else if item.value==="mainFacility"}
        <Label required={item.required} label={item.name}>
            <select bind:value={facilityGeneralData.mainFacility}>
                <!-- Itt kéne az, hogy csaka zokat hozza elő amiket kiválaztottunk facilitiket -->
                {#each facilityGeneralData as fac}
                    <option value={""}>
                        {fac.facilityName}
                    </option>
                {/each}
            </select>
        </Label>    
    {/if}
    
  {/if}
{/each}

<style></style>
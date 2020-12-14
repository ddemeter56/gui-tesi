<script>
    import Label from "../Label/Label.svelte";
    import Input from "../Input/Input.svelte";
    import {openingInfos} from './gymDatas';

    export let openingHoursGeneralData;
    export let facilities;
      

    const openingInfo=openingInfos.openingHoursForm;
    const defaultInfo=[];
    let buttonStatus="Yes";

    //Getting the default stuff out of the js, so we could use the each iteration
    for(let i=0;i<2;i++){
        defaultInfo[i]=openingInfo[i];
    }         

    let isJustDefault=false;
    $:console.log("Checking fac",facilities,isJustDefault,openingInfo[0]);

    function buttonOnChange(){
        isJustDefault=!isJustDefault; 
        buttonStatus=buttonStatus==="Yes"?"No":"Yes";
    };

</script>

<!-- Default Opening/closing Hour display+binding -->

{#each openingInfo as item}
        {#if item.value==="defaultFrom" || item.value==="defaultTo"}
            <Label required={item.required} label={item.name}>
                <Input
                    type={item.type}
                    required={item.required}
                    bind:value={openingHoursGeneralData[item.value]}
                />
            </Label>
        {/if}
    {/each} 
<br/>


<h2>Would you like to give opening/closing hours to your different facilities?</h2>
<button on:click={buttonOnChange}>{buttonStatus}</button>
{#if isJustDefault}
        <!-- We need somethin like 'multipl select' to give the user
        the chance to set the opening/closing hours to their differenct facilities -->
    {#each openingInfo as item}
        {#if item.value!=="defaultFrom" || item.value!=="defaultTo"}
            <Label required={item.required} label={item.name}>
                <Input
                    type={item.type}
                    required={item.required}
                    bind:value={openingHoursGeneralData[item.value]}
                />
            </Label>
        {/if}
    {/each}
{/if}


<style>
</style>

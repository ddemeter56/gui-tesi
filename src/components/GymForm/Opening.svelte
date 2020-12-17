<script>
    import Label from "../Label/Label.svelte";
    import Input from "../Input/Input.svelte";
    import Tag from "../Tag/Tag.svelte";
import Facilities from "./Facilities.svelte";
    export let openingGeneralData;
    export let facilities;
    export let openingInfos;


    let defaultOpening;
    let defaultClosing;

    function deleteFromOpening(){
        if(openingGeneralData.length > 1) {
            openingGeneralData.splice(openingGeneralData.indexOf(openingGeneralData.length -1), 1)
            openingGeneralData = openingGeneralData;
        }
        
    }
    function addSelectedFacilties(){
        console.log(facilities);
        if(facilities.length >= 1) {
            facilities.map(fac => {openingGeneralData = [...openingGeneralData, {facilityName : fac.facility_name ? fac.facility_name : fac.facility_other }]});
        }
            
    }
    function addFacility(fac){
        let filter = openingGeneralData.filter(open => open.facilityName === fac.facility_name || open.facilityName === fac.facility_other )
        if(filter.length === 0){
            openingGeneralData = [...openingGeneralData, {facilityName : fac.facility_name ? fac.facility_name : fac.facility_other }];
        }
    }
    function fillTimes(){

    }
    function markClosed(){

    }
    $: console.log(openingGeneralData);
</script>

<style>
    .tableContainer {
        width: 80vw;
        overflow: auto;
    }

    td {
        border: 1px solid #aaa;
    }
    tr:first-child{
        background-color: rgb(162, 218, 255);
        
    }
    tr:nth-child(even){
        background-color: #c7efff;
    }
    .tdInputStyle{
        display: inline;
        padding: 0;
    }
    .markClosed{
        cursor: pointer;
    }
</style>

<div class="tableContainer">
    <table>
        {#each openingInfos.openingHoursForm as c, i}
            <tr>
                <th>{c.name}</th>
                {#each openingGeneralData as row}
                    <td>
                        <div class="tdInputStyle">
                            <Input type={'C'} editable={c.value !== 'facilityName'} length={c.maxLength} bind:value={row[c.value]} />
                            {#if c.value !== 'facilityName'}
                            <span class="markClosed" on:click={markClosed}>&#10006;</span>
                            {/if}
                        </div>
                    </td>
                {/each}
            </tr>
        {/each}
    </table>
</div>

<button on:click={addSelectedFacilties}>Add selected facilites</button>

{#if openingGeneralData.length !== 1}
    <button on:click={deleteFromOpening}>Delete last added</button>
{/if}
<hr />


<ul>
    {#each facilities as fac}
        <li>
            {fac.facility_name || fac.facility_other}
        </li>
        <button on:click={addFacility(fac)}>
            Add
        </button>
        <button>
            Delete
        </button>
    {/each}
</ul>


<button on:click={fillTimes}>Align first time for every day</button>
<Input type={"T"} bind:value={defaultOpening}> default opening </Input>

<Input type={"T"} bind:value={defaultClosing}> default closing </Input>
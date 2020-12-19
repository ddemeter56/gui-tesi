<script>
    import Label from "../Label/Label.svelte";
    import Input from "../Input/Input.svelte";
    export let openingGeneralData;
    export let facilities;
    export let openingInfos;
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    openingGeneralData = openingGeneralData.length === 0 ? [{facilityName: 'Általános nyitvatartás',fridayFrom: "",
                                                                fridayTo: "",
                                                                mondayFrom: "",
                                                                mondayTo: "",
                                                                saturdayFrom: "",
                                                                saturdayTo: "",
                                                                sundayFrom: "",
                                                                sundayTo: "",
                                                                thursdayFrom: "",
                                                                thursdayTo: "",
                                                                tuesdayFrom: "",
                                                                tuesdayTo: "",
                                                                wednesdayFrom: "",
                                                                wednesdayTo: '' }] : [...openingGeneralData];
    let defaultOpening = "08:00";
    let defaultClosing = "22:00";


    function deleteFacility(fac){
        openingGeneralData = openingGeneralData.filter(open => open.facilityName !== fac.facility_name);
    }
    function addFacility(fac){
        let filter = openingGeneralData.filter(open => open.facilityName === fac.facility_name || open.facilityName === fac.facility_other )
        if(filter.length === 0){
            openingGeneralData = [...openingGeneralData, {facilityName : fac.facility_name ? fac.facility_name : fac.facility_other, mondayFrom: "", mondayTo: "", tuesdayFrom: "", tuesdayTo: "", wednesdayFrom:"" , wednesdayTo:"", thursdayFrom: "", thursdayTo: "", fridayFrom: "", fridayTo: "", saturdayFrom: "", saturdayTo: "", sundayFrom: "", sundayTo: ""}];
        }
    }

    function fillTimes(){
        openingGeneralData = openingGeneralData.reduce((acc,curr) => {
            for(let key in curr){
                if(key.includes('To')){
                    curr[key] = defaultClosing;
                }
                if(key.includes('From')){
                    curr[key] = defaultOpening;
                }
            }
            return [...acc, curr]
        },[])
        dispatch('autoFilled', {
			autoFilled : openingGeneralData
		});
     }

    function markClosed(){

    }

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
    .disabled{
        background-color: rgb(168, 168, 168);
        color:black;
        cursor:not-allowed;
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
                            <input style="{c.value === 'facilityName' ? " background-color: rgb(168, 168, 168);  color:black; cursor:not-allowed;" : ""}" type="text" maxlength={c.maxlength} disabled={c.value === 'facilityName'} value={row[c.value]} on:input={e => row[c.value] = e.target.value}/>
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

<ul>
    {#each facilities as fac}
        <li>
            {fac.facility_name || fac.facility_other}
        </li>
        <button on:click={addFacility(fac)}>
            Add
        </button>
        <button on:click={deleteFacility(fac)}>
            Delete
        </button>
    {/each}
</ul>


<button on:click={fillTimes}>Align this for every day</button>
<Input type={"T"} bind:value={defaultOpening} />
<Input type={"T"} bind:value={defaultClosing} />
<script>
    import Label from "../Label/Label.svelte";
    import Input from "../Input/Input.svelte";
    export let openingGeneralData;
    export let facilities;
    export let openingInfos;


    let defaultOpening;
    let defaultClosing;

    let filledOpening = openingGeneralData;
 
    function deleteFacility(fac){
        openingGeneralData = openingGeneralData.filter(open => open.facilityName !== fac.facility_name);
    }
    function addFacility(fac){
        let filter = openingGeneralData.filter(open => open.facilityName === fac.facility_name || open.facilityName === fac.facility_other )
        if(filter.length === 0){
            openingGeneralData = [...openingGeneralData, {facilityName : fac.facility_name ? fac.facility_name : fac.facility_other }];
        }
    }

    function fillTimes(){
        openingGeneralData.reduce((acc,curr) => {
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
<Input type={"T"} bind:value={defaultOpening}> default opening </Input>
<Input type={"T"} bind:value={defaultClosing}> default closing </Input>
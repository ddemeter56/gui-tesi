<script>    
    import { _ } from "svelte-i18n";
    import Input from "../Input/Input.svelte";

    export let openingGeneralData;
    export let facilities;
    export let openingInfos;


    let selectedFacility;
    $: console.log(selectedFacility);
    $: console.log(facilities);
    $: if(openingGeneralData.length === 0 ) {
        openingGeneralData = [{facilityName: $_('gymRegister.gymOpeningStep.generalOpening') ,fridayFrom: "",
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
                                                                wednesdayTo: '' }] 
    } else ([...openingGeneralData]);
    let defaultOpening = "08:00";
    let defaultClosing = "22:00";


    function deleteFacility(fac){
        openingGeneralData = openingGeneralData.filter(open => open.facilityName !== fac.name);
    }
    function addFacility(fac){
        let filter = openingGeneralData.filter(open => open.facilityName === fac.name || open.facilityName === fac.customName )
        if(filter.length === 0){
            openingGeneralData = [...openingGeneralData, {facilityName : fac.name ? fac.name : fac.customName, mondayFrom: "", mondayTo: "", tuesdayFrom: "", tuesdayTo: "", wednesdayFrom:"" , wednesdayTo:"", thursdayFrom: "", thursdayTo: "", fridayFrom: "", fridayTo: "", saturdayFrom: "", saturdayTo: "", sundayFrom: "", sundayTo: ""}];
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
     }

     function deleteAll(){
       openingGeneralData = [{facilityName: $_('gymRegister.gymOpeningStep.generalOpening') ,fridayFrom: "",
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
                                                                wednesdayTo: '' }]
     }
</script>

<style>
    .tableContainer {
        padding:5px;
    }
    th{
        margin-right:15px;
        padding: 5px;
    }
    td {
        border: 1px solid #aaa;
        box-sizing: border-box;
    }
    tr:first-child{
        background-color: maroon;
        color: white;
    }
    tr {
        background-color: rgb(92, 92, 92);
        color: white;
    }
    .tdInputStyle{
        display: inline;
        padding: 0;
    }
</style>

<div class="tableContainer">
    <table>
        {#each openingInfos.openingHoursForm as c, i}
            <tr>
                <th>{$_(`gymRegister.gymOpeningStep.${c.value}`)}</th>
                {#each openingGeneralData as row}
                    <td>
                        <div class="tdInputStyle">
                            <input style="{c.value === 'facilityName' ? " background-color: rgb(199, 199, 199);  color:maroon; font-weight:800; cursor:not-allowed;" : ""}" type="text" maxLength={c.maxLength} disabled={c.value === 'facilityName'} value={row[c.value]} on:input={e => row[c.value] = e.target.value}/>
                        </div>
                    </td>
                {/each}
            </tr>
        {/each}
    </table>
</div>
<div class="stepParagraph">
    {$_('gymRegister.gymOpeningStep.availableFacilities')}:
</div>
<select bind:value={selectedFacility} style="margin-bottom: 5px">
    {#each facilities as facility}
      <option value={facility}>{facility.name || facility.customName}</option>
    {/each}
</select>
<button on:click={addFacility(selectedFacility)}>
    {$_('gymRegister.gymOpeningStep.openAddFacility')}
</button>
<button on:click={deleteFacility(selectedFacility)}>
    {$_('gymRegister.gymOpeningStep.openDeleteFacility')}
</button>
<hr />

<div class="stepParagraph">
    {$_('gymRegister.gymOpeningStep.alignOpening')}:
</div>
<div style="padding-bottom: 5px;">
    <Input type={"T"} bind:value={defaultOpening} />
    <Input type={"T"} bind:value={defaultClosing} />    
</div>


<button on:click={fillTimes}>{$_('gymRegister.gymOpeningStep.alignTimes')}</button>
<hr />
<button on:click={deleteAll}>{$_('gymRegister.gymOpeningStep.deleteAll')}</button>
<hr />

<script>    
    import { _ } from "svelte-i18n";
    import Input from "../Input/Input.svelte";
    export let openingGeneralData;
    export let facilities;
    export let openingInfos;

    openingGeneralData = openingGeneralData.length === 0 ? [{facilityName: $_('gymRegister.gymOpeningStep.generalOpening') ,fridayFrom: "",
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
                                                                wednesdayTo: '' }] : ([...openingGeneralData]);
    let defaultOpening = "08:00";
    let defaultClosing = "22:00";


    function deleteFacility(fac){
        openingGeneralData = openingGeneralData.filter(open => open.facilityName !== fac.facility_name);
    }
    function addFacility(fac){
        let filter = openingGeneralData.filter(open => open.facilityName === fac.facility_name || open.facilityName === fac.customName )
        if(filter.length === 0){
            openingGeneralData = [...openingGeneralData, {facilityName : fac.facility_name ? fac.facility_name : fac.customName, mondayFrom: "", mondayTo: "", tuesdayFrom: "", tuesdayTo: "", wednesdayFrom:"" , wednesdayTo:"", thursdayFrom: "", thursdayTo: "", fridayFrom: "", fridayTo: "", saturdayFrom: "", saturdayTo: "", sundayFrom: "", sundayTo: ""}];
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
        background-color: rgb(247, 247, 247);
        border: 1px solid rgb(224,224,224);
    }
    th{
        margin-right:15px;
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
</style>

<div class="tableContainer">
    <table>
        {#each openingInfos.openingHoursForm as c, i}
            <tr>
                <th>{$_(`gymRegister.gymOpeningStep.${c.value}`)}</th>
                {#each openingGeneralData as row}
                    <td>
                        <div class="tdInputStyle">
                            <input style="{c.value === 'facilityName' ? " background-color: rgb(168, 168, 168);  color:black; cursor:not-allowed;" : ""}" type="text" maxLength={c.maxLength} disabled={c.value === 'facilityName'} value={row[c.value]} on:input={e => row[c.value] = e.target.value}/>
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
            {fac.facility_name || fac.customName}
        </li>
        <button on:click={addFacility(fac)}>
            {$_('gymRegister.gymOpeningStep.openAddFacility')}
        </button>
        <button on:click={deleteFacility(fac)}>
            {$_('gymRegister.gymOpeningStep.openDeleteFacility')}
        </button>
    {/each}
</ul>

<hr />

<Input type={"T"} bind:value={defaultOpening} />
<Input type={"T"} bind:value={defaultClosing} />


<button on:click={fillTimes}>{$_('gymRegister.gymOpeningStep.alignTimes')}</button>
<hr />
<button on:click={deleteAll}>{$_('gymRegister.gymOpeningStep.deleteAll')}</button>
<hr />

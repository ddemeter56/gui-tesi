<script>
    import { Wizard, Step } from '../Wizard/wizard.js';
    import FacilityGeneral from './FacilityGeneral.svelte';
    import GymGeneral from './GymGeneral.svelte';
    import OpeningGeneral from './OpeningGeneral.svelte';
    
    let wholeForm = {
        gymGeneralInfo : [],
        facilityGeneralInfo : [],
        openingHoursGeneralData:[]
    };
    $: console.table("WHOLEform:",wholeForm);
</script>

<Wizard on:wizardDone={() => alert("Done clicked")}>
    <Step title={'GYM alapadatok'} desc={'A terem alapadatait itt adjuk meg'} icon={'icon'} active>
        <GymGeneral bind:gymGeneralData={wholeForm.gymGeneralInfo}/>
    </Step>
    <Step title={'GYM facilityk'} desc={'A kondihoz tartozó facilityket itt adjuk meg'} icon={'icon'}>
        <FacilityGeneral bind:facilityGeneralData={wholeForm.facilityGeneralInfo}/>
    </Step>
    <Step title={'Facility nyitvatartások'} desc={'A kondi alap nyitvatartásának és esetleges facilityk nyitvatartásának megadása'} icon={'icon'}>       
        <OpeningGeneral bind:openingHoursGeneralData={wholeForm.openingHoursGeneralData} bind:facilities={wholeForm.facilityGeneralInfo}/>
    </Step>
    <Step title={'GYM Pricing'} desc={'Árlista felvétele'} icon={'icon'}>
    </Step>
</Wizard>
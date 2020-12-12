<script>
    import { Wizard, Step } from '../Wizard/wizard.js';
    import FacilityGeneral from './FacilityGeneral.svelte';
    import GymGeneral from './GymGeneral.svelte';

    let gymGeneralInfo=[];
    let facilityGeneralInfo=[];
    let mainFacility;
    $:console.log("ez a gymfrom ",gymGeneralInfo);
    $:console.log(facilityGeneralInfo)
</script>

<Wizard on:wizardDone={() => alert("Done clicked")}>
    <Step title={'GYM alapadatok'} desc={'A terem alapadatait itt adjuk meg'} icon={'icon'} active>
        <GymGeneral bind:gymGeneralData={gymGeneralInfo}/>
    </Step>
    <Step title={'GYM facilityk'} desc={'A kondihoz tartozó facilityket itt adjuk meg'} icon={'icon'}>
        <FacilityGeneral bind:facilityGeneralData={facilityGeneralInfo} />
    </Step>
    <Step title={'Facility nyitvatartások'} desc={'A kondi alap nyitvatartásának és esetleges facilityk nyitvatartásának megadása'} icon={'icon'}>
    </Step>
    <Step title={'GYM Pricing'} desc={'Árlista felvétele'} icon={'icon'}>
    </Step>
</Wizard>
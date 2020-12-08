<script>
    import { Wizard, Step } from '../Wizard/wizard.js';

    import GymGeneral from './GymGeneral.svelte';

    let gymGeneralInfo = {
        gymName : ''
    };

</script>

<Wizard on:wizardDone={() => alert("Done clicked")}>
    <Step title={'GYM alapadatok'} desc={'A terem alapadatait itt adjuk meg'} icon={'icon'} active>
        <GymGeneral bind:data={gymGeneralInfo}/>
    </Step>
    <Step title={'GYM facilityk'} desc={'A kondihoz tartozó facilityket itt adjuk meg'} icon={'icon'}>
    </Step>
    <Step title={'Facility nyitvatartások'} desc={'A kondi alap nyitvatartásának és esetleges facilityk nyitvatartásának megadása'} icon={'icon'}>
    </Step>
    <Step title={'GYM Pricing'} desc={'Árlista felvétele'} icon={'icon'}>
    </Step>
</Wizard>
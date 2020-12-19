<script>
    import { Wizard, Step } from '../Wizard/wizard.js';
    import Facilities from './Facilities.svelte';
    import GymGeneral from './GymGeneral.svelte';
    import Opening from './Opening.svelte';
    import { gymInfos, facilityInfos, openingInfos } from './gymDatas.js';  

    let form = {
        gym : [],
        facilities : [],
        gymOpening:[]
}
    
    $: console.log(form)
</script>

<Wizard on:wizardDone={() => alert('Done clicked')}>
    <Step
        title={'GYM alapadatok'}
        desc={'A terem alapadatait itt adjuk meg'}
        icon={'icon'}
        active>
        <GymGeneral
            bind:gymGeneralData={form.gym}
            gymGeneralCols={gymInfos.gym} />
    </Step>
    <Step
        title={'GYM facilityk'}
        desc={'A kondihoz tartozó facilityket itt adjuk meg'}
        icon={'icon'}>
        <Facilities
            bind:facilityGeneralData={form.facilities}
            gymFacilityCols={facilityInfos.facilityForm} />
    </Step>
    <Step
        title={'Facility nyitvatartások'}
        desc={'A kondi alap nyitvatartásának és esetleges facilityk nyitvatartásának megadása'}
        icon={'icon'}>
        <Opening
            bind:openingGeneralData={form.gymOpening}
            bind:facilities={form.facilities}
            {openingInfos} />
    </Step>
    <Step title={'GYM Pricing'} desc={'Árlista felvétele'} icon={'icon'} />
</Wizard>

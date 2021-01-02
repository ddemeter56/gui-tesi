<script>
    import { _ } from "svelte-i18n";
    import { Wizard, Step } from '../Wizard/wizard.js';
    import { gymRegisterStore } from '../../stores/gymRegister.js';
    import Facilities from './Facilities.svelte';
    import GymGeneral from './GymGeneral.svelte';
    import Opening from './Opening.svelte';
    import Pricing from './Pricing.svelte';
    import { gymInfos, facilityInfos, openingInfos } from './gymDatas.js';  

    let form = {
        gym : {},
        facilities : [],
        openings:[],
        pricing: [],
    }
    
    function sendData(){
        gymRegisterStore.submitForm(form);
    }
    $: console.log(form);
</script>

<style>
    @media only screen and (min-width: 768px) {
        .gymFormContainer{  
            padding-left:150px;
        }
    }
</style>

<div class="gymFormContainer">
    <Wizard on:wizardDone={sendData} title={$_('gymRegister.title')}>
        <Step
            title={$_('gymRegister.gymWizard.gymBasic')}
            desc={$_('gymRegister.gymWizard.gymBasicDesc')}
            icon={'icon'}
            active>
                <GymGeneral
                bind:gymGeneralData={form.gym}
                gymGeneralCols={gymInfos.gym} />
        </Step>
        <Step
            title={$_('gymRegister.gymWizard.gymFacility')}
            desc={$_('gymRegister.gymWizard.gymFacilityDesc')}
            icon={'icon'}>
            <Facilities
                bind:facilityGeneralData={form.facilities}
                gymFacilityCols={facilityInfos.facilityForm} />
        </Step>
        <Step
            title={$_('gymRegister.gymWizard.gymOpening')}
            desc={$_('gymRegister.gymWizard.gymOpeningDesc')}
            icon={'icon'}>  
    
            <Opening
                bind:openingGeneralData={form.openings}
                bind:facilities={form.facilities}
                {openingInfos} />
        </Step>
        <Step title={$_('gymRegister.gymWizard.gymPricing')} desc={$_('gymRegister.gymWizard.gymPricingDesc')} icon={'icon'} >
            <Pricing selectedFacilities={form.facilities} bind:pricingGeneralData={form.pricing}/>
        </Step>
    </Wizard>

</div>
    
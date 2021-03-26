<script>
    import { _ } from "svelte-i18n";
    import { Wizard, Step } from '../Wizard/wizard.js';
    import { gymRegisterStore, showUserRegisterDialog } from '../../stores/gymRegister.js';
    import { userState } from "../../stores/userState.js";
    import { goto } from '@sveltech/routify';
    import { gymInfos, openingInfos } from './gymDatas.js';  
    import { gymCodes } from '../../stores/gymCodes.js';

    import Dialog from '../Dialog/Dialog.svelte';
    import Facilities from './Facilities.svelte';
    import GymGeneral from './General.svelte';
    import Opening from './Opening.svelte';
    import Pricing from './Pricing.svelte';
    import ImageUpload from './ImageUpload.svelte';
    import GymOwnerRegister from '../Register/GymOwnerRegister.svelte';

    $: if(!$userState.isLoggedIn) {
        $showUserRegisterDialog = true;
    }

    let facilityCodes = gymCodes.getFacilityCodes();
 
    let form = {
        gym : {},
        facilities : [],
        openings:[],
        pricing: [],
    }
    
    let userInfo;
    $: console.log(userInfo);
    function sendData(){
        gymRegisterStore.submitForm(form);
    }

    function sendRegisterData() {
        gymRegisterStore.registerUser(userInfo);
    }
    $: console.log(form);
</script>

<style>
    .gymFormContainer{
        height: 100%;
        background-color: rgb(87, 87, 87);
       /* background-image: url('/images/dumbbell.jfif');
        background-repeat: no-repeat;
        background-size: cover;*/
    }
    @media only screen and (min-width: 768px) {
        .gymFormContainer{  
            padding-left:20%;
        }
    }
</style>

{#if $showUserRegisterDialog}
    <Dialog title='Register GYM Owner user' height={'60%'} width={'30%'} bind:opened={$showUserRegisterDialog}>
        <GymOwnerRegister bind:userInfo/>
        <span slot="footer">
            <button on:click={() => sendRegisterData()}>Register</button>
            <button on:click={$goto('/')}>Back to home</button>
        </span>
    </Dialog>
{/if}
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
            {#await facilityCodes then facilityCodes}
            <Facilities
                bind:facilityGeneralData={form.facilities}
                gymFacilityCols={facilityCodes} />
            {/await}
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
        <Step title={$_('gymRegister.gymWizard.gymImageUpload')} desc={$_('gymRegister.gymWizard.gymImageUploadDesc')} icon={'icon'}>
            <ImageUpload />
        </Step>
    </Wizard>
</div>
<script>
  import { _ } from "svelte-i18n";
  import { Wizard, Step } from '../Wizard/wizard.js';
  import { ptInfos } from './ptDatas.js';  
  import { ptCodes } from '../../stores/ptCodes.js';
  import { ptRegisterStore } from '../../stores/ptRegister.js';
  import { goto } from '@sveltech/routify';
  import { showUserRegisterDialog } from '../../stores/dialogStores.js';
  import { userState } from "../../stores/userState.js";
  import PtGeneral from './General.svelte';
  import Dialog from '../Dialog/Dialog.svelte';
  import PtCertifications from './Certifications.svelte';
  import PtSpecializations from './Specializations.svelte';
  import PtPricing from './Pricing.svelte';
  import PtOwnerRegister from '../Register/OwnerRegister.svelte';


  $: if(!$userState.isLoggedIn || !$userState.roles.includes('personal_trainer')) {
        $showUserRegisterDialog = true;
    } else {
        $showUserRegisterDialog = false;
    }

  let userInfo;
  let langCodes = ptCodes.getLangCodes();
  // Ide jon majd egy certi lekerdezes
  let specs = ptCodes.getSpecs();

  let certies = ptCodes.getCertiGroups();
  $: console.log(langCodes);

  let form = {
    personalTrainer : {},
    gymId:'',
    certifications : [],
    specializations: [],
    ptPricing: [],

  }

  function sendData(){
    ptRegisterStore.submitForm(form)
  }

  function sendRegisterData() {
    ptRegisterStore.registerUser(userInfo);
  }
  $: console.log(form);
</script>

<style>
  .ptFormContainer{
    height: 100%;
    background-color: rgb(87, 87, 87);
  }
  @media only screen and (min-width: 768px) {
        .ptFormContainer{  
            padding-left:20%;
        }
    }
</style>

{#if $showUserRegisterDialog}
    <Dialog title='Register Personal trainer user' height={'60%'} width={'30%'} bind:opened={$showUserRegisterDialog}>
        <PtOwnerRegister bind:userInfo/>
        <span slot="footer">
            <button on:click={() => sendRegisterData()}>Register</button>
            <button on:click={$goto('/')}>Back to home</button>
        </span>
    </Dialog>
{/if}
<div class="ptFormContainer">
  <Wizard on:wizardDone={sendData} title={$_('ptRegister.title')}>
    <Step title={$_('ptRegister.ptWizard.ptBasic')}
    desc={$_('ptRegister.ptWizard.ptBasicDesc')}
    icon={'icon'}
    active>
      {#await langCodes then langCodes}
        <PtGeneral bind:ptGeneralData={form.personalTrainer} ptGeneralCols={ptInfos.personalTrainer} {langCodes}/>
      {/await}
    </Step>
    <Step title={$_('ptRegister.ptWizard.ptCertification')}
    desc={$_('ptRegister.ptWizard.ptCertificationDesc')}
    icon={'icon'}>
      {#await certies then certies}
        <PtCertifications bind:selectedCerties={form.certifications} {certies} />
      {/await}
    </Step>
    <Step title={$_('ptRegister.ptWizard.ptSpecialization')}
    desc={$_('ptRegister.ptWizard.ptSpecializationDesc')}
    icon={'icon'}>
      {#await specs then specs}
        <PtSpecializations bind:selectedSpecs={form.specializations} {specs}/>
      {/await}
    </Step>
    <Step title={$_('ptRegister.ptWizard.ptPricing')}
    desc={$_('ptRegister.ptWizard.ptPricingDesc')}
    icon={'icon'}>
      <PtPricing bind:selectedSpecializations={form.specializations} bind:pricingGeneralData={form.ptPricing}/>
    </Step>
  </Wizard>
</div>

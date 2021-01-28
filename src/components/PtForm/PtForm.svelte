<script>
  import { _ } from "svelte-i18n";
  import { Wizard, Step } from '../Wizard/wizard.js';
  import { ptInfos } from './ptDatas.js';  
  import { ptCodes } from '../../stores/ptCodes.js';
  import { ptRegisterStore } from '../../stores/ptRegister.js';
  import PtGeneral from './General.svelte';
  import PtCertifications from './Certifications.svelte';
  import PtSpecializations from './Specializations.svelte';
  import PtPricing from './Pricing.svelte';

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
  $: console.log(form);
</script>

<style>
  .ptFormContainer{
    height: 100%;
    background-color: rgb(87, 87, 87);
  }
  @media only screen and (min-width: 768px) {
        .ptFormContainer{  
            padding-left:150px;
        }
    }
</style>

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

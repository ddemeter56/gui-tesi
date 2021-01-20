<script>
  import { _ } from "svelte-i18n";
  import { Wizard, Step } from '../Wizard/wizard.js';
  import { ptInfos } from './ptDatas.js';  
  import { ptCodes } from '../../stores/ptCodes.js';
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

  $: console.log(form);
</script>

<style>
  @media only screen and (min-width: 768px) {
        .ptFormContainer{  
            padding-left:150px;
        }
    }
</style>

<div class="ptFormContainer">
  <Wizard on:wizardDone={() => alert("Send pt form")} title="Personal Trainer form">
    <Step title='General information'
    desc='Pt general informations can be entered here'
    icon={'icon'}
    active>
      {#await langCodes then langCodes}
        <PtGeneral bind:ptGeneralData={form.personalTrainer} ptGeneralCols={ptInfos.personalTrainer} {langCodes}/>
      {/await}
    </Step>
    <Step title='Certifications'
    desc='Personal trainer certifications come here'
    icon={'icon'}>
      {#await certies then certies}
        <PtCertifications bind:selectedCerties={form.certifications} {certies} />
      {/await}
    </Step>
    <Step title='Specializations'
    desc='Personal trainer specializations'
    icon={'icon'}>
      {#await specs then specs}
        <PtSpecializations bind:selectedSpecs={form.specializations} {specs}/>
      {/await}
    </Step>
    <Step title='Pricing'
    desc='Pricing'
    icon={'icon'}>
      <PtPricing bind:selectedCertifications={form.certifications} bind:pricingGeneralData={form.ptPricing}/>
    </Step>
  </Wizard>
</div>

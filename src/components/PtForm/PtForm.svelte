<script>
  import { _ } from "svelte-i18n";
  import { Wizard, Step } from '../Wizard/wizard.js';

</script>

<Wizard on:wizardDone={() => alert("Send pt form")} title="Personal Trainer form">

</Wizard>
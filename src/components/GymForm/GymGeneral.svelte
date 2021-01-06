<script>
  import { _ } from "svelte-i18n";
  import Label from "../Label/Label.svelte";
  import Input from "../Input/Input.svelte";
  
  
  export let gymGeneralData;
  export let gymGeneralCols;
  
  // Langauge-t bongeszobol kene allitani?
  gymGeneralData.languageCode = 'hu';
</script>

<style>
  
</style>

{#each gymGeneralCols as item}
    <Label required={item.required} label={$_(`gymRegister.gymBasicStep.${item.value}`)}>
      <Input  
        type={item.type}  
        required={item.required} 
        bind:value={gymGeneralData[item.value]} 
        length={item.maxLength} />
    </Label>
{/each}



<script>
  import { _ } from "svelte-i18n";
  import Label from "../Label/Label.svelte";
  import Input from "../Input/Input.svelte";
  
  export let ptGeneralData;
  export let ptGeneralCols;
  export let langCodes;
  

  ptGeneralData.languageCodes = ['hu'];
</script>

<style>
  
</style>

{#each ptGeneralCols as item}
    <Label required={item.required} label={$_(`ptRegister.ptBasicStep.${item.value}`)}>
      {#if item.inputType === 'Input'}
      <Input  
        type={item.type}  
        required={item.required} 
        bind:value={ptGeneralData[item.value]} 
        length={item.maxLength} />
      {:else if item.inputType === 'Dropdown'}
        <select multiple bind:value={ptGeneralData.languageCodes}>
          {#each langCodes.languages as lang}
              <option value={lang.code}>{lang.name}</option>
          {/each}
        </select>
      {/if}
    </Label>
{/each}



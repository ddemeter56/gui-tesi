<script>
  import Label from "../Label/Label.svelte";
  import Input from "../Input/Input.svelte";
  import {gymInfos} from './gymDatas.js';  
  import {languages} from '../../../public/languages.js'
  
  
  
  const gymInfo=gymInfos.gymForm; 
  

  export let gymGeneralData;
  
 

 
</script>

<style>
</style>

{#each gymInfo as item}
  {#if item.inputType==="Input"}
    <Label required={item.required} label={item.name}>
      <Input 
        type={item.type}  
        required={item.required} 
        bind:value={gymGeneralData[item.value]} 
        length={item.maxLength} />
    </Label>
  {:else if item.inputType==="DropDown"}
    <Label required={item.required} label={item.name}>
     
    </Label>    
  {/if}
{/each}



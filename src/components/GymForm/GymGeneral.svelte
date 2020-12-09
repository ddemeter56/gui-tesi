<script>
  import Label from "../Label/Label.svelte";
  import Input from "../Input/Input.svelte";
  import {gymData} from './gymDatas.js'
  import DropdownMulti from '../DropdownMulti/DropdownMulti.svelte';
  

  
  const gymDatas=gymData.gymForm;
  

  export let data;
  const languages=[
    {name:"English"},
    {name:"hungarian "},
    {name:"german"}    
  ];
 

  gymDatas.forEach(item =>data[item.value]="");

 
  /*Teendők ha Demevel duma: 
    **Ebben a svelte fájlban lehet írni  az összes formot, 
      propsként type hogy melyiket rendereljük
      előny: kevés fájl létrehozás, talán átláthatóbb?
    *Az opening/closing hours mihhez rendeljük hozzá


  */

 
</script>

<style>
</style>

{#each gymDatas as item}
  {#if item.inputType==="Input"}
    <Label required={item.required} label={item.name}>
      <Input 
        type={item.type}  
        required={item.required} 
        bind:value={data[item.value]} 
        length={item.maxLength} />
    </Label>
  {:else if item.inputType==="DropDown"}
    <Label required={item.required} label={item.name}>
      <DropdownMulti 
        items={languages}           
        bind:value={data[item.value]}         
        disabled={!item.required}        
        />
    </Label>
  {/if}
{/each}



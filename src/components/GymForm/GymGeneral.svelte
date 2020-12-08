<script>
    import Label from '../Label/Label.svelte';
    import Input from '../Input/Input.svelte';
    
    export let data;
</script>

<style>

</style>

  
<Label required label={'GYM Name'}>
  <Input type={'C'} required bind:value={data.gymName} length={75}></Input>
</Label>
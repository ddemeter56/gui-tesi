<script>
  import Label from '../Label/Label.svelte';
  import Input from '../Input/Input.svelte';

  export let userInfo = {username: '', password: '', email: ''};
</script>

<style>

</style>

<div class="registration-container">
  <Label label='Username' required>
    <Input type="C" length=40 bind:value={userInfo.username}/>
  </Label>
  <Label label="E-mail" required>
    <Input type="C" length=40 bind:value={userInfo.email}/>
  </Label>
  <Label label="Enter Password" required>
    <input type="password" bind:value={userInfo.password}/> 
  </Label>
  <Label label="Confirm Password" required>
    <input type="password" /> 
  </Label>
</div>
<script>
  import { getData } from '../utils/backendComm.js';
  import GymPage from '../components/GymPage/GymPage.svelte';
  import FallBack from './_fallback.svelte';

  export let slug;

  let data = getData(`public/list/${slug}`).then((result) => {
    return result;
  })

  
</script>

  {#await data}
    Loading
  {:then value}
    {#if value.statusCode == '400'}
      <FallBack />
    {:else if value.hasOwnProperty('facilities')}
      <GymPage data={value} />
    {:else if value.hasOwnProperty('specialities')}
      PT
    {/if}
  {:catch error}
    Error {error}
  {/await}
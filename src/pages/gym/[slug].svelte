<script>
    import { gymPageLoader } from '../../stores/gymPageLoader.js';
    import GymPage from '../../components/GymPage/GymPage.svelte';
    export let slug;

    let gymData = gymPageLoader.loadGym(slug);
    
</script>


{#await gymData}
  Loading bro
{:then data}
  <GymPage {data} />
{/await}
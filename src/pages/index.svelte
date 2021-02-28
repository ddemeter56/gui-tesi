<script>
    import { Tab, TabList, TabPanel, Tabs } from '../components/Tab/tabs.js';
    import GymSearch from '../components/Search/GymSearch.svelte';
    import Paper from '../components/Paper/Paper.svelte';
    import Card from '../components/Card/Card.svelte';
    import FilterBar from '../components/FilterBar/FilterBar.svelte';
    import { gymSearchResult } from '../stores/gymSearchResult.js';

    let searchPressed = false;

    function handleSearchPressed(event){
      console.log(event.detail.pressed);
      searchPressed = event.detail.pressed;
    }

    $: console.log($gymSearchResult);
</script>
<style>
  @media only screen and (max-width: 768px) {
    .resultTabs{
      background-color: #333;
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;
    }
  }
  @media only screen and (min-width: 768px) {
    .homeContainer{
      height:100%;
    }
    .searchAndResults{
      display: flex;
      justify-content: flex-start;
      gap: 25px;
      background-color: rgb(87, 87, 87);
      min-height: 75vh;
      max-height: 90vh;
      box-shadow: -5px -5px 20px 0px #333 inset;
    }
    .searchTabs{
      width:20%;
      padding: 15px 0px 25px 25px;
    }
    .resultTabs{
      display:flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      width:80%;
      color:white;
      background-color: rgb(92,92,92);
      box-shadow: -5px -5px 20px 0px #333 inset;
    }
    .marketingCards{
      background-color: rgb(190, 190, 190);
      display:flex;
      justify-content: space-evenly;
      padding-bottom: 50px;
    }
  }
</style>

<div class="homeContainer scrollable">
  <div class="searchAndResults">
      <div class="searchTabs">  
          <Tabs>
            <TabList>
              <Tab>
                GYM search
              </Tab>
              <Tab>
                PT search
              </Tab>
            </TabList>
            <TabPanel>
              <GymSearch on:searchPressed={handleSearchPressed} />
            </TabPanel>
            <TabPanel>
              PT SEARCH CONTENT COMES HERE  
            </TabPanel>
          </Tabs>
      </div>
    <div class="resultTabs scrollable">
      {#if !searchPressed && $gymSearchResult.gyms.length === 0}
        <Paper>
          <span slot="paperIcon">&#128170;</span>
          <span slot="paperTitle">Best gyms</span>
          <span slot="paperText">Find the best GYMs around you. Meet your requirements with our easy to use GYM finder</span>
        </Paper>
        <Paper>
          <span slot="paperIcon">&#127947;</span>
          <span slot="paperTitle">Best trainers</span>
          <span slot="paperText">Find a professional with the right specializations that meet your goals. Get fit or rehabilitize we help you!</span>
        </Paper>
      {:else}
        {#if $gymSearchResult.gyms.length >= 1}
          <FilterBar 
            type={'GYM'}
            found={$gymSearchResult.count}
            />
            {#each $gymSearchResult.gyms as gym}
              <Card
                id={gym.id} 
                name={gym.name}
                type={'gym'}
                phone={gym.phone}
                imgSrc={'https://www.cutlerzalaegerszeg.hu/index_htm_files/12785@2x.jpg'}
                maxPrice={gym.maxPrice}
                minPrice={gym.minPrice}
                earliestOpening={gym.earliestOpening}
                latestClosing={gym.latestClosing}
                address={gym.addressString}
                shortDesc={gym.shortDescription}
                facebookUserId={gym.facebookUserId}
                instagramUserId={gym.instagramUserId}
                twitterUserId={gym.twitterUserId}
                youtubeUserId={gym.youtubeUserId}
                webPageUserId={gym.webPageUserId}
                facilities={gym.facilities}
                />
            {/each}
        {/if}
      {/if}
    </div>
  </div>
  <div class="marketingCards scrollable">
    <Paper>
      <span slot="paperIcon">&#128170;</span>
      <span slot="paperTitle">Best gyms</span>
      <span slot="paperText">Find the best GYMs around you. Meet your requirements with our easy to use GYM finder</span>
    </Paper>
    <Paper>
      <span slot="paperIcon">&#128170;</span>
      <span slot="paperTitle">Best gyms</span>
      <span slot="paperText">Find the best GYMs around you. Meet your requirements with our easy to use GYM finder</span>
    </Paper>
    <Paper>
      <span slot="paperIcon">&#128170;</span>
      <span slot="paperTitle">Best gyms</span>
      <span slot="paperText">Find the best GYMs around you. Meet your requirements with our easy to use GYM finder</span>
    </Paper>
    <Paper>
      <span slot="paperIcon">&#128170;</span>
      <span slot="paperTitle">Best gyms</span>
      <span slot="paperText">Find the best GYMs around you. Meet your requirements with our easy to use GYM finder</span>
    </Paper>
  </div>
  <div class="footer">
    
  </div>  
</div>


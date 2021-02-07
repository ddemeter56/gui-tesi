<script>
    import { Tab, TabList, TabPanel, Tabs } from '../components/Tab/tabs.js';
    import GymSearch from '../components/Search/GymSearch.svelte';
    import Paper from '../components/Paper/Paper.svelte';
    import Card from '../components/Card/Card.svelte';

    let rest={
		social:[
		{	
			name:"instagram",
			url:"http://www.instagram.com",
			imgUrl:"https://image.flaticon.com/icons/png/128/174/174855.png"
		},
		{	
			name:"facebook",
			url:"http://www.facebook.com",
			imgUrl:"https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/social-facebook-icon.png"
		},
		{
			name:"website",
			url:"http://www.google.com",
			imgUrl:"https://icon-library.com/images/website-icon-png-transparent/website-icon-png-transparent-14.jpg"
		}
		
	],
		id:1,
		type:'G',
		name:'Cutler',
    shortDesc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
	  address:"8900 Zalaegerszeg hegyalja utca 14",
		phone:"+3630123456",
		imgSrc:"https://www.cutlerzalaegerszeg.hu/index_htm_files/12785@2x.jpg"
	}

  let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    let searchPressed = false;

    function handleSearchPressed(event){
      console.log(event.detail.pressed);
      searchPressed = event.detail.pressed;
    }


</script>
<style>
  @media only screen and (min-width: 768px) {
    .homeContainer{
      height:100%;
    }
    .searchAndResults{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 25px;
      background-color: rgb(87, 87, 87);
    }
    .searchTabs{
      width:30%;
      padding: 15px 0px 25px 25px;
    }
    .resultTabs{
      display:flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      width:70%;
      color:white;
      max-height: 500px;
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
      {#if !searchPressed}
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
        {#each numArray as num}
          <Card {...rest} />
        {/each}
      {/if}
    </div>
  </div>
  <div class="marketingCards scrollable">
    <Paper>Ez egy lépés</Paper>
    <Paper>Ez egy lépés</Paper>
    <Paper>Ez egy lépés</Paper>
    <Paper>Ez egy lépés</Paper>
  </div>
  <div class="footer">
    
  </div>  
</div>

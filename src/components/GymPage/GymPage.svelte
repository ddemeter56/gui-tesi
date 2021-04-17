<script>
  import { Tab, TabList, TabPanel, Tabs } from '../Tab/tabs.js';
  import ExpandableContainer from '../ExpandableContainer/ExpandableContainer.svelte';
  import Carousel from '@beyonk/svelte-carousel';
  import { Map, Marker, controls } from '@beyonk/svelte-mapbox'
  import { convertLocationToGeoCode } from '../../utils/mapboxGeoCode.js';
  import GymPrice from './GymPrice.svelte';
  import { onMount } from 'svelte';
  import GymOpening from './GymOpening.svelte';
  import Footer from '../Footer/Footer.svelte';

  export let data = null;

  const { GeolocateControl, NavigationControl, ScaleControl } = controls;

  //center[0] lng center[1] lat
  let someLng;
  let someLat;
  let mapComponent;

  onMount(() => {
    const address = `${data.country} ${data.postcode} ${data.city} ${data.street} ${data.streetNum}`;
    convertLocationToGeoCode(address, 'pk.eyJ1IjoiZGRlbWV0ZXI1NiIsImEiOiJja2x4cmFvYXgxM3AyMm5wbDNoM21yNWNzIn0.GuKEhOpA1o-Ke4AYcAS3lw').then((response) => {
      response.json().then((data) => {
        someLng = data.features[0].center[0];
        someLat = data.features[0].center[1];
        mapComponent.setCenter([ someLng, someLat ],1);
      });
    });
  })


  function eventHandler (e) {
    const data = e.detail
    // do something with `data`, it's the result returned from the mapbox event
  }

  let displayAddress = `${data.country}: ${data.postcode} ${data.city} ${data.street} ${data.streetNum} ${data.floor ? data.floor : ''}`;
</script>
<style>
  .slideContent{
    width: 40%;
  }
  .control{
    font-size: 3rem;
  }
  @media only screen and (max-width: 767px) {
    .gymPageHeaderLeft{
      background-color: #eeeeee;
      text-align: center;
    }
    .gymTitle{
      font-size: 2rem;
    }
    .gymPageHeaderRight{
      text-align: center;
    }
    .socialMedia{
      width: 32px;
      height: 32px;
      padding-bottom: 5px;
    }
    .gymPageHeadSection{
      background-color: #eeeeee;
    }
    .gymPageLeft{
      padding: 5px;
    }
    .slideContent{
      width: 100%;
    }
    .gymPageMap{
      height: 500px;
    }
  }
  @media only screen and (min-width: 768px) {
    .gymPageContainer{
      width: 75%;
      height: 100%;
      margin-left: 12.5%;
      background-color: rgb(209, 209, 209);
      box-shadow: 0px 0px 20px 2px #3f3f3f;
    }
    .socialMedia{
      width: 1.5rem;
      height: 1.5rem;
      padding: 3px
    }
    .gymPageLeft{
      width: 50%;
    }
    .gymPageHeader{
      height: 8%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background-color: #333;
      color: white;
      border-top: 1px solid maroon;
    }
    .gymPageHeadSection{
      display: flex;
    }
    .gymPageHeaderLeft{
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 80%;
      gap: 20px;
    }
    .gymTitle{
      font-size: 2rem;
      padding-left: 5px;
      font-weight: bold;
      margin: 0;
    }
    .gymPageDesc {
      height: 55vh;
      padding: 15px;
      font-size: 1.1rem;
    }
    .gymPageGallery{
      width: 100%;
      background-color: rgb(199, 199, 199);
    }
    .gymPageRight{
      width: 50%;
    }
    .gymPageTabs{
      height:45vh;
      padding-top: 5px;
      padding-right: 15px;
      padding-left:5px;
    }
    .gymPageMap{
      height: 600px;
    }
  }
</style>
<div class="gymPageContainer scrollable">
  <div class="gymPageHeader">
    <div class="gymPageHeaderLeft">
      <div class="gymTitle">{data.name}</div>
      <div class="gymAddress">{displayAddress}</div>
      <div class="gymPageHeaderMiddle">
        <span style="color:gold">&#9733;</span>
        <span style="color:gold">&#9733;</span>
        <span style="color:gold">&#9733;</span>
        <span style="color:gold">&#9733;</span>
      </div>
    </div>
    <div class="gymPageHeaderRight">
      {#if data.facebookUserId}
        <a href={`http://www.facebook.com/${data.facebookUserId}`}>
          <img title={'facebook'} class="socialMedia" src={"https://www.flaticon.com/svg/vstatic/svg/1384/1384053.svg?token=exp=1613758055~hmac=08ad0f0238024287f488ebca6a2ee284"} alt={'facebook'} target="_blank" />
        </a>
      {/if}
      {#if data.instagramUserId}   
        <a href={`http://www.instagram.com/${data.instagramUserId}`}>
          <img title={'instagram'} class="socialMedia" src={"https://image.flaticon.com/icons/png/128/174/174855.png"} alt={'instagram'} target="_blank" />
        </a>
      {/if}
      {#if data.twitterUserId}
          <a href={`http://www.twitter.com/${data.twitterUserId}`}>
            <img title={'twitter'} class="socialMedia" src={"https://www.flaticon.com/svg/vstatic/svg/733/733579.svg?token=exp=1613670201~hmac=7dc90efacbf4acff7d6c08ddeef04bac"} alt={'twitter'} target="_blank" />
          </a>    
      {/if}
      {#if data.youtubeUserId}
          <a href={`http://www.youtube.com/${data.youtubeUserId}`}>
            <img title={'youtube'} class="socialMedia" src={"https://www.flaticon.com/svg/vstatic/svg/1384/1384060.svg?token=exp=1613670277~hmac=423299d6c97e4f9c048d452c6d1ff16a"} alt={'youtube'} target="_blank" />
          </a>    
      {/if}
      {#if data.webPageUserId}
          <a href={data.webPageUserId}>
            <img title={'website'} class="socialMedia" src={"https://icon-library.com/images/website-icon-png-transparent/website-icon-png-transparent-14.jpg"} alt={'website'} target="_blank" />
          </a>  
      {/if}
    </div>
  </div>
  <div class="gymPageHeadSection">
    <div class="gymPageLeft">
      <div class="gymPageDesc scrollable">
        {data.description}
      </div>
    </div>
    <div class="gymPageRight">
      <div class="gymPageTabs">
        <Tabs>
          <TabList>
            <Tab>
              Price
            </Tab>
            <Tab>
              Opening
            </Tab>
            <Tab>
              Trainers
            </Tab>
            <Tab>
              Schedule
            </Tab>
            <Tab>
              Facilities
            </Tab>
          </TabList>
          <TabPanel isScrollable style="height:50vh">
            <GymPrice generalPrice={{ code: 'generalPrice', prices: data.pricing }}
              facilityPrices={data.facilities.map((fac) => ({ code: fac.facilityCode.code, prices: fac.pricing }))}
              facilityNames={data.facilities.map((fac) => ({ value: fac.facilityCode.code, label: fac.customName === '' ? fac.facilityCode.name : fac.customName }))} 
            />
          </TabPanel>
          <TabPanel isScrollable style="height:50vh">
            <GymOpening generalOpening={{ code: 'generalOpening', openings: data.opening }}
              facilityOpenings={data.facilities.map((fac) => ({ code: fac.facilityCode.code, openings: fac.opening }))}
              facilityNames={data.facilities.map((fac) => ({ value: fac.facilityCode.code, label: fac.customName === '' ? fac.facilityCode.name : fac.customName }))}
            />
          </TabPanel>
          <TabPanel isScrollable style="height:50vh">
            Trainers
          </TabPanel>
          <TabPanel isScrollable style="height:50vh">
            Schedule
          </TabPanel>
          <TabPanel isScrollable style="height:50vh">
            {#each data.facilities as facility}
              <ExpandableContainer title={facility.facilityCode.name || facility.customName}>
                  {facility.description}
              </ExpandableContainer>
            {/each}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  </div>
  <div class="gymPageGallery">
    <Carousel perPage={{ 769: 2}}>
      <span class="control" slot="left-control">
        <span>&#60;</span>
      </span>
      <div class="slideContent">
        <img src='https://www.cutlerzalaegerszeg.hu/index_htm_files/12765.jpg' alt={`An image of Cutler`} />
      </div>
      <div class="slideContent">
        <img src='https://www.cutlerzalaegerszeg.hu/index_htm_files/12776.jpg' alt={`An image of Cutler`} />
      </div>
      <div class="slideContent">
        <img src='https://www.cutlerzalaegerszeg.hu/index_htm_files/12789.jpg' alt={`An image of Cutler`} />
      </div>
      <div class="slideContent">
        <img src='https://www.cutlerzalaegerszeg.hu/index_htm_files/12790.jpg' alt={`An image of Cutler`} />
      </div>
      <span class="control" slot="right-control">
        <span>&#62;</span>
      </span>
    </Carousel>
  </div>
  <div class="gymPageMap">
    <Map
      accessToken="pk.eyJ1IjoiZGRlbWV0ZXI1NiIsImEiOiJja2x4cmFvYXgxM3AyMm5wbDNoM21yNWNzIn0.GuKEhOpA1o-Ke4AYcAS3lw" 
      bind:this={mapComponent}
      on:recentre={e => console.log(e.detail.center.lat, e.detail.center.lng) }
      options={{ scrollZoom: false }}
    > 
      <Marker lat={someLat} lng={someLng} color="maroon" label={data.name} popupClassName="class-name" />
      <NavigationControl />
      <GeolocateControl options={{ some: 'control-option' }} on:eventname={eventHandler} />
      <ScaleControl />
    </Map>
  </div>
  <div class="gymFooter">
    <Footer />
  </div>
</div>
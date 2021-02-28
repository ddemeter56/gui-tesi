<script>
  import { Tab, TabList, TabPanel, Tabs } from '../Tab/tabs.js';
  export let data = null;


  let address = `${data.country}, ${data.postcode} ${data.city} ${data.street} ${data.streetNum} ${data.floor ? data.floor : ''}`;
</script>

<style>
  @media only screen and (min-width: 768px) {
    .gymPageContainer{
      width: 75%;
      height: 100%;
      display: flex;
      margin-left: 12.5%;
      background-color: rgb(209, 209, 209);
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
      justify-content: space-between;
      align-items: center;
      background-color: #333;
      color: white;
      border-top: 1px solid maroon;
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
      height: 55%;
      padding: 5px;
    }
    .gymPageGallery{
      height: 40%;
      background-color: rgb(199, 199, 199);
    }
    .gymPageRight{
      width: 50%;
    }
    .gymPageTabs{
      height:45%;
      background-color: teal;
    }
    .gymPageMap{
      height: 55%;
      background-color: wheat;
    }
  }
</style>

<div class="gymPageHeader">
  <div class="gymPageHeaderLeft">
    <div class="gymTitle">{data.name}</div>
    <div class="gymAddress">{address}</div>
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
<div class="gymPageContainer scrollable">
  <div class="gymPageLeft">
    <div class="gymPageDesc scrollable">
      {data.description}
    </div>
    <div class="gymPageGallery">

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
        <TabPanel>
          Price
        </TabPanel>
        <TabPanel>
          Opening
        </TabPanel>
        <TabPanel>
          Trainers
        </TabPanel>
        <TabPanel>
          Schedule
        </TabPanel>
        <TabPanel>
          Facilities
        </TabPanel>
      </Tabs>
    </div>
    <div class="gymPageMap">

    </div>
  </div>
</div>
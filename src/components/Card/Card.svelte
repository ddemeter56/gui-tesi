<script>
    import { createEventDispatcher } from "svelte";
    import { url } from "@sveltech/routify";   
    import Tag from '../Tag/Tag.svelte';

    let dispatch = createEventDispatcher();

    export let id;
    export let type;
    export let name;
    export let shortDesc;
    export let address = null;
    export let phone = null;
    export let facebookUserId = null;
    export let instagramUserId = null;
    export let twitterUserId = null;
    export let youtubeUserId = null;
    export let webPageUserId = null;
    export let imgSrc = "";
    // footer reszbe hashtag szerűen ki lehetne tenni a gym-hez tartozó facilityket
    export let facilities = [];
    export let minPrice = null;
    export let maxPrice = null;
    export let earliestOpening = null;
    export let latestClosing = null; 
    function forward() {
        dispatch("forward", {
            id,
            type,
        });
    };
</script>

<style>
    @media only screen and (min-width: 768px) {
        .card{
            width: calc(100% * (1/4) + 180px - 1px);
        }
    }
    
    @media only screen and (max-width: 768px) {
        .card{
            width: 95%;
        }
    }

    
    .card {
        height:250px;
        display:flex;
        flex-direction: row;
        flex-grow: 1;
        position: relative;
        align-items: flex-start;
        justify-content: space-evenly;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        margin:10px;
        background-color: white;
        color:black;
        border-radius: 5px;
        padding-left: 8px;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .cardLeft{
        width: 70%;
        height:250px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .cardRight{
        width: 30%;
    }
    .socialMedia {
        width: 16px;
        height: 16px;
        display:grid;
        padding:2px;
    }
    .cardHeader{
        display:flex;
        justify-content: space-between;
    }
    .cardTitle {
        font-size: 24px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .cardTitle:hover {
        text-decoration: underline;
        cursor:pointer;
    }
    .cardPhoneAndAddress {
        font-size: 12px;
    }
    .cardShortDesc {
        font-size:15px;
        padding-top:10px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }
    .cardImage{
        object-fit:cover;
        width:100%;
        height:250px;
    }
    .cardFooterTop{  
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        border-top: #f1f1f1 1px solid;
        padding-top: 2px;
    }
    .cardFooterMid{
        display: inline-flex;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        padding-bottom: 2px;
    }
</style>

<div class="card">
    <div class="cardLeft">
            <div class="cardHeader">
                <div class="cardTitle" on:click={forward}>
                    <a href={$url(`gym/${id}`)} title={name}>{name}</a>
                </div>
            </div>
            <div class="cardPhoneAndAddress">
                {phone}
                {address}
            </div>
        
        <div title={shortDesc} class="cardShortDesc">
            {shortDesc}
        </div>
        <div class="cardFooter">
            <div class="cardFooterTop">
                <div class="cardRating">
                    <span style="color:gold">&#9733;</span>
                    <span style="color:gold">&#9733;</span>
                    <span style="color:gold">&#9733;</span>
                    <span style="color:gold">&#9733;</span>
                </div>
                <div class="cardPrice">
                    <span tilte="Highest and lowest price" style="color:maroon">&dollar;</span>
                    <span>
                        {minPrice}- {maxPrice}
                    </span>
                </div>
                <div class="cardOpenHours">
                    <span>&#128339;</span>
                    <span>{earliestOpening}- {latestClosing}</span>
                </div>
            </div>
            <div class="cardFooterMid">
                {#each facilities as facility, index}
                    {#if index < 4}
                        <Tag title={facility.customName || facility.facilityCode.name} tooltip={facility.description}/>
                    {/if}
                {/each}
            </div>
        </div>
    </div>
    <div class="cardMid">
        <div class="socialMediaHolder">
            {#if facebookUserId}
                <a href={`http://www.facebook.com/${facebookUserId}`}>
                    <img title={'facebook'} class="socialMedia" src={"https://www.flaticon.com/svg/vstatic/svg/1384/1384053.svg?token=exp=1613758055~hmac=08ad0f0238024287f488ebca6a2ee284"} alt={'facebook'} target="_blank" />
                </a>
            {/if}
            {#if instagramUserId}   
                <a href={`http://www.instagram.com/${instagramUserId}`}>
                    <img title={'instagram'} class="socialMedia" src={"https://image.flaticon.com/icons/png/128/174/174855.png"} alt={'instagram'} target="_blank" />
                </a>
            {/if}
            {#if twitterUserId}
                <a href={`http://www.twitter.com/${twitterUserId}`}>
                    <img title={'twitter'} class="socialMedia" src={"https://www.flaticon.com/svg/vstatic/svg/733/733579.svg?token=exp=1613670201~hmac=7dc90efacbf4acff7d6c08ddeef04bac"} alt={'twitter'} target="_blank" />
                </a>    
            {/if}
            {#if youtubeUserId}
                <a href={`http://www.youtube.com/${youtubeUserId}`}>
                    <img title={'youtube'} class="socialMedia" src={"https://www.flaticon.com/svg/vstatic/svg/1384/1384060.svg?token=exp=1613670277~hmac=423299d6c97e4f9c048d452c6d1ff16a"} alt={'youtube'} target="_blank" />
                </a>    
            {/if}
            {#if webPageUserId}
                <a href={webPageUserId}>
                    <img title={'website'} class="socialMedia" src={"https://icon-library.com/images/website-icon-png-transparent/website-icon-png-transparent-14.jpg"} alt={'website'} target="_blank" />
                </a>  
            {/if}
        </div>
    </div>
    <div class="cardRight">
        <div class="cardGalleryShow">
            <img style="border-top-right-radius: 5px; border-bottom-right-radius: 5px;" class="cardImage" src={imgSrc} alt={`An image of ${name}`} />
         </div>
    </div>
</div>
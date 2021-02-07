<script>
    import { createEventDispatcher } from "svelte";   

    let dispatch = createEventDispatcher();

    export let id;
    export let type;
    export let name;
    export let shortDesc;
    export let address = null;
    export let phone = null;
    export let social = null;
    export let imgSrc = "";

    function forward() {
        dispatch("forward", {
            id,
            type,
        });
    };
    let openDialogGallery = false;
</script>

<style>
    .card {
        width:40%;
        height:250px;
        display:flex;
        flex-direction: row;
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
    }
    .cardRight{
        width: 30%;
    }
    .socialMedia {
        width: 16px;
        height: 16px;
    }
    .cardHeader{
        display:flex;
        justify-content: space-between;
    }
    .cardTitle {
        font-size: 32px;
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
</style>

<div class="card">
    <div class="cardLeft">
        <div class="cardHeader">
            <div class="cardTitle" on:click={forward}>
                {name}
            </div>
            <div class="socialMediaHolder">
                {#each social as soc}
                    <a href={soc.url}>
                        <img title={soc.name} class="socialMedia" src={soc.imgUrl} alt={soc.name} target="_blank" />
                    </a>
                {/each}
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
                <span style="color:gold">&#9733;</span>
                <span style="color:gold">&#9733;</span>
                <span style="color:gold">&#9733;</span>
                <span style="color:gold">&#9733;</span>
            </div>
            <div class="cardFooterMid">

            </div>
            <div class="cardFooterBottom">
                
            </div>
        </div>
    </div>
    <div class="cardRight">
        <div title="Open gallery" class="cardGalleryShow" on:mouseenter={() => { openDialogGallery = true; }}>
            <img class="cardImage" src={imgSrc} alt={`An image of ${name}`} />
         </div>
    </div>
</div>
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

    const forward = () => {
        dispatch("forward", {
            id,
            type
        });
    };   
</script>

<style>
    /*basics styling just to see the card itself*/
    .card {
        width: 50%;
        flex: 0 0 200px;
        margin: 10px;
        border: 1px solid #ccc;
        box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    }
    .card img {
        width: 100%;
    }
    .card .text {
        padding: 0 20px 20px;
    }

    .socials {
        width: 50%;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
    }

    .socials a {
        height: 50px;
        width: 50px;
    }
</style>

<div class="card">
    <div class="imageHolder" on:click={forward}>
        <img src={imgSrc} alt={`An image of ${name}`} />
    </div>
    <div class="socials">
        <a href={social.instagram}>
            <img
            src="https://image.flaticon.com/icons/png/128/174/174855.png"
            alt="instagram icon"
            target="_blank" />
        </a>
        
        <a href={social.facebook}>
            <img
            src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/social-facebook-icon.png"
            alt="instagram icon"
            target="_blank" />
        </a>
        
        <a href={social.website}>
            <img
            src="https://icon-library.com/images/website-icon-png-transparent/website-icon-png-transparent-14.jpg"
            alt="instagram icon"
            target="_blank" />
        </a>
    </div>
    <div class="headerHolder" on:click={forward}>
        <h2>{name}</h2>
        <p>{phone}</p>
        <p>{address}</p>
        <p>{shortDesc}</p>
    </div>
</div>

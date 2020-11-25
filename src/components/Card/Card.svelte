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
            type,
        });
    };
</script>

<style>
    /*basics styling just to see the card itself*/
    .card {
        width: 50%;
        display: flex;
        margin: 10px;
        border: 1px solid #ccc;
        box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    }
    .imageHolder {
        flex-basis: 50%;
    }
    .headerHolder {
        flex-basis: 40%;
    }

    .card img {
        width: 100%;
        height: 100%;
    }
    .card .text {
        padding: 0 20px 20px;
    }

    .socials {
        flex-basis: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .socials a {
        margin: 0 auto;
        height: 50px;
        width: 50px;
    }
</style>

<div class="card">
    <div class="imageHolder" on:click={forward}>
        <img src={imgSrc} alt={`An image of ${name}`} />
    </div>
    <div class="socials">
        {#each social as soc}
            <a href={soc.url}>
                <img src={soc.imgUrl} alt={soc.name} target="_blank" />
            </a>
        {/each}        
    </div>
    <div class="headerHolder" on:click={forward}>
        <h2>{name}</h2>
        <p>{phone}</p>
        <p>{address}</p>
        <p>{shortDesc}</p>
    </div>
</div>

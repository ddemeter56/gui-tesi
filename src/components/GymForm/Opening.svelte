<script>
    import Label from "../Label/Label.svelte";
    import Input from "../Input/Input.svelte";

    export let openingGeneralData;
    export let facilities;
    export let openingInfos;

    console.log(openingInfos.openingHoursForm.forEach((i) => console.log(i)));
    let data = [];
    $: console.log(data);
</script>

<style>
    .tableContainer {
        width: auto;
        overflow: auto;
    }
    td {
        border: 1px solid #aaa;
    }
</style>

<div class="tableContainer">
    <table>
        {#each openingInfos.openingHoursForm as c, i}
            <tr>
                <th>{c.value}</th>
                {#each data as row}
                    <td>
                        <Input type={c.type} length={5} bind:value={row[c.value]} />
                    </td>
                {/each}
            </tr>
        {/each}
    </table>
</div>

<button
    on:click={() => { data = [...data, {}]; }}>Add new opening</button>

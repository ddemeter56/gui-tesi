<script>
	import { fly, fade } from 'svelte/transition';
	export let items;
	export let value = "";
	export let disabled = false;
	
	let filteredList = items;
	let onInputClick = false;
	
	function filterInList(string){
		const res = items.filter(function(o){
			return o.name.toUpperCase().includes(string.toUpperCase()) ? o : false
		})
		return res;
	}
	
	function setSelected(id){
		let selectedIndex = items.findIndex(item => item.id === id);
		items[selectedIndex].selected = !items[selectedIndex].selected;
		filteredList = items
	}
	
	function acceptSuggestion(e){
		if(filteredList.length >= 1){
				onInputClick = true;
			}
		if(e.keyCode === 13){
			if(filteredList.length == 1){
				filteredList[0].selected = true
				value = "";
			}
		}
	}
	
	$: value, filteredList = filterInList(value)
</script>
<style>
	.container{
		width:215px;
		height:115px;
		padding-bottom:5px;
	}
	.selected{
		background-color:lightblue;
	}
	.inputWrapper{
		background:lightgrey;
		display:flex;
		flex-direction:row;
		justify-content:flex-start;
		align-items: center;
	}
	.inputIcon{
		padding:6px;
	}
	.inputIcon:hover{
		cursor:pointer;
	}
	.ulFiltered{
		margin:0;
		height:130px;
		padding:0;
		overflow:auto;
		background-color:darkgrey;
		border-left:1px groove grey;
		border-bottom:1px groove grey;
	}
	.listItem{
		border-bottom:1px groove black;
		margin:0;
		padding:3px;
		padding-left:10px;
		list-style:none;
		cursor:pointer;
		transition:0.5s;
	}
	
	.listItem:hover{
		background-color:red;
	}
</style>

<div class="container">
	<div class="inputWrapper">
		<input style="margin:0" type=text {disabled} bind:value={value} on:keydown={acceptSuggestion} />
		<div class="inputIcon" on:click={() => {if(disabled){onInputClick = false} else {onInputClick = !onInputClick}}} >
			{#if onInputClick}
				<span>&#x2613;</span>
			{:else}
				<span>&xdtri;</span>
			{/if}
		</div>
	</div>

	{#if onInputClick}
		<ul class="ulFiltered" transition:fly>
		{#each filteredList as item}
			<li class:selected={item.selected} class="listItem"  on:click={setSelected(item.id)} transition:fly>{item.name}</li>
		{/each}
		</ul>
	{/if}
</div>

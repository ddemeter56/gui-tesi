<script>
	export let items;
	
	
	function unSelectItem(id){
		console.log(id)
		let selectedIndex = items.findIndex(item => item.id === id);
		items[selectedIndex].selected = false;
		items = items
	}
</script>

<style>
	.ulList{
		width:300px;
		height:auto;
		margin:0;
		padding:0;
		display:flex;
		flex-direction:row;
		flex-wrap: wrap;
		justify-content:flex-start;
		align-items:center;
		
	}
	.selectedItem{
		color:white;
		background-color:rgb(167, 102, 105);
		height:20px;
		width:auto;
		list-style:none;
		margin-right:10px;
		margin-top: 5px;
		padding:3px;
		border-radius:7px;
	}
	
	.closeButton{
		color:rgb(209, 172, 178);
		margin-left:6px;
		cursor:pointer;
		padding:3px;
	}
</style>

<ul class="ulList">
	{#each items as item}
		{#if item.selected}
				<li class="selectedItem">{item.name}	
					<span class="closeButton" on:click={unSelectItem(item.id)}>&#x2613;</span>
				</li>		
		{/if}
	{/each}
</ul>
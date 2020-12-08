<script>
	import { getContext } from 'svelte';
	import { key } from './Wizard.svelte';
	
	export let title;
	export let desc = "";
	export let active = false;
	export let done = false;
	export let current = false;
	
	const { addSlot, slots, activeSlot, activeNow, setActiveIndex, nextButtonDisabled, prevButtonDisabled } = getContext(key);
	const slot = {name:title,desc:desc, active:active, done:done, current:current};
	addSlot(slot)
	activeNow();
	
	
	
	function switchStep(){
		if(slot.done || slot.current){ // Ha az a slot mar done akkor rá lehet lépni különben nem 
			activeSlot.set(slot);
			setActiveIndex(slots.findIndex(s => s == slot));
		}
	} 
	
	$: $activeSlot !== slot && slot.done ? slot.done = true : "";
	$: $activeSlot !== slot && slot.current ? slot.current = true : "";
</script>
	
<style>
	.stepContainer{
		display:flex;
		flex-direction:row;
		justify-content: space-around;
		align-items: flex-stretch;
	}
	.titles{
		width:20%;
		flex:20% 1 auto;
  	border: 3px solid green;
		cursor:not-allowed;
		padding-top:15px;
	}
	.content{
		flex-grow:1;
		height:1px;
	}
	.activeStep{
		background:pink;
		cursor:auto;
	}
	.done{
		background:grey;
		cursor:pointer;
	}
	.current{
		background:yellow;
		cursor:pointer;
	}
	.description{
		padding:15px;
	}
	.titleAndIcon{
		display:flex;
		justify-content:space-around;
	}
</style>

<div class="stepContainer">
	<div class="titles" class:activeStep={$activeSlot === slot} on:click={switchStep} class:done={slot.done} class:current={slot.current}>
		<div class="titleAndIcon">
			{title}
			<img url="" alt="kephelye" />
		</div>
		<div class="description">
			{#if $activeSlot === slot}
				{desc}
			{/if}
		</div>
	</div>
	<div class="content">
		{#if $activeSlot === slot}
			<slot>
			</slot>
		{/if}
		
	</div>
	

</div>
	




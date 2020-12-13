<script>
	import { getContext } from 'svelte';
	import { key } from './Wizard.svelte';
	import { fly } from 'svelte/transition';

	export let title;
	export let desc = "";
	export let active = false;
	export let done = false;
	export let current = false;
	export let imageUrl;
	
	const { addSlot, slots, activeSlot, activeNow, setActiveIndex } = getContext(key);
	const slot = {name:title,desc:desc, active:active, done:done, current:current};
	addSlot(slot)
	activeNow();
	
	function switchStep(){
		if(slot.done || slot.current){
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
		padding-bottom: 5px;
	}
	.titles{
		width:20%;
		flex:20% 1 auto;
  	border: 2px solid rgb(225, 226, 255);
		background-color: rgb(214, 214, 214);
		cursor:not-allowed;
		padding-top:15px;
		transition: border-left 150ms;
	}
	.content{
		flex-grow:1;
		height:1px;
	}
	.activeStep{
		background:rgb(226, 255, 255);
		cursor:auto;
		transition-timing-function: linear;
		border-left: 13px solid rgb(145, 255, 255);
	}
	.done{
		background:rgb(226, 255, 255);
		cursor:pointer;
	}
	.current{
		background:rgb(226, 255, 255);
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
			<img url={imageUrl} alt="img" />
		</div>
		<div class="description">
			{#if $activeSlot === slot}
				{desc}
			{/if}
		</div>
	</div>
	<div class="content">
		{#if $activeSlot === slot}
			<div transition:fly="{{ x: 1000, duration: 500 }}">
				<slot>
				</slot>
			</div>
		{/if}
	</div>
</div>
	




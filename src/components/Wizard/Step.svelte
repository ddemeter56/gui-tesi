<script>
	import { getContext } from 'svelte';
	import { key } from './Wizard.svelte';

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
	.slotStyle{
		background-color:#333;
		border-radius:5px;
	}
	.stepContainer{
		display:flex;
		flex-direction: column;
		justify-content: space-around;
		padding-bottom: 5px;
	}
	.content{
		padding-top: 20px;
		flex-grow:1;
	}
	.titles{
		width:95%;
		border: 1px outset rgb(233, 233, 233);
		background-color:rgb(199, 199, 199);
		border-radius: 5px;
		cursor:not-allowed;
		padding-top:15px;
		transition: border-left 150ms;
	}
	.activeStep{
		background:white;
		cursor:auto;
		transition-timing-function: linear;
		border-left: 5px solid maroon;
	}
	.done{
		background: white;
		cursor:pointer;
	}
	.current{
		background:white;
		cursor:pointer;
	}
	.description{
		padding:15px;
	}
	.titleAndIcon{
		display:flex;
		justify-content:space-around;
	}
	@media only screen and (max-width:768px){
		.stepContainer{
			background-color: #333;
		}
	}
	@media only screen and (min-width: 768px) {
  /* For desktop: */
  .stepContainer{
		display:flex;
		flex-direction:row;
		justify-content: space-around;
		padding-bottom: 5px;
	}
	.titles{
		width:20%;
		flex:20% 1 auto;
		border: 1px outset rgb(233, 233, 233);
		border-radius: 5px;
		background-color:rgb(199, 199, 199);
		cursor:not-allowed;
		padding-top:15px;
		transition: border-left 150ms;
	}
	.content{
		flex-grow:1;
		height:1px;
	}
	.activeStep{
		background:white;
		cursor:auto;
		transition-timing-function: linear;
		border-left: 5px solid maroon;
	}
	.done{
		background: white;
		cursor:pointer;
	}
	.current{
		background:white;
		cursor:pointer;
	}
	.description{
		padding:15px;
	}
	.titleAndIcon{
		display:flex;
		justify-content:space-around;
	}

	.slotStyle{
		box-shadow: 0px 0px 20px 0px #333;
		width:35vw;
		height:85vh;
		padding-left: 30px;
		padding-right: 30px;
		margin-left: 60px;
		position:fixed; 
		top:90px;
	}
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
			<div class="slotStyle scrollable">
				<slot>
				</slot>
			</div>
		{/if}
	</div>
</div>
	




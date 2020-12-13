<script context="module">
	export const key = {name:'wizard-context'}
</script>

<script>
	import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

	
	export let title = 'Wizard title';
	const slots = [];
	
	let activeIndex = 0;
	let slotLength;
	let slotNum;
	let activeSlot = writable(null);
	
	let nextButtonDisabled = false;
	let prevButtonDisabled = true;
  
  function wizardDone(){
    dispatch('wizardDone', {

      text:'Wizard done'
    })
  }

	setContext(key, {
		addSlot: slot => {
			slots.push(slot)
			slotLength = slots.length;
		},
		
		activeNow: () => {
			const i = slots.find(a => a.active === true);
			activeSlot.set(i);
			activeIndex = slots.findIndex(slot => slot == i);
		},
		
		setActiveIndex: (i) => {
			activeIndex = i;
			i === 0 ? prevButtonDisabled = true : prevButtonDisabled = false;
			i === slotLength-1 ? nextButtonDisabled = true : nextButtonDisabled = false;
		},
		 
		nextButtonDisabled,
		prevButtonDisabled,
		slots,
		activeSlot
	})

	function updateActiveSlot(toIndex){
			activeSlot.set(slots[toIndex]);
	}
	
	function stepPrevious(){
		
		console.log(activeIndex);
		if(activeIndex == 1){
			prevButtonDisabled = true;
		}
		if(activeIndex > 0){
			activeIndex = activeIndex-1;
			updateActiveSlot(activeIndex)
			nextButtonDisabled = false;
		}
	}
	
	function stepNext(){
		slots[activeIndex].done = true;
		
		if(activeIndex+2 == slotLength){
			nextButtonDisabled = true;
		}
		if(activeIndex+1 !== slotLength){
			prevButtonDisabled = false;
			activeIndex = activeIndex+1;
			slots[activeIndex].current = true;
			updateActiveSlot(activeIndex)
		}
	}
  
 
</script>

<style></style>
<h1 style='align: center'>{title}</h1>
<div class='stepContainer'>
	<slot>
	</slot>
</div>
<button on:click={stepPrevious} disabled={prevButtonDisabled}>Previous</button>
<button on:click={stepNext} disabled={nextButtonDisabled}>Next</button>
{#if nextButtonDisabled}
	<button on:click={wizardDone}>Done</button>
{/if}


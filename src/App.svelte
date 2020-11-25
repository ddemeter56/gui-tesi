<script>
	import Dd from './components/Dropdown/Dropdown.svelte';
	import Tag from './components/Tag/Tag.svelte';
	let facilities = [{name:"GYM",selected:1, id:1},{name:"Cross-fit",selected:1, id:2}, {name:"Sauna", selected :1,id:3},{name:"Gyúró", selected:1,id:4}];
</script>

<main>
	<h1>Hello Tesi!</h1>
	
</main>

<Dd bind:items={facilities} />
<Tag bind:items={facilities}/>




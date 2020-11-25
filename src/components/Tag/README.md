# Tag

Renders a tags for the dropdown selected items.

**Attributes**


| Name      | Type                 | Required | Default value       | Description                                                              |
|-----------|----------------------|----------|----------------------|--------------------------------------------------------------------------|
| items     | `array: object`      | **yes**  |                      |An array containing objects, see examples below                          |


**Events**


This opponent has no events


**Features**

- Unselect selected values with click on the X

**Example**

https://svelte.dev/repl/2cd9e882a60b48c4909f9a6c3e5bd511?version=3.30.0

#### Parent
```jsx
<script>
	import Dropdown from './Dropdown.svelte'
	import Tag from './Tag.svelte';
	let name = 'world';
	let facilities = [{name:"GYM",selected:0, id:1},{name:"Cross-fit",selected:0, id:2}, {name:"Sauna", selected :0,id:3},{name:"Gyúró", selected:0,id:4}]
</script>

<Dropdown bind:items={facilities}></Dropdown>
<Tag bind:items={facilities}/>

```


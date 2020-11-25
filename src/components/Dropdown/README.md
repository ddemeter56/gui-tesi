# Dropdown

Renders an <input> , a <span> and a <list>. **This DropwDown is a multiselect only!!!**


**Attributes**


| Name      | Type                 | Required | Default value       | Description                                                              |
|-----------|----------------------|----------|----------------------|--------------------------------------------------------------------------|
| items     | `array: object`      | **yes**  |                      |An array containing objects, see examples below                          |
| value     | `string`             | no       | ""                   | The string that used to search in items
| disabled  | `boolean`            | no       | `false`              | Defines if this component is disabled                                    |

**Events**


This opponent has no events


**Features**

- Bind parent array object to this component and the selected values will be managed
- Selected values can be display as *Tag*s  see Tag component

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


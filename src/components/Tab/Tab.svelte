<script>
  import { getContext } from 'svelte';
  import { TABS } from './Tabs.svelte';

  export let style = '';
  const tab = {};
  const { registerTab, selectTab, selectedTab } = getContext(TABS);

  registerTab(tab);
</script>

<style>

div {
  background: none;
  border: none;
  border-radius: 0;
  color: rgb(228, 228, 228);
  float:left;
  padding: 5px;
  cursor: pointer;
  user-select: none;
}
.selectedTab {    
    border-bottom: 4px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to left, #333, maroon, #333);
  color: white;
}

.tab:hover{
  color: rgb(185, 185, 185);
}
</style>

<div class="tab" style={style} class:selectedTab="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
  <slot></slot>
</div>

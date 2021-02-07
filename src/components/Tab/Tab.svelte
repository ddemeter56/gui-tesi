<script>
  import { getContext } from 'svelte';
  import { TABS } from './Tabs.svelte';

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
	border-bottom: 6px solid maroon;
  color: white;
  background-color: rgb(87,87,87);
 }

 .tab:hover{
  color: rgb(185, 185, 185);
 }
</style>

<div class="tab" class:selectedTab="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
  <slot></slot>
</div>

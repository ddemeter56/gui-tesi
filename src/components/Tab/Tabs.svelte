<script context="module">
  export const TABS = {};
</script>

<script>
  import { setContext, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  export let tabListPosition = 'top';

  const tabs = [];
  const panels = [];
  const selectedTab = writable(null);
  const selectedPanel = writable(null);

  setContext(TABS, {
    registerTab: (tab) => {
      tabs.push(tab);
      selectedTab.update((current) => current || tab);
  
      onDestroy(() => {
        const i = tabs.indexOf(tab);
        tabs.splice(i, 1);
        selectedTab.update((current) => (current === tab ? (tabs[i] || tabs[tabs.length - 1]) : current));
      });
    },

    registerPanel: (panel) => {
      panels.push(panel);
      selectedPanel.update((current) => current || panel);
  
      onDestroy(() => {
        const i = panels.indexOf(panel);
        panels.splice(i, 1);
        selectedPanel.update((current) => (current === panel ? (panels[i] || panels[panels.length - 1]) : current));
      });
    },

    selectTab: (tab) => {
      const i = tabs.indexOf(tab);
      selectedTab.set(tab);
      selectedPanel.set(panels[i]);
    },

    selectedTab,
    selectedPanel,
    tabListPosition,
  });
</script>

<style>
  div {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .top {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  }

  .bottom {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: stretch;
  }

  .left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
  }

  .right {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: stretch;
  }
</style>

<div class="{tabListPosition} tabs">
  <slot></slot>
</div>

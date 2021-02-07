<script>
  import { getContext } from 'svelte';
  import { TABS } from './Tabs.svelte';

  export let style = '';
  export let cssClass = '';

  const panel = {};
  const { registerPanel, selectedPanel } = getContext(TABS);

  registerPanel(panel);
</script>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>

{#if $selectedPanel === panel}
  <div class="tab-panel scrollable {cssClass}" {style} >
    <slot></slot>
  </div>
{/if}

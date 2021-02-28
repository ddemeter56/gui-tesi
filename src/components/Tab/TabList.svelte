<script>
  import { getContext } from 'svelte';
  import { TABS } from './Tabs.svelte';

  export let style = '';
  export let showTopBorder = false;
  const { tabListPosition } = getContext(TABS);

  function getStyle(pos, thick) {
    if (!thick) {
      return style;
    }

    if (pos === 'top' || pos === 'bottom') {
      return `height: ${thick}px; min-height: ${thick}px; max-height: ${thick}px;${style}`;
    }

    if (pos === 'left' || pos === 'right') {
      return `width: ${thick}px; min-width: ${thick}px; max-width: ${thick}px;${style}`;
    }

    return style;
  }


</script>

<style>


  @media only screen and (min-width: 768px) {
    .topBorder{ 
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }

  @media only screen and (max-width: 768px) {
    .tablistContainer{ 
      padding-top:15px;
    }
  }

  .tablistContainer {
    box-sizing: border-box; 
    width: 100%; 
    padding-left: 1rem; 
    padding-right: 1rem;
    background-color: #333;
  }
</style>

<div class="tablistContainer" class:topBorder={showTopBorder} style={style}>
  <slot></slot>
</div>

<script>
  import { getContext } from 'svelte';
  import { TABS } from './Tabs.svelte';

  export let thickness = null;
  export let adjust = 'left';
  export let style = '';

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

  function getContainerClass() {
    let c;
    switch (tabListPosition) {

      case 'top': c = 'tablistContainerH borderBottom';
        break;
      case 'bottom': c = 'tablistContainerH  borderTop';
        break;
      case 'left': c = 'tablistContainerV  borderRight';
        break;
      default: c = 'tablistContainerV  borderLeft';
  
    }
    return c;
  }
</script>

<style>
  .top, .bottom {
    display: flex;
    flex-direction: row;
    /*justify-content: flex-start;*/
    align-items: stretch;
    width:100%;
    gap: 10px;
  }



  .left, .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    overflow-x: hidden;
    overflow-y: auto;
    height:100%;
    gap: 10px;
  }

  .adjust_left {
    justify-content: flex-start;
   }
  .adjust_right { 
    justify-content: flex-end;
  }
  .tablistContainerH {
    box-sizing: border-box; 
    width: 100%; 
    padding-left: 1rem; 
    padding-right: 1rem;
  }

  .tablistContainerV {
    box-sizing: border-box; 
    height: 100%; 
    padding-top: 1rem; 
    padding-bottom: 1rem;
  }
  
  .borderTop {
    border-top: 1px solid #e1fee1;
  }

  .borderLeft {
    border-left: 1px solid #e1e1e1;
  }
  .borderRight {
    border-right: 1px solid #e1e1e1;
  }

</style>
<div class="{getContainerClass()}">
<div class="{tabListPosition} {`adjust_${adjust}`} scrollable tab-list" style="{getStyle(tabListPosition, thickness)}">
  <slot></slot>
</div>
</div>

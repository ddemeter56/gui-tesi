<script>
  import { createEventDispatcher } from 'svelte';

  export let menuitems = [];
  export let id;
  export let parentId = null;
  export let dark = false;
  export let tooltip = '';

  const dispatch = createEventDispatcher();

  let opened = false;
  let position;
  let dropdown;
  let menu;

  function setPosition() {
    let ww = window.innerWidth;
    if (parentId) {
      const p = document.getElementById(parentId);
      if (p) { ww = p.offsetWidth; }
    }

    const l = dropdown.offsetLeft;
    const w = menu.offsetWidth + 5;
  
    position = l;
    if (l + w > ww) { position = ww - w; }
  }

  function showDropDownMenu(show) {
    opened = show;
    if (show) {
      setPosition();
      document.addEventListener('click', handleClickEvent);
    } else {
      document.removeEventListener('click', handleClickEvent);
    }
  }

  function handleClickEvent(event) {
    let parent = event.target.parentNode;
    if (parent.matches('.dropbtn')) { parent = parent.parentNode; }
    if (!parent.matches('.dropdown') || parent.dataset.id !== id) { showDropDownMenu(false); }
  }

  function setSelectedItem(item, i) {
    if (item.checked != null) {
      item.checked = !item.checked;
    }
    menuitems[i] = item;
    dispatch('itemSelected', { item });
  }

  </script>

<style>
  .dropdown {
    float: left;
    overflow: hidden;
    height: 100%;
  }

  .dropdown .dropbtn {
    border: none;
    outline: none;
    user-select: none;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left:10px;
    padding-right: 10px;
    margin: 0;
    height: 100%;
  }

  #btn * {
    pointer-events: none;
  }

  .dropdown-content {
    visibility: hidden;
    position: absolute;
  }

  .dropdown-content {
    float: none;
    display: block;
    text-align: left;
  }

  .dropdown-table {
    border: 0px; 
    border-spacing: 0px;
    padding: 2px; 
    width: 100%;
  }
 
  .show {
    visibility: visible;
  }
</style>

<div class="dropdown" class:dropdown-opened={opened && !dark} class:dropdown-opened-dark={opened && dark} bind:this={dropdown} data-id={id} title={tooltip}>
  <div id="btn" class="dropbtn" on:click={() => { showDropDownMenu(!opened); }}>
      <slot></slot>
  </div>
  <div class="dropdown-content dropdown-menu-container {opened ? 'show' : ''}" style="left: {position}px" bind:this={menu}>
    <table class="dropdown-table">
    {#each menuitems as item, i}
      {#if (item.name) }
        <tr class="dropdown-table-tr" style="cursor: pointer;" on:click={() => setSelectedItem(item, i)}>
          {#if (item.icon) }
            <td class="dropdown-menuitem">
              <img src="{`${window.APP_CONTEXT}/icons/16px/${item.icon}.png`}" alt="icon" />
            </td>
          {:else if (item.checked === true) }
            <td class="dropdown-menuitem"><img src="{`${window.APP_CONTEXT}/icons/16px/Check.png`}" alt="icon" /></td>
          {:else}
            <td></td>
          {/if}
          <td class="dropdown-menuitem">
            {item.label}
          </td>
        </tr>
      {:else}
        <tr class="dropdown-table-tr">
          <td colspan="3" class="dropdown-menuitem-hr"></td>
        </tr>
      {/if}
    {/each}
  </table>
  </div>
</div> 

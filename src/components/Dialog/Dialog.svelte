<script>
  import { _ } from 'svelte-i18n';
  import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

  export let id = null;
  export let saveResizedDialog = false;
  export let cancel = false;
  export let closeOnClickOut = false;
  export let resizeable = false;
  export let ok = false;
  export let okDisabled = false;
  export let opened = false;
  export let title = '';
  export let error = false;
  export let width = null;
  export let height = null;
  export let noHeader = false;

  
  $: cancelButtonText = typeof cancel === 'string' ? cancel : $_('button.cancel');
  $: okButtonText = typeof ok == 'string' ? ok : $_('button.ok');

  const dispatch = createEventDispatcher();

  const measuredSize = {
    height: null,
    width: null,
  };

  if (id && saveResizedDialog) {
    const allSizes = JSON.parse(localStorage.getItem('dialogResize'));
    if (allSizes && allSizes[id]) {
      width = allSizes[id].width;
      height = allSizes[id].height;
    }
  }

  function handleOkClick() {
    if (ok) {
      saveResize();
      dispatch('ok');
    }
  }

  function handleCancelClick() {
    if (cancel) {
      saveResize();
      dispatch('cancel');
    }
  }

  function onOutClick() {
    if (closeOnClickOut) {
      saveResize();
      opened = false;
    }
  }

  function saveResize() {
    if (resizeable && id) {
      const actSizes = JSON.parse(localStorage.getItem('dialogResize')) || {};
      localStorage.setItem('dialogResize', JSON.stringify({
        ...actSizes,
        [id]: {
          width: `${measuredSize.width}px`,
          height: `${measuredSize.height}px`,
        },
      }));
    }
  }
</script>

<style>
  .dialogWrapper {
    background-color: rgba(100, 100, 100, 0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .dialog {
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border-radius: 5px;
	  box-sizing: border-box;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    min-width: 370px; 
    min-height: 150px;
    max-width: 90%;
    max-height: 90%;
  }

  .container {
    padding: .5em;
  }

  .header {
    background-color: white;
    color: maroon;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .footer{
    text-align: center;
  }
  .buttonContainer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    gap: 15px;
    margin:5px;
  }
</style>

{#if opened}
  <div class="dialogWrapper" on:click|self={onOutClick}>
    <div class="dialog" role="dialog" style="width:{width}; height:{height}" transition:fade="{{ duration: 50 }}" >
      <div style="width:100%; height:100%">
        {#if !noHeader}
          <div style="height:40px; padding-bottom: 15px;">
            <div class="header container { error ? 'error' : 'primary'}">
              <slot name="header">{title}</slot>
            </div>
          </div>
        {/if}
        <div style="overflow:none;">
          <slot></slot>
        </div>
        <div height="70px" fixed>
          <div class="footer container">
            <slot name="footer">
              <div class="buttonContainer">
                {#if ok}
                  <button disabled={okDisabled} label={okButtonText} on:click={handleOkClick} />
                {/if}
                {#if cancel}
                  <button label={cancelButtonText} on:click={handleCancelClick} />
                {/if}
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

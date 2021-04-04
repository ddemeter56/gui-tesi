<script>
  
  export let label = null;
  export let required;
</script>

<style>
  .label{
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: space-between;
    margin:15px;
    border: 1px solid rgb(97 21 21 / 63%);
    border-style:outset;
    transition: border 0.1s;
    cursor: pointer;
    color: rgb(224, 224, 224);
    border-radius: 5px;
  }
  .required{
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: space-between;
    color:rgb(224, 0, 0);
  }
  .labelContainer{
    display:flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .label:focus-within{
    border: 2px #333 solid;
    color: #fff;
  }
</style>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="label">
    <div class="labelContainer">
      <div style="padding-left:5px;">
        {label}
      </div>
      {#if required}
        <div style="float:right; font-size:16px; padding-right:5px;" class:required={required}>
          *
        </div>  
      {/if}
    </div>
  <div class="labelSlot">
    <slot></slot>
  </div>
</label>
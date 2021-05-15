<script>
  export let title = '';
  export let expanded = false;
  export let style = '';
</script>
<style>
  .expandableContainer{
    padding: 5px;
    padding-right: 15px;
  }
  .title:hover{
    cursor: pointer;
    background-color:#cecece;
  }
  .title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    border-bottom: 1px solid #c2c0c0;
    font-weight: bold;
  }
  .expandableIcon{
    float: right;
    color:#333;
    font-size:1.2rem;
  }
  .expandableContent{
    border-top: 1px solid maroon;
  }
</style>

<div class="expandableContainer" style={style}>
  <div class="title" on:click={() => expanded = !expanded}>
    {title} 
    {#if expanded}
      <span class="expandableIcon">&#8681;</span>
    {:else}
      <span class="expandableIcon">&#8679;</span>
    {/if}
  </div>
  {#if expanded}
    <div class="expandableContent scrollable">
      <slot>
      </slot>
    </div>
  {/if}
</div>

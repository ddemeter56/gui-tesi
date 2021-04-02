<script>
  export let paperType = 'small';
</script>

<style>
  @media only screen and (max-width: 768px) {
    .small-paper-container{
      margin-top:40px;
    }
  }
  @media only screen and (min-width: 768px) {
    .small-paper-container{
      margin: 15px;
    }
  }
  .small-paper-container{
    width: 300px;
    height: 300px;
    background-color: rgb(255, 255, 255);
    color: maroon;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius:5px;
  }
  
  .small-paper-container:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  .small-paper-icon{
    height:40%;
    background-color: maroon;
    font-size: 5rem;
    text-align: center;
  }
  .small-paper-title{
    padding-top: 10px;
    height:20%;
    text-align: center;
    font-size:25px;
    text-transform: uppercase;
  }
  .small-paper-text{
    padding: 10px;
    border-top: rgb(230, 230, 230) 1px solid;
    background-color: white;
    color: maroon;
    text-align: justify;
  }

  .large-paper-container{
    width: 45%;
    height: 85%;
    background-color: rgb(236, 236, 236);
    margin-top: 3%;    
    border: 4px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(to left, #5e5e5e, maroon, #5e5e5e);
  }
</style>

{#if paperType === 'large'}
  <div class="large-paper-container">
    <div class="large-paper-icon">
      <slot name="paperIcon"></slot>
    </div>
    <div class="large-paper-title">
      <slot name="paperTitle"></slot>
    </div>
    <div class="large-paper-description">
      <slot name="paperDesc"></slot>
    </div>
  </div>
{:else if paperType === 'small'}
  <div class="small-paper-container">
    <div class="small-paper-icon">
      <slot name="paperIcon"></slot>
    </div>
    <div class="small-paper-title">
      <slot name="paperTitle"></slot>
    </div>
    <div class="small-paper-text">
      <slot name="paperText"></slot>
    </div>
  </div>
{/if}
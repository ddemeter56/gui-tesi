<script>
  export let paperType = 'small';
  export let backgroundImg = '';

</script>

<style>
  @media only screen and (max-width: 768px) {
    
    .large-paper-container{
      width: 95%;
      height: 100%;
      color: white;
    }
    .large-paper-content-container {
      margin-bottom: 15px;
    }
    .large-paper-button-container {
      padding-bottom: 5px;
    }
  }
  @media only screen and (min-width: 768px) {
    .small-paper-container{
      margin: 15px;
    }
    
    .large-paper-container{
      width: 45%;
      height: 85%;
    }

    .large-paper-button-container {
      width: 100%;
      bottom: 15px;
      position: absolute;
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
    height:auto;
    text-align: center;
    text-transform: uppercase;
    font-variant: all-small-caps;
    font-size: 2rem;
  }
  .small-paper-text{
    padding: 10px;
    border-top: rgb(230, 230, 230) 1px solid;
    background-color: white;
    color: maroon;
    text-align: justify;
    font-size: 1.05rem;
  }

  .large-paper-container{
    background-color: rgb(236, 236, 236);
    margin-top: 3%;    
    border: 4px solid;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: linear-gradient(to left, #5e5e5e, maroon, #5e5e5e);
    transition: 0.3s;
    background-size: cover;
  }
  
  .large-paper-container:hover {
    box-shadow: 0 8px 16px 0 rgba(192, 0, 0, 0.219);
  }

  .large-paper-content-container {
    width: 85%;
    height: 85%;
    background-color: rgba(0, 0, 0, 0.514);
    text-align: center;
    margin-left: 7.5%;
    margin-top: 7.5%;
    position: relative;
    border-radius: 3px;
  }

  .large-paper-icon {
    font-size: 3.5rem;
  }
  .large-paper-title {
    font-size: 1.75rem;
  }
  .large-paper-text {
    font-size: 1.1rem;
    padding: 25px 3px 10px 3px;
  }
  .large-paper-button-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

{#if paperType === 'large'}
  <div class="large-paper-container" style={`background-image: url('images/${backgroundImg}')`}>
    <div class="large-paper-content-container">
      <div class="large-paper-icon">
        <slot name="paperIcon"></slot>
      </div>
      <div class="large-paper-title">
        <slot name="paperTitle"></slot>
      </div>
      <div class="large-paper-text">
        <slot name="paperText"></slot>
      </div>
      <div class="large-paper-button-container">
        <slot name="paperButton"></slot>
      </div>
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
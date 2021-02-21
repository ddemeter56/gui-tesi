<script>
</script>

<style>
  @media only screen and (max-width: 768px) {
    .paperContainer{
      margin-top:40px;
    }
  }
  @media only screen and (min-width: 768px) {
    .paperContainer{
      margin: 15px;
    }
  }
  .paperContainer{
    width: 300px;
    height: 300px;
    background-color: rgb(255, 255, 255);
    color: maroon;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius:5px;
  }
  
  .paperContainer:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  .paperIcon{
    height:40%;
    background-color: maroon;
    font-size: 5rem;
    text-align: center;
  }
  .paperTitle{
    padding-top: 10px;
    height:20%;
    text-align: center;
    font-size:25px;
    text-transform: uppercase;
  }
  .paperText{
    padding: 10px;
    border-top: rgb(230, 230, 230) 1px solid;
    background-color: white;
    color: maroon;
    text-align: justify;
  }
</style>

<div class="paperContainer">
  <div class="paperIcon">
    <slot name="paperIcon"></slot>
  </div>
  <div class="paperTitle">
    <slot name="paperTitle"></slot>
  </div>
  <div class="paperText">
    <slot name="paperText"></slot>
  </div>
</div>
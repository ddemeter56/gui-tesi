<script>
  export let width = '';
  export let height = '';
  export let minWidth = '';
  export let minHeight = '';
  export let maxWidth = '';
  export let maxHeight = '';
  export let fixed = false;
  export let showBorder = false;

  $: style = `box-sizing: border-box; min-width: ${minWidth || fixed ? width : '0px'}; width: ${width || '100%'}; max-width: ${maxWidth || fixed ? width : '100%'}; min-height: ${minHeight || fixed ? height : '0px'}; height: ${height || '100%'}; max-height: ${maxHeight || fixed ? height : '100%'}`;
  
</script>

<style>
.scrollable{
  overflow: auto;
}

.primary-border{  
	border: 1px solid #024f87 !important;
	border-radius: 5px;
}

</style>


<div class="scrollable" class:primary-border={showBorder} draggable="false" style={style}>
  <slot></slot>
</div>
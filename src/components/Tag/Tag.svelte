<script>
	export let title = '';
	export let tooltip = null;
</script>

<style>
	.cardTag{
		text-overflow: ellipsis;
		margin-top:5px;
		padding: 5px;
		background-color: maroon; 
		color:white; 
		margin-left:2px; 
		font-size:15px;
		border-radius: 10px;
		transition: 0.5ms;
  }
	.cardTag:hover{
		background-color: rgb(99, 0, 0);
		color: rgb(228, 228, 228);
		cursor:pointer;
	}
</style>


<div class="cardTag" tilte={tooltip || title}>
	<span style="font-size:smaller;">{title} &plus;</span>
</div>
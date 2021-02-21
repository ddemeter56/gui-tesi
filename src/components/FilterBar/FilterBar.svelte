<script>
  import Dropdown from '../DropdownSingle/DropdownSingle.svelte';
  import { gymSearchResult, queryOptions, searchForm, createQuery } from '../../stores/gymSearchResult.js';
  export let type = '';
  export let found = null;
  export let pageNum = null;
  export let maxPage = null;
  export let visibleItems = 10;

  let selectedSort = queryOptions.sortByProperty;
  let selectedDisplay;

  $: sortItems = [
    {value: 'averagePrice', label: 'Order by price'},
    {value: 'name', label: 'Order by name'},
    {value: 'opening', label: 'Order by opening'},
    {value: 'location', label: 'Order by location'},
  ]

  $: displayOptions = [
    {value: 1, label: 'List view'},
    {value: 2, label: 'Grid view'}
  ]
  
  function sortChange(event) {
    queryOptions.sortByProperty = event.detail.selected;
    gymSearchResult.searchGyms(createQuery(searchForm));
  }

  function sortMethodChange() {
    if(queryOptions.sortByMethod === 'ASC') {
      queryOptions.sortByMethod = 'DESC';
      gymSearchResult.searchGyms(createQuery(searchForm));
    } else if (queryOptions.sortByMethod === 'DESC') {
      queryOptions.sortByMethod = 'ASC';
      gymSearchResult.searchGyms(createQuery(searchForm));
    }
  }

</script>
<style>

@media only screen and (max-width: 768px) {
}
.filterBarContainer{
  width: 85%;
  height: 36px;
  margin-top: 15px;
  display:flex;
  justify-content: space-between;
  border: 1px solid #5b5959;
  box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
  color:white;
}

.filterBarLeft{
    display: flex;
    gap: 25px;
    padding-left: 25px;
    align-items: center;
}
.filterBarRight{
  height: 100%;
  display: flex;
  align-items:center;
  gap: 5px;
}

.sortImg{
  width: 25px;
  height: 25px;
}
.sortImg:hover{
  cursor: pointer;
}
</style>

<div class="filterBarContainer">
  <div class="filterBarLeft">
    <div>Result: {found}</div>
    <div>Page: {pageNum} / {maxPage}</div>
    <div>Items per page: {visibleItems}</div>
  </div>
  <div class="filterBarRight">
    <Dropdown items={displayOptions} bind:selected={selectedDisplay} icon={"https://www.flaticon.com/svg/vstatic/svg/238/238910.svg?token=exp=1613760807~hmac=ef7a1d26886bda9164e4e5bb85c560a5"} />
    <Dropdown items={sortItems} bind:selected={selectedSort} on:itemChanged={sortChange}/>
    {#if queryOptions.sortByMethod.toUpperCase() === 'ASC'}
      <img class="sortImg" src={"https://www.flaticon.com/svg/vstatic/svg/31/31283.svg?token=exp=1613914434~hmac=cef94f01e96f64b08c3a6dd8353cf470"} alt="sortAsc" on:click={sortMethodChange}/>
    {:else if queryOptions.sortByMethod.toUpperCase() === 'DESC'}
      <img class="sortImg" src={"https://www.flaticon.com/svg/vstatic/svg/31/31013.svg?token=exp=1613914434~hmac=3bdddb403a9b013412820183a1afbb74"} alt="sortDesc" on:click={sortMethodChange}/>
    {/if}
  </div>
</div>
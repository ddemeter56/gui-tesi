<script>
  import { fly } from 'svelte/transition';
  import { _ } from "svelte-i18n";
	import LanguageSelector from "../LanguageSelector/LanguageSelector.svelte";
  import { url, isActive } from "@sveltech/routify";

  const links = [
    ["./index", $_('navbar.home')],
    ["./about", $_('navbar.about')],
    ["./register/gym", $_('navbar.gymReg')],
    ["./register/pro", $_('navbar.ptReg')]
  ]

  let activeMenu = false;
  let innerWidth;
  let innerHeight;

  $: console.log(activeMenu);
  $: console.log(innerWidth);
</script>

<style>
  @media only screen and (max-width: 768px) {
    .navBarWrapper {
      width: auto;
      height: 50px;
      background-color: #333;
      display: flex;
      justify-content: space-between;
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 999;
    }

    .navHamburger {
      float: right;
      padding-right: 10px;
    }

    .navBarLogoHolder {
      float: left;
      margin-left: 15px;
      background-color: maroon;
      color: white;
    }

    .listWrapper {
      width: 100vw;
      height: 100vh;
      top: 0;
      background-color: maroon;
      position: fixed;
      margin: 0;
      display: flex;
      justify-content: space-between;
      z-index: 999;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    li {
      padding: 10px 0px 15px 0px;
    }
    li a {
      color: white;
      text-align: start;
      padding: 14px 16px 15px;
      text-decoration: none;
    }

    .closeSpan{
      padding: 5px 10px 0px 0px;
      font-size:25px;
    }
  }

  @media only screen and (min-width: 768px) {
    .navHamburger {
      display: none;
    }
    .navBarWrapper {
      width: auto;
      height: 50px;
      background-color: #333;
      display: flex;
      justify-content: space-between;
      position: relative;
    }

    .navBarLogoHolder {
      float: left;
      margin-left: 50px;
      width: 65px;
      background-color: maroon;
    }

    .navBarUl{
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      padding-right: 15px;
    }
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }


    li {
      float: right;
    }

    li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      transition: 0.5s;
    }

    li a:hover {
      background-color: #111;
      color: rgb(201, 201, 201);
    }

    .selected{
      background-color: maroon;
    }
  }
</style>

<svelte:window bind:innerWidth />

<div class="navBarWrapper">
  <div class="navBarLogoHolder">Logo me</div>
  {#if innerWidth < 768}
    <div
      class="navHamburger"
      on:click={() => { activeMenu = !activeMenu; }}>
      <hr width="40" size="5" />
      <hr width="40" size="5" />
      <hr width="40" size="5" />
    </div>
  {/if}
  {#if activeMenu || innerWidth > 768} 
  <div
    class="listWrapper"
    transition:fly="{{ x: 200, duration: 500 }}">
    <ul class="navBarUl">
      <li><LanguageSelector /></li>
      {#each links as [path, name]}
        <li on:click={() => activeMenu = false}><a href={$url(path)} class:selected={$isActive(path)} >{name}</a></li>
      {/each}
      
    </ul>
    {#if innerWidth < 768}
      <span
        class="closeSpan"
        on:click={() => { activeMenu = !activeMenu; }}>&#10006;</span>
    {/if}
  </div>
  {/if}
</div>
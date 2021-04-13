<script>
  import { _ } from "svelte-i18n";
	import LanguageSelector from "../LanguageSelector/LanguageSelector.svelte";
  import DropdownMenu from "../DropdownMenu/DropdownMenu.svelte";
  import { url, isActive, goto } from "@sveltech/routify";
  import { processUrlTokens } from "../../utils/processUrlTokens.js";
  import { userState } from "../../stores/userState.js";

  processUrlTokens();

  $: links = [
    ["./about", $_('navbar.about'), 'icons/about.png'],
    ["./index", $_('navbar.home'), 'icons/home.png']
  ]

  let activeMenu = false;
  let innerWidth;

  function handleRegistrationClick(event) {
    const item = event.detail.item;
    if (item) {
      if (item.name === 'gymRegister') {
        $goto('./register/gym') 
      }
      if (item.name === 'ptRegister') { 
        $goto('./register/pro') 
      }
      if (item.name === 'userRegister') {
        window.location = 'http://localhost:8080/auth/realms/Tesi/login-actions/registration?client_id=browser-login&tab_id=PQYagmNLTAw';
      }
    }
  }
  $: console.log($userState);
</script>

<style>
  .links {
    display: flex;
    align-items: center;
  }
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
      border-bottom: 2px solid grey;
    }

    .navBarLogoHolder {
      float: left;
      margin-left: 50px;
      width: 65px;
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
    }

    .links {
      transition: 0.5s;
    }
    .links:hover {
      background-color: #111;
      color: rgb(201, 201, 201);
    }

    .selected {
      border-bottom: 4px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(to left, #333, maroon, #333);
    }
  }
</style>

<svelte:window bind:innerWidth />

<div class="navBarWrapper">
  
  {#if innerWidth > 768}
    <ul class="navBarUl">
        {#each links as [path, name, src]}
          <div class="links" class:selected={$isActive(path)}>
            <img {src} alt="{src}" style="width: 20px; padding-left: 10px;"/>
            <li on:click={() => activeMenu = false}>
              <a href={$url(path)}>{name}</a>
            </li>
          </div>
        {/each}
    </ul>
  {/if}
  <div class="navBarLogoHolder">
    <img src="loogo.png" alt="logo" style="width: 120px"/>
  </div>
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
  <div class="listWrapper">
    <ul class="navBarUl">

      {#if $userState.isLoggedIn && $userState.roles.includes('gym_owner', 'gym_manager', 'pt_owner')}
        <li class="links">
          <a href={$url('./admin')}>
            {$_('navbar.adminPage')}
          </a>
        </li>
      {/if}
      <li><LanguageSelector /></li>
     
      {#if innerWidth < 768}
        {#each links as [path, name]}
          <div class="links" class:selected={$isActive(path)}>
            <li on:click={() => activeMenu = false}>
              <a href={$url(path)}>{name}</a>
            </li>
          </div>
        {/each}
      {/if}
      {#if !$userState.isLoggedIn}
        <li class="links">
          <a href={`http://localhost:8080/auth/realms/Tesi/protocol/openid-connect/auth?response_type=token&client_id=browser-login&redirect_uri=http://localhost:5000&login=true&scope=openid&nonce=${Date.now()}`} 
            on:click={userState.checkUserState()}>{$_('navbar.login')}
          </a>
        </li>
      {/if}
      
      {#if $userState.isLoggedIn}
        <li class="links">
            <a href={"http://localhost:8080/auth/realms/Tesi/protocol/openid-connect/logout?client_id=browser-login&redirect_uri=http://localhost:5000"} 
              on:click={() => window.localStorage.clear()}>{$_('navbar.logout')}
            </a>
        </li>
      {/if}
      
      <li>
        <DropdownMenu 
          menuitems={[
            { name: 'userRegister', label: $_('navbar.userReg')},
            { name: 'gymRegister', label: $_('navbar.gymReg')},
            { name: 'ptRegister', label: $_('navbar.ptReg')},
          ]} 
          on:itemSelected={handleRegistrationClick} id='info_menu' dark>
          <div class="dropdown-button">
            <span style="padding-right:10px; padding-left:5px;  pointer-events: none;">{$_('navbar.register')}</span>
          </div>
        </DropdownMenu>
      </li>
    </ul>
    {#if innerWidth < 768}
      <span
        class="closeSpan"
        on:click={() => { activeMenu = !activeMenu; }}>&#10006;
      </span>
    {/if}
  </div>
  {/if}
</div>
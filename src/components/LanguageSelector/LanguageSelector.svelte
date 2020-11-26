<script>
  import { locale } from 'svelte-i18n';
  import Dropdown from '../DropdownSingle/DropdownSingle.svelte';
  $: localStorage.setItem('lang', $locale);

  const items = [
    { value: 'default', label: 'Default' },
    { value: 'en', label: 'English' },
    { value: 'hu', label: 'Magyar' },
  ];
</script>

<Dropdown {items} bind:selected={$locale}/>
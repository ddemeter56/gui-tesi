<script>
  import { locale } from 'svelte-i18n';

  $: localStorage.setItem('lang', $locale);

  const items = [
    { value: 'default', label: 'Default' },
    { value: 'en', label: 'English' },
    { value: 'hu', label: 'Magyar' },
  ];
  let selected;
</script>

<select bind:value={$locale}>
  {#each items as { value, label }}
    <option {value}>{label || value}</option>
  {/each}
</select>
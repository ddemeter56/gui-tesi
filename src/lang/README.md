Hardcoded texts must be put in *en.json* and *hu.json*. New languages can be picked over the time.

**Example of usage in App.svelte**

```jsx
<script>
	import { _ } from "svelte-i18n";
	import { i18n } from "./lang/i18n";
	import LanguageSelector from './components/LanguageSelector/LanguageSelector.svelte';
	i18n();
</script>

<LanguageSelector />
<main>
	{$_('tst.msg')}
</main>
```
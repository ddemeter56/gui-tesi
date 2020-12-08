<script>
	import { _ } from "svelte-i18n";
	import { i18n } from "./lang/i18n";
	import LanguageSelector from './components/LanguageSelector/LanguageSelector.svelte';
	import NotificationDisplay from './components/Notifier/Notifications.svelte';
	import GymForm from './components/GymForm/GymForm.svelte';
	
	i18n();

</script>

<LanguageSelector />
<main>
	{$_('tst.msg')}
</main>

<GymForm />
<NotificationDisplay/>

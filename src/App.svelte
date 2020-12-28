<script>
	import { _ } from "svelte-i18n";
	import { i18n } from "./lang/i18n";
	import NotificationDisplay from './components/Notifier/Notifications.svelte';
	import GymForm from './components/GymForm/GymForm.svelte';
	
	i18n();

</script>

<GymForm />
<NotificationDisplay/>

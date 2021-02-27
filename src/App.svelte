<script>
	import { _ } from "svelte-i18n";
	import { i18n } from "./lang/i18n";
	import NavigationBar from './components/NavigationBar/NavigationBar.svelte';
	import NotificationDisplay from './components/Notifier/Notifications.svelte';
	import { Router } from "@sveltech/routify";
	import { routes } from "@sveltech/routify/tmp/routes.js";

	i18n();

</script>
<NotificationDisplay/>
<Router {routes} />

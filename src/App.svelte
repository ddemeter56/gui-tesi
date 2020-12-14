<script>
	import { _ } from "svelte-i18n";
	import { i18n } from "./lang/i18n";
	import LanguageSelector from "./components/LanguageSelector/LanguageSelector.svelte";
	import NotificationDisplay from "./components/Notifier/Notifications.svelte";
	import GymForm from "./components/GymForm/GymForm.svelte";
	import Router from 'svelte-spa-router';
	// Import the list of routes
	import routes from "./routes";
	i18n();
</script>

<LanguageSelector />
<main>{$_('tst.msg')}</main>


<NotificationDisplay />

<Router {routes} />
<ul>
	<li><a href="#/">Home</a></li>
	<li><a href="#/hello/svelte">Say hi!</a></li>
	<li><a href="#/wild/card">Wildcard route</a></li>
	<li><a href="#/does/not/exist">Not found</a></li>
</ul>



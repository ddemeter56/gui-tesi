
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, C as validate_store, D as component_subscribe, v as validate_slots, a6 as route, j as element, b as space, p as text, k as add_location, e as insert_dev, q as append_dev, r as set_data_dev, n as noop, h as detach_dev } from './main-dec264ed.js';

/* src\pages\_fallback.svelte generated by Svelte v3.29.7 */
const file = "src\\pages\\_fallback.svelte";

function create_fragment(ctx) {
	let h1;
	let t1;
	let h3;
	let t2;
	let code;
	let t3_value = /*$route*/ ctx[0].leftover + "";
	let t3;
	let t4;

	const block = {
		c: function create() {
			h1 = element("h1");
			h1.textContent = "404: This content is missing";
			t1 = space();
			h3 = element("h3");
			t2 = text("The entered URL ");
			code = element("code");
			t3 = text(t3_value);
			t4 = text(" does not exists");
			add_location(h1, file, 3, 0, 69);
			add_location(code, file, 4, 20, 128);
			add_location(h3, file, 4, 0, 108);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, h3, anchor);
			append_dev(h3, t2);
			append_dev(h3, code);
			append_dev(code, t3);
			append_dev(h3, t4);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$route*/ 1 && t3_value !== (t3_value = /*$route*/ ctx[0].leftover + "")) set_data_dev(t3, t3_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(h3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let $route;
	validate_store(route, "route");
	component_subscribe($$self, route, $$value => $$invalidate(0, $route = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Fallback", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Fallback> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ route, $route });
	return [$route];
}

class Fallback extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Fallback",
			options,
			id: create_fragment.name
		});
	}
}

export default Fallback;
//# sourceMappingURL=_fallback-66969184.js.map


(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { w as writable, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, l as handle_promise, v as validate_slots, o as empty, e as insert_dev, n as noop, h as detach_dev, j as element, p as text, k as add_location, q as append_dev, r as set_data_dev } from './main-dec264ed.js';
import { g as getData } from './backendComm-dd574ec8.js';

function createGymPageLoader() {
	const { subscribe } = writable(null);

	return {
		subscribe,
		loadGym: (id) => getData(`http://localhost/api/public/gym/${id}`).then((result) => {
      console.log(result);
      return result;
    })
  }
}

const gymPageLoader = createGymPageLoader();

/* src\pages\gym\[slug].svelte generated by Svelte v3.29.7 */
const file = "src\\pages\\gym\\[slug].svelte";

// (1:0) <script>     import { gymPageLoader }
function create_catch_block(ctx) {
	const block = { c: noop, m: noop, p: noop, d: noop };

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_catch_block.name,
		type: "catch",
		source: "(1:0) <script>     import { gymPageLoader }",
		ctx
	});

	return block;
}

// (11:0) {:then}
function create_then_block(ctx) {
	let h1;
	let t0;
	let code;
	let t1;

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Selected gym id is :  ");
			code = element("code");
			t1 = text(/*slug*/ ctx[0]);
			add_location(code, file, 11, 26, 213);
			add_location(h1, file, 11, 0, 187);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			append_dev(h1, code);
			append_dev(code, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*slug*/ 1) set_data_dev(t1, /*slug*/ ctx[0]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_then_block.name,
		type: "then",
		source: "(11:0) {:then}",
		ctx
	});

	return block;
}

// (9:16)  manó {:then}
function create_pending_block(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("manó");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_pending_block.name,
		type: "pending",
		source: "(9:16)  manó {:then}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let await_block_anchor;
	let promise;

	let info = {
		ctx,
		current: null,
		token: null,
		hasCatch: false,
		pending: create_pending_block,
		then: create_then_block,
		catch: create_catch_block
	};

	handle_promise(promise = /*gymData*/ ctx[1], info);

	const block = {
		c: function create() {
			await_block_anchor = empty();
			info.block.c();
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, await_block_anchor, anchor);
			info.block.m(target, info.anchor = anchor);
			info.mount = () => await_block_anchor.parentNode;
			info.anchor = await_block_anchor;
		},
		p: function update(new_ctx, [dirty]) {
			ctx = new_ctx;

			{
				const child_ctx = ctx.slice();
				info.block.p(child_ctx, dirty);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(await_block_anchor);
			info.block.d(detaching);
			info.token = null;
			info = null;
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
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bslugu5D", slots, []);
	let { slug } = $$props;
	let gymData = gymPageLoader.loadGym(slug);
	const writable_props = ["slug"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("slug" in $$props) $$invalidate(0, slug = $$props.slug);
	};

	$$self.$capture_state = () => ({ gymPageLoader, slug, gymData });

	$$self.$inject_state = $$props => {
		if ("slug" in $$props) $$invalidate(0, slug = $$props.slug);
		if ("gymData" in $$props) $$invalidate(1, gymData = $$props.gymData);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [slug, gymData];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { slug: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*slug*/ ctx[0] === undefined && !("slug" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'slug'");
		}
	}

	get slug() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
//# sourceMappingURL=[slug]-c032bf04.js.map

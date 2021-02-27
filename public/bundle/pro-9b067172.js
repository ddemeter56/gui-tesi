
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { w as writable, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, P as validate_each_argument, A as validate_store, _ as te, B as component_subscribe, v as validate_slots, a as create_component, m as mount_component, t as transition_in, f as transition_out, g as destroy_component, C as empty, e as insert_dev, D as group_outros, E as check_outros, T as destroy_each, h as detach_dev, M as select_multiple_value, b as space, I as binding_callbacks, J as bind, j as element, l as text, k as add_location, o as append_dev, p as set_data_dev, Z as prop_dev, Q as add_render_callback, R as select_options, G as listen_dev, n as noop, O as add_flush_callback, V as DropdownSingle, a0 as run_all, a1 as select_value, a2 as select_option, L as set_style, W as globals, x as attr_dev, $ as is_function, K as handle_promise } from './main-896ad822.js';
import { g as getData, p as postData, L as Label, I as Input } from './backendComm-94668a92.js';
import { n as notifyStore, W as Wizard, S as Step } from './Step-b1945dae.js';

const ptInfos = {
  "personalTrainer": [
    {   
      "value":"firstName",
      "inputType":"Input",
      "maxLength":75,
      "required":true,
      "label":"First name",
      "type":"C",  
    },
    {   
      "value":"lastName",
      "inputType":"Input",
      "maxLength":75,
      "required":true,
      "label":"Last name",
      "type":"C",  
    },
    {   
      "value":"email",
      "inputType":"Input",
      "maxLength":100,
      "required":false,
      "label":"Email",
      "type":"C",  
    },
    {   
      "value":"phoneNumber",
      "inputType":"Input",
      "maxLength":25,
      "required":false,
      "label":"Phone number",
      "type":"C",  
    },
    {   
      "value":"languageCodes",
      "inputType":"Dropdown",
      "maxLength":75,
      "required":true,
      "label":"Spoken languages",
      "type":"C",  
    },
    {   
      "value":"description",
      "inputType":"Input",
      "maxLength":3500,
      "required":true,
      "label":"Description",
      "type":"C",  
    },

    {   
      "value":"shortDescription",
      "inputType":"Input",
      "maxLength":150,
      "required":true,
      "label":"Short description",
      "type":"C",  
    },
    {   
      "value":"facebookUserId",
      "inputType":"Input",
      "maxLength":100,
      "required":false,
      "label":"Facebook user id",
      "type":"C",  
    },
    {   
      "value":"instagramUserId",
      "inputType":"Input",
      "maxLength":100,
      "required":false,
      "label":"Instagram user id",
      "type":"C",  
    },
    {   
      "value":"twitterUserId",
      "inputType":"Input",
      "maxLength":100,
      "required":false,
      "label":"Facebook user id",
      "type":"C",  
    },
    {   
      "value":"youtubeUserId",
      "inputType":"Input",
      "maxLength":100,
      "required":false,
      "label":"Facebook user id",
      "type":"C",  
    },
    {   
      "value":"webPageUserId",
      "inputType":"Input",
      "maxLength":100,
      "required":false,
      "label":"Facebook user id",
      "type":"C",  
    },
  ]
};

function createPtCodes() {

  return {
    getLangCodes: () => getData('http://localhost/api/public/codes/language').then((result) => {
      return result;
    }),
    getSpecs: () => getData('http://localhost/api/public/codes/specialization').then((result) => {
      return result;
    }),
    getCertiGroups: () =>  getData('http://localhost/api/public/codes/certification/grouped').then((result) => {
      return result;
    })
  }
}



const ptCodes = createPtCodes();

function createGymStore() {
  const { subscribe } = writable(null);

  return {
    subscribe,
    submitForm: (oldForm) => postData('http://localhost/api/public/register/pt', convertForm(oldForm)).then((result) => {
      console.log(result);
      notifyStore.showNotify(result.error ? 'danger' : 'success', result.message);
    })
  };
}

const ptRegisterStore = createGymStore();

function convertForm(form) {
  let newForm = {};
  console.log(form);
  newForm.personalTrainer = form.personalTrainer;
  newForm.gymId = form.gymId;
  newForm.certifications = form.certifications;

  newForm.specializations = form.specializations.map(item => {

    let specPriceArray = [];
    form.ptPricing.map(price => {
      if ((item.name || item.customName) === price.selectedSpecialization) {
        specPriceArray.push(price);
      }
    });

    if (specPriceArray.length > 0) {
      return { specialization: item, pricing: specPriceArray };
    }

    return { specialization: item };
  });

  newForm.ptPricing = form.ptPricing.filter((i) => {
    if (i.selectedSpecialization === 'generalPricing') {
      console.log(i);
      return i;
    }
  });


  console.log(newForm);
  return newForm;
}

/* src\components\PtForm\General.svelte generated by Svelte v3.29.7 */
const file = "src\\components\\PtForm\\General.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	child_ctx[7] = list;
	child_ctx[8] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (26:46) 
function create_if_block_1(ctx) {
	let select;
	let mounted;
	let dispose;
	let each_value_1 = /*langCodes*/ ctx[2].languages;
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const block = {
		c: function create() {
			select = element("select");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			select.multiple = true;
			if (/*ptGeneralData*/ ctx[0].languageCodes === void 0) add_render_callback(() => /*select_change_handler*/ ctx[5].call(select));
			add_location(select, file, 26, 8, 664);
		},
		m: function mount(target, anchor) {
			insert_dev(target, select, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			select_options(select, /*ptGeneralData*/ ctx[0].languageCodes);

			if (!mounted) {
				dispose = listen_dev(select, "change", /*select_change_handler*/ ctx[5]);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*langCodes*/ 4) {
				each_value_1 = /*langCodes*/ ctx[2].languages;
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}

			if (dirty & /*ptGeneralData, langCodes*/ 5) {
				select_options(select, /*ptGeneralData*/ ctx[0].languageCodes);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(select);
			destroy_each(each_blocks, detaching);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(26:46) ",
		ctx
	});

	return block;
}

// (20:6) {#if item.inputType === 'Input'}
function create_if_block(ctx) {
	let input;
	let updating_value;
	let current;

	function input_value_binding(value) {
		/*input_value_binding*/ ctx[4].call(null, value, /*item*/ ctx[6]);
	}

	let input_props = {
		type: /*item*/ ctx[6].type,
		required: /*item*/ ctx[6].required,
		length: /*item*/ ctx[6].maxLength
	};

	if (/*ptGeneralData*/ ctx[0][/*item*/ ctx[6].value] !== void 0) {
		input_props.value = /*ptGeneralData*/ ctx[0][/*item*/ ctx[6].value];
	}

	input = new Input({ props: input_props, $$inline: true });
	binding_callbacks.push(() => bind(input, "value", input_value_binding));

	const block = {
		c: function create() {
			create_component(input.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(input, target, anchor);
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			const input_changes = {};
			if (dirty & /*ptGeneralCols*/ 2) input_changes.type = /*item*/ ctx[6].type;
			if (dirty & /*ptGeneralCols*/ 2) input_changes.required = /*item*/ ctx[6].required;
			if (dirty & /*ptGeneralCols*/ 2) input_changes.length = /*item*/ ctx[6].maxLength;

			if (!updating_value && dirty & /*ptGeneralData, ptGeneralCols*/ 3) {
				updating_value = true;
				input_changes.value = /*ptGeneralData*/ ctx[0][/*item*/ ctx[6].value];
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(input, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(20:6) {#if item.inputType === 'Input'}",
		ctx
	});

	return block;
}

// (28:10) {#each langCodes.languages as lang}
function create_each_block_1(ctx) {
	let option;
	let t_value = /*lang*/ ctx[9].name + "";
	let t;
	let option_value_value;

	const block = {
		c: function create() {
			option = element("option");
			t = text(t_value);
			option.__value = option_value_value = /*lang*/ ctx[9].code;
			option.value = option.__value;
			add_location(option, file, 28, 14, 783);
		},
		m: function mount(target, anchor) {
			insert_dev(target, option, anchor);
			append_dev(option, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*langCodes*/ 4 && t_value !== (t_value = /*lang*/ ctx[9].name + "")) set_data_dev(t, t_value);

			if (dirty & /*langCodes*/ 4 && option_value_value !== (option_value_value = /*lang*/ ctx[9].code)) {
				prop_dev(option, "__value", option_value_value);
				option.value = option.__value;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(option);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(28:10) {#each langCodes.languages as lang}",
		ctx
	});

	return block;
}

// (19:4) <Label required={item.required} label={$_(`ptRegister.ptBasicStep.${item.value}`)}>
function create_default_slot(ctx) {
	let current_block_type_index;
	let if_block;
	let t;
	let current;
	const if_block_creators = [create_if_block, create_if_block_1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*item*/ ctx[6].inputType === "Input") return 0;
		if (/*item*/ ctx[6].inputType === "Dropdown") return 1;
		return -1;
	}

	if (~(current_block_type_index = select_block_type(ctx))) {
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			t = space();
		},
		m: function mount(target, anchor) {
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].m(target, anchor);
			}

			insert_dev(target, t, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if (~current_block_type_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				}
			} else {
				if (if_block) {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
				}

				if (~current_block_type_index) {
					if_block = if_blocks[current_block_type_index];

					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					} else {
						if_block.p(ctx, dirty);
					}

					transition_in(if_block, 1);
					if_block.m(t.parentNode, t);
				} else {
					if_block = null;
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].d(detaching);
			}

			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(19:4) <Label required={item.required} label={$_(`ptRegister.ptBasicStep.${item.value}`)}>",
		ctx
	});

	return block;
}

// (18:0) {#each ptGeneralCols as item}
function create_each_block(ctx) {
	let label;
	let current;

	label = new Label({
			props: {
				required: /*item*/ ctx[6].required,
				label: /*$_*/ ctx[3](`ptRegister.ptBasicStep.${/*item*/ ctx[6].value}`),
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};
			if (dirty & /*ptGeneralCols*/ 2) label_changes.required = /*item*/ ctx[6].required;
			if (dirty & /*$_, ptGeneralCols*/ 10) label_changes.label = /*$_*/ ctx[3](`ptRegister.ptBasicStep.${/*item*/ ctx[6].value}`);

			if (dirty & /*$$scope, ptGeneralCols, ptGeneralData, langCodes*/ 4103) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(18:0) {#each ptGeneralCols as item}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*ptGeneralCols*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*ptGeneralCols, $_, ptGeneralData, langCodes*/ 15) {
				each_value = /*ptGeneralCols*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
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
	let $_;
	validate_store(te, "_");
	component_subscribe($$self, te, $$value => $$invalidate(3, $_ = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("General", slots, []);
	let { ptGeneralData } = $$props;
	let { ptGeneralCols } = $$props;
	let { langCodes } = $$props;
	ptGeneralData.languageCodes = ["hu"];
	const writable_props = ["ptGeneralData", "ptGeneralCols", "langCodes"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<General> was created with unknown prop '${key}'`);
	});

	function input_value_binding(value, item) {
		ptGeneralData[item.value] = value;
		$$invalidate(0, ptGeneralData);
	}

	function select_change_handler() {
		ptGeneralData.languageCodes = select_multiple_value(this);
		$$invalidate(0, ptGeneralData);
		$$invalidate(2, langCodes);
	}

	$$self.$$set = $$props => {
		if ("ptGeneralData" in $$props) $$invalidate(0, ptGeneralData = $$props.ptGeneralData);
		if ("ptGeneralCols" in $$props) $$invalidate(1, ptGeneralCols = $$props.ptGeneralCols);
		if ("langCodes" in $$props) $$invalidate(2, langCodes = $$props.langCodes);
	};

	$$self.$capture_state = () => ({
		_: te,
		Label,
		Input,
		ptGeneralData,
		ptGeneralCols,
		langCodes,
		$_
	});

	$$self.$inject_state = $$props => {
		if ("ptGeneralData" in $$props) $$invalidate(0, ptGeneralData = $$props.ptGeneralData);
		if ("ptGeneralCols" in $$props) $$invalidate(1, ptGeneralCols = $$props.ptGeneralCols);
		if ("langCodes" in $$props) $$invalidate(2, langCodes = $$props.langCodes);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		ptGeneralData,
		ptGeneralCols,
		langCodes,
		$_,
		input_value_binding,
		select_change_handler
	];
}

class General extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			ptGeneralData: 0,
			ptGeneralCols: 1,
			langCodes: 2
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "General",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*ptGeneralData*/ ctx[0] === undefined && !("ptGeneralData" in props)) {
			console.warn("<General> was created without expected prop 'ptGeneralData'");
		}

		if (/*ptGeneralCols*/ ctx[1] === undefined && !("ptGeneralCols" in props)) {
			console.warn("<General> was created without expected prop 'ptGeneralCols'");
		}

		if (/*langCodes*/ ctx[2] === undefined && !("langCodes" in props)) {
			console.warn("<General> was created without expected prop 'langCodes'");
		}
	}

	get ptGeneralData() {
		throw new Error("<General>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ptGeneralData(value) {
		throw new Error("<General>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get ptGeneralCols() {
		throw new Error("<General>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ptGeneralCols(value) {
		throw new Error("<General>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get langCodes() {
		throw new Error("<General>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set langCodes(value) {
		throw new Error("<General>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\components\PtForm\Certifications.svelte generated by Svelte v3.29.7 */
const file$1 = "src\\components\\PtForm\\Certifications.svelte";

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[15] = list[i];
	child_ctx[16] = list;
	child_ctx[17] = i;
	return child_ctx;
}

function get_each_context_1$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[18] = list[i];
	return child_ctx;
}

// (30:0) <Label required label={$_('ptRegister.ptCertiStep.categories')}>
function create_default_slot_2(ctx) {
	let dropdown;
	let updating_selected;
	let current;

	function dropdown_selected_binding(value) {
		/*dropdown_selected_binding*/ ctx[10].call(null, value);
	}

	let dropdown_props = { items: /*groups*/ ctx[1] };

	if (/*selectedGroup*/ ctx[2] !== void 0) {
		dropdown_props.selected = /*selectedGroup*/ ctx[2];
	}

	dropdown = new DropdownSingle({ props: dropdown_props, $$inline: true });
	binding_callbacks.push(() => bind(dropdown, "selected", dropdown_selected_binding));

	const block = {
		c: function create() {
			create_component(dropdown.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(dropdown, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const dropdown_changes = {};
			if (dirty & /*groups*/ 2) dropdown_changes.items = /*groups*/ ctx[1];

			if (!updating_selected && dirty & /*selectedGroup*/ 4) {
				updating_selected = true;
				dropdown_changes.selected = /*selectedGroup*/ ctx[2];
				add_flush_callback(() => updating_selected = false);
			}

			dropdown.$set(dropdown_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(dropdown.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(dropdown.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(dropdown, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(30:0) <Label required label={$_('ptRegister.ptCertiStep.categories')}>",
		ctx
	});

	return block;
}

// (34:0) {#if selectedGroup}
function create_if_block_2(ctx) {
	let label;
	let t0;
	let button0;
	let t1_value = /*$_*/ ctx[6]("ptRegister.ptCertiStep.addCerti") + "";
	let t1;
	let t2;
	let button1;

	let t3_value = (/*customVisible*/ ctx[5]
	? /*$_*/ ctx[6]("ptRegister.ptCertiStep.hideCustom")
	: /*$_*/ ctx[6]("ptRegister.ptCertiStep.showCustom")) + "";

	let t3;
	let current;
	let mounted;
	let dispose;

	label = new Label({
			props: {
				required: true,
				label: /*$_*/ ctx[6]("ptRegister.ptCertiStep.categoryCerties"),
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t0 = space();
			button0 = element("button");
			t1 = text(t1_value);
			t2 = space();
			button1 = element("button");
			t3 = text(t3_value);
			add_location(button0, file$1, 41, 2, 1203);
			add_location(button1, file$1, 42, 2, 1294);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, button0, anchor);
			append_dev(button0, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, button1, anchor);
			append_dev(button1, t3);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*addToSelectedCerties*/ ctx[7], false, false, false),
					listen_dev(button1, "click", /*click_handler*/ ctx[12], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			const label_changes = {};
			if (dirty & /*$_*/ 64) label_changes.label = /*$_*/ ctx[6]("ptRegister.ptCertiStep.categoryCerties");

			if (dirty & /*$$scope, actCerti, selectedGroup*/ 2097164) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
			if ((!current || dirty & /*$_*/ 64) && t1_value !== (t1_value = /*$_*/ ctx[6]("ptRegister.ptCertiStep.addCerti") + "")) set_data_dev(t1, t1_value);

			if ((!current || dirty & /*customVisible, $_*/ 96) && t3_value !== (t3_value = (/*customVisible*/ ctx[5]
			? /*$_*/ ctx[6]("ptRegister.ptCertiStep.hideCustom")
			: /*$_*/ ctx[6]("ptRegister.ptCertiStep.showCustom")) + "")) set_data_dev(t3, t3_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(button0);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(button1);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(34:0) {#if selectedGroup}",
		ctx
	});

	return block;
}

// (37:6) {#each selectedGroup as certi}
function create_each_block_1$1(ctx) {
	let option;

	let t_value = (/*certi*/ ctx[18].name === "rekreációs mozgásprogram-vezető"
	? /*certi*/ ctx[18].additional
	: /*certi*/ ctx[18].name) + "";

	let t;
	let option_value_value;

	const block = {
		c: function create() {
			option = element("option");
			t = text(t_value);
			option.__value = option_value_value = /*certi*/ ctx[18];
			option.value = option.__value;
			add_location(option, file$1, 37, 10, 1048);
		},
		m: function mount(target, anchor) {
			insert_dev(target, option, anchor);
			append_dev(option, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*selectedGroup*/ 4 && t_value !== (t_value = (/*certi*/ ctx[18].name === "rekreációs mozgásprogram-vezető"
			? /*certi*/ ctx[18].additional
			: /*certi*/ ctx[18].name) + "")) set_data_dev(t, t_value);

			if (dirty & /*selectedGroup*/ 4 && option_value_value !== (option_value_value = /*certi*/ ctx[18])) {
				prop_dev(option, "__value", option_value_value);
				option.value = option.__value;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(option);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1$1.name,
		type: "each",
		source: "(37:6) {#each selectedGroup as certi}",
		ctx
	});

	return block;
}

// (35:2) <Label required label={$_('ptRegister.ptCertiStep.categoryCerties')}>
function create_default_slot_1(ctx) {
	let select;
	let mounted;
	let dispose;
	let each_value_1 = /*selectedGroup*/ ctx[2];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
	}

	const block = {
		c: function create() {
			select = element("select");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			if (/*actCerti*/ ctx[3] === void 0) add_render_callback(() => /*select_change_handler*/ ctx[11].call(select));
			add_location(select, file$1, 35, 4, 970);
		},
		m: function mount(target, anchor) {
			insert_dev(target, select, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			select_option(select, /*actCerti*/ ctx[3]);

			if (!mounted) {
				dispose = listen_dev(select, "change", /*select_change_handler*/ ctx[11]);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*selectedGroup*/ 4) {
				each_value_1 = /*selectedGroup*/ ctx[2];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1$1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1$1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}

			if (dirty & /*actCerti, selectedGroup*/ 12) {
				select_option(select, /*actCerti*/ ctx[3]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(select);
			destroy_each(each_blocks, detaching);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(35:2) <Label required label={$_('ptRegister.ptCertiStep.categoryCerties')}>",
		ctx
	});

	return block;
}

// (46:0) {#if customVisible}
function create_if_block_1$1(ctx) {
	let hr;
	let t0;
	let input;
	let updating_value;
	let t1;
	let button;
	let t2_value = /*$_*/ ctx[6]("ptRegister.ptCertiStep.addCustom") + "";
	let t2;
	let current;
	let mounted;
	let dispose;

	function input_value_binding(value) {
		/*input_value_binding*/ ctx[13].call(null, value);
	}

	let input_props = { type: "C", length: 100 };

	if (/*customCerti*/ ctx[4] !== void 0) {
		input_props.value = /*customCerti*/ ctx[4];
	}

	input = new Input({ props: input_props, $$inline: true });
	binding_callbacks.push(() => bind(input, "value", input_value_binding));

	const block = {
		c: function create() {
			hr = element("hr");
			t0 = space();
			create_component(input.$$.fragment);
			t1 = space();
			button = element("button");
			t2 = text(t2_value);
			add_location(hr, file$1, 46, 2, 1490);
			add_location(button, file$1, 48, 2, 1558);
		},
		m: function mount(target, anchor) {
			insert_dev(target, hr, anchor);
			insert_dev(target, t0, anchor);
			mount_component(input, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, button, anchor);
			append_dev(button, t2);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*addCustom*/ ctx[8], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			const input_changes = {};

			if (!updating_value && dirty & /*customCerti*/ 16) {
				updating_value = true;
				input_changes.value = /*customCerti*/ ctx[4];
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
			if ((!current || dirty & /*$_*/ 64) && t2_value !== (t2_value = /*$_*/ ctx[6]("ptRegister.ptCertiStep.addCustom") + "")) set_data_dev(t2, t2_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(hr);
			if (detaching) detach_dev(t0);
			destroy_component(input, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1$1.name,
		type: "if",
		source: "(46:0) {#if customVisible}",
		ctx
	});

	return block;
}

// (53:0) {#if selectedCerties.length > 0}
function create_if_block$1(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*selectedCerties*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$_, selectedCerties*/ 65) {
				each_value = /*selectedCerties*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(53:0) {#if selectedCerties.length > 0}",
		ctx
	});

	return block;
}

// (55:4) <Label label={`${$_('gymRegister.gymFacilityStep.descFor')} ${selectedCerti.name || selectedCerti.customCertification}`}>
function create_default_slot$1(ctx) {
	let input;
	let updating_value;
	let current;

	function input_value_binding_1(value) {
		/*input_value_binding_1*/ ctx[14].call(null, value, /*selectedCerti*/ ctx[15]);
	}

	let input_props = { type: "C", length: 100 };

	if (/*selectedCerti*/ ctx[15].description !== void 0) {
		input_props.value = /*selectedCerti*/ ctx[15].description;
	}

	input = new Input({ props: input_props, $$inline: true });
	binding_callbacks.push(() => bind(input, "value", input_value_binding_1));

	const block = {
		c: function create() {
			create_component(input.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(input, target, anchor);
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			const input_changes = {};

			if (!updating_value && dirty & /*selectedCerties*/ 1) {
				updating_value = true;
				input_changes.value = /*selectedCerti*/ ctx[15].description;
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(input, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$1.name,
		type: "slot",
		source: "(55:4) <Label label={`${$_('gymRegister.gymFacilityStep.descFor')} ${selectedCerti.name || selectedCerti.customCertification}`}>",
		ctx
	});

	return block;
}

// (54:2) {#each selectedCerties as selectedCerti}
function create_each_block$1(ctx) {
	let label;
	let t;
	let hr;
	let current;

	label = new Label({
			props: {
				label: `${/*$_*/ ctx[6]("gymRegister.gymFacilityStep.descFor")} ${/*selectedCerti*/ ctx[15].name || /*selectedCerti*/ ctx[15].customCertification}`,
				$$slots: { default: [create_default_slot$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t = space();
			hr = element("hr");
			add_location(hr, file$1, 57, 4, 1946);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t, anchor);
			insert_dev(target, hr, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};
			if (dirty & /*$_, selectedCerties*/ 65) label_changes.label = `${/*$_*/ ctx[6]("gymRegister.gymFacilityStep.descFor")} ${/*selectedCerti*/ ctx[15].name || /*selectedCerti*/ ctx[15].customCertification}`;

			if (dirty & /*$$scope, selectedCerties*/ 2097153) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(hr);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$1.name,
		type: "each",
		source: "(54:2) {#each selectedCerties as selectedCerti}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let label;
	let t0;
	let t1;
	let t2;
	let hr;
	let t3;
	let if_block2_anchor;
	let current;

	label = new Label({
			props: {
				required: true,
				label: /*$_*/ ctx[6]("ptRegister.ptCertiStep.categories"),
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	let if_block0 = /*selectedGroup*/ ctx[2] && create_if_block_2(ctx);
	let if_block1 = /*customVisible*/ ctx[5] && create_if_block_1$1(ctx);
	let if_block2 = /*selectedCerties*/ ctx[0].length > 0 && create_if_block$1(ctx);

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t0 = space();
			if (if_block0) if_block0.c();
			t1 = space();
			if (if_block1) if_block1.c();
			t2 = space();
			hr = element("hr");
			t3 = space();
			if (if_block2) if_block2.c();
			if_block2_anchor = empty();
			add_location(hr, file$1, 51, 0, 1644);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t0, anchor);
			if (if_block0) if_block0.m(target, anchor);
			insert_dev(target, t1, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, hr, anchor);
			insert_dev(target, t3, anchor);
			if (if_block2) if_block2.m(target, anchor);
			insert_dev(target, if_block2_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const label_changes = {};
			if (dirty & /*$_*/ 64) label_changes.label = /*$_*/ ctx[6]("ptRegister.ptCertiStep.categories");

			if (dirty & /*$$scope, groups, selectedGroup*/ 2097158) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);

			if (/*selectedGroup*/ ctx[2]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*selectedGroup*/ 4) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(t1.parentNode, t1);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*customVisible*/ ctx[5]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*customVisible*/ 32) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_1$1(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(t2.parentNode, t2);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (/*selectedCerties*/ ctx[0].length > 0) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty & /*selectedCerties*/ 1) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block$1(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			transition_in(if_block0);
			transition_in(if_block1);
			transition_in(if_block2);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			transition_out(if_block0);
			transition_out(if_block1);
			transition_out(if_block2);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t0);
			if (if_block0) if_block0.d(detaching);
			if (detaching) detach_dev(t1);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(hr);
			if (detaching) detach_dev(t3);
			if (if_block2) if_block2.d(detaching);
			if (detaching) detach_dev(if_block2_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let $_;
	validate_store(te, "_");
	component_subscribe($$self, te, $$value => $$invalidate(6, $_ = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Certifications", slots, []);
	let { certies } = $$props;
	let { selectedCerties } = $$props;
	let groups;
	let selectedGroup;
	let actCerti;
	let customCerti;
	let customVisible = false;

	// Duplikátumokat is hozzá lehet adni
	function addToSelectedCerties() {
		$$invalidate(0, selectedCerties = [...selectedCerties, actCerti]);
	}

	function addCustom() {
		$$invalidate(0, selectedCerties = [...selectedCerties, { "customCertification": customCerti }]);
	}

	const writable_props = ["certies", "selectedCerties"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Certifications> was created with unknown prop '${key}'`);
	});

	function dropdown_selected_binding(value) {
		selectedGroup = value;
		$$invalidate(2, selectedGroup);
	}

	function select_change_handler() {
		actCerti = select_value(this);
		$$invalidate(3, actCerti);
		$$invalidate(2, selectedGroup);
	}

	const click_handler = () => $$invalidate(5, customVisible = !customVisible);

	function input_value_binding(value) {
		customCerti = value;
		$$invalidate(4, customCerti);
	}

	function input_value_binding_1(value, selectedCerti) {
		selectedCerti.description = value;
		$$invalidate(0, selectedCerties);
	}

	$$self.$$set = $$props => {
		if ("certies" in $$props) $$invalidate(9, certies = $$props.certies);
		if ("selectedCerties" in $$props) $$invalidate(0, selectedCerties = $$props.selectedCerties);
	};

	$$self.$capture_state = () => ({
		_: te,
		Label,
		Input,
		Dropdown: DropdownSingle,
		certies,
		selectedCerties,
		groups,
		selectedGroup,
		actCerti,
		customCerti,
		customVisible,
		addToSelectedCerties,
		addCustom,
		$_
	});

	$$self.$inject_state = $$props => {
		if ("certies" in $$props) $$invalidate(9, certies = $$props.certies);
		if ("selectedCerties" in $$props) $$invalidate(0, selectedCerties = $$props.selectedCerties);
		if ("groups" in $$props) $$invalidate(1, groups = $$props.groups);
		if ("selectedGroup" in $$props) $$invalidate(2, selectedGroup = $$props.selectedGroup);
		if ("actCerti" in $$props) $$invalidate(3, actCerti = $$props.actCerti);
		if ("customCerti" in $$props) $$invalidate(4, customCerti = $$props.customCerti);
		if ("customVisible" in $$props) $$invalidate(5, customVisible = $$props.customVisible);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*certies*/ 512) {
			 $$invalidate(1, groups = certies.groups.map((i, index) => ({
				"label": i.group,
				index,
				"value": i.certifications
			})));
		}
	};

	return [
		selectedCerties,
		groups,
		selectedGroup,
		actCerti,
		customCerti,
		customVisible,
		$_,
		addToSelectedCerties,
		addCustom,
		certies,
		dropdown_selected_binding,
		select_change_handler,
		click_handler,
		input_value_binding,
		input_value_binding_1
	];
}

class Certifications extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { certies: 9, selectedCerties: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Certifications",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*certies*/ ctx[9] === undefined && !("certies" in props)) {
			console.warn("<Certifications> was created without expected prop 'certies'");
		}

		if (/*selectedCerties*/ ctx[0] === undefined && !("selectedCerties" in props)) {
			console.warn("<Certifications> was created without expected prop 'selectedCerties'");
		}
	}

	get certies() {
		throw new Error("<Certifications>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set certies(value) {
		throw new Error("<Certifications>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selectedCerties() {
		throw new Error("<Certifications>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selectedCerties(value) {
		throw new Error("<Certifications>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\components\PtForm\Specializations.svelte generated by Svelte v3.29.7 */
const file$2 = "src\\components\\PtForm\\Specializations.svelte";

function get_each_context$2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i];
	child_ctx[11] = list;
	child_ctx[12] = i;
	return child_ctx;
}

function get_each_context_1$2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	return child_ctx;
}

// (23:4) {#each specs.specializations as spec}
function create_each_block_1$2(ctx) {
	let option;
	let t_value = /*spec*/ ctx[13].name + "";
	let t;
	let option_value_value;

	const block = {
		c: function create() {
			option = element("option");
			t = text(t_value);
			option.__value = option_value_value = /*spec*/ ctx[13];
			option.value = option.__value;
			add_location(option, file$2, 23, 8, 536);
		},
		m: function mount(target, anchor) {
			insert_dev(target, option, anchor);
			append_dev(option, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*specs*/ 2 && t_value !== (t_value = /*spec*/ ctx[13].name + "")) set_data_dev(t, t_value);

			if (dirty & /*specs*/ 2 && option_value_value !== (option_value_value = /*spec*/ ctx[13])) {
				prop_dev(option, "__value", option_value_value);
				option.value = option.__value;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(option);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1$2.name,
		type: "each",
		source: "(23:4) {#each specs.specializations as spec}",
		ctx
	});

	return block;
}

// (21:0) <Label required label={$_('ptRegister.ptSpecStep.specs')}>
function create_default_slot_2$1(ctx) {
	let select;
	let mounted;
	let dispose;
	let each_value_1 = /*specs*/ ctx[1].specializations;
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$2(get_each_context_1$2(ctx, each_value_1, i));
	}

	const block = {
		c: function create() {
			select = element("select");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			set_style(select, "height", "50vh");
			select.multiple = true;
			if (/*selectedSpecs*/ ctx[0] === void 0) add_render_callback(() => /*select_change_handler*/ ctx[6].call(select));
			add_location(select, file$2, 21, 2, 421);
		},
		m: function mount(target, anchor) {
			insert_dev(target, select, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			select_options(select, /*selectedSpecs*/ ctx[0]);

			if (!mounted) {
				dispose = listen_dev(select, "change", /*select_change_handler*/ ctx[6]);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*specs*/ 2) {
				each_value_1 = /*specs*/ ctx[1].specializations;
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1$2(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1$2(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}

			if (dirty & /*selectedSpecs, specs*/ 3) {
				select_options(select, /*selectedSpecs*/ ctx[0]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(select);
			destroy_each(each_blocks, detaching);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$1.name,
		type: "slot",
		source: "(21:0) <Label required label={$_('ptRegister.ptSpecStep.specs')}>",
		ctx
	});

	return block;
}

// (32:2) <Label label={`${$_('gymRegister.gymFacilityStep.descFor')} ${selectedSpec.name || selectedSpec.customName}`}>
function create_default_slot_1$1(ctx) {
	let input;
	let updating_value;
	let current;

	function input_value_binding(value) {
		/*input_value_binding*/ ctx[7].call(null, value, /*selectedSpec*/ ctx[10]);
	}

	let input_props = { type: "C", length: 100 };

	if (/*selectedSpec*/ ctx[10].description !== void 0) {
		input_props.value = /*selectedSpec*/ ctx[10].description;
	}

	input = new Input({ props: input_props, $$inline: true });
	binding_callbacks.push(() => bind(input, "value", input_value_binding));

	const block = {
		c: function create() {
			create_component(input.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(input, target, anchor);
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			const input_changes = {};

			if (!updating_value && dirty & /*selectedSpecs*/ 1) {
				updating_value = true;
				input_changes.value = /*selectedSpec*/ ctx[10].description;
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(input, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$1.name,
		type: "slot",
		source: "(32:2) <Label label={`${$_('gymRegister.gymFacilityStep.descFor')} ${selectedSpec.name || selectedSpec.customName}`}>",
		ctx
	});

	return block;
}

// (31:0) {#each selectedSpecs as selectedSpec}
function create_each_block$2(ctx) {
	let label;
	let t;
	let hr;
	let current;

	label = new Label({
			props: {
				label: `${/*$_*/ ctx[4]("gymRegister.gymFacilityStep.descFor")} ${/*selectedSpec*/ ctx[10].name || /*selectedSpec*/ ctx[10].customName}`,
				$$slots: { default: [create_default_slot_1$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t = space();
			hr = element("hr");
			add_location(hr, file$2, 34, 2, 859);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t, anchor);
			insert_dev(target, hr, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};
			if (dirty & /*$_, selectedSpecs*/ 17) label_changes.label = `${/*$_*/ ctx[4]("gymRegister.gymFacilityStep.descFor")} ${/*selectedSpec*/ ctx[10].name || /*selectedSpec*/ ctx[10].customName}`;

			if (dirty & /*$$scope, selectedSpecs*/ 65537) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(hr);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$2.name,
		type: "each",
		source: "(31:0) {#each selectedSpecs as selectedSpec}",
		ctx
	});

	return block;
}

// (41:0) {#if showSpecOther}
function create_if_block$2(ctx) {
	let label;
	let t0;
	let button;
	let t1_value = /*$_*/ ctx[4]("ptRegister.ptCertiStep.addCustom") + "";
	let t1;
	let current;
	let mounted;
	let dispose;

	label = new Label({
			props: {
				label: /*$_*/ ctx[4]("ptRegister.ptSpecStep.specName"),
				$$slots: { default: [create_default_slot$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t0 = space();
			button = element("button");
			t1 = text(t1_value);
			add_location(button, file$2, 44, 4, 1206);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, button, anchor);
			append_dev(button, t1);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*addCustomSpec*/ ctx[5], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			const label_changes = {};
			if (dirty & /*$_*/ 16) label_changes.label = /*$_*/ ctx[4]("ptRegister.ptSpecStep.specName");

			if (dirty & /*$$scope, customName*/ 65544) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
			if ((!current || dirty & /*$_*/ 16) && t1_value !== (t1_value = /*$_*/ ctx[4]("ptRegister.ptCertiStep.addCustom") + "")) set_data_dev(t1, t1_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$2.name,
		type: "if",
		source: "(41:0) {#if showSpecOther}",
		ctx
	});

	return block;
}

// (42:4) <Label label={$_('ptRegister.ptSpecStep.specName')}>
function create_default_slot$2(ctx) {
	let input;
	let updating_value;
	let current;

	function input_value_binding_1(value) {
		/*input_value_binding_1*/ ctx[9].call(null, value);
	}

	let input_props = { type: "C", length: 50 };

	if (/*customName*/ ctx[3] !== void 0) {
		input_props.value = /*customName*/ ctx[3];
	}

	input = new Input({ props: input_props, $$inline: true });
	binding_callbacks.push(() => bind(input, "value", input_value_binding_1));

	const block = {
		c: function create() {
			create_component(input.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(input, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const input_changes = {};

			if (!updating_value && dirty & /*customName*/ 8) {
				updating_value = true;
				input_changes.value = /*customName*/ ctx[3];
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(input, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$2.name,
		type: "slot",
		source: "(42:4) <Label label={$_('ptRegister.ptSpecStep.specName')}>",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let label;
	let t0;
	let hr0;
	let t1;
	let t2;
	let hr1;
	let t3;
	let button;

	let t4_value = (/*showSpecOther*/ ctx[2]
	? /*$_*/ ctx[4]("ptRegister.ptCertiStep.hideCustom")
	: /*$_*/ ctx[4]("ptRegister.ptCertiStep.showCustom")) + "";

	let t4;
	let t5;
	let if_block_anchor;
	let current;
	let mounted;
	let dispose;

	label = new Label({
			props: {
				required: true,
				label: /*$_*/ ctx[4]("ptRegister.ptSpecStep.specs"),
				$$slots: { default: [create_default_slot_2$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	let each_value = /*selectedSpecs*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	let if_block = /*showSpecOther*/ ctx[2] && create_if_block$2(ctx);

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t0 = space();
			hr0 = element("hr");
			t1 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			hr1 = element("hr");
			t3 = space();
			button = element("button");
			t4 = text(t4_value);
			t5 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			add_location(hr0, file$2, 28, 0, 612);
			add_location(hr1, file$2, 37, 0, 874);
			add_location(button, file$2, 38, 0, 880);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, hr0, anchor);
			insert_dev(target, t1, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, t2, anchor);
			insert_dev(target, hr1, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, button, anchor);
			append_dev(button, t4);
			insert_dev(target, t5, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler*/ ctx[8], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			const label_changes = {};
			if (dirty & /*$_*/ 16) label_changes.label = /*$_*/ ctx[4]("ptRegister.ptSpecStep.specs");

			if (dirty & /*$$scope, selectedSpecs, specs*/ 65539) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);

			if (dirty & /*$_, selectedSpecs*/ 17) {
				each_value = /*selectedSpecs*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$2(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$2(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(t2.parentNode, t2);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if ((!current || dirty & /*showSpecOther, $_*/ 20) && t4_value !== (t4_value = (/*showSpecOther*/ ctx[2]
			? /*$_*/ ctx[4]("ptRegister.ptCertiStep.hideCustom")
			: /*$_*/ ctx[4]("ptRegister.ptCertiStep.showCustom")) + "")) set_data_dev(t4, t4_value);

			if (/*showSpecOther*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*showSpecOther*/ 4) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block$2(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(hr0);
			if (detaching) detach_dev(t1);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(hr1);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(button);
			if (detaching) detach_dev(t5);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let $_;
	validate_store(te, "_");
	component_subscribe($$self, te, $$value => $$invalidate(4, $_ = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Specializations", slots, []);
	let { specs } = $$props;
	let { selectedSpecs } = $$props;
	let showSpecOther = false;
	let customName;

	function addCustomSpec() {
		$$invalidate(0, selectedSpecs = [...selectedSpecs, { code: 1, customName }]);
	}

	const writable_props = ["specs", "selectedSpecs"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Specializations> was created with unknown prop '${key}'`);
	});

	function select_change_handler() {
		selectedSpecs = select_multiple_value(this);
		$$invalidate(0, selectedSpecs);
		$$invalidate(1, specs);
	}

	function input_value_binding(value, selectedSpec) {
		selectedSpec.description = value;
		$$invalidate(0, selectedSpecs);
	}

	const click_handler = () => {
		$$invalidate(2, showSpecOther = !showSpecOther);
	};

	function input_value_binding_1(value) {
		customName = value;
		$$invalidate(3, customName);
	}

	$$self.$$set = $$props => {
		if ("specs" in $$props) $$invalidate(1, specs = $$props.specs);
		if ("selectedSpecs" in $$props) $$invalidate(0, selectedSpecs = $$props.selectedSpecs);
	};

	$$self.$capture_state = () => ({
		_: te,
		Label,
		Input,
		specs,
		selectedSpecs,
		showSpecOther,
		customName,
		addCustomSpec,
		$_
	});

	$$self.$inject_state = $$props => {
		if ("specs" in $$props) $$invalidate(1, specs = $$props.specs);
		if ("selectedSpecs" in $$props) $$invalidate(0, selectedSpecs = $$props.selectedSpecs);
		if ("showSpecOther" in $$props) $$invalidate(2, showSpecOther = $$props.showSpecOther);
		if ("customName" in $$props) $$invalidate(3, customName = $$props.customName);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		selectedSpecs,
		specs,
		showSpecOther,
		customName,
		$_,
		addCustomSpec,
		select_change_handler,
		input_value_binding,
		click_handler,
		input_value_binding_1
	];
}

class Specializations extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { specs: 1, selectedSpecs: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Specializations",
			options,
			id: create_fragment$2.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*specs*/ ctx[1] === undefined && !("specs" in props)) {
			console.warn("<Specializations> was created without expected prop 'specs'");
		}

		if (/*selectedSpecs*/ ctx[0] === undefined && !("selectedSpecs" in props)) {
			console.warn("<Specializations> was created without expected prop 'selectedSpecs'");
		}
	}

	get specs() {
		throw new Error("<Specializations>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set specs(value) {
		throw new Error("<Specializations>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selectedSpecs() {
		throw new Error("<Specializations>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selectedSpecs(value) {
		throw new Error("<Specializations>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\components\PtForm\Pricing.svelte generated by Svelte v3.29.7 */

const { console: console_1 } = globals;
const file$3 = "src\\components\\PtForm\\Pricing.svelte";

function get_each_context$3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[15] = list[i];
	return child_ctx;
}

function get_each_context_1$3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[18] = list[i];
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[18] = list[i];
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[23] = list[i].name;
	child_ctx[24] = list[i].customName;
	return child_ctx;
}

// (81:4) {#each selectedSpecializations as { name, customName }}
function create_each_block_3(ctx) {
	let option;
	let t_value = (/*name*/ ctx[23] || /*customName*/ ctx[24]) + "";
	let t;
	let option_value_value;

	const block = {
		c: function create() {
			option = element("option");
			t = text(t_value);

			option.__value = option_value_value = /*name*/ ctx[23]
			? /*name*/ ctx[23]
			: /*customName*/ ctx[24];

			option.value = option.__value;
			add_location(option, file$3, 81, 6, 2440);
		},
		m: function mount(target, anchor) {
			insert_dev(target, option, anchor);
			append_dev(option, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*selectedSpecializations*/ 2 && t_value !== (t_value = (/*name*/ ctx[23] || /*customName*/ ctx[24]) + "")) set_data_dev(t, t_value);

			if (dirty & /*selectedSpecializations*/ 2 && option_value_value !== (option_value_value = /*name*/ ctx[23]
			? /*name*/ ctx[23]
			: /*customName*/ ctx[24])) {
				prop_dev(option, "__value", option_value_value);
				option.value = option.__value;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(option);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_3.name,
		type: "each",
		source: "(81:4) {#each selectedSpecializations as { name, customName }}",
		ctx
	});

	return block;
}

// (78:0) <Label label={$_('ptRegister.ptPricingStep.selectedSpecs')}>
function create_default_slot_5(ctx) {
	let select;
	let option;
	let t_value = /*$_*/ ctx[4]("gymRegister.gymPricing.generalPricing") + "";
	let t;
	let option_value_value;
	let mounted;
	let dispose;
	let each_value_3 = /*selectedSpecializations*/ ctx[1];
	validate_each_argument(each_value_3);
	let each_blocks = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
	}

	const block = {
		c: function create() {
			select = element("select");
			option = element("option");
			t = text(t_value);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			option.__value = option_value_value = "generalPricing";
			option.value = option.__value;
			add_location(option, file$3, 79, 4, 2286);
			if (/*actPrice*/ ctx[2].selectedSpecialization === void 0) add_render_callback(() => /*select_change_handler*/ ctx[9].call(select));
			add_location(select, file$3, 78, 2, 2228);
		},
		m: function mount(target, anchor) {
			insert_dev(target, select, anchor);
			append_dev(select, option);
			append_dev(option, t);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			select_option(select, /*actPrice*/ ctx[2].selectedSpecialization);

			if (!mounted) {
				dispose = listen_dev(select, "change", /*select_change_handler*/ ctx[9]);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$_*/ 16 && t_value !== (t_value = /*$_*/ ctx[4]("gymRegister.gymPricing.generalPricing") + "")) set_data_dev(t, t_value);

			if (dirty & /*selectedSpecializations*/ 2) {
				each_value_3 = /*selectedSpecializations*/ ctx[1];
				validate_each_argument(each_value_3);
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_3(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_3.length;
			}

			if (dirty & /*actPrice, selectedSpecializations*/ 6) {
				select_option(select, /*actPrice*/ ctx[2].selectedSpecialization);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(select);
			destroy_each(each_blocks, detaching);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5.name,
		type: "slot",
		source: "(78:0) <Label label={$_('ptRegister.ptPricingStep.selectedSpecs')}>",
		ctx
	});

	return block;
}

// (88:0) <Label label={$_("gymRegister.gymPricing.categoryType")}>
function create_default_slot_4(ctx) {
	let dropdown;
	let updating_selected;
	let current;

	function dropdown_selected_binding(value) {
		/*dropdown_selected_binding*/ ctx[10].call(null, value);
	}

	let dropdown_props = { items: /*categories*/ ctx[5] };

	if (/*actPrice*/ ctx[2].categoryType !== void 0) {
		dropdown_props.selected = /*actPrice*/ ctx[2].categoryType;
	}

	dropdown = new DropdownSingle({ props: dropdown_props, $$inline: true });
	binding_callbacks.push(() => bind(dropdown, "selected", dropdown_selected_binding));

	const block = {
		c: function create() {
			create_component(dropdown.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(dropdown, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const dropdown_changes = {};
			if (dirty & /*categories*/ 32) dropdown_changes.items = /*categories*/ ctx[5];

			if (!updating_selected && dirty & /*actPrice*/ 4) {
				updating_selected = true;
				dropdown_changes.selected = /*actPrice*/ ctx[2].categoryType;
				add_flush_callback(() => updating_selected = false);
			}

			dropdown.$set(dropdown_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(dropdown.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(dropdown.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(dropdown, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4.name,
		type: "slot",
		source: "(88:0) <Label label={$_(\\\"gymRegister.gymPricing.categoryType\\\")}>",
		ctx
	});

	return block;
}

// (92:0) <Label label={$_("gymRegister.gymPricing.ticketType")}>
function create_default_slot_3(ctx) {
	let input;
	let updating_value;
	let current;

	function input_value_binding(value) {
		/*input_value_binding*/ ctx[11].call(null, value);
	}

	let input_props = { type: "C" };

	if (/*actPrice*/ ctx[2].ticketType !== void 0) {
		input_props.value = /*actPrice*/ ctx[2].ticketType;
	}

	input = new Input({ props: input_props, $$inline: true });
	binding_callbacks.push(() => bind(input, "value", input_value_binding));

	const block = {
		c: function create() {
			create_component(input.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(input, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const input_changes = {};

			if (!updating_value && dirty & /*actPrice*/ 4) {
				updating_value = true;
				input_changes.value = /*actPrice*/ ctx[2].ticketType;
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(input, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(92:0) <Label label={$_(\\\"gymRegister.gymPricing.ticketType\\\")}>",
		ctx
	});

	return block;
}

// (96:0) <Label label={$_("gymRegister.gymPricing.amount")}>
function create_default_slot_2$2(ctx) {
	let input;
	let updating_value;
	let current;

	function input_value_binding_1(value) {
		/*input_value_binding_1*/ ctx[12].call(null, value);
	}

	let input_props = { type: "N" };

	if (/*actPrice*/ ctx[2].amount !== void 0) {
		input_props.value = /*actPrice*/ ctx[2].amount;
	}

	input = new Input({ props: input_props, $$inline: true });
	binding_callbacks.push(() => bind(input, "value", input_value_binding_1));

	const block = {
		c: function create() {
			create_component(input.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(input, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const input_changes = {};

			if (!updating_value && dirty & /*actPrice*/ 4) {
				updating_value = true;
				input_changes.value = /*actPrice*/ ctx[2].amount;
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(input, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$2.name,
		type: "slot",
		source: "(96:0) <Label label={$_(\\\"gymRegister.gymPricing.amount\\\")}>",
		ctx
	});

	return block;
}

// (100:0) <Label label={$_("gymRegister.gymPricing.currency")}>
function create_default_slot_1$2(ctx) {
	let input;
	let updating_value;
	let current;

	function input_value_binding_2(value) {
		/*input_value_binding_2*/ ctx[13].call(null, value);
	}

	let input_props = { type: "C" };

	if (/*actPrice*/ ctx[2].currency !== void 0) {
		input_props.value = /*actPrice*/ ctx[2].currency;
	}

	input = new Input({ props: input_props, $$inline: true });
	binding_callbacks.push(() => bind(input, "value", input_value_binding_2));

	const block = {
		c: function create() {
			create_component(input.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(input, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const input_changes = {};

			if (!updating_value && dirty & /*actPrice*/ 4) {
				updating_value = true;
				input_changes.value = /*actPrice*/ ctx[2].currency;
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(input, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$2.name,
		type: "slot",
		source: "(100:0) <Label label={$_(\\\"gymRegister.gymPricing.currency\\\")}>",
		ctx
	});

	return block;
}

// (104:0) <Label label={$_("gymRegister.gymPricing.validForDays")}>
function create_default_slot$3(ctx) {
	let input;
	let updating_value;
	let current;

	function input_value_binding_3(value) {
		/*input_value_binding_3*/ ctx[14].call(null, value);
	}

	let input_props = { type: "N" };

	if (/*actPrice*/ ctx[2].validForDays !== void 0) {
		input_props.value = /*actPrice*/ ctx[2].validForDays;
	}

	input = new Input({ props: input_props, $$inline: true });
	binding_callbacks.push(() => bind(input, "value", input_value_binding_3));

	const block = {
		c: function create() {
			create_component(input.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(input, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const input_changes = {};

			if (!updating_value && dirty & /*actPrice*/ 4) {
				updating_value = true;
				input_changes.value = /*actPrice*/ ctx[2].validForDays;
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(input, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$3.name,
		type: "slot",
		source: "(104:0) <Label label={$_(\\\"gymRegister.gymPricing.validForDays\\\")}>",
		ctx
	});

	return block;
}

// (115:4) {#each tableHeaders as header}
function create_each_block_2(ctx) {
	let th;
	let t0_value = /*header*/ ctx[18].label + "";
	let t0;
	let t1;

	const block = {
		c: function create() {
			th = element("th");
			t0 = text(t0_value);
			t1 = space();
			attr_dev(th, "class", "svelte-1leuwcc");
			add_location(th, file$3, 115, 6, 3363);
		},
		m: function mount(target, anchor) {
			insert_dev(target, th, anchor);
			append_dev(th, t0);
			append_dev(th, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*tableHeaders*/ 8 && t0_value !== (t0_value = /*header*/ ctx[18].label + "")) set_data_dev(t0, t0_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(th);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2.name,
		type: "each",
		source: "(115:4) {#each tableHeaders as header}",
		ctx
	});

	return block;
}

// (123:6) {#each tableHeaders as header}
function create_each_block_1$3(ctx) {
	let td;
	let t_value = /*fillTableData*/ ctx[7](/*price*/ ctx[15], /*header*/ ctx[18]) + "";
	let t;

	const block = {
		c: function create() {
			td = element("td");
			t = text(t_value);
			attr_dev(td, "class", "svelte-1leuwcc");
			add_location(td, file$3, 123, 8, 3515);
		},
		m: function mount(target, anchor) {
			insert_dev(target, td, anchor);
			append_dev(td, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*pricingGeneralData, tableHeaders*/ 9 && t_value !== (t_value = /*fillTableData*/ ctx[7](/*price*/ ctx[15], /*header*/ ctx[18]) + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(td);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1$3.name,
		type: "each",
		source: "(123:6) {#each tableHeaders as header}",
		ctx
	});

	return block;
}

// (121:2) {#each pricingGeneralData as price}
function create_each_block$3(ctx) {
	let tr;
	let t0;
	let span;
	let t2;
	let mounted;
	let dispose;
	let each_value_1 = /*tableHeaders*/ ctx[3];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$3(get_each_context_1$3(ctx, each_value_1, i));
	}

	const block = {
		c: function create() {
			tr = element("tr");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = space();
			span = element("span");
			span.textContent = "❌";
			t2 = space();
			attr_dev(span, "class", "closingMark svelte-1leuwcc");
			add_location(span, file$3, 125, 6, 3575);
			attr_dev(tr, "class", "svelte-1leuwcc");
			add_location(tr, file$3, 121, 4, 3465);
		},
		m: function mount(target, anchor) {
			insert_dev(target, tr, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}

			append_dev(tr, t0);
			append_dev(tr, span);
			append_dev(tr, t2);

			if (!mounted) {
				dispose = listen_dev(
					span,
					"click",
					function () {
						if (is_function(/*deleteFromPricing*/ ctx[8](/*price*/ ctx[15]))) /*deleteFromPricing*/ ctx[8](/*price*/ ctx[15]).apply(this, arguments);
					},
					false,
					false,
					false
				);

				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*fillTableData, pricingGeneralData, tableHeaders*/ 137) {
				each_value_1 = /*tableHeaders*/ ctx[3];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1$3(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1$3(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(tr, t0);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(tr);
			destroy_each(each_blocks, detaching);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$3.name,
		type: "each",
		source: "(121:2) {#each pricingGeneralData as price}",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let label0;
	let t0;
	let label1;
	let t1;
	let hr0;
	let t2;
	let label2;
	let t3;
	let hr1;
	let t4;
	let label3;
	let t5;
	let hr2;
	let t6;
	let label4;
	let t7;
	let hr3;
	let t8;
	let label5;
	let t9;
	let button;
	let t10_value = /*$_*/ ctx[4]("gymRegister.gymPricing.addToList") + "";
	let t10;
	let t11;
	let hr4;
	let t12;
	let table;
	let tr;
	let t13;
	let current;
	let mounted;
	let dispose;

	label0 = new Label({
			props: {
				label: /*$_*/ ctx[4]("ptRegister.ptPricingStep.selectedSpecs"),
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	label1 = new Label({
			props: {
				label: /*$_*/ ctx[4]("gymRegister.gymPricing.categoryType"),
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	label2 = new Label({
			props: {
				label: /*$_*/ ctx[4]("gymRegister.gymPricing.ticketType"),
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	label3 = new Label({
			props: {
				label: /*$_*/ ctx[4]("gymRegister.gymPricing.amount"),
				$$slots: { default: [create_default_slot_2$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	label4 = new Label({
			props: {
				label: /*$_*/ ctx[4]("gymRegister.gymPricing.currency"),
				$$slots: { default: [create_default_slot_1$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	label5 = new Label({
			props: {
				label: /*$_*/ ctx[4]("gymRegister.gymPricing.validForDays"),
				$$slots: { default: [create_default_slot$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	let each_value_2 = /*tableHeaders*/ ctx[3];
	validate_each_argument(each_value_2);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks_1[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	let each_value = /*pricingGeneralData*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			create_component(label0.$$.fragment);
			t0 = space();
			create_component(label1.$$.fragment);
			t1 = space();
			hr0 = element("hr");
			t2 = space();
			create_component(label2.$$.fragment);
			t3 = space();
			hr1 = element("hr");
			t4 = space();
			create_component(label3.$$.fragment);
			t5 = space();
			hr2 = element("hr");
			t6 = space();
			create_component(label4.$$.fragment);
			t7 = space();
			hr3 = element("hr");
			t8 = space();
			create_component(label5.$$.fragment);
			t9 = space();
			button = element("button");
			t10 = text(t10_value);
			t11 = space();
			hr4 = element("hr");
			t12 = space();
			table = element("table");
			tr = element("tr");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t13 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			add_location(hr0, file$3, 90, 0, 2694);
			add_location(hr1, file$3, 94, 0, 2820);
			add_location(hr2, file$3, 98, 0, 2938);
			add_location(hr3, file$3, 102, 0, 3060);
			add_location(button, file$3, 109, 0, 3193);
			add_location(hr4, file$3, 111, 0, 3277);
			attr_dev(tr, "class", "svelte-1leuwcc");
			add_location(tr, file$3, 113, 2, 3317);
			attr_dev(table, "class", "tableContainer svelte-1leuwcc");
			add_location(table, file$3, 112, 0, 3284);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(label0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(label1, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, hr0, anchor);
			insert_dev(target, t2, anchor);
			mount_component(label2, target, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, hr1, anchor);
			insert_dev(target, t4, anchor);
			mount_component(label3, target, anchor);
			insert_dev(target, t5, anchor);
			insert_dev(target, hr2, anchor);
			insert_dev(target, t6, anchor);
			mount_component(label4, target, anchor);
			insert_dev(target, t7, anchor);
			insert_dev(target, hr3, anchor);
			insert_dev(target, t8, anchor);
			mount_component(label5, target, anchor);
			insert_dev(target, t9, anchor);
			insert_dev(target, button, anchor);
			append_dev(button, t10);
			insert_dev(target, t11, anchor);
			insert_dev(target, hr4, anchor);
			insert_dev(target, t12, anchor);
			insert_dev(target, table, anchor);
			append_dev(table, tr);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(tr, null);
			}

			append_dev(table, t13);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(table, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*addToPricing*/ ctx[6], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			const label0_changes = {};
			if (dirty & /*$_*/ 16) label0_changes.label = /*$_*/ ctx[4]("ptRegister.ptPricingStep.selectedSpecs");

			if (dirty & /*$$scope, actPrice, selectedSpecializations, $_*/ 134217750) {
				label0_changes.$$scope = { dirty, ctx };
			}

			label0.$set(label0_changes);
			const label1_changes = {};
			if (dirty & /*$_*/ 16) label1_changes.label = /*$_*/ ctx[4]("gymRegister.gymPricing.categoryType");

			if (dirty & /*$$scope, categories, actPrice*/ 134217764) {
				label1_changes.$$scope = { dirty, ctx };
			}

			label1.$set(label1_changes);
			const label2_changes = {};
			if (dirty & /*$_*/ 16) label2_changes.label = /*$_*/ ctx[4]("gymRegister.gymPricing.ticketType");

			if (dirty & /*$$scope, actPrice*/ 134217732) {
				label2_changes.$$scope = { dirty, ctx };
			}

			label2.$set(label2_changes);
			const label3_changes = {};
			if (dirty & /*$_*/ 16) label3_changes.label = /*$_*/ ctx[4]("gymRegister.gymPricing.amount");

			if (dirty & /*$$scope, actPrice*/ 134217732) {
				label3_changes.$$scope = { dirty, ctx };
			}

			label3.$set(label3_changes);
			const label4_changes = {};
			if (dirty & /*$_*/ 16) label4_changes.label = /*$_*/ ctx[4]("gymRegister.gymPricing.currency");

			if (dirty & /*$$scope, actPrice*/ 134217732) {
				label4_changes.$$scope = { dirty, ctx };
			}

			label4.$set(label4_changes);
			const label5_changes = {};
			if (dirty & /*$_*/ 16) label5_changes.label = /*$_*/ ctx[4]("gymRegister.gymPricing.validForDays");

			if (dirty & /*$$scope, actPrice*/ 134217732) {
				label5_changes.$$scope = { dirty, ctx };
			}

			label5.$set(label5_changes);
			if ((!current || dirty & /*$_*/ 16) && t10_value !== (t10_value = /*$_*/ ctx[4]("gymRegister.gymPricing.addToList") + "")) set_data_dev(t10, t10_value);

			if (dirty & /*tableHeaders*/ 8) {
				each_value_2 = /*tableHeaders*/ ctx[3];
				validate_each_argument(each_value_2);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_2(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(tr, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_2.length;
			}

			if (dirty & /*deleteFromPricing, pricingGeneralData, tableHeaders, fillTableData*/ 393) {
				each_value = /*pricingGeneralData*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$3(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$3(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(table, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label0.$$.fragment, local);
			transition_in(label1.$$.fragment, local);
			transition_in(label2.$$.fragment, local);
			transition_in(label3.$$.fragment, local);
			transition_in(label4.$$.fragment, local);
			transition_in(label5.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label0.$$.fragment, local);
			transition_out(label1.$$.fragment, local);
			transition_out(label2.$$.fragment, local);
			transition_out(label3.$$.fragment, local);
			transition_out(label4.$$.fragment, local);
			transition_out(label5.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(label1, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(hr0);
			if (detaching) detach_dev(t2);
			destroy_component(label2, detaching);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(hr1);
			if (detaching) detach_dev(t4);
			destroy_component(label3, detaching);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(hr2);
			if (detaching) detach_dev(t6);
			destroy_component(label4, detaching);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(hr3);
			if (detaching) detach_dev(t8);
			destroy_component(label5, detaching);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(button);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(hr4);
			if (detaching) detach_dev(t12);
			if (detaching) detach_dev(table);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	let $_;
	validate_store(te, "_");
	component_subscribe($$self, te, $$value => $$invalidate(4, $_ = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Pricing", slots, []);
	let { selectedSpecializations } = $$props;
	let { pricingGeneralData } = $$props;
	let actPrice = {};

	function addToPricing() {
		$$invalidate(0, pricingGeneralData = [...pricingGeneralData, actPrice]);
		$$invalidate(2, actPrice = { ...actPrice });
	}

	function fillTableData(price, header) {
		if (header.value === "categoryType") {
			return $_(`gymRegister.gymPricing.${price[header.value]}`);
		} else if (header.value === "selectedFacility") {
			if (price[header.value] === "generalPricing") {
				return $_(`gymRegister.gymPricing.${price[header.value]}`);
			}
		}

		return price[header.value];
	}

	function deleteFromPricing(el) {
		console.log(el);
		let indexOfEl = pricingGeneralData.indexOf(el);
		pricingGeneralData.splice(indexOfEl, 1);
		$$invalidate(0, pricingGeneralData);
	}

	const writable_props = ["selectedSpecializations", "pricingGeneralData"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Pricing> was created with unknown prop '${key}'`);
	});

	function select_change_handler() {
		actPrice.selectedSpecialization = select_value(this);
		$$invalidate(2, actPrice);
		$$invalidate(1, selectedSpecializations);
	}

	function dropdown_selected_binding(value) {
		actPrice.categoryType = value;
		$$invalidate(2, actPrice);
	}

	function input_value_binding(value) {
		actPrice.ticketType = value;
		$$invalidate(2, actPrice);
	}

	function input_value_binding_1(value) {
		actPrice.amount = value;
		$$invalidate(2, actPrice);
	}

	function input_value_binding_2(value) {
		actPrice.currency = value;
		$$invalidate(2, actPrice);
	}

	function input_value_binding_3(value) {
		actPrice.validForDays = value;
		$$invalidate(2, actPrice);
	}

	$$self.$$set = $$props => {
		if ("selectedSpecializations" in $$props) $$invalidate(1, selectedSpecializations = $$props.selectedSpecializations);
		if ("pricingGeneralData" in $$props) $$invalidate(0, pricingGeneralData = $$props.pricingGeneralData);
	};

	$$self.$capture_state = () => ({
		_: te,
		Label,
		Input,
		Dropdown: DropdownSingle,
		selectedSpecializations,
		pricingGeneralData,
		actPrice,
		addToPricing,
		fillTableData,
		deleteFromPricing,
		tableHeaders,
		$_,
		categories
	});

	$$self.$inject_state = $$props => {
		if ("selectedSpecializations" in $$props) $$invalidate(1, selectedSpecializations = $$props.selectedSpecializations);
		if ("pricingGeneralData" in $$props) $$invalidate(0, pricingGeneralData = $$props.pricingGeneralData);
		if ("actPrice" in $$props) $$invalidate(2, actPrice = $$props.actPrice);
		if ("tableHeaders" in $$props) $$invalidate(3, tableHeaders = $$props.tableHeaders);
		if ("categories" in $$props) $$invalidate(5, categories = $$props.categories);
	};

	let tableHeaders;
	let categories;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$_*/ 16) {
			 $$invalidate(3, tableHeaders = [
				{
					value: "selectedSpecialization",
					label: $_("ptRegister.ptPricingStep.selectedSpecs")
				},
				{
					value: "categoryType",
					label: $_("gymRegister.gymPricing.categoryType")
				},
				{
					value: "ticketType",
					label: $_("gymRegister.gymPricing.ticketType")
				},
				{
					value: "amount",
					label: $_("gymRegister.gymPricing.amount")
				},
				{
					value: "currency",
					label: $_("gymRegister.gymPricing.currency")
				},
				{
					value: "validForDays",
					label: $_("gymRegister.gymPricing.validForDays")
				}
			]);
		}

		if ($$self.$$.dirty & /*$_*/ 16) {
			 $$invalidate(5, categories = [
				{
					value: "daily",
					label: $_("gymRegister.gymPricing.daily")
				},
				{
					value: "monthly",
					label: $_("gymRegister.gymPricing.monthly")
				},
				{
					value: "occasional",
					label: $_("gymRegister.gymPricing.occasional")
				}
			]);
		}
	};

	return [
		pricingGeneralData,
		selectedSpecializations,
		actPrice,
		tableHeaders,
		$_,
		categories,
		addToPricing,
		fillTableData,
		deleteFromPricing,
		select_change_handler,
		dropdown_selected_binding,
		input_value_binding,
		input_value_binding_1,
		input_value_binding_2,
		input_value_binding_3
	];
}

class Pricing extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$3, create_fragment$3, safe_not_equal, {
			selectedSpecializations: 1,
			pricingGeneralData: 0
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Pricing",
			options,
			id: create_fragment$3.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*selectedSpecializations*/ ctx[1] === undefined && !("selectedSpecializations" in props)) {
			console_1.warn("<Pricing> was created without expected prop 'selectedSpecializations'");
		}

		if (/*pricingGeneralData*/ ctx[0] === undefined && !("pricingGeneralData" in props)) {
			console_1.warn("<Pricing> was created without expected prop 'pricingGeneralData'");
		}
	}

	get selectedSpecializations() {
		throw new Error("<Pricing>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selectedSpecializations(value) {
		throw new Error("<Pricing>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get pricingGeneralData() {
		throw new Error("<Pricing>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set pricingGeneralData(value) {
		throw new Error("<Pricing>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\components\PtForm\PtForm.svelte generated by Svelte v3.29.7 */

const { console: console_1$1 } = globals;
const file$4 = "src\\components\\PtForm\\PtForm.svelte";

// (1:0) <script>   import { _ }
function create_catch_block_2(ctx) {
	const block = {
		c: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_catch_block_2.name,
		type: "catch",
		source: "(1:0) <script>   import { _ }",
		ctx
	});

	return block;
}

// (52:39)          <PtGeneral bind:ptGeneralData={form.personalTrainer}
function create_then_block_2(ctx) {
	let ptgeneral;
	let updating_ptGeneralData;
	let current;

	function ptgeneral_ptGeneralData_binding(value) {
		/*ptgeneral_ptGeneralData_binding*/ ctx[6].call(null, value);
	}

	let ptgeneral_props = {
		ptGeneralCols: ptInfos.personalTrainer,
		langCodes: /*langCodes*/ ctx[3]
	};

	if (/*form*/ ctx[0].personalTrainer !== void 0) {
		ptgeneral_props.ptGeneralData = /*form*/ ctx[0].personalTrainer;
	}

	ptgeneral = new General({ props: ptgeneral_props, $$inline: true });
	binding_callbacks.push(() => bind(ptgeneral, "ptGeneralData", ptgeneral_ptGeneralData_binding));

	const block = {
		c: function create() {
			create_component(ptgeneral.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(ptgeneral, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const ptgeneral_changes = {};

			if (!updating_ptGeneralData && dirty & /*form*/ 1) {
				updating_ptGeneralData = true;
				ptgeneral_changes.ptGeneralData = /*form*/ ctx[0].personalTrainer;
				add_flush_callback(() => updating_ptGeneralData = false);
			}

			ptgeneral.$set(ptgeneral_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(ptgeneral.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(ptgeneral.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(ptgeneral, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_then_block_2.name,
		type: "then",
		source: "(52:39)          <PtGeneral bind:ptGeneralData={form.personalTrainer}",
		ctx
	});

	return block;
}

// (1:0) <script>   import { _ }
function create_pending_block_2(ctx) {
	const block = {
		c: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_pending_block_2.name,
		type: "pending",
		source: "(1:0) <script>   import { _ }",
		ctx
	});

	return block;
}

// (48:4) <Step title={$_('ptRegister.ptWizard.ptBasic')}     desc={$_('ptRegister.ptWizard.ptBasicDesc')}     icon={'icon'}     active>
function create_default_slot_4$1(ctx) {
	let await_block_anchor;
	let promise;
	let current;

	let info = {
		ctx,
		current: null,
		token: null,
		hasCatch: false,
		pending: create_pending_block_2,
		then: create_then_block_2,
		catch: create_catch_block_2,
		value: 3,
		blocks: [,,,]
	};

	handle_promise(promise = /*langCodes*/ ctx[3], info);

	const block = {
		c: function create() {
			await_block_anchor = empty();
			info.block.c();
		},
		m: function mount(target, anchor) {
			insert_dev(target, await_block_anchor, anchor);
			info.block.m(target, info.anchor = anchor);
			info.mount = () => await_block_anchor.parentNode;
			info.anchor = await_block_anchor;
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			{
				const child_ctx = ctx.slice();
				child_ctx[3] = info.resolved;
				info.block.p(child_ctx, dirty);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(info.block);
			current = true;
		},
		o: function outro(local) {
			for (let i = 0; i < 3; i += 1) {
				const block = info.blocks[i];
				transition_out(block);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(await_block_anchor);
			info.block.d(detaching);
			info.token = null;
			info = null;
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$1.name,
		type: "slot",
		source: "(48:4) <Step title={$_('ptRegister.ptWizard.ptBasic')}     desc={$_('ptRegister.ptWizard.ptBasicDesc')}     icon={'icon'}     active>",
		ctx
	});

	return block;
}

// (1:0) <script>   import { _ }
function create_catch_block_1(ctx) {
	const block = {
		c: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_catch_block_1.name,
		type: "catch",
		source: "(1:0) <script>   import { _ }",
		ctx
	});

	return block;
}

// (59:35)          <PtCertifications bind:selectedCerties={form.certifications}
function create_then_block_1(ctx) {
	let ptcertifications;
	let updating_selectedCerties;
	let current;

	function ptcertifications_selectedCerties_binding(value) {
		/*ptcertifications_selectedCerties_binding*/ ctx[7].call(null, value);
	}

	let ptcertifications_props = { certies: /*certies*/ ctx[5] };

	if (/*form*/ ctx[0].certifications !== void 0) {
		ptcertifications_props.selectedCerties = /*form*/ ctx[0].certifications;
	}

	ptcertifications = new Certifications({
			props: ptcertifications_props,
			$$inline: true
		});

	binding_callbacks.push(() => bind(ptcertifications, "selectedCerties", ptcertifications_selectedCerties_binding));

	const block = {
		c: function create() {
			create_component(ptcertifications.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(ptcertifications, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const ptcertifications_changes = {};

			if (!updating_selectedCerties && dirty & /*form*/ 1) {
				updating_selectedCerties = true;
				ptcertifications_changes.selectedCerties = /*form*/ ctx[0].certifications;
				add_flush_callback(() => updating_selectedCerties = false);
			}

			ptcertifications.$set(ptcertifications_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(ptcertifications.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(ptcertifications.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(ptcertifications, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_then_block_1.name,
		type: "then",
		source: "(59:35)          <PtCertifications bind:selectedCerties={form.certifications}",
		ctx
	});

	return block;
}

// (1:0) <script>   import { _ }
function create_pending_block_1(ctx) {
	const block = {
		c: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_pending_block_1.name,
		type: "pending",
		source: "(1:0) <script>   import { _ }",
		ctx
	});

	return block;
}

// (56:4) <Step title={$_('ptRegister.ptWizard.ptCertification')}     desc={$_('ptRegister.ptWizard.ptCertificationDesc')}     icon={'icon'}>
function create_default_slot_3$1(ctx) {
	let await_block_anchor;
	let promise;
	let current;

	let info = {
		ctx,
		current: null,
		token: null,
		hasCatch: false,
		pending: create_pending_block_1,
		then: create_then_block_1,
		catch: create_catch_block_1,
		value: 5,
		blocks: [,,,]
	};

	handle_promise(promise = /*certies*/ ctx[5], info);

	const block = {
		c: function create() {
			await_block_anchor = empty();
			info.block.c();
		},
		m: function mount(target, anchor) {
			insert_dev(target, await_block_anchor, anchor);
			info.block.m(target, info.anchor = anchor);
			info.mount = () => await_block_anchor.parentNode;
			info.anchor = await_block_anchor;
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			{
				const child_ctx = ctx.slice();
				child_ctx[5] = info.resolved;
				info.block.p(child_ctx, dirty);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(info.block);
			current = true;
		},
		o: function outro(local) {
			for (let i = 0; i < 3; i += 1) {
				const block = info.blocks[i];
				transition_out(block);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(await_block_anchor);
			info.block.d(detaching);
			info.token = null;
			info = null;
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$1.name,
		type: "slot",
		source: "(56:4) <Step title={$_('ptRegister.ptWizard.ptCertification')}     desc={$_('ptRegister.ptWizard.ptCertificationDesc')}     icon={'icon'}>",
		ctx
	});

	return block;
}

// (1:0) <script>   import { _ }
function create_catch_block(ctx) {
	const block = {
		c: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_catch_block.name,
		type: "catch",
		source: "(1:0) <script>   import { _ }",
		ctx
	});

	return block;
}

// (66:31)          <PtSpecializations bind:selectedSpecs={form.specializations}
function create_then_block(ctx) {
	let ptspecializations;
	let updating_selectedSpecs;
	let current;

	function ptspecializations_selectedSpecs_binding(value) {
		/*ptspecializations_selectedSpecs_binding*/ ctx[8].call(null, value);
	}

	let ptspecializations_props = { specs: /*specs*/ ctx[4] };

	if (/*form*/ ctx[0].specializations !== void 0) {
		ptspecializations_props.selectedSpecs = /*form*/ ctx[0].specializations;
	}

	ptspecializations = new Specializations({
			props: ptspecializations_props,
			$$inline: true
		});

	binding_callbacks.push(() => bind(ptspecializations, "selectedSpecs", ptspecializations_selectedSpecs_binding));

	const block = {
		c: function create() {
			create_component(ptspecializations.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(ptspecializations, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const ptspecializations_changes = {};

			if (!updating_selectedSpecs && dirty & /*form*/ 1) {
				updating_selectedSpecs = true;
				ptspecializations_changes.selectedSpecs = /*form*/ ctx[0].specializations;
				add_flush_callback(() => updating_selectedSpecs = false);
			}

			ptspecializations.$set(ptspecializations_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(ptspecializations.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(ptspecializations.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(ptspecializations, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_then_block.name,
		type: "then",
		source: "(66:31)          <PtSpecializations bind:selectedSpecs={form.specializations}",
		ctx
	});

	return block;
}

// (1:0) <script>   import { _ }
function create_pending_block(ctx) {
	const block = {
		c: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_pending_block.name,
		type: "pending",
		source: "(1:0) <script>   import { _ }",
		ctx
	});

	return block;
}

// (63:4) <Step title={$_('ptRegister.ptWizard.ptSpecialization')}     desc={$_('ptRegister.ptWizard.ptSpecializationDesc')}     icon={'icon'}>
function create_default_slot_2$3(ctx) {
	let await_block_anchor;
	let promise;
	let current;

	let info = {
		ctx,
		current: null,
		token: null,
		hasCatch: false,
		pending: create_pending_block,
		then: create_then_block,
		catch: create_catch_block,
		value: 4,
		blocks: [,,,]
	};

	handle_promise(promise = /*specs*/ ctx[4], info);

	const block = {
		c: function create() {
			await_block_anchor = empty();
			info.block.c();
		},
		m: function mount(target, anchor) {
			insert_dev(target, await_block_anchor, anchor);
			info.block.m(target, info.anchor = anchor);
			info.mount = () => await_block_anchor.parentNode;
			info.anchor = await_block_anchor;
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			{
				const child_ctx = ctx.slice();
				child_ctx[4] = info.resolved;
				info.block.p(child_ctx, dirty);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(info.block);
			current = true;
		},
		o: function outro(local) {
			for (let i = 0; i < 3; i += 1) {
				const block = info.blocks[i];
				transition_out(block);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(await_block_anchor);
			info.block.d(detaching);
			info.token = null;
			info = null;
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$3.name,
		type: "slot",
		source: "(63:4) <Step title={$_('ptRegister.ptWizard.ptSpecialization')}     desc={$_('ptRegister.ptWizard.ptSpecializationDesc')}     icon={'icon'}>",
		ctx
	});

	return block;
}

// (70:4) <Step title={$_('ptRegister.ptWizard.ptPricing')}     desc={$_('ptRegister.ptWizard.ptPricingDesc')}     icon={'icon'}>
function create_default_slot_1$3(ctx) {
	let ptpricing;
	let updating_selectedSpecializations;
	let updating_pricingGeneralData;
	let current;

	function ptpricing_selectedSpecializations_binding(value) {
		/*ptpricing_selectedSpecializations_binding*/ ctx[9].call(null, value);
	}

	function ptpricing_pricingGeneralData_binding(value) {
		/*ptpricing_pricingGeneralData_binding*/ ctx[10].call(null, value);
	}

	let ptpricing_props = {};

	if (/*form*/ ctx[0].specializations !== void 0) {
		ptpricing_props.selectedSpecializations = /*form*/ ctx[0].specializations;
	}

	if (/*form*/ ctx[0].ptPricing !== void 0) {
		ptpricing_props.pricingGeneralData = /*form*/ ctx[0].ptPricing;
	}

	ptpricing = new Pricing({ props: ptpricing_props, $$inline: true });
	binding_callbacks.push(() => bind(ptpricing, "selectedSpecializations", ptpricing_selectedSpecializations_binding));
	binding_callbacks.push(() => bind(ptpricing, "pricingGeneralData", ptpricing_pricingGeneralData_binding));

	const block = {
		c: function create() {
			create_component(ptpricing.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(ptpricing, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const ptpricing_changes = {};

			if (!updating_selectedSpecializations && dirty & /*form*/ 1) {
				updating_selectedSpecializations = true;
				ptpricing_changes.selectedSpecializations = /*form*/ ctx[0].specializations;
				add_flush_callback(() => updating_selectedSpecializations = false);
			}

			if (!updating_pricingGeneralData && dirty & /*form*/ 1) {
				updating_pricingGeneralData = true;
				ptpricing_changes.pricingGeneralData = /*form*/ ctx[0].ptPricing;
				add_flush_callback(() => updating_pricingGeneralData = false);
			}

			ptpricing.$set(ptpricing_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(ptpricing.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(ptpricing.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(ptpricing, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$3.name,
		type: "slot",
		source: "(70:4) <Step title={$_('ptRegister.ptWizard.ptPricing')}     desc={$_('ptRegister.ptWizard.ptPricingDesc')}     icon={'icon'}>",
		ctx
	});

	return block;
}

// (47:2) <Wizard on:wizardDone={sendData} title={$_('ptRegister.title')}>
function create_default_slot$4(ctx) {
	let step0;
	let t0;
	let step1;
	let t1;
	let step2;
	let t2;
	let step3;
	let current;

	step0 = new Step({
			props: {
				title: /*$_*/ ctx[1]("ptRegister.ptWizard.ptBasic"),
				desc: /*$_*/ ctx[1]("ptRegister.ptWizard.ptBasicDesc"),
				icon: "icon",
				active: true,
				$$slots: { default: [create_default_slot_4$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	step1 = new Step({
			props: {
				title: /*$_*/ ctx[1]("ptRegister.ptWizard.ptCertification"),
				desc: /*$_*/ ctx[1]("ptRegister.ptWizard.ptCertificationDesc"),
				icon: "icon",
				$$slots: { default: [create_default_slot_3$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	step2 = new Step({
			props: {
				title: /*$_*/ ctx[1]("ptRegister.ptWizard.ptSpecialization"),
				desc: /*$_*/ ctx[1]("ptRegister.ptWizard.ptSpecializationDesc"),
				icon: "icon",
				$$slots: { default: [create_default_slot_2$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	step3 = new Step({
			props: {
				title: /*$_*/ ctx[1]("ptRegister.ptWizard.ptPricing"),
				desc: /*$_*/ ctx[1]("ptRegister.ptWizard.ptPricingDesc"),
				icon: "icon",
				$$slots: { default: [create_default_slot_1$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(step0.$$.fragment);
			t0 = space();
			create_component(step1.$$.fragment);
			t1 = space();
			create_component(step2.$$.fragment);
			t2 = space();
			create_component(step3.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(step0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(step1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(step2, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(step3, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const step0_changes = {};
			if (dirty & /*$_*/ 2) step0_changes.title = /*$_*/ ctx[1]("ptRegister.ptWizard.ptBasic");
			if (dirty & /*$_*/ 2) step0_changes.desc = /*$_*/ ctx[1]("ptRegister.ptWizard.ptBasicDesc");

			if (dirty & /*$$scope, form*/ 2049) {
				step0_changes.$$scope = { dirty, ctx };
			}

			step0.$set(step0_changes);
			const step1_changes = {};
			if (dirty & /*$_*/ 2) step1_changes.title = /*$_*/ ctx[1]("ptRegister.ptWizard.ptCertification");
			if (dirty & /*$_*/ 2) step1_changes.desc = /*$_*/ ctx[1]("ptRegister.ptWizard.ptCertificationDesc");

			if (dirty & /*$$scope, form*/ 2049) {
				step1_changes.$$scope = { dirty, ctx };
			}

			step1.$set(step1_changes);
			const step2_changes = {};
			if (dirty & /*$_*/ 2) step2_changes.title = /*$_*/ ctx[1]("ptRegister.ptWizard.ptSpecialization");
			if (dirty & /*$_*/ 2) step2_changes.desc = /*$_*/ ctx[1]("ptRegister.ptWizard.ptSpecializationDesc");

			if (dirty & /*$$scope, form*/ 2049) {
				step2_changes.$$scope = { dirty, ctx };
			}

			step2.$set(step2_changes);
			const step3_changes = {};
			if (dirty & /*$_*/ 2) step3_changes.title = /*$_*/ ctx[1]("ptRegister.ptWizard.ptPricing");
			if (dirty & /*$_*/ 2) step3_changes.desc = /*$_*/ ctx[1]("ptRegister.ptWizard.ptPricingDesc");

			if (dirty & /*$$scope, form*/ 2049) {
				step3_changes.$$scope = { dirty, ctx };
			}

			step3.$set(step3_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(step0.$$.fragment, local);
			transition_in(step1.$$.fragment, local);
			transition_in(step2.$$.fragment, local);
			transition_in(step3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(step0.$$.fragment, local);
			transition_out(step1.$$.fragment, local);
			transition_out(step2.$$.fragment, local);
			transition_out(step3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(step0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(step1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(step2, detaching);
			if (detaching) detach_dev(t2);
			destroy_component(step3, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$4.name,
		type: "slot",
		source: "(47:2) <Wizard on:wizardDone={sendData} title={$_('ptRegister.title')}>",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let div;
	let wizard;
	let current;

	wizard = new Wizard({
			props: {
				title: /*$_*/ ctx[1]("ptRegister.title"),
				$$slots: { default: [create_default_slot$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	wizard.$on("wizardDone", /*sendData*/ ctx[2]);

	const block = {
		c: function create() {
			div = element("div");
			create_component(wizard.$$.fragment);
			attr_dev(div, "class", "ptFormContainer svelte-1dyatl5");
			add_location(div, file$4, 45, 0, 1104);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(wizard, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const wizard_changes = {};
			if (dirty & /*$_*/ 2) wizard_changes.title = /*$_*/ ctx[1]("ptRegister.title");

			if (dirty & /*$$scope, $_, form*/ 2051) {
				wizard_changes.$$scope = { dirty, ctx };
			}

			wizard.$set(wizard_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(wizard.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(wizard.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(wizard);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$4.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$4($$self, $$props, $$invalidate) {
	let $_;
	validate_store(te, "_");
	component_subscribe($$self, te, $$value => $$invalidate(1, $_ = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("PtForm", slots, []);
	let langCodes = ptCodes.getLangCodes();

	// Ide jon majd egy certi lekerdezes
	let specs = ptCodes.getSpecs();

	let certies = ptCodes.getCertiGroups();

	let form = {
		personalTrainer: {},
		gymId: "",
		certifications: [],
		specializations: [],
		ptPricing: []
	};

	function sendData() {
		ptRegisterStore.submitForm(form);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<PtForm> was created with unknown prop '${key}'`);
	});

	function ptgeneral_ptGeneralData_binding(value) {
		form.personalTrainer = value;
		$$invalidate(0, form);
	}

	function ptcertifications_selectedCerties_binding(value) {
		form.certifications = value;
		$$invalidate(0, form);
	}

	function ptspecializations_selectedSpecs_binding(value) {
		form.specializations = value;
		$$invalidate(0, form);
	}

	function ptpricing_selectedSpecializations_binding(value) {
		form.specializations = value;
		$$invalidate(0, form);
	}

	function ptpricing_pricingGeneralData_binding(value) {
		form.ptPricing = value;
		$$invalidate(0, form);
	}

	$$self.$capture_state = () => ({
		_: te,
		Wizard,
		Step,
		ptInfos,
		ptCodes,
		ptRegisterStore,
		PtGeneral: General,
		PtCertifications: Certifications,
		PtSpecializations: Specializations,
		PtPricing: Pricing,
		langCodes,
		specs,
		certies,
		form,
		sendData,
		$_
	});

	$$self.$inject_state = $$props => {
		if ("langCodes" in $$props) $$invalidate(3, langCodes = $$props.langCodes);
		if ("specs" in $$props) $$invalidate(4, specs = $$props.specs);
		if ("certies" in $$props) $$invalidate(5, certies = $$props.certies);
		if ("form" in $$props) $$invalidate(0, form = $$props.form);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*form*/ 1) {
			 console.log(form);
		}
	};

	 console.log(langCodes);

	return [
		form,
		$_,
		sendData,
		langCodes,
		specs,
		certies,
		ptgeneral_ptGeneralData_binding,
		ptcertifications_selectedCerties_binding,
		ptspecializations_selectedSpecs_binding,
		ptpricing_selectedSpecializations_binding,
		ptpricing_pricingGeneralData_binding
	];
}

class PtForm extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "PtForm",
			options,
			id: create_fragment$4.name
		});
	}
}

/* src\pages\register\pro.svelte generated by Svelte v3.29.7 */

function create_fragment$5(ctx) {
	let ptregister;
	let current;
	ptregister = new PtForm({ $$inline: true });

	const block = {
		c: function create() {
			create_component(ptregister.$$.fragment);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(ptregister, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(ptregister.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(ptregister.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(ptregister, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$5.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$5($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Pro", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Pro> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ PtRegister: PtForm });
	return [];
}

class Pro extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Pro",
			options,
			id: create_fragment$5.name
		});
	}
}

export default Pro;
//# sourceMappingURL=pro-9b067172.js.map

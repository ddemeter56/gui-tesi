<script>
   
    export let type;
    export let pattern;
    export let length = null;
    export let editable = true;
    export let required = false;
    export let value = null;
    export let multiline = length >= 50;
    export let validator = () => true;

    let valid = true;
    let rawValue = value;

    function validateValue() {
        valid = validator(rawValue);
        valid = valid && (!required || rawValue !== null);

        if (valid) {
            value = rawValue;
        }
    }

    $: validateValue(rawValue);
    $: pattern, console.log(pattern);
</script>

<style>
    input {
        outline: none;
    }
    .invalid {
        border: 2px solid red;
    }
</style>

{#if type === 'N'}
    <input
        type="number"
        disabled={!editable}
        required={required}
        bind:value={rawValue}
        class:invalid={!valid} />
{:else if type === 'C' && !multiline}
    <input
        type="text"
        maxlength={length}
        disabled={!editable}
        required={required}
        bind:value={rawValue}
        class:invalid={!valid} />
{:else if type === 'P'}
    <input
        type="tel"
        pattern={pattern}
        disabled={!editable}
        required={required}
        bind:value={rawValue}
        class:invalid={!valid} />
{:else if type === 'E'}
    <input
        type="email"
        disabled={!editable}        
        required={required}
        bind:value={rawValue}
        class:invalid={!valid} />
{:else}
    <textarea
        maxlength={length}
        disabled={!editable}
        required={required}
        bind:value={rawValue}
        class:invalid={!valid} />
{/if}

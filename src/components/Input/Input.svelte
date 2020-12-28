<script>
   
    export let type;
    export let pattern;
    export let length = null;
    export let editable = true;
    export let required = false;
    export let value = null;
    export let multiline = length > 75;
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
</script>

<style>
    input {
        outline: none;
    }
    .invalid {
        border: 2px solid red;
    }
    
    .disabled{
        background-color: rgb(168, 168, 168);
        color:black;
        cursor:not-allowed;
    }
</style>

{#if type === 'N'}
    <input
        type="number"
        disabled={!editable}
        required={required}
        bind:value={rawValue}
        class:invalid={!valid}
        class:disabled={!editable} 
        class="inputStyle" />
{:else if type === 'C' && !multiline}
    <input
        type="text"
        maxlength={length}
        disabled={!editable}
        required={required}
        bind:value={rawValue}
        class:invalid={!valid} 
        class:disabled={!editable} 
        class="inputStyle" />
{:else if type === 'P'}
    <input
        type="tel"
        pattern={pattern}
        disabled={!editable}
        required={required}
        bind:value={rawValue}
        class:invalid={!valid} 
        class:disabled={!editable} 
        class="inputStyle" />
{:else if type === 'E'}
    <input
        type="email"
        disabled={!editable}        
        required={required}
        bind:value={rawValue}
        class:invalid={!valid} 
        class:disabled={!editable} 
        class="inputStyle" />
{:else if type === 'T'}
    <input
        type="time"
        min="00:00"
        max="24:00"
        disabled={!editable}        
        required={required}
        bind:value={rawValue}
        class:invalid={!valid} 
        class:disabled={!editable} 
        class="inputStyle" />
{:else}
    <textarea
        maxlength={length}
        disabled={!editable}
        required={required}
        bind:value={rawValue}
        class:invalid={!valid} 
        class:disabled={!editable} 
        class="inputStyle" />
{/if}

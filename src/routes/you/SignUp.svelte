<script lang='ts'>
	import Button from "$lib/components/Button.svelte";
	import type { SupabaseClient } from "@supabase/supabase-js";

    let email = '';
    let password = '';
    let passwordConfirm = '';

    const passwordInvalidCharacters = (password: string) => /[^0-9a-zA-Z\-_&]+/g.test(password);

    export let supabase: SupabaseClient;

    async function signUp() {
        if (password !== passwordConfirm 
          || passwordInvalidCharacters(password) 
          || password.trim().length < 6) return;
        const { data, error } = await supabase.auth.signUp({ email, password });
    }
</script>

<form class="flex flex-col gap-2" on:submit|preventDefault={signUp}>
    <label class="mt-1 leading-3" for="email">Email</label>
    <input bind:value={email} name="email" placeholder="email" type="email">
    <label class="mt-3 leading-3" for="password">Password</label>
    <input bind:value={password} name="password" placeholder="password" type="password">
    <label class="mt-3 leading-3" for="passwordConfirm">Confirm your password</label>
    <input bind:value={passwordConfirm} name="passwordConfirm" placeholder="confirm your password" type="password">

    <p>Don't reuse a password you've used for another account.</p>

   {#if email.trim().length === 0 || password.trim().length === 0 || passwordConfirm.trim().length === 0}
        <p class="text-red-500">
            Please fill in the required fields
        </p>
   {:else}
        {#if passwordInvalidCharacters(password)}
            <p class="text-red-500">
                Password must only use the letters a-z (and the capitals), 0-9,
                dashes, underscore, and ampersands.
            </p>
        {:else if password.trim().length < 6}
            <p class="text-red-500">Password must have a minimum of 6 characters</p>
        {:else if password !== passwordConfirm}
            <p class="text-red-500">Passwords do not match</p>
        {/if}
   {/if}

    <div class="self-start"><Button type='filled'>Sign up for KidsCollab</Button></div>
</form>

<style lang='postcss'>
    input::placeholder {
        @apply text-darken;
    }

    input {
        @apply bg-transparent outline-none border-2 border-black rounded-full w-full px-3 py-1;
    }
</style>


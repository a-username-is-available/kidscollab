<script lang='ts'>
	import Button from "$lib/components/Button.svelte";
	import type { SupabaseClient } from "@supabase/supabase-js";

    let email = '';
    let password = '';

    export let supabase: SupabaseClient;

    async function signIn() {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error?.message === 'Invalid login credentials') {
            // deal with it later
        }
    }
</script>

<form class="flex flex-col gap-2" on:submit|preventDefault={signIn}>
    <label class="mt-1 leading-3" for="email">Email</label>
    <input bind:value={email} name="email" placeholder="email" type="email">
    <label class="mt-3 leading-3" for="email">Password</label>
    <input bind:value={password} name="password" placeholder="password" type="password">

    <div class="self-start"><Button type='filled'>Sign in</Button></div>
</form>

<style lang='postcss'>
    input::placeholder {
        @apply text-darken;
    }

    input {
        @apply bg-transparent outline-none border-2 border-black rounded-full w-full px-3 py-1;
    }
</style>


<script lang='ts'>
	import Button from "$lib/components/Button.svelte";
	import type { SupabaseClient } from "@supabase/supabase-js";
    import Captcha from "./Captcha.svelte";

    let email = '';
    let password = '';
    let token: string | null = null;
    let invalid = false;

    export let supabase: SupabaseClient;

    async function signIn() {
        if (!token) return;
        const { data, error } = await supabase.auth.signInWithPassword({ 
           email,
           password,
           options: { captchaToken: token },
        });
        if (error?.message === 'Invalid login credentials') {
            invalid = true;
        }
    }
</script>

<form class="flex flex-col gap-2" on:submit|preventDefault={signIn}>
    <label class="mt-1 leading-3" for="email">Email</label>
    <input bind:value={email} name="email" placeholder="email" type="email">
    <label class="mt-3 leading-3" for="password">Password</label>
    <input bind:value={password} name="password" placeholder="password" type="password">

    {#if invalid}
        <p class="text-red-500">Password/username invalid</p>
    {/if}

    <Captcha bind:token/>
    
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


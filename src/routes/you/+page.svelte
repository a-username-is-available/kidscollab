<script lang="ts">
    import SignUp from './SignUp.svelte';
    import SignIn from './SignIn.svelte';
    import Button from '$lib/components/Button.svelte';
    import Panel from '$lib/components/Panel.svelte';
    import Switch from '$lib/components/Switch.svelte';

    import { PUBLIC_SUPABASE_KEY } from '$env/static/public';
    import { createClient } from '@supabase/supabase-js';

    let selected = 0;
    let email = '';
    let password = '';
    let passwordConfirm = '';

    const supabaseUrl = 'https://inaebpnhptdkioictxuc.supabase.co';
    const supabaseKey = PUBLIC_SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    async function signUp() {
        if (password !== passwordConfirm) return;
        const { data, error } = await supabase.auth.signUp({ email, password });
    }

    async function signIn() {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error?.message === 'Invalid login credentials') {
            // deal with it later
        }
    }

    async function signOut() {
        const { error } = await supabase.auth.signOut();
    }

    async function log() {
        const { data } = await supabase.auth.getUser();
        console.log(data);
    }
</script>

<div class="lg:w-2/3 w-full flex flex-col h-full pb-4">
    <h1 class="text-black text-4xl font-bold mb-2">You</h1>

    <Switch options={['Sign in', 'Sign up']} bind:selected />

    <Panel>
        {#if selected === 0}
            <SignIn {supabase} />
        {:else}
            <SignUp {supabase} />
        {/if}
<!-- 
        <div
            id="hcaptcha"
            class="h-captcha"
            data-sitekey={PUBLIC_CAPTCHA_KEY} -->
            <!-- /> -->
            <!-- data-theme="dark"
            data-size="invisible" -->
    </Panel>

    <div class="self-start mt-auto">
        <Button type="outline" click={signOut}>Sign Out</Button>
        <Button type="outline" click={log}>Log Data (Dev)</Button>
    </div>
</div>

<style lang="postcss">
    input::placeholder {
        @apply text-darken;
    }

    input {
        @apply bg-transparent outline-none border-2 border-black rounded-full w-full px-3 py-1;
    }
</style>

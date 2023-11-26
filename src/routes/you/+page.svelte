<script lang="ts">
    import SignUp from './SignUp.svelte';
    import SignIn from './SignIn.svelte';
    import Button from '$lib/components/Button.svelte';
    import Panel from '$lib/components/Panel.svelte';
    import Switch from '$lib/components/Switch.svelte';
    import { supabase } from '$lib/supabaseClient';
    import FavoritedMenu from './FavoritedMenu.svelte';

    let selected = 0;

    async function signOut() {
        const { error } = await supabase.auth.signOut();
    }

    async function log() {
        const { data } = await supabase.auth.getUser();
        console.log(data);
    }
</script>

<div class="lg:w-2/3 w-full flex flex-col h-full pb-4 gap-2">
    <h1>You</h1>
    {#await supabase.auth.getUser() then { data }}
        {#if data.user}
            <h2>Favourited Articles</h2>
            <FavoritedMenu />     

            <div class="mt-auto self-start"><Button type="outline" click={signOut}>Sign Out</Button></div>
        {:else}
            <Switch options={['Sign in', 'Sign up']} bind:selected/>

            <Panel>
                {#if selected === 0}
                    <SignIn {supabase} />
                {:else}
                    <SignUp {supabase} />
                {/if}
            </Panel>
        {/if}
    {/await}
    
    <div class="self start"><Button type="outline" click={log}>Log Data (Dev)</Button></div>
</div>


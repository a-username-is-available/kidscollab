<script lang="ts">
    import Panel from '$lib/components/Panel.svelte';
    import { supabase } from '$lib/supabaseClient';
    import { onMount } from 'svelte';

    let favorites: string[] = [];
    onMount(async () => {
        const { data } = await supabase
            .from('review')
            .select('article_id')
            .eq('favorite_status', true); 
        
        console.log(data);
        if (!data || data.length === 0) return;
        favorites = data.map(a => a.article_id);
    });
</script>

<Panel>
    <ul>
        {#each favorites as favorite}
            <li>{favorite}</li>
        {/each}
    </ul>
</Panel>

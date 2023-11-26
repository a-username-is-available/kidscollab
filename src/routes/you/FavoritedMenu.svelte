<script lang="ts">
    import Panel from '$lib/components/Panel.svelte';
    import { supabase } from '$lib/supabaseClient';
    import { onMount } from 'svelte';

    const url =
        'https://raw.githubusercontent.com/a-username-is-available/kidscollab-content/main/';
    type mapStructure = {
        [key: string]: { name: string; path: string };
    };

    let favorites: string[] = [];
    let map: mapStructure = {};

    onMount(async () => {
        const { data } = await supabase
            .from('review')
            .select('article_id')
            .eq('favorite_status', true);

        if (!data || data.length === 0) return;
        favorites = data.map((a) => a.article_id);

        map = await (await fetch(url + 'map.json')).json();
    });

    const fixName = (str: string) => str.replaceAll(' ', '-').replaceAll(/[#?]/g, '');
</script>

<Panel>
    {#if favorites.length !== 0 && Object.values(map).length !== 0}
        <ul>
            <hr>
            {#each favorites as favorite}
                <li>
                    <a href="/content{map[favorite].path}/{fixName(map[favorite].name)}">
                        {map[favorite].name}
                    </a>
                </li>

                <hr>
            {/each}
        </ul>
    {:else}
        <i class="text-gray-500">Blankness; favorite an article to see it here!</i>
    {/if}
</Panel>

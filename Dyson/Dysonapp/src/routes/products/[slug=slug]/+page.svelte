
<script>
// @ts-nocheck
import { page } from '$app/stores'
import { get } from 'svelte/store'
import { onMount } from "svelte"
import { productStore  } from "../../../lib/stores"


onMount(async () => {
    let ses = window.sessionStorage.getItem("productStore")
    if (ses) {
        console.log("sob-- ~ loading ses", ses)
        $productStore = JSON.parse(ses)
    }
})
</script>

{#if $productStore?.title}
    <h1>Product {$productStore?.title}</h1>
    {:else}
    <h1>Product</h1>
{/if}

{'Page Data'}
<pre>
    {JSON.stringify($page, null, 2)}
</pre>

{'Product Store Data'}
<pre>
    {JSON.stringify(get(productStore), null, 2)}
</pre>

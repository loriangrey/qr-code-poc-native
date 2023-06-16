<script>
    import { productStore  } from "../lib/stores"
    import { products } from "../routes/products/server"
    import { fly } from 'svelte/transition'

    // Save all products to the SvelteKit Store
    productStore.subscribe(value => value)

    // Preload all images
    const numberOfImages = 6
    // This will generate an array of urls such as 1.png, 2.png, up to numberOfImages
    $: preloadImageUrls = [...Array(numberOfImages).keys()].map((key) => `${key+1}.jpg`)


    const getProduct = (/** @type {{ title?: string; description?: string; color?: string; image?: string; onstock?: boolean; url?: string; qty?: number; }} */ item) => {
        productStore.set(item);
        window.sessionStorage.setItem("productStore", JSON.stringify(item))
    }
</script>

<!-- Preload inside the server response header -->
<svelte:head>
    {#each preloadImageUrls as image}
      <link rel="preload" as="image" href={image} />
    {/each}
</svelte:head>

<ul class="product-wrapper">
	{ #each products as item }
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li on:click={() => getProduct(item)}>
            <a href={`/products/${item.url}`}>
                <img src={item.image} alt="" in:fly />
                
                <p>Title: {item.title}</p>
                <p>Color: {item.color}</p>
                <p>Quantity: {item.qty}</p>
            </a>
        </li>
	{ /each }
</ul>

<style lang="scss">
    @import './styles.scss';
</style>

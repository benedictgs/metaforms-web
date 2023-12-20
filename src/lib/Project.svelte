<script>
    import { fade } from "svelte/transition";

    import { projects } from "$lib/project-data";


    export let showModal
    export let selectedProject




    let paragraphs = selectedProject.stories;
    let imageMain = selectedProject.mainimage;
    let images = selectedProject.images;  

    
    let scrollContainer;

    function handleWheel(event) {
        const scrollingFactor = 8;
        scrollContainer.scrollLeft += event.deltaY * scrollingFactor;
    }
</script>

<div transition:fade class="fixed top-0 left-0 right-0 bg-white">
    <div class="h-screen w-full p-3 overflow-y-auto relative">
        <div class="absolute top-0 left-0 right-0 py-3 pb-6 pr-6 sm:pr-3  sm:static row-span-1 flex flex-row flex-nowrap w-full justify-between ">
            <div class="invisible sm:visible grow flex flex-col justify-center pb-3 text-2xl lg:text-3xl font-medium">
                {selectedProject.name}
            </div>
            <button class="aspect-square grid place-content-center" on:click={() => showModal = false}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8L16 16M8 16L16 8" stroke="gray" stroke-width="4" />
                </svg>
            </button>
        </div>
        <div in:fade={{ delay: 250, duration: 300 }} class="flex flex-row flex-nowrap gap-3 h-96 max-h-[45vh] overflow-x-auto scroll-smooth" bind:this={scrollContainer} on:wheel|preventDefault={handleWheel}>
            <img src={imageMain} alt="" class="h-full w-full object-cover sm:object-contain sm:w-auto">
            {#each images as image}
            <img src={image} alt="" class="h-full w-auto object-contain hidden sm:block">
            {/each}
        </div>
        <h1 class="sm:hidden font-bold py-3 text-2xl">{selectedProject.name}</h1>
        <div class=" sm:grid sm:grid-cols-4 sm:p-6">
            <div class="sm:border-black sm:border-r text-xs sm:justify-self-end sm:text-right sm:pr-6 sm:pt-1">
                <h2 class="font-bold">Location</h2>
                <p class="pb-3">{selectedProject.location}<br>{selectedProject.country}</p>
                <h2 class="font-bold">Type</h2>
                <p class="pb-3">{selectedProject.type}</p>
                <h2 class="font-bold">Status</h2>
                <p class="pb-3">{selectedProject.status}</p>
                <h2 class="font-bold">Land Size</h2>
                <p class="pb-3">{selectedProject.landsize}</p>      
            </div>
            
            <div class="flex-container sm:col-span-3 sm:pl-6">
                {#each Array(Math.max(paragraphs.length + images.length)) as _, i (i)}
                {#if i < paragraphs.length}
                <p class="mb-24 sm:mb-2 text-xs leading-relaxed max-w-[90ch]">{paragraphs[i]}</p>
                {/if}
                {#if i < images.length}
                <img src={images[i]} alt={`Image ${i}`} class="bg-neutral-200 w-full h-96 mb-3 max-h-[45vh] sm:hidden object-cover object-center"/>
                {/if}
                {/each}
            </div>
            <button class="w-full block text-center bg-neutral-200 sm:hidden" on:click={() => showModal = false}>Return to our works</button>
            
        </div>
    </div>
</div>

<style>

</style>
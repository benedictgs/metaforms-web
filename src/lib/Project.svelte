<script>
    import { fade } from "svelte/transition";

    export let showModal

    let paragraphs = ['The HDR House beautifully combines modern minimalism and nature within the urban landscape. A serene retreat, it features a pool that seamlessly blends into its surroundings, offering panoramic city views and a peaceful escape.'
,'This architectural masterpiece emphasizes clean lines, natural materials, and a harmonious color palette. It integrates with the lush greenery and boasts large windows, inviting residents to enjoy the breathtaking cityscape from the comfort of their home.'
,'The pool stands out as a tranquil oasis, reflecting the house\'s minimalist design. Whether for a morning swim or an evening dip, residents can connect with nature and the vibrant city lights in the background, creating a serene atmosphere of relaxation and enjoyment.'
,'The HDR House redefines city living, providing a haven of tranquility with unbeatable city views. Its innovative design offers an exceptional living experience, balancing aesthetics with functionality. Whether seeking a quiet escape or a space for entertaining, it is a remarkable residential masterpiece.'];
    let images = ['image4.jpg','image4.jpg','image4.jpg','image4.jpg'];

    // Function to alternate between paragraphs and images
    function alternateItems(index) {
        const isParagraph = index % 2 === 0;
        const originalIndex = Math.floor(index / 2);
        
        if (isParagraph && originalIndex < paragraphs.length) {
        return paragraphs[originalIndex];
        } else if (!isParagraph && originalIndex < images.length) {
        return images[originalIndex];
        }
    }
</script>

<div transition:fade class="fixed top-0 left-0 right-0 bg-white">
    <div class="h-screen w-full p-3 overflow-y-auto relative">
        <div class="absolute top-0 left-0 right-0 py-3 pb-6 pr-6 sm:pr-3  sm:static row-span-1 flex flex-row flex-nowrap w-full justify-between ">
            <div class="invisible sm:visible grow flex flex-col justify-center pb-3 text-2xl lg:text-3xl font-medium ">
                Project name
            </div>
            <button class="aspect-square grid place-content-center" on:click={() => showModal = false}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8L16 16M8 16L16 8" stroke="gray" stroke-width="4" />
                </svg>
            </button>
        </div>
        <div class="flex flex-row flex-nowrap gap-3 overflow-x-auto w-full ">
            <div class="w-full bg-neutral-200 h-96 max-h-[45vh]">
                photo
            </div>
            {#each [1,2,3] as a}
            <div class="bg-neutral-200 h-96 max-h-[45vh] hidden sm:block">{a}
                <img src="" alt="" class="w-full h-auto">
            </div>
            {/each}
        </div>
        <h1 class="sm:hidden font-bold py-3 text-2xl"> Project name</h1>
        <div class=" sm:grid sm:grid-cols-4 sm:p-6">
            <div class="sm:border-black sm:border-r text-xs sm:justify-self-end sm:text-right sm:pr-6 sm:pt-1">
                <h2 class="font-bold">Location</h2>
                <p class="pb-3">Semarang, Central Java <br> Indonesia</p>
                <h2 class="font-bold">Type</h2>
                <p class="pb-3">Residential</p>
                <h2 class="font-bold">Status</h2>
                <p class="pb-3">Built</p>
                <h2 class="font-bold">Land Size</h2>
                <p class="pb-3">600sqm</p>      
            </div>
            
            <div class="flex-container sm:col-span-3 sm:pl-6">
                {#each Array(Math.max(paragraphs.length + images.length)) as _, i (i)}
                {#if i < paragraphs.length}
                <p class="mb-24 sm:mb-2 text-xs leading-relaxed max-w-[90ch]">{paragraphs[i]}</p>
                {/if}
                {#if i < images.length}
                <img src={images[i]} alt={`Image ${i}`} class="bg-neutral-200 w-full h-96 mb-3 max-h-[45vh] sm:hidden"/>
                {/if}
                {/each}
            </div>
            <a class="block text-center bg-neutral-200 sm:hidden" on:click={() => showModal = false}>Return to our works</a>
            
        </div>
    </div>
</div>

<style>
    .bar1:hover {
        transform: rotate(45deg) translate(20%,-33%) ;
    }
    .bar2 {
        transform: rotate(-45deg) translate(-50%,10%);
    }
</style>
<script>
    import {fly} from 'svelte/transition';

    let open = false;
    let menuItems = [{name:"Works",id:"works"},{name:"Contact us",id:"contact"}]

    function toggleMenu() {
        open = !open;
    }

    import imgLogoCrop from '$lib/images/logo-crop.png';
    import imgHero from '$lib/images/hero.jpg';
	import MenuIcon from './MenuIcon.svelte';
</script>

<div class="h-screen grid grid-rows-[repeat(12,minmax(0,1fr))] gap-3 p-3 relative">
    <div class="row-span-1 flex flex-row flex-nowrap w-full justify-between border-b border-black">
        <div class=" grow flex flex-col justify-center border-r border-black pl-6">
            <img src={imgLogoCrop} alt="metaform logo" class=" object-contain w-40 h-10 object-center">
        </div>
        {#if open}
            <div class="hidden sm:flex flex-row flex-nowrap gap-3 pl-3 items-center" >
                {#each menuItems as menuItem}
                    <a in:fly|global={{ x: 10, duration: 500 }} href="#{menuItem.id}">{menuItem.name}</a>
                {/each}            
            </div>
        {/if}
        <button class="aspect-square flex items-center" on:click={toggleMenu} >
            <MenuIcon />

        </button>
    </div>
    {#if open}
        <div transition:fly|global={{ y: -10, duration: 500 }} class="flex sm:hidden flex-col flex-nowrap gap-3 items-center absolute left-0 top-0 right-0 mt-20 pb-3 z-10 bg-white border-b border-black" >
            {#each menuItems as menuItem}
                <a in:fly|global={{ y: -10, duration: 500 }} href="#{menuItem.id}">{menuItem.name}</a>
            {/each}            
        </div>
    {/if}
    <a class="row-[span_12_/_span_12] relative" href="#works">
        <div class="w-full h-full bg-gray-500"><img src={imgHero} alt="hdr house" class="h-full w-full object-cover object-bottom"></div>
        <div class="absolute bottom-0 bg-gradient-to-t from-neutral-900 text-white w-full p-12 ">
            <p class="font-bold">HDR House</p>
            <p>2022</p>
        </div>
    </a>
</div>

<style>

</style>
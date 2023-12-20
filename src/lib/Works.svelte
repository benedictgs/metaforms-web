<script>
    import Project from '$lib/Project.svelte';
	import { afterUpdate, onMount, tick } from 'svelte';
	import { fade } from 'svelte/transition';
    import { projects } from "$lib/project-data";

    let showModal = false;
    let selectedProject

    //scroll animation
    /**
     * @type {HTMLDivElement[]}
     */
    let workColElement = [];
    let colHeight = [];
    let workContainer
    let containerBottom
    let containerTop
    let containerHeight
    let maxColHeight
    let windowInnerHeight
    
    export let y = 0;
    
    let items = projects;

    let screenOrientation = "landscape"
    const columnOnLandscape = 3
    const columnOnPotrait = 2
    let selectedCategory = 'all';
    
    function distributeItem() {
        let columns
        if (screenOrientation == "landscape") {columns = columnOnLandscape; } else {columns = columnOnPotrait;}
        const filteredItems = selectedCategory === 'all' ? items : items.filter(item => item.category === selectedCategory);
        const distributedItems = [];

        for (let i = 0; i < columns; i++) {
            distributedItems[i] = filteredItems.filter((_, index) => index % columns === i);
        }

        return distributedItems
    }

    function setCategory(category) {
        selectedCategory = category;
    }

    let distributedItems
    $: {
        distributedItems = distributeItem(selectedCategory,screenOrientation)
        // if(workContainer){
        //     tick().then(() => updateDimension())
        // }
    }
    //Update y coordinate and height for work scroll transition
    function updateDimension() {
            console.log("dimension updated")
            windowInnerHeight = window.innerHeight;
            //on category change, the rects is changed different from initial load rects, so the bottom and top coordinate is changed too.
            containerBottom = workContainer.getClientRects()[0].bottom - window.innerHeight +y; 
            containerTop = workContainer.getClientRects()[0].top + y;
            containerHeight = workContainer.clientHeight ;
            workColElement.forEach((element,index) => {
                // on screen orientation columns is changed, the last index can be undefined. 
                if (element) {
                    colHeight[index] = element.getBoundingClientRect().height;
                }
            });
            maxColHeight = Math.max(...colHeight);
        }

    function openModal(clickedProject) {
        selectedProject = clickedProject;
        showModal = true;
    }

    function setY(y) {
        if (containerTop && y < containerTop ) { return containerTop}
        else if (containerBottom && y > containerBottom) { return containerBottom}
        else {return y}

    }

    $: yw = setY(y);

    onMount(() => {
        //Media query check
        const landscapeMQ = window.matchMedia("(orientation: landscape)");

        function handleViewportChange(e) {
            // Check if the media query is true
            if (e.matches) {
                screenOrientation = "landscape";
            } else {
                screenOrientation = "potrait";
            }
        }
        
        // Register event listener
        landscapeMQ.addEventListener("change",handleViewportChange);
        
        // Initial check
        handleViewportChange(landscapeMQ);

        // Initial items distribution
        distributedItems = distributeItem()

        updateDimension()

    });

    afterUpdate(() => {
        updateDimension()
    })
</script>

<div class="flex flex-col p-3 min-h-screen" id="works">
    <div class="flex flex-row flex-nowrap justify-between pt-3 pb-3">
        <div>
            <h1 class="text-2xl lg:text-3xl font-sans font-bold">Works</h1>
            <div class="flex flex-row w-full gap-2 lg:text-lg font-sans font-thin">
                <button on:click={() => setCategory('all')} class:selected={selectedCategory === 'all'}>All</button>
                <button on:click={() => setCategory('residential')} class:selected={selectedCategory === 'residential'}>Residential</button>
                <button on:click={() => setCategory('hospitality')} class:selected={selectedCategory === 'hospitality'}>Hospitality</button>
                <button on:click={() => setCategory('commercial')} class:selected={selectedCategory === 'commercial'}>Commercial</button>
            </div>
        </div>
    </div>
    <ul class="grow flex flex-row gap-3 items-start overflow-clip" bind:this={workContainer}>
        
            {#each distributedItems as workCol, index }
                <!-- must be added for stability, if container height is smaller than view port then no translation. (workContainer.getBoundingClientRect().height > window.innerHeight) -->
                <div bind:this={workColElement[index]} class="flex-1 flex flex-col gap-3" style="transform: translate(0,{containerHeight > windowInnerHeight ? (yw-containerTop)*(maxColHeight-colHeight[index])/(containerBottom-containerTop) : 0}px)">                    {#each workCol as workItem (workItem.id)}
                        <li transition:fade class="bg-neutral-200 relative"  on:click={() => {openModal(workItem)}}>
                            <img src={workItem.mainimage} alt={workItem.name} class="w-full object-cover object-center">
                            <div class="absolute bottom-0 p-3 text-white text-xs sm:text-sm md:text-base">
                                <p class="font-bold">{workItem.name}</p>
                                <p>{workItem.year}</p>
                            </div>
                            <p class="absolute top-0 p-3 hidden">
                                {yw}px scrolled {workItem.category} on index {index}, height of this col is {colHeight} of {workColElement}, size of the container is {containerHeight}, with {containerTop} top and {containerBottom} bottom.
                                translate for {(yw-containerTop)}*{(containerHeight-colHeight[index])}/{(containerBottom-containerTop)}px, window height .
                            </p>
                        </li>
                    {/each}
                </div>
            {/each}
        
        
    </ul>
</div>
{#if showModal}
    <Project bind:showModal selectedProject={selectedProject} />
{/if}

<style>
    button {
        font-weight: 300;
    }

    button.selected {
        font-weight: 500;
    }
</style>
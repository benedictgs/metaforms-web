<script>
    import {onMount} from 'svelte';
    import {fade} from 'svelte/transition';

    import imgVision1 from '$lib/images/vision-1.webp';
    import imgVision2 from '$lib/images/vision-2.webp';
    import imgVision3 from '$lib/images/vision-3.webp';

    let bgImages = [imgVision1,imgVision2,imgVision3];
    let currentIndex = 0;

    let customers = [
        {
            name:"MT",
            testimony: "Saya orangnya detail dan metaforms mampu mengakomodir tingkat kedetailan saya."
        },
        {
            name:"HE",
            testimony: "Sangat amat dibantu memahami kebutuhan saya, dan mampu mengakomodir kebutuhan saya."
        },
        {
            name:"AS",
            testimony: "hasil dari idea saya terwujud dengan sangat baik."
        }
    ]

    const changeImage = (index) => {
        currentIndex = index;
    };

    onMount(() => {
        const interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % bgImages.length;
		}, 10000);

		return () => clearInterval(interval);
    });

</script>

<div class="h-screen w-full relative bg-gray-500 overflow-clip" id="vision">
    {#each bgImages as image, i (image)}
        {#if i === currentIndex}
            <img src={image} transition:fade class="absolute h-full w-full object-cover" />
        {/if}
    {/each}
    <!-- <img src={imgVision1} alt="background of cafe" class="absolute h-full w-full object-cover"> -->
    <div class="absolute w-full bg-black/80 h-full"></div>
    <div class="absolute min-w-[75ch] max-w-[100vh] bg-gradient-to-r from-black h-full"></div>
    <div class="absolute h-full w-full flex flex-col p-3 text-white overflow-clip">
        <div class="grow grid grid-cols-3 row-span-2 p-3 w-full">
            <div class="col-span-3 md:col-span-2 lg:col-span-1">
                <h1 class="font-medium my-6 text-3xl">Our Vision</h1>
                <p class="max-w-[75ch] font-light text-sm/loose sm:text-base/loose lg:text-lg/loose">We rooted in the belief that building is not only a place for rest but also place for meditating, have a mindful spirit, and free the soul. We are embracing a living-in-nature harmony, minimalism elegance, and climate sensitive.
                    <br>You are not just acquiring a design; you are investing in a vision—a vision that transforms living spaces into contemplative havens where one can find solace and serenity amidst the chaos of the modern world.
                    </p>
            </div>
        </div>
        <div class="flex flex-col p-3 w-full">
            <h2 class="font-bold uppercase mt-6">what people say about us</h2>
            <div class="flex-1 flex flex-row gap-6 py-6 overflow-x-auto w-full">
                {#each customers as customer, i}
                    
                    <div class="bg-black/50 hover:bg-black p-6 text-clip flex flex-col justify-between h-full overflow-clip grow w-72 shrink-0" on:click={()=>{changeImage(i)}}>
                        <div class="font-light text-sm sm:text-base leading-loose flex-1 text-center line-clamp-2">{customer.testimony}</div>
                        <div class="text-right align-text-bottom">{customer.name}</div>
                    </div>
                {/each}
                
            </div>
        </div>
    </div>
</div>
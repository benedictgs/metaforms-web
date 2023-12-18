<script>
	
	//Section scroll container transition behaviour
	let y = 0;
    let scrollContainer;

	let yw = 0;

	function handleScroll() {
        y = scrollContainer.scrollTop;

        // if (y < containerTop) { yw = containerTop}
        // else if (y > containerBottom) { yw = containerBottom}
        // else {yw = y}
    }
	
	import Hero from '$lib/Hero.svelte';
	import Quote from '$lib/Quote.svelte';
	import Works from '$lib/Works.svelte';
	import Vision from '$lib/Vision.svelte';
	import Contact from '$lib/Contact.svelte';

</script>

<svelte:head>
	<title>Metaforms Design Studio</title>
	<meta name="description" content="Metaforms Design Studio" />
</svelte:head>

<section class="scroll-container" on:scroll={handleScroll} bind:this={scrollContainer}>
	<div>
		<Hero />
	</div>
	<div>
		<Quote />
	</div>
	<div>
		<Works bind:y />
	</div>
	<div>
		<Vision />
	</div>
	<div>
		<Contact />
	</div>
</section>
<div class="debug hidden">
    test {y} scrolled, window is  orientation
</div> 
<style>
	section.scroll-container {
		scroll-behavior: smooth;
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
        width: 100vw;
        height: 100vh;
	}

	section.scroll-container>div {
        scroll-snap-align: start;
        scroll-snap-stop: always;
        width: 100%;
    }

	.debug {
        position: fixed;
        top : 0;
        right: 0;
    }
</style>

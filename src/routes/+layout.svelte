<script>
	import { afterUpdate } from 'svelte';
	import "@fontsource/roboto/latin.css";
	import "@fontsource/roboto/latin-italic.css";
	import "@fontsource/eb-garamond/latin.css";
	import "@fontsource/eb-garamond/latin-italic.css";
	import '../app.pcss';

	import helloThere from '$lib/hello';

	afterUpdate(() => {
        helloThere();
    });
</script>


<slot />


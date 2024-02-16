<script>
    import { onMount } from 'svelte';
    import Cookies from 'js-cookie';
	import { fade } from 'svelte/transition';

    let showPopup = false;

    function acceptConsent() {
        // Handle the logic for accepting the consent here
        showPopup = false;
        Cookies.set('consent', 'true', { expires: 365 });
    }
    function minimalConsent() {
        // Handle the logic for accepting the consent here
        showPopup = false;
        Cookies.set('consent', 'minimal', { expires: 365 });
    }

    onMount(() => {
        const consentCookie = Cookies.get('consent');
        if (consentCookie) {
            showPopup = false;
        }
        const timeout = setTimeout(() => {
            showPopup = true;}, 500);

        return () => clearTimeout(timeout);
    });
</script>

{#if showPopup}
    <div in:fade={{duration:1000}} out:fade={{duration:200}} class="fixed bottom-0 right-0 width-full max-w-lg bg-white p-5">
        <p class="text-sm">This website uses cookies to ensure you get the best experience. By continuing to use this site, you consent to the use of cookies.</p>
        <div class="grid grid-cols-2 justify-between ">
            <button on:click={acceptConsent} class="font-bold hover:bg-neutral-300 text-sm">Accept All</button>
            <button on:click={minimalConsent} class="font-bold hover:bg-neutral-300 text-sm">Necessary Only</button>
        </div>
    </div>
{/if}

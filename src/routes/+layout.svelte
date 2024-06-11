<script lang="ts">
	import '../app.postcss';
import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';

	onMount(() => {
		AOS.init();
	});

	import { language } from '@inlang/sdk-js';
	import { LocaleSwitcher } from '$shared/';

	export let data;
</script>

<!-- <a href="/{language}">
		<h1>Home</h1>
	</a> -->

<!-- <LocaleSwitcher /> -->

<main class="bg-neutral-100 overflow-x-hidden ">
	<slot />
</main>

<style>
	
</style>

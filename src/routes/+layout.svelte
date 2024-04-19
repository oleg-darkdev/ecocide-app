<script lang="ts">
	import '../app.postcss';

	import { language } from '@inlang/sdk-js';
	import { LocaleSwitcher } from '$shared/';

	export let data;
</script>

<!-- <a href="/{language}">
		<h1>Home</h1>
	</a> -->

<LocaleSwitcher />

<main class="bg-neutral-100">
	<slot />
</main>

<style>
	:global(.extra-bdr) {
		border-radius: 5rem;
	}
</style>

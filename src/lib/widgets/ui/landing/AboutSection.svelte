<script>
	import { ScenarioСard, AntiSystemsProjectCard } from '$lib/entities';
	import { scenarius } from '$lib/shared';
</script>

<section>
	<div class=" mx-auto flex max-w-7xl flex-col items-center px-1 py-8 sm:px-6 ">
		<a name="about" />

		<div class="prose-blue prose mx-auto flex w-full max-w-3xl flex-col text-left">
			<div class="mx-auto w-full">
				<h1>A small headline to switch your visitors into users.</h1>
				<h2>A small headline to switch your visitors into users.</h2>
				<p>
					Right. Say that again. No, no, George, look, it's just an act, right? Okay, so 9:00 you're
					strolling through the parking lot, you see us struggling.
				</p>
			</div>
		</div>
		<AntiSystemsProjectCard />

		{#each scenarius as scenario}
			<ScenarioСard {scenario} />
		{/each}
	</div>
</section>

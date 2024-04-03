<script>
	import { ScenarioСard, OrganisationCard } from '$lib/entities';
	import { scenarius, organisations } from '$lib/shared';

	import {
		Hero,
		Heading,
		ForestSection,
		LettersSection,
		SkySection,
		NightSection,
		ContentSection,
		Slider,
		HorrorLetter
	} from '$lib/widgets';
</script>

<!-- https://codepen.io/alvarotrigo/pen/KKvGNOj -->
<!-- https://codepen.io/rukouen/details/wpgMZO -->

<svelte:head>
	<title>Ecocide boardgame</title>
</svelte:head>

<LettersSection />

<Hero />

<!-- <Slider /> -->

<ContentSection>
	<Heading
		title="Night activism"
		bgImage={'https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg'}
	/>

	<section>
		<div class=" mx-auto flex max-w-7xl flex-col items-center px-1 py-8 sm:px-6 ">
			<div class="prose-blue prose mx-auto flex w-full max-w-3xl flex-col text-left">
				<div class="mx-auto w-full">
					<h1>A small headline to switch your visitors into users.</h1>
					<h2>A small headline to switch your visitors into users.</h2>
					<p>
						Right. Say that again. No, no, George, look, it's just an act, right? Okay, so 9:00
						you're strolling through the parking lot, you see us struggling.
					</p>
				</div>
			</div>

			<!-- <div class="flex flex-row justify-between"> -->
			{#each scenarius as scenario}
				<ScenarioСard {scenario} />
			{/each}
			<!-- </div> -->
		</div>
	</section>
</ContentSection>

<SkySection />

<ContentSection>
	<Heading
		title="Night activism"
		bgImage={'https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg'}
	/>
	<section>
		<div class=" mx-auto flex max-w-7xl flex-col items-center px-1 py-8 sm:px-6 ">
			<div class="prose-blue prose mx-auto flex w-full max-w-3xl flex-col text-left">
				<div class="mx-auto w-full">
					<h1>A small headline to switch your visitors into users.</h1>
					<h2>A small headline to switch your visitors into users.</h2>
					<p>
						Right. Say that again. No, no, George, look, it's just an act, right? Okay, so 9:00
						you're strolling through the parking lot, you see us struggling.
					</p>
				</div>
			</div>
			<div class="flex flex-row ">
				{#each organisations as organisation}
					<OrganisationCard {organisation} />
				{/each}
			</div>
		</div>
	</section>
</ContentSection>

<NightSection />

<ContentSection>
	<Heading
		title="Night activism"
		bgImage={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png'}
	/>
	<HorrorLetter />
</ContentSection>

<ForestSection />

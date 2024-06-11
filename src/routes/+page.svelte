<script>
	import {
		Hero,
		Heading,
		FooterSection,
		LettersSection,
		SkySection,
		NightSection,
		AboutSection,
		ForestSection,
		ContentSection,
		TeamSection,
		ActivismSection,
		Slider,
		HorrorLetter
	} from '$widgets';
	import { i } from '@inlang/sdk-js';
	// import {HeadHrefLangs} from '$shared';
</script>

<!-- https://codepen.io/alvarotrigo/pen/KKvGNOj -->
<!-- https://codepen.io/rukouen/details/wpgMZO -->

<svelte:head>
	<title>Ecocide boardgame</title>
	<!-- <HeadHrefLangs /> -->
</svelte:head>

<!-- `
<h1 class="text-5xl font-extralight">{i('welcome')}</h1>
<p>{@html i('description')}</p>` -->

<LettersSection />

<Hero />

<section class="h-[30vh] w-full" />
<!-- <Slider /> -->

<ContentSection>
	<Heading title="O projekcie" bgImage={'/images/bg/main.jpeg'} />

	<AboutSection />
</ContentSection>

<SkySection />

<ContentSection>
	<Heading title="O aktywizmie" bgImage={'/images/bg/sky.jpeg'} />
	<ActivismSection />
</ContentSection>

<!--


https://codepen.io/hluebbering/pen/xxJeVZL
  -->
<!-- <NightSection /> -->
<!-- https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png -->

<ForestSection />

<ContentSection>
	<Heading title="Nasz zespół leśny" bgImage={'/images/bg/1.jpg'} />
	<TeamSection />
	<HorrorLetter />
</ContentSection>

<FooterSection />

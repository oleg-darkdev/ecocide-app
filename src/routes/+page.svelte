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
		Faq,
		HorrorLetter
	} from '$widgets';


	const faq = [
		{
			id: 0,
			q: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `,
			a: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `]
		},
		{
			id: 0,
			q: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `,
			a: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `]
		},
		{
			id: 0,
			q: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `,
			a: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `]
		},
		{
			id: 0,
			q: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `,
			a: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `]
		}
	]
</script>

<!-- https://codepen.io/alvarotrigo/pen/KKvGNOj -->
<!-- https://codepen.io/rukouen/details/wpgMZO -->

<svelte:head>
	<title>Ecocide boardgame</title>
</svelte:head>

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

<Faq {faq}/>
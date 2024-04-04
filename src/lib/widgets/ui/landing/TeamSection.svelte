<script>
	import { TeamMemberCard } from '$lib/entities';

	const teamMembers = [{}, {}];
</script>

<section class="container mx-auto px-6 py-10">
	<h1
		class="text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl"
	>
		our team
	</h1>

	<p class="mx-auto my-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni
		quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
	</p>

	<div class="flex items-center justify-center">
		<div class="flex items-center rounded-xl border border-blue-600 p-1 dark:border-blue-400">
			darkdev_brand@riseup.net
		</div>
	</div>

	<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-2">
		{#each teamMembers as member}
			<TeamMemberCard {member} />
		{/each}
	</div>
</section>

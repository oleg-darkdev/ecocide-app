<script>
	import { TeamMemberCard } from '$lib/entities';

	import { teamMembers } from '$lib/shared';
</script>

<section class="container mx-auto px-6 pt-10">
	<p class="mx-auto my-6 max-w-2xl text-center text-gray-500 ">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni
		quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
	</p>

	<a name="team" />

	<div class="flex items-center justify-center">
		<div class="flex items-center rounded-2xl border border-neutral-600 bg-teal-800 px-4 py-4">
			<span class="text-xl text-white">darkdev_brand@riseup.net</span>
		</div>
	</div>

	<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-2">
		{#each teamMembers as member}
			<TeamMemberCard {member} />
		{/each}
	</div>
</section>

<style>
</style>

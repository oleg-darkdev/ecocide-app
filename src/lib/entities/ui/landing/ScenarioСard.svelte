<script>
	export let scenario;

	// title shortDesc, place: {
	//   title: coordinates: [Array], link: ''
</script>

<div
	class="group mx-auto my-10   flex max-w-7xl flex-col items-center rounded-md border-b border-gray-200 p-2 pb-10 hover:bg-teal-800 hover:-translate-y-1 hover:scale-110 hover:transition hover:duration-1000 hover:ease-in-out sm:flex-row"
>
	<div
		class="inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gray-50 text-neutral-600 sm:mr-10"
	>
		<div class="avatar">
			<div class="w-24 rounded-full">
				<img src="/images/icons/{scenario.icon}" alt="icon type" />
			</div>
		</div>
	</div>
	<div class="prose-sm prose mt-0 flex-grow text-center sm:mt-0 sm:text-left">
		<div class="-mb-8">
			{#each scenario.tags as tag}
				<div class="badge-outline badge mr-2">{tag}</div>
			{/each}
		</div>
		<h2>{scenario.title}</h2>
		<p>
			{scenario.shortDesc}
		</p>
	</div>
</div>

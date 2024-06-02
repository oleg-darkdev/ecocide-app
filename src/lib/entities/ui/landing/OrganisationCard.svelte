<script>
	export let organisation;
</script>

<div class="card mx-1  hover:-translate-y-1  hover:transition hover:duration-1000 hover:ease-in-out">
	<img src="/images/organisations/{organisation.logo}" class="card__image" alt="" />
	<div class="card__overlay  flex flex-col text-left">
		<div class="card__header">
			<svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
			<div class="">
				<h1>{organisation.title}</h1>
				<div class="mb-0">
					{#each organisation.tags as tag}
						<div class="badge-outline badge mr-2">{tag}</div>
					{/each}
				</div>
				<!-- <h2>A small headline to switch your visitors into users.</h2> -->
			</div>
		</div>
		<p>
			Right. Say that again. No, no, George, look, it's just an act, right? Okay, so 9:00 you're
			strolling through the parking lot, you see us struggling.
		</p>
	</div>
</div>

<style>
	:root {
		--surface-color: #115e59;
		--curve: 40;
	}

	.card {
		position: relative;
		display: block;
		height: 100%;
		width: 370px;
		border-radius: calc(var(--curve) * 1px);
		overflow: hidden;
		text-decoration: none;
	}

	.card__image {
		width: 100%;
		/* height: auto; */
    height: 450px;

	}

	.card__overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		border-radius: calc(var(--curve) * 1px);
		background-color: var(--surface-color);
		transform: translateY(100%);
		transition: 0.2s ease-in-out;
	}

	.card:hover .card__overlay {
		transform: translateY(0);
	}

	.card__header {
		position: relative;
		display: flex;
		align-items: center;
		gap: 2em;
		padding: 2em;
		border-radius: calc(var(--curve) * 1px) 0 0 0;
		background-color: var(--surface-color);
		transform: translateY(-100%);
		transition: 0.2s ease-in-out;
	}

	.card__arc {
		width: 80px;
		height: 80px;
		position: absolute;
		bottom: 100%;
		right: 0;
		z-index: 1;
	}

	.card__arc path {
		fill: var(--surface-color);
		d: path('M 40 80 c 22 0 40 -22 40 -40 v 40 Z');
	}

	.card:hover .card__header {
		transform: translateY(0);
	}

	.card__thumb {
		flex-shrink: 0;
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}

	.card__title {
		font-size: 1em;
		margin: 0 0 0.3em;
		color: #6a515e;
	}

	.card__tagline {
		display: block;
		margin: 1em 0;
		font-family: 'MockFlowFont';
		font-size: 0.8em;
		color: #d7bdca;
	}

	.card__status {
		font-size: 0.8em;
		color: #d7bdca;
	}

	.card__description {
		padding: 0 2em 2em;
		margin: 0;
		color: #d7bdca;
		font-family: 'MockFlowFont';
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
</style>

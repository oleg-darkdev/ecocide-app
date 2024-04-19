<script>
	import { onMount } from 'svelte';

	onMount(() => {
		let options = document.querySelectorAll('.option');

		options.forEach(function (option) {
			option.addEventListener('click', function () {
				options.forEach(function (opt) {
					opt.classList.remove('active');
				});
				this.classList.add('active');
			});
		});
	});

	const navData = [
		{
			title: 'About',
			desc: '',
			link: '#about',
			img: 'main.jpeg'
		},
		{
			title: 'Eco activism',
			desc: '',
			link: '#activism',
			img: 'sky.jpeg'
		},

		{
			title: 'Our team',
			desc: '',
			link: '#team',
			img: '4.jpg'
		},
		{
			title: 'Our shop',
			desc: '',
			link: '/',
			img: '5.jpg'
		},
		{
			title: 'Application',
			desc: '',
			link: '/',
			img: '7.jpg'
		}
	];

	let activeInd = 0;
</script>

<section class="min-h-[50vh]  ">
	<div class="options ">
		{#each navData as nav, i}
			<div
				class="option {activeInd == i ? 'active ' : 'grayscale filter'} "
				style="--optionBackground:url(/images/bg/{nav.img});"
				on:click={() => (activeInd = i)}
			>
				<div class="shadow" />
				<div class="label">
					<div class="icon bg-white">
						<i class="fas fa-walking" />
					</div>
					<div class="info">
						<div>
							<a href={nav.link} class="text-4xl font-black text-white">{nav.title}</a>
						</div>
						<!-- <div class="sub">{nav.desc}</div> -->
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		overflow: hidden;

		transition: 0.25s;
	}

	.options {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		overflow: hidden;
		min-width: 600px;
		max-width: 900px;
		width: calc(100% - 100px);
		height: 400px;
	}
	@media screen and (max-width: 718px) {
		.options {
			min-width: 520px;
		}
		.options .option:nth-child(5) {
			display: none;
		}
	}
	@media screen and (max-width: 638px) {
		.options {
			min-width: 440px;
		}
		.options .option:nth-child(4) {
			display: none;
		}
	}
	@media screen and (max-width: 558px) {
		.options {
			min-width: 360px;
		}
		.options .option:nth-child(3) {
			display: none;
		}
	}
	@media screen and (max-width: 478px) {
		.options {
			min-width: 280px;
		}
		.options .option:nth-child(2) {
			display: none;
		}
	}
	.options .option {
		position: relative;
		overflow: hidden;
		min-width: 60px;
		margin: 10px;
		background: var(--optionBackground, var(--defaultBackground, #e6e9ed));
		background-size: auto 120%;
		background-position: center;
		cursor: pointer;
		transition: 0.75s cubic-bezier(0.05, 0.61, 0.41, 0.95);
	}

	.options .option.active {
		flex-grow: 10000;
		transform: scale(1);
		max-width: 600px;
		margin: 0px;
		border-radius: 40px;
		background-size: auto 100%;
	}

	.options .option.active:active {
		transform: scale(0.9);
	}
	.options .option.active .shadow {
		box-shadow: inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black;
	}
	.options .option.active .label {
		bottom: 20px;
		left: 20px;
	}
	.options .option.active .label .info > div {
		right: 30px;
		opacity: 1;
	}
	.options .option:not(.active) {
		flex-grow: 1;
		border-radius: 30px;
	}
	.options .option:not(.active) .shadow {
		bottom: -40px;
		box-shadow: inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black;
	}
	.options .option:not(.active) .label {
		bottom: 10px;
		left: 10px;
	}
	.options .option:not(.active) .label .info > div {
		left: 20px;
		opacity: 0;
	}
	.options .option .shadow {
		position: absolute;
		bottom: 0px;
		left: 0px;
		right: 0px;
		height: 120px;
		transition: 0.75s cubic-bezier(0.05, 0.61, 0.41, 0.95);
	}
	.options .option .label {
		display: flex;
		position: absolute;
		right: 0px;
		height: 40px;
		transition: 0.75s cubic-bezier(0.05, 0.61, 0.41, 0.95);
	}
	.options .option .label .icon {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		min-width: 40px;
		max-width: 40px;
		height: 40px;
		border-radius: 100%;
		color: var(--defaultBackground);
	}
	.options .option .label .info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 10px;
		white-space: pre;
	}
	.options .option .label .info > div {
		position: relative;
		transition: 0.75s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity 0.7s ease-out;
	}
</style>

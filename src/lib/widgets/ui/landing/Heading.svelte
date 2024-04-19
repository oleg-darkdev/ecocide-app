<script>
	export let bgImage, title;
</script>

<section class="flex h-screen flex-col">
	<div style="background-image: url({bgImage});" class="container-text px-10 font-black ">
		<h2 class="text-white">{title}</h2>
	</div>
</section>

<style>
	@keyframes filling {
		from {
			background-position: center 25%;
		}
		to {
			background-position: center 50%;
		}
	}

	.container-text {
		z-index: 0;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		padding-top: 20px;
		text-align: end;
		/* font-family: 'Bungee', cursive; */
		animation: filling 3s ease forwards;
		filter: grayscale(100%);
	}

	h2 {
		font-size: 140px;
		line-height: 1;
	}
</style>

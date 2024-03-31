<script>
  export let bgImage;
</script>

<section class="flex h-screen flex-col">
	<div style='background-image: url({bgImage});' class="container-text px-10 font-black ">
		Eco <br /> Bunt
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
		color: #ffffff;
		padding-top: 20px;
		font-size: 280px;
		line-height: 0.7;
		text-align: end;
		/* font-family: 'Bungee', cursive; */
		animation: filling 3s ease forwards;
	}
</style>

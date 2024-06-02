<script>
	export let bgImage, title;
</script>
<!-- h-screen  -->
<div class="flex flex-col " data-aos="fade-up" data-aos-mirror="false"
    data-aos-once="false">
	<div style="background-image: url({bgImage});" class="container-text px-10 font-black ">
		<h2 class="title">{title}</h2>
	</div>
</div>

<style>
  @media screen and (max-width: 600px) {
		.title {
		font-size: 55px;
		line-height: 1;
	}
}

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

  @media (min-width: 600px) {
	.title {
		font-size: 140px;
		line-height: 1;
	}
}
	
</style>

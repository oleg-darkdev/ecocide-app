<section class="background-container extra-rounded h-[90vh]  bg-black ">
	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="" />
	<div class="stars" />
	<div class="twinkling" />
	<div class="clouds" />
</section>

<!-- <div class="relative h-[250px] w-full max-w-6xl bg-white  mb-40"><slot /></div> -->

<style>
	@keyframes move-background {
		from {
			-webkit-transform: translate3d(0px, 0px, 0px);
		}
		to {
			-webkit-transform: translate3d(1000px, 0px, 0px);
		}
	}
	@-webkit-keyframes move-background {
		from {
			-webkit-transform: translate3d(0px, 0px, 0px);
		}
		to {
			-webkit-transform: translate3d(1000px, 0px, 0px);
		}
	}
	@-moz-keyframes move-background {
		from {
			-webkit-transform: translate3d(0px, 0px, 0px);
		}
		to {
			-webkit-transform: translate3d(1000px, 0px, 0px);
		}
	}
	@-webkit-keyframes move-background {
		from {
			-webkit-transform: translate3d(0px, 0px, 0px);
		}
		to {
			-webkit-transform: translate3d(1000px, 0px, 0px);
		}
	}
	.background-container {
		position: relative;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 0;
		margin-top: -20vh;
	}

	.stars {
		background: black url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png') repeat;
		position: relative;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: block;
		z-index: 1;
	}

	.twinkling {
		width: 10000px;
		height: 100%;
		background: transparent
			url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png') repeat;
		background-size: 1000px 1000px;
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 2;
		-moz-animation: move-background 70s linear infinite;
		-ms-animation: move-background 70s linear infinite;
		-o-animation: move-background 70s linear infinite;
		-webkit-animation: move-background 70s linear infinite;
		animation: move-background 70s linear infinite;
	}

	.clouds {
		width: 10000px;
		height: 100%;
		background: transparent
			url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png') repeat;
		background-size: 1000px 1000px;
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 3;
		-moz-animation: move-background 150s linear infinite;
		-ms-animation: move-background 150s linear infinite;
		-o-animation: move-background 150s linear infinite;
		-webkit-animation: move-background 150s linear infinite;
		animation: move-background 150s linear infinite;
	}

	img {
		height: 70vh;
		width: 70vh;
		position: absolute;
		z-index: 3;
		right: 20px;
	}
</style>

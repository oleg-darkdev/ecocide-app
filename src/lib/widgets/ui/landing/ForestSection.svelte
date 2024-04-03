<script>
</script>

<section class="h-[90vh] w-full">
	<header class=" mx-auto h-full w-full  max-w-6xl">
		<div class="overlay">
			<div class="parallax">
				<h2 class='text-[8rem] font-black text-neutral-100'>Save our planet</h2>
				<div class="one" />
				<div class="two" />
				<div class="three" />
				<div class="four" />
				<div class="five" />
			</div>
		</div>
	</header>
</section>

<style>
	header {
		border-radius: 5rem 5rem 0 0;
		position: relative;
		margin-top: -20vh;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #476052;
		z-index: 1;
	}
	header .overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		/* border-radius: 2%; */
	}
	header .overlay h2 {
    line-height: 0.8;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 4;
		margin: 0;
		text-transform: uppercase;
		text-align: center;
		mix-blend-mode: screen;
		opacity: 0.78;
	}
	@media (max-width: 768px) {
		header .overlay h2 {
			font-size: 4rem;
		}
	}
	@media (max-height: 500px) {
		header .overlay h2 {
			font-size: 6rem;
		}
	}
	header .overlay h1 span {
		display: block;
		letter-spacing: 5px;
		font-size: 2vw;
	}
	@media (max-width: 768px) {
		header .overlay h1 span {
			font-size: 1.25rem;
		}
	}
	header .parallax {
		position: relative;
		width: 100%;
		height: 100%;
	}
	header .parallax div {
		position: absolute;
		bottom: -15px;
		left: -15px;
		width: calc(100% + (15px * 2));
		height: calc(100% + (15px * 2));
		background-position: 0 100%;
		background-repeat: no-repeat;
		background-size: cover;
		transition: transform 200ms ease;
	}
	@media (max-height: 600px) {
		header .parallax div {
			background-size: 100%;
		}
	}
	header .parallax .one {
		background-image: url('https://tornis.robbowen.digital/img/mist.png');
		z-index: 4;
		animation: side 25s linear infinite;
	}
	header .parallax .two {
		background-image: url('https://tornis.robbowen.digital/img/tree_top.png');
		z-index: 3;
	}
	header .parallax .three {
		background-image: url('https://tornis.robbowen.digital/img/mist.png');
		z-index: 2;
		animation: side 25s linear 5s infinite;
	}
	header .parallax .four {
		background-image: url('https://tornis.robbowen.digital/img/tree_mid.png');
		z-index: 1;
	}
	header .parallax .five {
		background-image: url('https://tornis.robbowen.digital/img/tree_base.jpg');
		z-index: 0;
	}

	@keyframes side {
		20%,
		60%,
		100% {
			transform: translateX(15px);
		}
		40%,
		80% {
			transform: translateX(-15px);
		}
	}
</style>

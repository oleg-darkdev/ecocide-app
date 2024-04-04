<script>
</script>

<section class="h-[90vh] w-full">
	<div class="wrap mx-auto h-full w-full  max-w-6xl">
		<div class="overlay">
			<div class="parallax">
				<h2 class='text-[7rem] font-black text-neutral-100'>Please, stand up for our planet</h2>
				<div class="one" />
				<div class="two" />
				<div class="three" />
				<div class="four" />
				<div class="five" />
			</div>
		</div>
	</div>
</section>

<style>
	.wrap {
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
	div .overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		/* border-radius: 2%; */
	}
	div .overlay h2 {
    line-height: 0.8;
		position: absolute;
		top: 60%;
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
		div .overlay h2 {
			font-size: 4rem;
		}
	}
	@media (max-height: 500px) {
		div .overlay h2 {
			font-size: 6rem;
		}
	}
	div .overlay h2 span {
		display: block;
		letter-spacing: 5px;
		font-size: 2vw;
	}
	@media (max-width: 768px) {
		div .overlay h2 span {
			font-size: 1.25rem;
		}
	}
	div .parallax {
		position: relative;
		width: 100%;
		height: 100%;
	}
	div .parallax div {
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
		div .parallax div {
			background-size: 100%;
		}
	}
	div .parallax .one {
		background-image: url('https://tornis.robbowen.digital/img/mist.png');
		z-index: 4;
		animation: side 25s linear infinite;
	}
	div .parallax .two {
		background-image: url('https://tornis.robbowen.digital/img/tree_top.png');
		z-index: 3;
	}
	div .parallax .three {
		background-image: url('https://tornis.robbowen.digital/img/mist.png');
		z-index: 2;
		animation: side 25s linear 5s infinite;
	}
	div .parallax .four {
		background-image: url('https://tornis.robbowen.digital/img/tree_mid.png');
		z-index: 1;
	}
	div .parallax .five {
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

<section class="h-[80vh] w-full">
	<div class="extra-bdr wrap h-full w-full max-w-6xl mx-auto">
		<div class="extra-bdr center h-full w-full max-w-6xl mx-auto">
			<h1>Background Animation</h1>
		</div>
	</div>
</section>

<style>
	.wrap {
		background-image: url('https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg');
		background-size: cover;
		-webkit-animation: slidein 100s;
		animation: slidein 100s;
		margin-top: -20vh;

		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;

		-webkit-animation-iteration-count: infinite;
		animation-iteration-count: infinite;

		-webkit-animation-direction: alternate;
		animation-direction: alternate;
	}

	@-webkit-keyframes slidein {
		from {
			background-position: top;
			background-size: 3000px;
		}
		to {
			background-position: -100px 0px;
			background-size: 2750px;
		}
	}

	@keyframes slidein {
		from {
			background-position: top;
			background-size: 3000px;
		}
		to {
			background-position: -100px 0px;
			background-size: 2750px;
		}
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		margin: auto;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(75, 75, 250, 0.3);
		/* border-radius: 3px; */
	}
</style>

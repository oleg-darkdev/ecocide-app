<script>
</script>

<section class="z-1 -mt-[20vh] h-[90vh] ">
	<div class="bg extra-bdr wrap mx-auto  h-full w-full max-w-6xl">
		<div class="firefly" />
		<div class="firefly" />
		<div class="firefly" />
		<div class="firefly" />
		<div class="firefly" />
		<div class="firefly" />
		<div class="firefly" />
		<div class="firefly" />
		<div class="firefly" />
		<div class="firefly" />
		<div class="firefly" />
		<div class="firefly" />
		<div class="firefly" />
		<div class="firefly" />
		<div class="firefly" />
	</div>
</section>

<style>
	.bg {
		background: url(https://i.pinimg.com/originals/44/6e/3b/446e3b79395a287ca32f7977dd83b290.jpg);
		background-size: cover;
	}

	.firefly {
		position: fixed;
		left: 50%;
		top: 50%;
		width: 0.4vw;
		height: 0.4vw;
		margin: -0.2vw 0 0 9.8vw;
		animation: ease 200s alternate infinite;
		pointer-events: none;
	}
	.firefly::before,
	.firefly::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		transform-origin: -10vw;
	}
	.firefly::before {
		background: black;
		opacity: 0.4;
		animation: drift ease alternate infinite;
	}
	.firefly::after {
		background: white;
		opacity: 0;
		box-shadow: 0 0 0vw 0vw yellow;
		animation: drift ease alternate infinite, flash ease infinite;
	}

	.firefly:nth-child(1) {
		animation-name: move1;
	}
	.firefly:nth-child(1)::before {
		animation-duration: 16s;
	}
	.firefly:nth-child(1)::after {
		animation-duration: 16s, 7192ms;
		animation-delay: 0ms, 4873ms;
	}

	@keyframes move1 {
		0% {
			transform: translateX(-18vw) translateY(8vh) scale(0.9);
		}
		3.5714285714% {
			transform: translateX(-22vw) translateY(-45vh) scale(0.71);
		}
		7.1428571429% {
			transform: translateX(1vw) translateY(9vh) scale(0.88);
		}
		10.7142857143% {
			transform: translateX(8vw) translateY(15vh) scale(0.54);
		}
		14.2857142857% {
			transform: translateX(-28vw) translateY(26vh) scale(0.89);
		}
		17.8571428571% {
			transform: translateX(-30vw) translateY(49vh) scale(0.69);
		}
		21.4285714286% {
			transform: translateX(-46vw) translateY(-8vh) scale(0.88);
		}
		25% {
			transform: translateX(-4vw) translateY(-7vh) scale(0.52);
		}
		28.5714285714% {
			transform: translateX(5vw) translateY(33vh) scale(0.39);
		}
		32.1428571429% {
			transform: translateX(40vw) translateY(20vh) scale(0.36);
		}
		35.7142857143% {
			transform: translateX(-31vw) translateY(39vh) scale(0.5);
		}
		39.2857142857% {
			transform: translateX(-11vw) translateY(34vh) scale(0.47);
		}
		42.8571428571% {
			transform: translateX(-20vw) translateY(-49vh) scale(0.83);
		}
		46.4285714286% {
			transform: translateX(45vw) translateY(45vh) scale(1);
		}
		50% {
			transform: translateX(-44vw) translateY(29vh) scale(0.65);
		}
		53.5714285714% {
			transform: translateX(42vw) translateY(-46vh) scale(0.29);
		}
		57.1428571429% {
			transform: translateX(31vw) translateY(7vh) scale(0.36);
		}
		60.7142857143% {
			transform: translateX(-32vw) translateY(25vh) scale(0.47);
		}
		64.2857142857% {
			transform: translateX(3vw) translateY(45vh) scale(0.47);
		}
		67.8571428571% {
			transform: translateX(-2vw) translateY(-10vh) scale(0.89);
		}
		71.4285714286% {
			transform: translateX(-40vw) translateY(-42vh) scale(0.32);
		}
		75% {
			transform: translateX(-2vw) translateY(7vh) scale(0.64);
		}
		78.5714285714% {
			transform: translateX(14vw) translateY(-44vh) scale(0.44);
		}
		82.1428571429% {
			transform: translateX(-47vw) translateY(31vh) scale(0.71);
		}
		85.7142857143% {
			transform: translateX(50vw) translateY(36vh) scale(0.82);
		}
		89.2857142857% {
			transform: translateX(45vw) translateY(37vh) scale(0.91);
		}
		92.8571428571% {
			transform: translateX(-10vw) translateY(-27vh) scale(0.95);
		}
		96.4285714286% {
			transform: translateX(24vw) translateY(-48vh) scale(0.38);
		}
		100% {
			transform: translateX(-7vw) translateY(-8vh) scale(0.36);
		}
	}
	.firefly:nth-child(2) {
		animation-name: move2;
	}
	.firefly:nth-child(2)::before {
		animation-duration: 14s;
	}
	.firefly:nth-child(2)::after {
		animation-duration: 14s, 10697ms;
		animation-delay: 0ms, 3375ms;
	}

	@keyframes move2 {
		0% {
			transform: translateX(20vw) translateY(-35vh) scale(0.54);
		}
		5.8823529412% {
			transform: translateX(12vw) translateY(40vh) scale(0.86);
		}
		11.7647058824% {
			transform: translateX(-15vw) translateY(38vh) scale(0.96);
		}
		17.6470588235% {
			transform: translateX(-10vw) translateY(24vh) scale(0.49);
		}
		23.5294117647% {
			transform: translateX(-26vw) translateY(27vh) scale(0.82);
		}
		29.4117647059% {
			transform: translateX(-48vw) translateY(36vh) scale(0.91);
		}
		35.2941176471% {
			transform: translateX(24vw) translateY(14vh) scale(0.91);
		}
		41.1764705882% {
			transform: translateX(2vw) translateY(-41vh) scale(0.77);
		}
		47.0588235294% {
			transform: translateX(8vw) translateY(-47vh) scale(0.35);
		}
		52.9411764706% {
			transform: translateX(-12vw) translateY(-21vh) scale(0.82);
		}
		58.8235294118% {
			transform: translateX(18vw) translateY(34vh) scale(0.43);
		}
		64.7058823529% {
			transform: translateX(-25vw) translateY(1vh) scale(0.36);
		}
		70.5882352941% {
			transform: translateX(-34vw) translateY(36vh) scale(0.75);
		}
		76.4705882353% {
			transform: translateX(34vw) translateY(45vh) scale(0.65);
		}
		82.3529411765% {
			transform: translateX(-7vw) translateY(38vh) scale(0.88);
		}
		88.2352941176% {
			transform: translateX(49vw) translateY(33vh) scale(0.41);
		}
		94.1176470588% {
			transform: translateX(-27vw) translateY(-28vh) scale(0.56);
		}
		100% {
			transform: translateX(-42vw) translateY(2vh) scale(0.66);
		}
	}
	.firefly:nth-child(3) {
		animation-name: move3;
	}
	.firefly:nth-child(3)::before {
		animation-duration: 16s;
	}
	.firefly:nth-child(3)::after {
		animation-duration: 16s, 6428ms;
		animation-delay: 0ms, 6958ms;
	}

	@keyframes move3 {
		0% {
			transform: translateX(-47vw) translateY(2vh) scale(0.91);
		}
		4.7619047619% {
			transform: translateX(45vw) translateY(30vh) scale(0.32);
		}
		9.5238095238% {
			transform: translateX(28vw) translateY(-49vh) scale(0.32);
		}
		14.2857142857% {
			transform: translateX(20vw) translateY(31vh) scale(0.82);
		}
		19.0476190476% {
			transform: translateX(-43vw) translateY(49vh) scale(0.83);
		}
		23.8095238095% {
			transform: translateX(-14vw) translateY(14vh) scale(0.54);
		}
		28.5714285714% {
			transform: translateX(14vw) translateY(1vh) scale(0.9);
		}
		33.3333333333% {
			transform: translateX(21vw) translateY(-34vh) scale(0.6);
		}
		38.0952380952% {
			transform: translateX(-26vw) translateY(34vh) scale(0.83);
		}
		42.8571428571% {
			transform: translateX(46vw) translateY(17vh) scale(0.62);
		}
		47.619047619% {
			transform: translateX(8vw) translateY(-17vh) scale(0.86);
		}
		52.380952381% {
			transform: translateX(4vw) translateY(24vh) scale(0.87);
		}
		57.1428571429% {
			transform: translateX(-21vw) translateY(-41vh) scale(0.26);
		}
		61.9047619048% {
			transform: translateX(-27vw) translateY(49vh) scale(0.97);
		}
		66.6666666667% {
			transform: translateX(38vw) translateY(21vh) scale(0.45);
		}
		71.4285714286% {
			transform: translateX(47vw) translateY(-2vh) scale(0.5);
		}
		76.1904761905% {
			transform: translateX(25vw) translateY(40vh) scale(0.3);
		}
		80.9523809524% {
			transform: translateX(34vw) translateY(-34vh) scale(0.57);
		}
		85.7142857143% {
			transform: translateX(33vw) translateY(-1vh) scale(0.78);
		}
		90.4761904762% {
			transform: translateX(44vw) translateY(-47vh) scale(0.9);
		}
		95.2380952381% {
			transform: translateX(31vw) translateY(-8vh) scale(0.6);
		}
		100% {
			transform: translateX(-20vw) translateY(-42vh) scale(0.26);
		}
	}
	.firefly:nth-child(4) {
		animation-name: move4;
	}
	.firefly:nth-child(4)::before {
		animation-duration: 13s;
	}
	.firefly:nth-child(4)::after {
		animation-duration: 13s, 7846ms;
		animation-delay: 0ms, 4069ms;
	}

	@keyframes move4 {
		0% {
			transform: translateX(3vw) translateY(-49vh) scale(0.44);
		}
		3.8461538462% {
			transform: translateX(24vw) translateY(30vh) scale(0.98);
		}
		7.6923076923% {
			transform: translateX(-25vw) translateY(8vh) scale(0.64);
		}
		11.5384615385% {
			transform: translateX(4vw) translateY(10vh) scale(0.27);
		}
		15.3846153846% {
			transform: translateX(-37vw) translateY(-29vh) scale(0.69);
		}
		19.2307692308% {
			transform: translateX(0vw) translateY(46vh) scale(0.74);
		}
		23.0769230769% {
			transform: translateX(9vw) translateY(-1vh) scale(0.47);
		}
		26.9230769231% {
			transform: translateX(-17vw) translateY(38vh) scale(0.44);
		}
		30.7692307692% {
			transform: translateX(-13vw) translateY(23vh) scale(0.96);
		}
		34.6153846154% {
			transform: translateX(-39vw) translateY(-25vh) scale(0.64);
		}
		38.4615384615% {
			transform: translateX(-35vw) translateY(-19vh) scale(0.92);
		}
		42.3076923077% {
			transform: translateX(0vw) translateY(36vh) scale(0.91);
		}
		46.1538461538% {
			transform: translateX(-21vw) translateY(-34vh) scale(0.52);
		}
		50% {
			transform: translateX(20vw) translateY(-22vh) scale(0.48);
		}
		53.8461538462% {
			transform: translateX(6vw) translateY(-46vh) scale(0.39);
		}
		57.6923076923% {
			transform: translateX(49vw) translateY(29vh) scale(0.46);
		}
		61.5384615385% {
			transform: translateX(-41vw) translateY(16vh) scale(0.79);
		}
		65.3846153846% {
			transform: translateX(23vw) translateY(23vh) scale(0.96);
		}
		69.2307692308% {
			transform: translateX(-1vw) translateY(-40vh) scale(0.62);
		}
		73.0769230769% {
			transform: translateX(2vw) translateY(-6vh) scale(0.5);
		}
		76.9230769231% {
			transform: translateX(-19vw) translateY(-38vh) scale(0.65);
		}
		80.7692307692% {
			transform: translateX(-33vw) translateY(50vh) scale(0.3);
		}
		84.6153846154% {
			transform: translateX(42vw) translateY(-3vh) scale(0.66);
		}
		88.4615384615% {
			transform: translateX(-23vw) translateY(-47vh) scale(0.5);
		}
		92.3076923077% {
			transform: translateX(-41vw) translateY(-43vh) scale(0.97);
		}
		96.1538461538% {
			transform: translateX(6vw) translateY(31vh) scale(0.62);
		}
		100% {
			transform: translateX(18vw) translateY(11vh) scale(0.34);
		}
	}
	.firefly:nth-child(5) {
		animation-name: move5;
	}
	.firefly:nth-child(5)::before {
		animation-duration: 9s;
	}
	.firefly:nth-child(5)::after {
		animation-duration: 9s, 8125ms;
		animation-delay: 0ms, 8289ms;
	}

	@keyframes move5 {
		0% {
			transform: translateX(13vw) translateY(-25vh) scale(0.41);
		}
		4.1666666667% {
			transform: translateX(5vw) translateY(-10vh) scale(0.43);
		}
		8.3333333333% {
			transform: translateX(-43vw) translateY(-31vh) scale(0.35);
		}
		12.5% {
			transform: translateX(-33vw) translateY(21vh) scale(0.97);
		}
		16.6666666667% {
			transform: translateX(8vw) translateY(40vh) scale(0.7);
		}
		20.8333333333% {
			transform: translateX(22vw) translateY(40vh) scale(0.61);
		}
		25% {
			transform: translateX(34vw) translateY(47vh) scale(0.49);
		}
		29.1666666667% {
			transform: translateX(-39vw) translateY(40vh) scale(0.33);
		}
		33.3333333333% {
			transform: translateX(10vw) translateY(41vh) scale(0.52);
		}
		37.5% {
			transform: translateX(41vw) translateY(-1vh) scale(0.89);
		}
		41.6666666667% {
			transform: translateX(34vw) translateY(41vh) scale(0.78);
		}
		45.8333333333% {
			transform: translateX(40vw) translateY(-7vh) scale(0.68);
		}
		50% {
			transform: translateX(45vw) translateY(-4vh) scale(0.63);
		}
		54.1666666667% {
			transform: translateX(9vw) translateY(45vh) scale(0.9);
		}
		58.3333333333% {
			transform: translateX(-19vw) translateY(-42vh) scale(0.41);
		}
		62.5% {
			transform: translateX(-38vw) translateY(34vh) scale(0.78);
		}
		66.6666666667% {
			transform: translateX(-27vw) translateY(-17vh) scale(0.31);
		}
		70.8333333333% {
			transform: translateX(-26vw) translateY(-42vh) scale(0.48);
		}
		75% {
			transform: translateX(-13vw) translateY(38vh) scale(0.31);
		}
		79.1666666667% {
			transform: translateX(-6vw) translateY(3vh) scale(0.8);
		}
		83.3333333333% {
			transform: translateX(3vw) translateY(47vh) scale(0.84);
		}
		87.5% {
			transform: translateX(-46vw) translateY(50vh) scale(0.97);
		}
		91.6666666667% {
			transform: translateX(39vw) translateY(18vh) scale(0.36);
		}
		95.8333333333% {
			transform: translateX(-25vw) translateY(45vh) scale(0.93);
		}
		100% {
			transform: translateX(-49vw) translateY(-2vh) scale(0.93);
		}
	}
	.firefly:nth-child(6) {
		animation-name: move6;
	}
	.firefly:nth-child(6)::before {
		animation-duration: 18s;
	}
	.firefly:nth-child(6)::after {
		animation-duration: 18s, 7029ms;
		animation-delay: 0ms, 8358ms;
	}

	@keyframes move6 {
		0% {
			transform: translateX(3vw) translateY(-42vh) scale(0.86);
		}
		5% {
			transform: translateX(-33vw) translateY(-8vh) scale(0.83);
		}
		10% {
			transform: translateX(42vw) translateY(-10vh) scale(0.84);
		}
		15% {
			transform: translateX(-42vw) translateY(24vh) scale(0.76);
		}
		20% {
			transform: translateX(42vw) translateY(14vh) scale(0.56);
		}
		25% {
			transform: translateX(-18vw) translateY(-1vh) scale(0.43);
		}
		30% {
			transform: translateX(-28vw) translateY(16vh) scale(0.92);
		}
		35% {
			transform: translateX(9vw) translateY(1vh) scale(0.48);
		}
		40% {
			transform: translateX(-40vw) translateY(-34vh) scale(0.9);
		}
		45% {
			transform: translateX(-29vw) translateY(35vh) scale(0.72);
		}
		50% {
			transform: translateX(-48vw) translateY(-23vh) scale(0.45);
		}
		55% {
			transform: translateX(35vw) translateY(-4vh) scale(0.38);
		}
		60% {
			transform: translateX(11vw) translateY(-12vh) scale(0.42);
		}
		65% {
			transform: translateX(50vw) translateY(-24vh) scale(0.65);
		}
		70% {
			transform: translateX(-24vw) translateY(1vh) scale(0.73);
		}
		75% {
			transform: translateX(30vw) translateY(36vh) scale(0.55);
		}
		80% {
			transform: translateX(29vw) translateY(-13vh) scale(0.49);
		}
		85% {
			transform: translateX(-22vw) translateY(45vh) scale(0.92);
		}
		90% {
			transform: translateX(45vw) translateY(-29vh) scale(0.52);
		}
		95% {
			transform: translateX(4vw) translateY(28vh) scale(0.78);
		}
		100% {
			transform: translateX(-27vw) translateY(9vh) scale(0.51);
		}
	}
	.firefly:nth-child(7) {
		animation-name: move7;
	}
	.firefly:nth-child(7)::before {
		animation-duration: 16s;
	}
	.firefly:nth-child(7)::after {
		animation-duration: 16s, 7237ms;
		animation-delay: 0ms, 3346ms;
	}

	@keyframes move7 {
		0% {
			transform: translateX(13vw) translateY(22vh) scale(0.42);
		}
		4% {
			transform: translateX(-15vw) translateY(1vh) scale(0.49);
		}
		8% {
			transform: translateX(32vw) translateY(36vh) scale(0.8);
		}
		12% {
			transform: translateX(-46vw) translateY(17vh) scale(0.92);
		}
		16% {
			transform: translateX(1vw) translateY(35vh) scale(0.35);
		}
		20% {
			transform: translateX(29vw) translateY(5vh) scale(0.66);
		}
		24% {
			transform: translateX(-19vw) translateY(-40vh) scale(0.38);
		}
		28% {
			transform: translateX(43vw) translateY(-4vh) scale(0.58);
		}
		32% {
			transform: translateX(-19vw) translateY(41vh) scale(0.78);
		}
		36% {
			transform: translateX(-8vw) translateY(-16vh) scale(0.31);
		}
		40% {
			transform: translateX(-29vw) translateY(-36vh) scale(0.71);
		}
		44% {
			transform: translateX(29vw) translateY(23vh) scale(0.57);
		}
		48% {
			transform: translateX(24vw) translateY(9vh) scale(0.42);
		}
		52% {
			transform: translateX(-26vw) translateY(-41vh) scale(0.58);
		}
		56% {
			transform: translateX(34vw) translateY(36vh) scale(0.41);
		}
		60% {
			transform: translateX(11vw) translateY(-49vh) scale(0.78);
		}
		64% {
			transform: translateX(-6vw) translateY(-29vh) scale(0.52);
		}
		68% {
			transform: translateX(-31vw) translateY(-36vh) scale(0.58);
		}
		72% {
			transform: translateX(-32vw) translateY(-3vh) scale(0.6);
		}
		76% {
			transform: translateX(15vw) translateY(24vh) scale(0.29);
		}
		80% {
			transform: translateX(-46vw) translateY(25vh) scale(0.48);
		}
		84% {
			transform: translateX(-23vw) translateY(-13vh) scale(0.7);
		}
		88% {
			transform: translateX(17vw) translateY(-38vh) scale(0.74);
		}
		92% {
			transform: translateX(1vw) translateY(-43vh) scale(0.77);
		}
		96% {
			transform: translateX(-3vw) translateY(-29vh) scale(0.86);
		}
		100% {
			transform: translateX(-13vw) translateY(-30vh) scale(0.82);
		}
	}
	.firefly:nth-child(8) {
		animation-name: move8;
	}
	.firefly:nth-child(8)::before {
		animation-duration: 14s;
	}
	.firefly:nth-child(8)::after {
		animation-duration: 14s, 7335ms;
		animation-delay: 0ms, 7047ms;
	}

	@keyframes move8 {
		0% {
			transform: translateX(30vw) translateY(27vh) scale(0.99);
		}
		5.5555555556% {
			transform: translateX(-44vw) translateY(-19vh) scale(0.26);
		}
		11.1111111111% {
			transform: translateX(-6vw) translateY(-26vh) scale(0.83);
		}
		16.6666666667% {
			transform: translateX(34vw) translateY(7vh) scale(0.55);
		}
		22.2222222222% {
			transform: translateX(0vw) translateY(38vh) scale(0.46);
		}
		27.7777777778% {
			transform: translateX(34vw) translateY(-33vh) scale(0.94);
		}
		33.3333333333% {
			transform: translateX(10vw) translateY(-23vh) scale(0.33);
		}
		38.8888888889% {
			transform: translateX(45vw) translateY(30vh) scale(0.77);
		}
		44.4444444444% {
			transform: translateX(8vw) translateY(46vh) scale(0.46);
		}
		50% {
			transform: translateX(-9vw) translateY(-46vh) scale(0.53);
		}
		55.5555555556% {
			transform: translateX(-26vw) translateY(27vh) scale(0.93);
		}
		61.1111111111% {
			transform: translateX(-33vw) translateY(-38vh) scale(0.63);
		}
		66.6666666667% {
			transform: translateX(-47vw) translateY(-29vh) scale(0.98);
		}
		72.2222222222% {
			transform: translateX(-19vw) translateY(42vh) scale(0.73);
		}
		77.7777777778% {
			transform: translateX(8vw) translateY(-12vh) scale(0.69);
		}
		83.3333333333% {
			transform: translateX(-18vw) translateY(29vh) scale(0.44);
		}
		88.8888888889% {
			transform: translateX(-2vw) translateY(-11vh) scale(0.26);
		}
		94.4444444444% {
			transform: translateX(-18vw) translateY(-32vh) scale(0.81);
		}
		100% {
			transform: translateX(-25vw) translateY(-5vh) scale(0.32);
		}
	}
	.firefly:nth-child(9) {
		animation-name: move9;
	}
	.firefly:nth-child(9)::before {
		animation-duration: 16s;
	}
	.firefly:nth-child(9)::after {
		animation-duration: 16s, 9341ms;
		animation-delay: 0ms, 1621ms;
	}

	@keyframes move9 {
		0% {
			transform: translateX(47vw) translateY(18vh) scale(0.97);
		}
		4.5454545455% {
			transform: translateX(-1vw) translateY(-34vh) scale(0.36);
		}
		9.0909090909% {
			transform: translateX(-1vw) translateY(41vh) scale(0.63);
		}
		13.6363636364% {
			transform: translateX(-23vw) translateY(42vh) scale(0.95);
		}
		18.1818181818% {
			transform: translateX(32vw) translateY(-12vh) scale(0.64);
		}
		22.7272727273% {
			transform: translateX(-12vw) translateY(18vh) scale(0.4);
		}
		27.2727272727% {
			transform: translateX(-34vw) translateY(14vh) scale(0.47);
		}
		31.8181818182% {
			transform: translateX(43vw) translateY(-46vh) scale(0.51);
		}
		36.3636363636% {
			transform: translateX(-40vw) translateY(45vh) scale(0.3);
		}
		40.9090909091% {
			transform: translateX(24vw) translateY(-43vh) scale(0.38);
		}
		45.4545454545% {
			transform: translateX(-39vw) translateY(-48vh) scale(0.36);
		}
		50% {
			transform: translateX(-33vw) translateY(12vh) scale(0.95);
		}
		54.5454545455% {
			transform: translateX(0vw) translateY(-16vh) scale(0.77);
		}
		59.0909090909% {
			transform: translateX(15vw) translateY(4vh) scale(0.73);
		}
		63.6363636364% {
			transform: translateX(-27vw) translateY(-39vh) scale(0.98);
		}
		68.1818181818% {
			transform: translateX(25vw) translateY(-33vh) scale(1);
		}
		72.7272727273% {
			transform: translateX(40vw) translateY(-44vh) scale(0.41);
		}
		77.2727272727% {
			transform: translateX(-19vw) translateY(-11vh) scale(0.4);
		}
		81.8181818182% {
			transform: translateX(-31vw) translateY(-20vh) scale(0.46);
		}
		86.3636363636% {
			transform: translateX(26vw) translateY(-9vh) scale(0.32);
		}
		90.9090909091% {
			transform: translateX(4vw) translateY(13vh) scale(0.87);
		}
		95.4545454545% {
			transform: translateX(-19vw) translateY(-11vh) scale(0.59);
		}
		100% {
			transform: translateX(31vw) translateY(27vh) scale(0.55);
		}
	}
	.firefly:nth-child(10) {
		animation-name: move10;
	}
	.firefly:nth-child(10)::before {
		animation-duration: 13s;
	}
	.firefly:nth-child(10)::after {
		animation-duration: 13s, 7820ms;
		animation-delay: 0ms, 7668ms;
	}

	@keyframes move10 {
		0% {
			transform: translateX(-42vw) translateY(-18vh) scale(0.76);
		}
		4.7619047619% {
			transform: translateX(36vw) translateY(-6vh) scale(0.34);
		}
		9.5238095238% {
			transform: translateX(-22vw) translateY(-21vh) scale(0.53);
		}
		14.2857142857% {
			transform: translateX(27vw) translateY(-5vh) scale(0.4);
		}
		19.0476190476% {
			transform: translateX(-14vw) translateY(10vh) scale(0.55);
		}
		23.8095238095% {
			transform: translateX(-3vw) translateY(-34vh) scale(0.74);
		}
		28.5714285714% {
			transform: translateX(-23vw) translateY(-40vh) scale(0.54);
		}
		33.3333333333% {
			transform: translateX(4vw) translateY(26vh) scale(0.72);
		}
		38.0952380952% {
			transform: translateX(-16vw) translateY(42vh) scale(0.84);
		}
		42.8571428571% {
			transform: translateX(-3vw) translateY(19vh) scale(0.79);
		}
		47.619047619% {
			transform: translateX(-26vw) translateY(31vh) scale(0.8);
		}
		52.380952381% {
			transform: translateX(3vw) translateY(23vh) scale(0.54);
		}
		57.1428571429% {
			transform: translateX(-47vw) translateY(17vh) scale(0.77);
		}
		61.9047619048% {
			transform: translateX(45vw) translateY(30vh) scale(0.52);
		}
		66.6666666667% {
			transform: translateX(23vw) translateY(32vh) scale(0.95);
		}
		71.4285714286% {
			transform: translateX(28vw) translateY(-16vh) scale(0.67);
		}
		76.1904761905% {
			transform: translateX(47vw) translateY(17vh) scale(0.94);
		}
		80.9523809524% {
			transform: translateX(34vw) translateY(47vh) scale(0.77);
		}
		85.7142857143% {
			transform: translateX(30vw) translateY(-11vh) scale(0.88);
		}
		90.4761904762% {
			transform: translateX(-30vw) translateY(-48vh) scale(0.94);
		}
		95.2380952381% {
			transform: translateX(15vw) translateY(-41vh) scale(0.45);
		}
		100% {
			transform: translateX(1vw) translateY(10vh) scale(0.7);
		}
	}
	.firefly:nth-child(11) {
		animation-name: move11;
	}
	.firefly:nth-child(11)::before {
		animation-duration: 10s;
	}
	.firefly:nth-child(11)::after {
		animation-duration: 10s, 7309ms;
		animation-delay: 0ms, 4678ms;
	}

	@keyframes move11 {
		0% {
			transform: translateX(-47vw) translateY(37vh) scale(0.72);
		}
		4.5454545455% {
			transform: translateX(-15vw) translateY(-17vh) scale(0.55);
		}
		9.0909090909% {
			transform: translateX(-28vw) translateY(19vh) scale(0.72);
		}
		13.6363636364% {
			transform: translateX(-32vw) translateY(-16vh) scale(0.47);
		}
		18.1818181818% {
			transform: translateX(-14vw) translateY(-19vh) scale(0.27);
		}
		22.7272727273% {
			transform: translateX(-19vw) translateY(-36vh) scale(0.88);
		}
		27.2727272727% {
			transform: translateX(-3vw) translateY(7vh) scale(0.31);
		}
		31.8181818182% {
			transform: translateX(19vw) translateY(-7vh) scale(0.37);
		}
		36.3636363636% {
			transform: translateX(-44vw) translateY(9vh) scale(0.28);
		}
		40.9090909091% {
			transform: translateX(-16vw) translateY(-27vh) scale(0.59);
		}
		45.4545454545% {
			transform: translateX(-45vw) translateY(19vh) scale(0.68);
		}
		50% {
			transform: translateX(-8vw) translateY(-10vh) scale(0.37);
		}
		54.5454545455% {
			transform: translateX(13vw) translateY(37vh) scale(0.52);
		}
		59.0909090909% {
			transform: translateX(16vw) translateY(-34vh) scale(0.77);
		}
		63.6363636364% {
			transform: translateX(10vw) translateY(-13vh) scale(0.72);
		}
		68.1818181818% {
			transform: translateX(-30vw) translateY(-7vh) scale(0.87);
		}
		72.7272727273% {
			transform: translateX(34vw) translateY(9vh) scale(0.29);
		}
		77.2727272727% {
			transform: translateX(-41vw) translateY(-44vh) scale(0.36);
		}
		81.8181818182% {
			transform: translateX(31vw) translateY(-2vh) scale(0.55);
		}
		86.3636363636% {
			transform: translateX(43vw) translateY(-8vh) scale(0.77);
		}
		90.9090909091% {
			transform: translateX(36vw) translateY(1vh) scale(0.64);
		}
		95.4545454545% {
			transform: translateX(-6vw) translateY(23vh) scale(0.32);
		}
		100% {
			transform: translateX(-48vw) translateY(8vh) scale(0.52);
		}
	}
	.firefly:nth-child(12) {
		animation-name: move12;
	}
	.firefly:nth-child(12)::before {
		animation-duration: 12s;
	}
	.firefly:nth-child(12)::after {
		animation-duration: 12s, 7057ms;
		animation-delay: 0ms, 1793ms;
	}

	@keyframes move12 {
		0% {
			transform: translateX(11vw) translateY(-26vh) scale(0.45);
		}
		4.347826087% {
			transform: translateX(46vw) translateY(32vh) scale(0.96);
		}
		8.6956521739% {
			transform: translateX(48vw) translateY(-4vh) scale(0.48);
		}
		13.0434782609% {
			transform: translateX(-13vw) translateY(42vh) scale(0.59);
		}
		17.3913043478% {
			transform: translateX(33vw) translateY(-35vh) scale(0.79);
		}
		21.7391304348% {
			transform: translateX(-45vw) translateY(30vh) scale(0.71);
		}
		26.0869565217% {
			transform: translateX(-44vw) translateY(-36vh) scale(0.62);
		}
		30.4347826087% {
			transform: translateX(-19vw) translateY(0vh) scale(0.36);
		}
		34.7826086957% {
			transform: translateX(0vw) translateY(12vh) scale(0.76);
		}
		39.1304347826% {
			transform: translateX(-9vw) translateY(9vh) scale(0.81);
		}
		43.4782608696% {
			transform: translateX(-37vw) translateY(-37vh) scale(0.28);
		}
		47.8260869565% {
			transform: translateX(49vw) translateY(-7vh) scale(0.55);
		}
		52.1739130435% {
			transform: translateX(-40vw) translateY(-30vh) scale(0.84);
		}
		56.5217391304% {
			transform: translateX(-49vw) translateY(20vh) scale(0.91);
		}
		60.8695652174% {
			transform: translateX(-28vw) translateY(50vh) scale(0.62);
		}
		65.2173913043% {
			transform: translateX(26vw) translateY(47vh) scale(0.46);
		}
		69.5652173913% {
			transform: translateX(23vw) translateY(-11vh) scale(0.49);
		}
		73.9130434783% {
			transform: translateX(46vw) translateY(16vh) scale(0.94);
		}
		78.2608695652% {
			transform: translateX(9vw) translateY(25vh) scale(0.46);
		}
		82.6086956522% {
			transform: translateX(-18vw) translateY(-44vh) scale(0.52);
		}
		86.9565217391% {
			transform: translateX(16vw) translateY(4vh) scale(0.29);
		}
		91.3043478261% {
			transform: translateX(44vw) translateY(40vh) scale(0.33);
		}
		95.652173913% {
			transform: translateX(-12vw) translateY(13vh) scale(0.5);
		}
		100% {
			transform: translateX(-40vw) translateY(-48vh) scale(0.6);
		}
	}
	.firefly:nth-child(13) {
		animation-name: move13;
	}
	.firefly:nth-child(13)::before {
		animation-duration: 9s;
	}
	.firefly:nth-child(13)::after {
		animation-duration: 9s, 5930ms;
		animation-delay: 0ms, 1666ms;
	}

	@keyframes move13 {
		0% {
			transform: translateX(-33vw) translateY(45vh) scale(0.58);
		}
		4% {
			transform: translateX(16vw) translateY(-21vh) scale(0.87);
		}
		8% {
			transform: translateX(-31vw) translateY(-18vh) scale(0.79);
		}
		12% {
			transform: translateX(44vw) translateY(-6vh) scale(0.95);
		}
		16% {
			transform: translateX(-11vw) translateY(-45vh) scale(0.85);
		}
		20% {
			transform: translateX(-24vw) translateY(-8vh) scale(0.95);
		}
		24% {
			transform: translateX(-15vw) translateY(-44vh) scale(0.8);
		}
		28% {
			transform: translateX(29vw) translateY(28vh) scale(0.26);
		}
		32% {
			transform: translateX(50vw) translateY(-37vh) scale(0.84);
		}
		36% {
			transform: translateX(35vw) translateY(41vh) scale(0.81);
		}
		40% {
			transform: translateX(29vw) translateY(-16vh) scale(0.6);
		}
		44% {
			transform: translateX(0vw) translateY(8vh) scale(0.53);
		}
		48% {
			transform: translateX(9vw) translateY(-14vh) scale(0.37);
		}
		52% {
			transform: translateX(-41vw) translateY(38vh) scale(0.84);
		}
		56% {
			transform: translateX(-22vw) translateY(-14vh) scale(0.58);
		}
		60% {
			transform: translateX(19vw) translateY(-18vh) scale(0.35);
		}
		64% {
			transform: translateX(48vw) translateY(-18vh) scale(0.49);
		}
		68% {
			transform: translateX(-34vw) translateY(-33vh) scale(1);
		}
		72% {
			transform: translateX(44vw) translateY(19vh) scale(0.8);
		}
		76% {
			transform: translateX(-16vw) translateY(8vh) scale(0.78);
		}
		80% {
			transform: translateX(-38vw) translateY(-9vh) scale(0.6);
		}
		84% {
			transform: translateX(-43vw) translateY(-40vh) scale(0.45);
		}
		88% {
			transform: translateX(44vw) translateY(35vh) scale(0.56);
		}
		92% {
			transform: translateX(41vw) translateY(39vh) scale(0.56);
		}
		96% {
			transform: translateX(31vw) translateY(47vh) scale(0.59);
		}
		100% {
			transform: translateX(19vw) translateY(50vh) scale(0.47);
		}
	}
	.firefly:nth-child(14) {
		animation-name: move14;
	}
	.firefly:nth-child(14)::before {
		animation-duration: 17s;
	}
	.firefly:nth-child(14)::after {
		animation-duration: 17s, 9320ms;
		animation-delay: 0ms, 1881ms;
	}

	@keyframes move14 {
		0% {
			transform: translateX(-22vw) translateY(-43vh) scale(0.26);
		}
		4.1666666667% {
			transform: translateX(-40vw) translateY(-14vh) scale(0.94);
		}
		8.3333333333% {
			transform: translateX(24vw) translateY(-39vh) scale(0.96);
		}
		12.5% {
			transform: translateX(-22vw) translateY(-40vh) scale(0.29);
		}
		16.6666666667% {
			transform: translateX(5vw) translateY(40vh) scale(0.73);
		}
		20.8333333333% {
			transform: translateX(-10vw) translateY(-42vh) scale(0.7);
		}
		25% {
			transform: translateX(-46vw) translateY(-47vh) scale(0.86);
		}
		29.1666666667% {
			transform: translateX(-44vw) translateY(19vh) scale(0.75);
		}
		33.3333333333% {
			transform: translateX(-46vw) translateY(-27vh) scale(0.5);
		}
		37.5% {
			transform: translateX(-14vw) translateY(14vh) scale(0.84);
		}
		41.6666666667% {
			transform: translateX(5vw) translateY(39vh) scale(0.81);
		}
		45.8333333333% {
			transform: translateX(-43vw) translateY(23vh) scale(0.94);
		}
		50% {
			transform: translateX(16vw) translateY(-41vh) scale(0.86);
		}
		54.1666666667% {
			transform: translateX(30vw) translateY(-26vh) scale(0.72);
		}
		58.3333333333% {
			transform: translateX(41vw) translateY(42vh) scale(0.76);
		}
		62.5% {
			transform: translateX(-10vw) translateY(46vh) scale(0.67);
		}
		66.6666666667% {
			transform: translateX(28vw) translateY(20vh) scale(0.35);
		}
		70.8333333333% {
			transform: translateX(-7vw) translateY(8vh) scale(0.42);
		}
		75% {
			transform: translateX(-46vw) translateY(28vh) scale(0.96);
		}
		79.1666666667% {
			transform: translateX(30vw) translateY(31vh) scale(0.52);
		}
		83.3333333333% {
			transform: translateX(43vw) translateY(-49vh) scale(0.87);
		}
		87.5% {
			transform: translateX(22vw) translateY(27vh) scale(0.44);
		}
		91.6666666667% {
			transform: translateX(0vw) translateY(-33vh) scale(0.92);
		}
		95.8333333333% {
			transform: translateX(40vw) translateY(44vh) scale(0.68);
		}
		100% {
			transform: translateX(-3vw) translateY(38vh) scale(0.96);
		}
	}
	.firefly:nth-child(15) {
		animation-name: move15;
	}
	.firefly:nth-child(15)::before {
		animation-duration: 17s;
	}
	.firefly:nth-child(15)::after {
		animation-duration: 17s, 8772ms;
		animation-delay: 0ms, 1657ms;
	}

	@keyframes move15 {
		0% {
			transform: translateX(46vw) translateY(3vh) scale(0.91);
		}
		4% {
			transform: translateX(-46vw) translateY(17vh) scale(0.95);
		}
		8% {
			transform: translateX(22vw) translateY(46vh) scale(0.36);
		}
		12% {
			transform: translateX(21vw) translateY(-32vh) scale(0.35);
		}
		16% {
			transform: translateX(-18vw) translateY(15vh) scale(0.45);
		}
		20% {
			transform: translateX(29vw) translateY(42vh) scale(0.64);
		}
		24% {
			transform: translateX(10vw) translateY(49vh) scale(0.56);
		}
		28% {
			transform: translateX(-38vw) translateY(29vh) scale(0.49);
		}
		32% {
			transform: translateX(-26vw) translateY(20vh) scale(0.26);
		}
		36% {
			transform: translateX(9vw) translateY(16vh) scale(0.52);
		}
		40% {
			transform: translateX(1vw) translateY(-14vh) scale(0.74);
		}
		44% {
			transform: translateX(12vw) translateY(36vh) scale(0.61);
		}
		48% {
			transform: translateX(-39vw) translateY(49vh) scale(0.26);
		}
		52% {
			transform: translateX(-21vw) translateY(-4vh) scale(0.8);
		}
		56% {
			transform: translateX(-23vw) translateY(-8vh) scale(0.74);
		}
		60% {
			transform: translateX(-36vw) translateY(10vh) scale(0.97);
		}
		64% {
			transform: translateX(-11vw) translateY(-40vh) scale(0.85);
		}
		68% {
			transform: translateX(32vw) translateY(-22vh) scale(0.66);
		}
		72% {
			transform: translateX(-12vw) translateY(-14vh) scale(0.31);
		}
		76% {
			transform: translateX(3vw) translateY(-5vh) scale(0.42);
		}
		80% {
			transform: translateX(37vw) translateY(9vh) scale(0.35);
		}
		84% {
			transform: translateX(-12vw) translateY(-15vh) scale(0.45);
		}
		88% {
			transform: translateX(46vw) translateY(-30vh) scale(0.85);
		}
		92% {
			transform: translateX(-42vw) translateY(-32vh) scale(0.8);
		}
		96% {
			transform: translateX(-44vw) translateY(-25vh) scale(0.94);
		}
		100% {
			transform: translateX(17vw) translateY(22vh) scale(0.73);
		}
	}
	@keyframes drift {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes flash {
		0%,
		30%,
		100% {
			opacity: 0;
			box-shadow: 0 0 0vw 0vw yellow;
		}
		5% {
			opacity: 1;
			box-shadow: 0 0 2vw 0.4vw yellow;
		}
	}
</style>

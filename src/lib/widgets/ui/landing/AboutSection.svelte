<script>
	import { ScenarioСard, AntiSystemsProjectCard } from '$lib/entities';
	import { scenarius } from '$lib/shared';
</script>

<!--
Наш мир меняется, и каждый из нас чувствует эти изменения.

Мы стоим на пороге важного выбора: продолжать гоняться за материальными благами или начать жить осознанно и в гармонии с природой. Данная обучающая настольная игра — это не просто развлечение, это путешествие в мир экологических протестов и акций, которые могут изменить вашу точку зрения на жизнь.

В этой игре вы познакомитесь с реальными историями экологических протестов, от мирных демонстраций до радикальных акций. Вы узнаете, каким образом различные организации и движения борются за сохранение нашей планеты, защищая леса, океаны и животных.

Это не просто обучающая настольная игра дополненная веб-приложением, это возможность понять, что на кону и как каждый из нас может внести свой вклад в спасение мира.


 -->
<section>
	<div class=" mx-auto flex max-w-7xl flex-col items-center px-1 py-8 sm:px-6">
		<a name="about" />

		<div class="prose prose-blue mx-auto flex w-full max-w-2xl flex-col text-left">
			<div class="px-2 w-full">
				<h1>Nasz świat się zmienia i każdy z nas odczuwa te zmiany.</h1>
				<h2>
					To nie tylko edukacyjna gra planszowa wzbogacona o aplikację internetową - to szansa na
					zrozumienie.
				</h2>
				<p>
					Stoimy u progu ważnego wyboru: kontynuować gonitwę za dobrami materialnymi czy zacząć żyć
					świadomie i w zgodzie z naturą.
				</p>
				<p>
					Ta edukacyjna gra planszowa to coś więcej niż zabawa, to podróż do świata protestów
					ekologicznych i działań, które mogą zmienić twoje spojrzenie na życie.
				</p>
				<p>
					W tej grze poznasz prawdziwe historie protestów ekologicznych, od pokojowych demonstracji
					do radykalnych działań. Dowiesz się, jak różne organizacje i ruchy walczą o zachowanie
					naszej planety poprzez ochronę lasów, oceanów i zwierząt.
				</p>
				<p>
					To nie tylko edukacyjna gra planszowa wzbogacona o aplikację internetową, to szansa na
					zrozumienie, o co toczy się gra i jak każdy z nas może przyczynić się do ratowania świata.
				</p>
			</div>
		</div>
		<AntiSystemsProjectCard />

		<div class="prose prose-blue -mb-4 mt-14 flex w-full max-w-3xl flex-col text-left">
			<!-- <div class="mx-auto w-full"> -->
			<h2 class='text-center'>Historie protestów ekologicznych - dostępnych w grze.</h2>

			<!-- </div> -->
		</div>
		{#each scenarius as scenario}
			<ScenarioСard {scenario} />
		{/each}

		<!-- </div> -->
	</div>
</section>

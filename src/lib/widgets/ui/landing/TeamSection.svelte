<script>
	import { TeamMemberCard } from '$lib/entities';

	import { teamMembers } from '$lib/shared';
</script>

<!--
  Наша команда — это больше, чем просто разработчики игры. Это сообщество людей, объединенных одной целью — сделать мир лучше.

В команду проекта входят экологи, социальные активисты, эко-анархисты и представители различных экологических организаций. Это люди, которые ежедневно вносят свой вклад в чистоту наших рек, лесов и воздуха, за права животных и сохранение биоразнообразия.

Мы верим, что только вместе, объединив усилия, мы сможем добиться реальных изменений. Игра, которую мы создали — это наш вклад в это великое дело. Мы приглашаем вас присоединиться к нам и стать частью экологического движения, играя и внося свой вклад вместе с нами.
 -->
<section class="container mx-auto lg:px-6 pt-10">
  <div class="prose text-neutral-600 prose-blue mx-auto flex w-full max-w-2xl flex-col text-left">
			<div class="px-2  w-full">
				<!-- <h1>Nasz świat się zmienia i każdy z nas odczuwa te zmiany.</h1>
				<h2>
					To nie tylko edukacyjna gra planszowa wzbogacona o aplikację internetową - to szansa na
					zrozumienie.
				</h2> -->
				<p>
							Nasz zespół to coś więcej niż tylko niezależni specjaliści. To społeczność ludzi zjednoczonych jednym celem - zmienić świat na lepsze.

				</p>
				<p>
          W skład zespołu pracującego nad grą wchodzą ekolodzy, aktywiści społeczni, eko-anarchiści i przedstawiciele różnych organizacji ekologicznych. Są to ludzie, którzy każdego dnia przyczyniają się do czystości naszych rzek, lasów i powietrza, praw zwierząt i ochrony bioróżnorodności.
				</p>
        	<p>
            Wierzymy, że tylko razem, łącząc siły, możemy dokonać prawdziwej zmiany. Stworzona przez nas gra jest naszym wkładem w tę wielką sprawę. Zapraszamy do dołączenia do nas i stania się częścią ruchu na rzecz ochrony środowiska, grając z nami i wnosząc swój wkład.
				</p>



			</div>

		</div>
	<!-- <p class="mx-auto my-6 max-w-2xl text-center text-gray-500 ">
	</p> -->

	<a name="team" />

	<div class="flex items-center justify-center">
		<div class="flex items-center rounded-2xl border border-neutral-600 bg-teal-800 px-4 py-4">
			<span class="text-xl text-white">darkdev_brand@riseup.net</span>
		</div>
	</div>

	<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-2">
		{#each teamMembers as member}
			<TeamMemberCard {member} />
		{/each}
	</div>
</section>

<style>
</style>

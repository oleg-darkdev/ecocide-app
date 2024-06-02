<script>
	import { OrganisationCard } from '$lib/entities';
	import { organisations } from '$lib/shared';
</script>

<!-- О экологическом активизме как явлении в истории человечества

Экологический активизм — это сила, которая меняет мир. 

На протяжении десятилетий множество организаций, таких как Sea Shepherd, Extinction Rebellion, Earth First!, Rainbow Keepers, Animal Liberation Front, Earth Liberation Front, Last Generation и многие другие, борются за наше общее будущее. Эти движения, используя различные методы от мирных протестов до радикальных действий, стремятся пробудить сознание людей и призвать к ответственности тех, кто уничтожает природу.

Истории этих организаций вдохновляют и показывают, что каждый из нас может быть частью глобального движения за защиту планеты. Через нашу игру вы сможете погрузиться в мир этих героических поступков и понять, как важно стоять на защите Земли.
 -->
<section>
	<div class=" mx-auto flex max-w-7xl flex-col items-center px-1 py-8 sm:px-6 ">
		<a name="activism" />

		<div class="prose-blue prose mx-auto flex w-full max-w-2xl flex-col text-left">
			<div class="px-2  w-full">
				<h1>Aktywizm ekologiczny jest siłą, która zmienia świat.</h1>
				<h2>O aktywizmie ekologicznym jako zjawisku w historii ludzkości.</h2>
				<p>
					Od dziesięcioleci wiele organizacji, takich jak Sea Shepherd, Extinction Rebellion, Earth First!, Rainbow Keepers, Animal Liberation Front, Earth Liberation Front, Last Generation i wiele innych walczy o naszą wspólną przyszłość.
				</p>
        <p>
           Ruchy te, wykorzystując metody od protestów do radykalnych działań, starają się obudzić świadomość ludzi i pociągnąć do odpowiedzialności tych, którzy niszczą przyrodę.
				</p>
        <p>
          Historie tych organizacji są inspirujące i pokazują, że każdy z nas może być częścią globalnego ruchu na rzecz ochrony planety. Dzięki naszej grze możesz zanurzyć się w świecie tych heroicznych czynów i uświadomić sobie, jak ważne jest, aby stanąć w obronie Ziemi.
				</p>
        
			</div>
		</div>
		<div class="flex flex-row flex-wrap">
			{#each organisations as organisation}
				<OrganisationCard {organisation} />
			{/each}
		</div>
	</div>
</section>

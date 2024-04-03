import chronology from './chronology';
import {
	humanChain,
	trespassing,
	campsites,
	continuousEcoProtest,
	InternetActivism,
	singlePickets,
	meetings,
	roadblocking
} from '../formsOfProtests';

import { russian } from '../languages';

const data = {
	// Стоп-Шиес!
	title: 'Stop Shies!',
	tags: ['garbage', 'russia', 'toxic'],

	icon: 'tree.svg',
	shortDesc: `Block the building of a garbage landfill from which toxins can enter the world's oceans, through northern rivers to Russia.`,
	// 		'Блокирование строительства мусорного полигона с которого токсины могут попасть в мировой океан, через северные реки попасть России.',

	// 'Блокирование строительство полигона с полигона могут через северные реки попасть в Белое море, а оттуда — в мировой океан. и завершить мусорную реформу в России.',
	desc: [
		'Полигон предназначался для складирования твёрдых бытовых и промышленных отходов, вывозимых из Москвы и ряда других регионов западной части России, поскольку его строительство предполагается в болотистой местности, представляет опасность для жителей региона, так как приведет к загрязнению поверхностных и подземных источников воды.',
		''
	],
	nativeLanguageOfMaterials: russian,
	datePeriod: ['июль 2018', '18 февраля 2021'],
	officialSocialMedia: [
		{
			title: 'Стоп-Шиес! Stop Shies!',
			link: 'https://vk.com/vestishies'
		}
	],
	amountOfParticipants: 30000,
	place: {
		title:
			'Россия, Архангельская область, Ленский район, Урдомское городское поселение, станция Шиес',
		coordinates: ['', ''],
		link: ''
	},
	wikipediaLinks: [
		{
			link: 'https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%82%D0%B5%D1%81%D1%82%D1%8B_%D0%B2_%D0%A8%D0%B8%D0%B5%D1%81%D0%B5#cite_note-21',
			title: 'Протесты в Шиесе',
			language: russian
		}
	],
	goalsOfProtests: [
		'прекращение строительства мусорного полигона на станции Шиес',
		'завершение мусорной реформы и закрытие мусорных полигонов',
		'',
		'',
		''
	],
	formsOfProtests: [
		humanChain,
		trespassing,
		campsites,
		continuousEcoProtest,
		InternetActivism,
		singlePickets,
		meetings,
		roadblocking
	],
	resultOfProtest: [
		'Цели достигнуты.',
		'Проект застройки свёрнут. Правительство Архангельской области расторгла контракт с ООО «Технопарк». ',
		'Губернатор Архангельской области Игорь Орлов и Глава Республики Коми Сергей Гапликов подали в отставку.',
		'Получено обещание нового руководства Архангельской области прекратить стройку на Шиесе'
	],
	publicationsOnNews: [
		{
			title: 'Новая Газета. Шиес в горле 2019',
			link: 'https://novayagazeta.ru/articles/2019/09/02/81808-shies-v-gorle',
			screen: '',
			webArchive: ''
		},
		{
			title: 'Новая Газета.  Север. Далее везде 2019.',
			link: 'https://novayagazeta.ru/articles/2019/09/23/82081-sever-dalee-vezde',
			screen: '',
			webArchive: ''
		},
		{
			title: 'Радио Свобода "Шелупонь" на полтора миллиона. Год борьбы в Шиесе 2019.',
			link: 'https://www.svoboda.org/a/30084054.html',
			screen: '',
			webArchive: ''
		},
		{
			title: 'РБК  Москва нашла куда валить 2019.',
			link: 'https://www.rbc.ru/newspaper/2019/12/16/5df3a7379a7947639f728830',
			screen: '',
			webArchive: ''
		},
		{
			title:
				' The New York Times  Russians, Feeling Poor and Protesting Garbage, Suffer Winter Blues 2019. ',
			link: 'https://www.nytimes.com/2019/02/19/world/europe/russia-putin-landfill.html',
			screen: '',
			webArchive: ''
		},
		{
			title: `Al Jazeera State of decay: Moscow's rubbish prompts protests in Russia   2019.`,
			link: 'https://www.aljazeera.com/ajimpact/state-decay-moscow-trash-prompts-protests-russia-190605140940553.html',
			screen: '',
			webArchive: ''
		},
		{
			title: `Voice Of America Locals Protest Construction of Russia's Massive Landfill  2019`,
			link: 'https://www.voanews.com/europe/locals-protest-construction-russias-massive-landfill',
			screen: '',
			webArchive: ''
		},
		{
			title: 'Илья Варламов Шиес. Как люди защищают свою землю - декабрь 2019',
			link: 'https://www.youtube.com/watch?v=Ws2Px9LviA4&t=5s',
			screen: '',
			webArchive: ''
		},
		{
			title: 'Шиес: осуществление невозможного Ирина Андрианова 17.01.2020',
			link: 'https://bellona.ru/2020/01/17/shies-osushhestvlenie-nevozmozhnogo/',
			screen: '',
			webArchive: ''
		},
		{
			title:
				'Дмитрий Степановский. Шиес через год после начала протестов: 10 главных вопросов о строительстве в Архангельской области полигона для московского мусора 20 ноября 2019',
			link: 'https://7x7-journal.ru/articles/2019/11/20/desyat-stydnyh-voprosov-pro-shies',
			screen: '',
			webArchive: ''
		},
		{
			title:
				'Новая Газета. «Ленинград» взяли «помойщики». Лагерь активистов в Шиесе сравняли с землей // Новая газета. 6 февраля 2021.',
			link: 'https://novayagazeta.ru/articles/2021/02/06/89082-leningrad-vzyali-pomoyschiki',
			screen: '',
			webArchive: ''
		},
		{
			title: '',
			link: '',
			screen: '',
			webArchive: ''
		},
		{
			title: '',
			link: '',
			screen: '',
			webArchive: ''
		},
		{
			title: '',
			link: '',
			screen: '',
			webArchive: ''
		}
	],
	amountPublicationsOnNews: 70,
	chronology: chronology
};

export default data;

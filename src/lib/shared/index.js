import HeadHrefLangs from './ui/HeadHrefLangs.svelte';
import LocaleSwitcher from './ui/LocaleSwitcher.svelte';

import scenarius from './data/scenarius/';
import organisations from './data/organisations/';
import teamMembers from './data/teamMembers/';



// no svelte
import replaceLocaleInUrl from './utils/replaceLocaleInUrl.ts';

export { replaceLocaleInUrl, HeadHrefLangs, LocaleSwitcher, scenarius, organisations, teamMembers };

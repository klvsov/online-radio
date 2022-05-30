import homeIcon from 'assets/icons/home.svg';
import searchIcon from 'assets/icons/search.svg';
import newIcon from 'assets/icons/new.svg';

export const COUNTRIES = [
  {
    value: 'Argentina',
    label: '🇦🇷 Argentina',
  },
  {
    value: 'Australia',
    label: '🇳🇿 Australia',
  },
  {
    value: 'Brazil',
    label: '🇧🇷 Brazil',
  },
  {
    value: 'Canada',
    label: '🇨🇦 Canada',
  },
  {
    value: 'China',
    label: '🇨🇳 China',
  },
  {
    value: 'France',
    label: '🇫🇷 France',
  },
  {
    value: 'Germany',
    label: '🇩🇪 Germany',
  },
  {
    value: 'Ireland',
    label: '🇮🇪 Ireland',
  },
  {
    value: 'Spain',
    label: '🇪🇸 Spain',
  },
  {
    value: 'The Russian Federation',
    label: '🇷🇺 Russia',
  },
  {
    value: 'The United Kingdom Of Great Britain And Northern Ireland',
    label: '🇬🇧 Great Britain',
  },
  {
    value: 'The United States Of America',
    label: '🇺🇸 USA',
  },
  {
    value: 'Ukraine',
    label: '🇺🇦 Ukraine',
  },
];

export const GENRES = [
  {
    value: 'pop',
    label: '🎤 Pop',
  },
  {
    value: 'rock',
    label: '🤘🏽 Rock',
  },
  {
    value: 'classical',
    label: '🎼 Classical',
  },
  {
    value: 'dance',
    label: '🩰 Dance',
  },
  {
    value: 'electronic',
    label: '📀 Electronic',
  },
  {
    value: 'hiphop',
    label: '🤸 Hip Hop',
  },
  {
    value: 'rap',
    label: '🎧 Rap',
  },
  {
    value: 'blues',
    label: '🎷 Blues',
  },
];

export const MENU = [
  {
    id: 'search',
    label: 'Search',
    icon: searchIcon,
    route: '/search',
  },
  {
    id: 'player',
    icon: homeIcon,
    route: '/',
  },
  {
    id: 'add',
    label: 'Add new',
    icon: newIcon,
    route: '/add',
  },
];

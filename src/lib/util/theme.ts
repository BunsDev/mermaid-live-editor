import { writable } from 'svelte/store';
import { persist, localStorage } from '@macfja/svelte-persistent-store';
import { toggleDarkTheme } from './state';

export const themeStore = persist(
	writable({
		isDark: false,
		theme: 'light'
	}),
	localStorage(),
	'themeStore'
);

const darkThemes = ['dark', 'synthwave', 'halloween', 'forest', 'luxury', 'black', 'dracula'];

export const setTheme = (theme: string): void => {
	const isDark = darkThemes.includes(theme);
	console.log('Setting theme', theme);
	themeStore.set({ theme, isDark });
};

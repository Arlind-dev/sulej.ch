import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'latte' | 'mocha';

const STORAGE_KEY = 'ctp-theme';

function getInitialTheme(): Theme {
  if (browser) {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === 'latte' || stored === 'mocha') return stored;
    // Default to OS preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'mocha' : 'latte';
  }
  return 'mocha';
}

export const theme = writable<Theme>(getInitialTheme());

if (browser) {
  theme.subscribe((value) => {
    localStorage.setItem(STORAGE_KEY, value);
    document.documentElement.setAttribute('data-theme', value);
  });
}

<script lang="ts">
  import { theme, type Theme } from './theme';

  function toggle() {
    theme.update((t: Theme) => (t === 'mocha' ? 'latte' : 'mocha'));
  }
</script>

<button
  class="theme-toggle"
  on:click={toggle}
  aria-label="Toggle theme"
  title={$theme === 'mocha' ? 'Switch to Latte (light)' : 'Switch to Mocha (dark)'}
>
  {#if $theme === 'mocha'}
    <!-- Sun icon for switching to light -->
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
    <span>Latte</span>
  {:else}
    <!-- Moon icon for switching to dark -->
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
    <span>Mocha</span>
  {/if}
</button>

<style>
  .theme-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.4em;
    padding: 0.35em 0.75em;
    font-family: var(--font-mono);
    font-size: 0.8em;
    cursor: pointer;
    background: var(--ctp-surface0);
    color: var(--color-text);
    border: 1px solid var(--color-border);
    border-radius: 6px;
    transition:
      background 150ms ease,
      border-color 150ms ease,
      color 150ms ease,
      transform 100ms ease;
    white-space: nowrap;
  }

  .theme-toggle:hover {
    background: var(--ctp-surface1);
    border-color: var(--ctp-overlay0);
    color: var(--color-link-hover);
  }

  .theme-toggle:active {
    transform: scale(0.96);
  }

  .theme-toggle:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
</style>

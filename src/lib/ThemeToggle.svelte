<script lang="ts">
  import { theme, type Theme } from './theme';

  function toggle() {
    theme.update((t: Theme) => (t === 'mocha' ? 'latte' : 'mocha'));
  }
</script>

<button
  type="button"
  onclick={toggle}
  class="grid size-9 place-items-center rounded-md text-muted transition-colors hover:bg-surface hover:text-text"
  aria-label="Toggle theme"
  title="Toggle theme"
>
  <!-- Which icon shows is driven by [data-theme] (set before paint in app.html),
       so it never flashes the wrong one on load. -->
  <!-- sun: shown in dark mode -->
  <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
  <!-- moon: shown in light mode -->
  <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
</button>

<style>
  .icon-sun,
  .icon-moon {
    display: none;
  }
  :global(html[data-theme='mocha']) .icon-sun {
    display: block;
  }
  :global(html[data-theme='latte']) .icon-moon {
    display: block;
  }
</style>

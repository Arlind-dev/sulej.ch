<script lang="ts">
  import '../app.css';
  import { site } from '../lib/site.config';
  import { theme } from '../lib/theme';
  import ThemeToggle from '../lib/ThemeToggle.svelte';
  const title = site.siteTitle;
  const description = `${site.siteTitle} — ${site.domain}`;
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="layout" data-theme={$theme}>
  <div class="theme-bar">
    <ThemeToggle />
  </div>
  <slot />
</div>

<style>
  .layout {
    min-height: 100vh;
    background-color: var(--color-bg);
    color: var(--color-text);
    padding-top: clamp(1rem, 8vh, 6rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    gap: clamp(1rem, 1.5vw, 1.5rem);
    padding-left: clamp(0.5rem, 2vw, 1.5rem);
    padding-right: clamp(0.5rem, 2vw, 1.5rem);
    padding-bottom: clamp(0.5rem, 2vw, 1.5rem);
    font-size: clamp(1rem, 1rem + 1vw, 1.5rem);
  }

  .theme-bar {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 100;
  }
</style>

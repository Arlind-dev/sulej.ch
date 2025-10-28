<script lang="ts">
  import type { VersionInfo } from "./version";
  import { site, currentYear } from "./site.config";
  export let versionInfo: VersionInfo;
</script>

<footer>
  <div style="display: inline-flex; align-items: baseline; gap: 1rem; margin: 1rem 0 0;">
    <small>© {currentYear} {site.domain}</small>
    <small>
      {#if site.githubRepo}
        <a class="version-link" href={site.githubRepo}>
          {versionInfo.version} <span class="commit">({versionInfo.commit})</span>
        </a>
      {:else}
        <span class="version-link" aria-label="App version">
          {versionInfo.version} <span class="commit">({versionInfo.commit})</span>
        </span>
      {/if}
    </small>
  </div>
</footer>

<style>
  .version-link {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    opacity: 0.85;
    transition: border-color 120ms ease, opacity 120ms ease, color 120ms ease;
  }

  .version-link:hover {
    border-color: currentColor;
    opacity: 1;
  }

  .version-link:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
    border-color: transparent;
  }

  .commit {
    opacity: 0.7;
    letter-spacing: 0.02em;
    font-family: var(--font-mono);
    font-variant-numeric: tabular-nums;
  }
</style>

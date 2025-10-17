<script lang="ts">
  import type { VersionInfo } from "./version";
  export let versionInfo: VersionInfo;
</script>

<footer>
  <div style="display: inline-flex; align-items: baseline; gap: 1rem; margin: 1rem 0 0;">
    <small>© 2025 sulej.ch</small>
    <small>
      <a class="version-link" href="https://github.com/Arlind-dev/sulej.ch">
        {versionInfo.version} <span class="commit">({versionInfo.commit})</span>
      </a>
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

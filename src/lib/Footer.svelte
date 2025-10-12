<script lang="ts">
  import type { VersionInfo } from "./version";
  export let versionInfo: VersionInfo;
</script>

<footer>
  <div style="display: inline-flex; align-items: baseline; gap: 1rem; margin: 1rem 0 0;">
    <small>© 2025 sulej.ch</small>
    <small>
      <a href="https://github.com/Arlind-dev/sulej.ch">
        {versionInfo.version} ({versionInfo.commit})
      </a>
    </small>
  </div>
</footer>

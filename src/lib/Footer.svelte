<script lang="ts">
  import type { VersionInfo } from "./version";
  import { site } from "./site.config";

  let { versionInfo }: { versionInfo: VersionInfo } = $props();

  const link = "text-sm text-muted transition-colors hover:text-text";
</script>

<footer class="mt-16 border-t border-line">
  <div
    class="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 py-10 text-center sm:grid-cols-2 sm:gap-16 sm:text-left"
  >
    <div class="flex flex-col items-center gap-2 sm:items-start">
      <a href={site.githubRepo} class="font-semibold tracking-tight text-accent">{site.domain}</a>
      <div class="text-xs text-muted">{site.tagline}</div>
      <a
        href={site.githubRepo}
        target="_blank"
        rel="noreferrer"
        class="mt-1 inline-flex items-center gap-2 text-[11px] text-faint transition-colors hover:text-muted"
      >
        <span class="font-medium">{versionInfo.version}</span>
        <span class="tnum">{versionInfo.commit}</span>
        <span class="tnum">{versionInfo.buildDate}</span>
      </a>
    </div>

    <nav class="flex flex-col items-center gap-2.5 sm:items-end sm:text-right">
      <a href={site.githubRepo} target="_blank" rel="noreferrer" class={link}>Source</a>
      <a href="{site.githubRepo}/blob/main/CHANGELOG.md" target="_blank" rel="noreferrer" class={link}>
        Changelog
      </a>
      <a href="{site.githubRepo}/blob/main/LICENSE" target="_blank" rel="noreferrer" class={link}>
        License
      </a>
    </nav>
  </div>
</footer>

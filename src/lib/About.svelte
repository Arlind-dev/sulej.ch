<script lang="ts">
  import { site } from "./site.config";
  const mailto = `mailto:${site.contactEmail}`;
</script>

<div class="under-construction">
  <span class="uc-icon">🚧</span>
  <span class="uc-text">Under Construction</span>
  <span class="uc-icon">🚧</span>
</div>

<section>
  <div style="margin: 0.5rem 0;">Owner: {site.ownerName}</div>
  <div style="margin: 0.5rem 0;">Contact: <a href={mailto}>{site.contactEmail}</a></div>
</section>

<style>
  .under-construction {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    margin: 0.75rem auto 1rem;
    padding: 0.45rem 1.1rem;
    background-color: color-mix(in srgb, var(--ctp-yellow) 14%, transparent);
    border: 1px solid var(--ctp-yellow);
    border-radius: 6px;
    width: fit-content;
  }

  .uc-text {
    color: var(--ctp-yellow);
    font-weight: 600;
    letter-spacing: 0.04em;
    font-size: 0.875rem;
  }

  .uc-icon {
    font-size: 0.95rem;
    line-height: 1;
  }
</style>


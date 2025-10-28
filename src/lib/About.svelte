<script lang="ts">
  import { site } from "./site.config";
  const mailto = `mailto:${site.contactEmail}`;
</script>

<section>
  <div style="margin: 0.5rem 0;">Owner: {site.ownerName}</div>
  <div style="margin: 0.5rem 0;">Contact: <a href={mailto}>{site.contactEmail}</a></div>
</section>


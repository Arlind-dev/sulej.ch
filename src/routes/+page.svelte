<script lang="ts">
  import About from "../lib/About.svelte";
  import Footer from "../lib/Footer.svelte";
  import Header from "../lib/Header.svelte";
  import type { VersionInfo } from "../lib/version";

  // Provide version info to footer from global defines
  const versionInfo: VersionInfo = {
    version: __APP_VERSION__,
    commit: __APP_COMMIT__
  };
</script>

<Header />
<main>
  <About />
</main>

<Footer {versionInfo} />

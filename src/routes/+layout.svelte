<script lang="ts">
  import '../app.css';
  import { browser } from '$app/environment';
  import { page } from '$app/state';
  import { theme } from '../lib/theme';
  import { site } from '../lib/site.config';
  import ThemeToggle from '../lib/ThemeToggle.svelte';
  import Footer from '../lib/Footer.svelte';
  import type { Snippet } from 'svelte';
  import type { VersionInfo } from '../lib/version';

  let { children }: { children: Snippet } = $props();

  const versionInfo: VersionInfo = {
    version: __APP_VERSION__,
    commit: __APP_COMMIT__,
    buildDate: __APP_BUILD_DATE__
  };

  // route -> head, owned here so the title updates on client-side navigation
  const meta: Record<string, { title: string; description: string }> = {
    '/': { title: site.siteTitle, description: `Personal site of ${site.ownerName}.` },
    '/pgp': {
      title: `PGP | ${site.siteTitle}`,
      description: `Public PGP key for sending encrypted email to ${site.contactEmail}.`
    }
  };
  const current = $derived(meta[page.route?.id ?? '/'] ?? meta['/']);
  const canonical = $derived(`https://${site.domain}${page.url.pathname}`);
  const ogImage = `https://${site.domain}${site.ogImage}`;

  // sync <html data-theme> + bg with the store (app.html sets these pre-paint)
  $effect(() => {
    if (!browser) return;
    document.documentElement.dataset.theme = $theme;
    document.documentElement.style.background = $theme === 'mocha' ? '#1e1e2e' : '#ffffff';
  });
</script>

<svelte:head>
  <title>{current.title}</title>
  <meta name="description" content={current.description} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site.domain} />
  <meta property="og:title" content={current.title} />
  <meta property="og:description" content={current.description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={current.title} />
  <meta name="twitter:description" content={current.description} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="flex min-h-dvh flex-col">
  <header class="border-b border-line">
    <div class="mx-auto flex h-14 max-w-2xl items-center justify-between px-4">
      <a href="/" class="font-semibold tracking-tight text-accent">{site.domain}</a>
      <ThemeToggle />
    </div>
  </header>
  <main class="flex flex-1 flex-col">
    {@render children()}
  </main>
  <Footer {versionInfo} />
</div>

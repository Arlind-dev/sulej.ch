<script lang="ts">
  import { links, projects, site } from "../lib/site.config";
</script>

<section class="mx-auto my-auto w-full max-w-2xl px-4 py-16">
  <div class="text-center">
    <h1 class="text-3xl font-semibold tracking-tight text-text sm:text-4xl">{site.ownerName}</h1>
    <p class="mt-3 text-lg text-muted">{site.intro}</p>

    <nav class="mt-6 flex flex-wrap justify-center gap-2.5" aria-label="Links">
      {#each links as l (l.href)}
        {@const external = l.href.startsWith("http")}
        <a
          href={l.href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          class="inline-flex items-center gap-2 rounded-md border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-text"
        >
          {#if l.icon === "github"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          {:else if l.icon === "mail"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 6L2 7" />
            </svg>
          {:else if l.icon === "key"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="7.5" cy="15.5" r="5.5" />
              <path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3" />
            </svg>
          {/if}
          {l.label}
        </a>
      {/each}
    </nav>
  </div>

  <h2 class="mt-14 text-base font-medium text-text">Projects</h2>
  <ul class="mt-4 grid gap-3 sm:grid-cols-2">
    {#each projects as p (p.href)}
      <li>
        <a
          href={p.href}
          target="_blank"
          rel="noreferrer"
          class="group flex h-full flex-col rounded-lg border border-line p-4 transition-colors hover:border-accent hover:bg-surface"
        >
          <div class="flex items-center justify-between gap-2">
            <span class="font-medium text-text transition-colors group-hover:text-accent">{p.name}</span>
            <svg class="size-4 shrink-0 text-faint transition-colors group-hover:text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </div>
          <p class="mt-1.5 text-sm text-muted">{p.blurb}</p>
        </a>
      </li>
    {/each}
  </ul>
</section>

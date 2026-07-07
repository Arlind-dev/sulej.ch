<script lang="ts">
  import { site } from "../../lib/site.config";

  const fingerprint = "DD03 7E74 865C D2A1 2F51  697D C26C 550D 1D42 0CE7";

  const publicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEZhfWFRYJKwYBBAHaRw8BAQdAPuwRMNSYkJFtojg7T3vyMXehVQh5a4aA
NUANeNWrn5zNIWFybGluZEBzdWxlai5jaCA8YXJsaW5kQHN1bGVqLmNoPsKM
BBAWCgA+BYJmF9YVBAsJBwgJkMJsVQ0dQgznAxUICgQWAAIBAhkBApsDAh4B
FiEE3QN+dIZc0qEvUWl9wmxVDR1CDOcAAGJGAP0Zo2Fh4WJt4pgw/rzj3k7o
kfg4Vmj3bwqjLYfJf66m/QEA5XqRXNyGih8DL3RMxW7Ewk46tt8KSC95Uteo
a/JP8gbOOARmF9YVEgorBgEEAZdVAQUBAQdAftlt1WHDwlENFdHGWnpNuw8W
KQvR6RLtvj49NSvZqCQDAQgHwngEGBYKACoFgmYX1hUJkMJsVQ0dQgznApsM
FiEE3QN+dIZc0qEvUWl9wmxVDR1CDOcAAGOHAPsEEB+7vgj4XyougzjDPBxt
Zl3vMiOz1wfjeaFoD9ptDAD/W9jcmJ/uc9T1cUvUbK3zBcuwR3+khL4bcHpe
YnefwwE=
=xvl1
-----END PGP PUBLIC KEY BLOCK-----`;

  let copied = $state(false);

  async function copyKey() {
    try {
      await navigator.clipboard.writeText(publicKey);
      copied = true;
      setTimeout(() => (copied = false), 2000);
    } catch {
      // clipboard blocked (e.g. non-secure context); user can still download
    }
  }
</script>

<section class="mx-auto w-full max-w-2xl px-4 py-16">
  <h1 class="text-2xl font-semibold tracking-tight text-text sm:text-3xl">PGP</h1>
  <p class="mt-3 text-muted">
    You can send me encrypted email at
    <a href="mailto:{site.contactEmail}" class="text-accent transition-colors hover:text-accent-hover"
      >{site.contactEmail}</a
    >. Most mail clients find my key on their own through WKD. If yours doesn't, use the key below.
  </p>

  <div class="mt-8">
    <div class="text-sm text-muted">Fingerprint</div>
    <div class="mt-2 font-mono text-sm break-all text-text select-all">{fingerprint}</div>
  </div>

  <div class="mt-6 flex flex-wrap gap-2.5">
    <a
      href="/pgp.asc"
      download
      class="inline-flex items-center gap-2 rounded-md border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-text"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
      </svg>
      Download public key
    </a>
    <button
      type="button"
      onclick={copyKey}
      class="inline-flex items-center gap-2 rounded-md border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-text"
    >
      {#if copied}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        Copied
      {:else}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        Copy key
      {/if}
    </button>
  </div>

  <details class="mt-8 rounded-lg border border-line">
    <summary class="cursor-pointer px-4 py-3 text-sm text-muted transition-colors hover:text-text">
      Show key
    </summary>
    <pre class="overflow-x-auto border-t border-line px-4 py-3 font-mono text-xs leading-relaxed text-muted">{publicKey}</pre>
  </details>

  <div class="mt-8 text-sm text-muted">
    <p>From the command line:</p>
    <pre class="mt-2 overflow-x-auto rounded-md border border-line px-4 py-3 font-mono text-xs text-text"><span class="text-faint"># fetch automatically via WKD</span>
gpg --locate-keys {site.contactEmail}

<span class="text-faint"># or import the downloaded file</span>
gpg --import pgp.asc</pre>
  </div>
</section>

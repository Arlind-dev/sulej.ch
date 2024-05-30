<script lang="ts">
  import { onMount } from "svelte";
  import "../styles/global.scss";
  import "../styles/fonts.scss";
  import Cursor from "../components/atoms/Cursor.svelte";

  let loading = true;

  onMount(() => {
    if (document.readyState === "complete") {
      loading = false;
    }

    const classes = document.querySelector("body")?.classList;
    const stopResizeAnimation = () => {
      let timer: any = 0;
      window.addEventListener("resize", function () {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        } else {
          classes?.add("stop-transitions");
        }

        timer = setTimeout(() => {
          classes?.remove("stop-transitions");
          timer = null;
        }, 100);
      });
    };

    stopResizeAnimation();
  });
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="og:title" content="sulej.ch" />
  <meta content="/default.png" property="og:image" />
  <meta property="og:description" content="Arlind Sulejmani" />
  <meta name="twitter:image" itemprop="image" content="/default.png" />
  <meta name="twitter:card" content="summary" />
  <meta name="theme-color" content="#524dad" />
  <title>sulej.ch</title>
</svelte:head>

<Cursor />
<span class:loading>
  <slot />
</span>

<style>
  .loading * {
    transition: none;
  }
</style>

<script>
  import '../app.css';
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>sulej.ch</title>
</svelte:head>

<div style="min-height: 100vh; padding-top: clamp(1rem, 8vh, 6rem); display: flex; flex-direction: column; align-items: center; justify-content: flex-start; text-align: center; gap: clamp(1rem, 1.5vw, 1.5rem); padding-left: clamp(0.5rem, 2vw, 1.5rem); padding-right: clamp(0.5rem, 2vw, 1.5rem); padding-bottom: clamp(0.5rem, 2vw, 1.5rem); font-size: clamp(1rem, 1rem + 1vw, 1.5rem);">
  <slot />
  
</div>

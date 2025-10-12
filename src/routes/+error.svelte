<script>
  import { page } from "$app/stores";
  $: status = $page.status;
</script>

<h1>{status}</h1>
<p>{$page.error?.message}</p>

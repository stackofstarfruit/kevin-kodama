<script lang="ts">
  import { onMount } from 'svelte';
  let loading = true;
  onMount(async () => {
    // Replace with actual loading logic
    await new Promise(resolve => setTimeout(resolve, 2000)); // simulate a 2 second delay for loading
    loading = false;
  });
</script>

<svelte:head>
  <title>Popheads Chart</title>
</svelte:head>

<body class="bg-blue-50 text-blue-900 p-6">
  <h1 class="text-4xl px-4 mt-10 mb-10">Popheads Chart (Summer 2020 - Summer 2023)</h1>

  {#if loading}
  <div id="new-site-loading" class="border-solid border-black border-2 w-5/6 h-96 my-8 mx-auto flex items-center justify-center">
    <p class="text-3xl text-center">LOADING PROJECT...</p>
  </div>
  {:else}
  <embed id="new-site" class="border-solid border-black border-2 w-5/6 h-96 my-8 mx-auto" src="https://popheads-chart-cs0o.onrender.com/">
  {/if}

  <article class="text-lg font-medium text-gray-700">
    <p class="mb-6">In 2020, I was involved in an online pop music community called Popheads. A great feature of Popheads were the weekly charts, which aggregated the listening stats of community members to generate a table of the top songs of the week, similar to the Billboard Hot 100. However, these charts were difficult to get all in one place. I decided to make a web application that would allow users to browse all Popheads charts from a single webpage.</p>

    <p class="text-3xl text-center m-6">MORE INFO TO BE ADDED SOON...</p>
  </article>
</body>
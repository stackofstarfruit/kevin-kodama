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
  <title>Wandering Inn</title>
</svelte:head>

<body class="bg-blue-50 text-blue-900 p-6">
  <h1 class="text-4xl px-4 mt-10 mb-10">Wandering Inn Visualization (Spring 2021 - Summer 2021)</h1>

  {#if loading}
  <div id="new-site-loading" class="border-solid border-black border-2 w-5/6 h-96 my-8 mx-auto flex items-center justify-center">
    <p class="text-3xl text-center">LOADING PROJECT...</p>
  </div>
  {:else}
  <embed id="new-site" class="border-solid border-black border-2 w-5/6 h-96 my-8 mx-auto" src="https://stackofstarfruit.shinyapps.io/Wandering_Inn_7/">
  {/if}

  <article class="text-lg font-medium text-gray-700">
    <p class="mb-6">In 2021, I decided to try my hand at a data analysis project for the first time. My subject was <i>The Wandering Inn</i> by pirateaba, a 30,000-word fantasy epic that I had been reading for the past couple years. I wanted to use my newfound knowledge of R and its corresponding web application framework Shiny to give myself a sense of scale for the author's work.</p>

    <p class="text-3xl text-center m-6">MORE INFO TO BE ADDED SOON...</p>
  </article>
</body>
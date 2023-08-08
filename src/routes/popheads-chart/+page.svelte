<script lang="ts">
  import TableOfContents from "./components/TableOfContents.svelte";
  import JavaEdition from './components/JavaEdition.svelte';
  import ShinyEdition from './components/ShinyEdition.svelte';
  import ReactEdition from './components/ReactEdition.svelte';
  import TheFinalPush from './components/TheFinalPush.svelte';
  import Conclusion from './components/Conclusion.svelte';
    
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
    <p class="mb-3">In 2020, I was involved in an online pop music community called Popheads. A great feature of Popheads was the weekly charts, which aggregated the listening stats of community members to generate a table of the top songs of the week (shown below). However, these charts were a pain to access, especially ones from previous weeks. I decided to make an app that would allow users to see all Popheads charts from a single page.</p>

    <div class="mb-3 flex flex-row flex-initial">
      <img class="shrink w-1/2" alt="Reddit Chart" src="./img/reddit-chart.png">
      <img class="shrink w-1/2" alt="Paste.ee Chart" src="./img/paste-ee.png">
    </div>

    <p class="mb-6">Unlike the smooth progress of the <a class="text-blue-600 hover:text-blue-700" href="../quizbowl-website">Quizbowl Website</a>, progress on the Popheads Chart came in fits and starts. I was out of my depth when I started working on it, and I had no concept of the technical knowledge that the project would require. There were times when I stopped working on it, and during some of those times I thought I would leave the Popheads Chart unfinished forever. Knowing what I know now, there are a thousand things I would have done differently. But it came together in the end, and I feel proud of how it came out.</p>

    <TableOfContents />

    <JavaEdition />

    <ShinyEdition />

    <ReactEdition />

    <TheFinalPush />

    <Conclusion />
  </article>
</body>
<script lang="ts">
    import TableOfContents from "./components/TableOfContents.svelte";
    import SiteBeginnings from './components/SiteBeginnings.svelte';
    import LandingPage from './components/LandingPage.svelte';
    import JavaScriptAdventures from './components/JavaScriptAdventures.svelte';
    import FleshingOutSite from './components/FleshingOutSite.svelte';
    import DetailedClubHistory from './components/DetailedClubHistory.svelte';
    import ReactiveCSSFeatures from './components/ReactiveCSSFeatures.svelte';
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
  <title>Quizbowl Website</title>
</svelte:head>

<body class="bg-blue-50 text-blue-900 p-6">
  <h1 class="text-4xl px-4 mt-10 mb-10">Quizbowl Website (Winter 2020 - Spring 2023)</h1>

  {#if loading}
  <div id="new-site-loading" class="border-solid border-black border-2 w-5/6 h-96 my-8 mx-auto flex items-center justify-center">
    <p class="text-3xl text-center">LOADING PROJECT...</p>
  </div>
  {:else}
  <embed id="new-site" class="border-solid border-black border-2 w-5/6 h-96 my-8 mx-auto" src="http://students.washington.edu/quizbowl">
  {/if}

  <article class="text-lg font-medium text-gray-700">
    <p class="mb-6">From 2020 to 2023, I was the webmaster and sometimes-president of quizbowl at the University of Washington. Quizbowl is a fast-paced academic competition centered around the quick recall of facts. However, the supply of centralized quizbowl resources is limited. I hoped to address this by creating a club website that collected not just club-specific resources, but also resources applicable to all of quizbowl. Below is a timeline of how the website came to be. While not all of this information is technical, I hope it will shed some light on my development process.</p>

    <TableOfContents />

    <SiteBeginnings />

    <LandingPage />

    <JavaScriptAdventures />

    <p class="text-3xl text-center m-6">MORE INFO TO BE ADDED SOON...</p>

    <!--

    <FleshingOutSite />

    <DetailedClubHistory />

    <ReactiveCSSFeatures />

    <Conclusion />-->
  </article>
</body>
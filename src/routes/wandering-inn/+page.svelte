<script lang="ts">
  import { onMount } from "svelte";

  let loading = true;

  onMount(async () => {
    // Replace with actual loading logic
    await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate a 2 second delay for loading
    loading = false;
  });
</script>

<svelte:head>
  <title>Wandering Inn</title>
</svelte:head>

<!-- IMPORTANT: don't render a <body> tag inside a Svelte/SvelteKit component -->
<main class="bg-blue-50 text-blue-900 p-6">
  <h1 class="text-4xl px-4 mt-10 mb-10">Wandering Inn Visualization (Spring 2021 - Summer 2021)</h1>

  {#if loading}
    <div
      id="new-site-loading"
      class="border-solid border-black border-2 w-5/6 h-96 my-8 mx-auto flex items-center justify-center"
    >
      <p class="text-3xl text-center">LOADING PROJECT...</p>
    </div>
  {:else}
    <iframe
      id="new-site"
      class="border-solid border-black border-2 w-5/6 h-96 my-8 mx-auto"
      title="Wandering Inn Visualization Preview"
      src="https://stackofstarfruit.shinyapps.io/Wandering_Inn_7/"
    ></iframe>
  {/if}

  <article class="text-lg font-medium text-gray-700">
    <p class="mb-3">
      In 2021, I decided to try my hand at a data analysis project for the first time. My subject was
      <a
        class="text-blue-600 hover:text-blue-700"
        href="https://wanderinginn.com/"
        target="_blank"
        rel="noopener noreferrer"
        ><i>The Wandering Inn</i></a
      >
      by pirateaba, a 30,000-word fantasy epic that I had been reading for the past couple years. I wanted to
      use my newfound knowledge of R and its corresponding frontend framework Shiny to give myself a sense of
      scale for the author's work.
    </p>

    <p class="mb-3">
      For those unfamiliar, R is a simple interpreted programming language used by scientists and statisticians,
      while Shiny is a very high-level frontend framework used to deploy R visualizations to the Internet. It
      comes with a variety of pre-built menus and chart components that are designed to make deployment as
      painless (and as far away from JavaScript) as possible. Shiny is also reactive, meaning that charts can be
      re-rendered on the client side with the click of a button.
    </p>

    <p class="mb-3">
      Unlike my other projects, which took multiple years to reach their final form, the Wandering Inn
      Visualization only took a couple of weeks to get off the ground. The only new tech I was working with was
      rvest, a web scraping package that was not all too dissimilar from the jsoup library I used in the Java
      Edition of my
      <a class="text-blue-600 hover:text-blue-700" href="../quizbowl-website">Popheads Chart</a>
      project. This made the development process relatively simple.
    </p>

    <p class="mb-3">
      This isn't to say that the process was entirely without snags. One issue was the sheer size of the text. I
      initially just scanned directly from the text on the client side within the app. But this quickly turned
      out to be a bad idea, and it was a good demonstration of why databases are necessary. I ended up storing
      the text in a big spreadsheet, but I would definitely store it in a database if I was doing the project
      over again.
    </p>

    <p class="mb-3">
      Most of my page views are just straightforward
      <a
        class="text-blue-600 hover:text-blue-700"
        href="https://plotly.com/r/"
        target="_blank"
        rel="noopener noreferrer"
        >Plotly</a
      >
      visualizations that use Shiny to inject the chart with fields. One view that goes beyond this is the
      Chapters by Date page, which visualizes the word count in calendar format. I achieved this by introducing
      a special
      <a
        class="text-blue-600 hover:text-blue-700"
        href="https://ggplot2.tidyverse.org/"
        target="_blank"
        rel="noopener noreferrer"
        >ggplot2</a
      >
      calendar theme.
    </p>

    <p class="mb-3">
      In the end, this was the first coding project I was able to post publicly in its finished form. It felt
      great to ship something so quickly, which inspired me to take on more personal projects. While this
      particular project didn't teach me too much on the technical side, it did wonders for my imposter
      syndrome and motivated me to learn more about the world of web development.
    </p>

    <p>&mdash;K, August 2023</p>
  </article>
</main>
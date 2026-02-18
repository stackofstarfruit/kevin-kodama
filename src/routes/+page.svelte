<script>
  import Intro from "../components/Intro.svelte";
  import Projects from "../components/Projects.svelte";
  import SynthesizedSunsets from "../components/SynthesizedSunsets.svelte";
  import OtherEssays from "../components/OtherEssays.svelte";
</script>

<svelte:head>
  <title>Kevin Kodama</title>
</svelte:head>

<div class="bg-blue-50 text-blue-900 scroll-smooth min-h-screen">
  <Intro />
  <Projects />
  <SynthesizedSunsets />
  <OtherEssays />
  <div id="end">
    <p class="m-3">
      This website was built with
      <a href="https://kit.svelte.dev/">SvelteKit</a>,
      <a href="https://tailwindcss.com/">Tailwind CSS</a>,
      and
      <a href="https://www.typescriptlang.org/">TypeScript</a>.
    </p>
  </div>
</div>

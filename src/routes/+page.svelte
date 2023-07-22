<script>
  import Intro from "../components/Intro.svelte";
  import Projects from "../components/Projects.svelte";
  import Essays from "../components/Essays.svelte";
</script>

<svelte:head>
  <title>Kevin Kodama</title>
</svelte:head>

<body class="bg-blue-50 text-blue-900">
  <Intro />
  <Projects />
  <Essays />
  <p class="m-3">This website was built with <a href="https://kit.svelte.dev/">SvelteKit</a>, <a href="https://tailwindcss.com/">Tailwind CSS</a>, and <a href="https://www.typescriptlang.org/">TypeScript</a>.</p>
</body>
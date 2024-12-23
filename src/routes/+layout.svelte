<script>
  import "../app.css";
</script>

<svelte:head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
  rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<nav class="sticky z-10 top-0 w-full px-4 py-4 bg-blue-200 rounded-lg shadow-lg">
  <ul class="grid grid-cols-2 lg:grid-cols-4 gap-4 text-lg font-medium text-center">
    <li><a href="/" class="text-blue-600 hover:text-blue-700">Home</a></li>
    <li><a href="#projects" class="text-blue-600 hover:text-blue-700">Projects</a></li>
    <li><a href="#synthesized-sunsets" class="text-blue-600 hover:text-blue-700">Synthesized Sunsets</a></li>
    <li><a href="#other-essays" class="text-blue-600 hover:text-blue-700">Other Essays</a></li>
  </ul>
</nav>

<slot />
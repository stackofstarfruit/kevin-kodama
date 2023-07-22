<script lang='ts'>
  import type { Tool } from '../types/Tool';
  export let title: string;
  export let description: string;
  export let imageLink: string;
  export let projectLink: string;
  export let repoLink: string;
  export let makingOfLink: string;
  export let tools: Tool[] = [];
</script>

<div class="border border-blue-200 ml-8 mr-8 p-4 rounded transform transition-all duration-200 hover:scale-105 hover:shadow-lg flex flex-col md:flex-row justify-between items-center">
  <div class="w-full md:w-2/3">
    <h2 class="text-lg mb-2">
      {title}
    </h2>
    <p>
      {description}
    </p>
    {#each tools as tool (tool.name)}
      <a href={tool.link} class={`px-2 py-1 mr-3 rounded hover:text-white ${tool.color}`}>{tool.name}</a>
    {/each}
  </div>
  <div class="relative w-full md:w-1/3 mt-4 md:mt-0 md:ml-4">
    <a href={projectLink}>
      <img src={imageLink} alt={title} class="rounded-lg w-full h-auto transition-opacity duration-200 hover:opacity-50">
    </a>
    <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-200 space-y-4">
      <a on:click|stopPropagation={onclick} href={repoLink} class="px-4 py-2 flex items-center space-x-2 bg-gray-800 text-white rounded">
        <i class="fa fa-github"></i>
        <span>Github</span>
      </a>
      <a on:click|stopPropagation={onclick} href={projectLink} class="px-4 py-2 flex items-center space-x-2 bg-green-500 text-white rounded">
        <i class="fa fa-link"></i>
        <span>Project</span>
      </a>
      <a on:click|stopPropagation={onclick} href={makingOfLink} class="px-4 py-2 flex items-center space-x-2 bg-yellow-500 text-white rounded">
        <i class="fa fa-pencil"></i>
        <span>Making Of</span>
      </a>
    </div>
  </div>
</div>
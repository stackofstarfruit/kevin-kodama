<script lang="ts">
  import type { Tool } from "../types/Tool";

  export let detailsHref: string;

  export let title: string;
  export let description: string;
  export let imageLink: string;
  export let projectLink: string;
  export let repoLink: string;
  export let makingOfLink: string;
  export let tools: Tool[] = [];
</script>

<div
  class="relative border border-blue-200 ml-8 mr-8 mb-1 p-4 rounded transform transition-all duration-200 hover:z-50 hover:scale-105 hover:shadow-lg flex flex-col md:flex-row justify-between items-center"
>
  <!-- Whole-card click target -->
  <a
    href={detailsHref}
    aria-label={`Open ${title}`}
    class="absolute inset-0 z-0"
  ></a>

  <div class="relative z-10 w-full md:w-2/3">
    <h2 class="text-lg mb-2">{title}</h2>
    <p>{description}</p>

    <div class="flex flex-wrap" id="tools">
      {#each tools as tool (tool.name)}
        <a
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          class={`px-2 py-1 mr-3 rounded hover:text-white ${tool.color} relative z-20`}
          on:click|stopPropagation
        >
          {tool.name}
        </a>
      {/each}
    </div>
  </div>

  <!-- group is important so we can toggle pointer-events on the overlay -->
  <div class="relative z-10 w-full md:w-1/3 mt-4 md:mt-0 md:ml-4 group">
    <!-- Make the image itself clickable (works because overlay below will not intercept clicks when hidden) -->
    <a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      class="relative z-20 block"
      on:click|stopPropagation
    >
      <img
        src={imageLink}
        alt={title}
        class="rounded-lg w-full h-auto transition-opacity duration-200 group-hover:opacity-50"
      />
    </a>

    <!-- KEY FIX: when opacity is 0, this must NOT eat clicks -->
    <div
      class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 space-y-4"
    >
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        on:click|stopPropagation
        class="px-4 py-2 flex items-center space-x-2 bg-gray-800 text-white rounded pointer-events-auto relative z-30"
      >
        <i class="fa fa-github"></i>
        <span>Github</span>
      </a>

      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        on:click|stopPropagation
        class="px-4 py-2 flex items-center space-x-2 bg-green-500 text-white rounded pointer-events-auto relative z-30"
      >
        <i class="fa fa-link"></i>
        <span>Project</span>
      </a>

      <a
        href={makingOfLink}
        on:click|stopPropagation
        class="px-4 py-2 flex items-center space-x-2 bg-yellow-500 text-white rounded pointer-events-auto relative z-30"
      >
        <i class="fa fa-pencil"></i>
        <span>Making Of</span>
      </a>
    </div>
  </div>
</div>
<script lang="ts">
  import type { Tool } from "../types/Tool";
  export let title: string;
  export let description: string;
  export let link: string;
  export let image: string;
  export let tools: Tool[] = [];

  const onCardClick = () => {
    window.location.href = link;
  };

  const onCardKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.location.href = link;
    }
  };
</script>

<div
  class="relative border border-blue-200 ml-8 mr-8 mb-1 p-4 rounded transform transition-all duration-200 hover:z-51 hover:scale-105 hover:shadow-lg flex flex-col md:flex-row justify-between items-center cursor-pointer"
  role="link"
  tabindex="0"
  aria-label={`Read: ${title}`}
  on:click={onCardClick}
  on:keydown={onCardKeyDown}
>
  <div class="w-full md:w-2/3">
    <h2 class="text-lg mb-2">{title}</h2>
    <p class="mb-2">"{description}"</p>
    <p class="mb-2">Click to continue reading!</p>

    <div class="flex flex-wrap" id="tools">
      {#each tools as tool (tool.name)}
        <a
          href={tool.link}
          class={`px-2 py-1 mr-3 rounded hover:text-white ${tool.color}`}
          on:click|stopPropagation
          on:keydown|stopPropagation
        >
          {tool.name}
        </a>
      {/each}
    </div>
  </div>

  <div class="relative w-full md:w-1/3 mt-4 md:mt-0 md:ml-4">
    <a href={link} 
      on:click|stopPropagation={() => {}} 
      on:keydown|stopPropagation={() => {}}
    >
      <img
        src={image}
        alt={title}
        class="rounded-lg w-full h-auto transition-opacity duration-200 hover:opacity-50"
      />
    </a>
  </div>
</div>

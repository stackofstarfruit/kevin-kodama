<script lang="ts">
  export let detailsHref: string;

  export let title: string;
  export let description: string;
  export let imageLink: string;
  export let projectLink: string;
  export let repoLink: string;
  export let makingOfLink: string;
  export let tools: { name: string; link: string; color: string }[];
</script>

<article class="relative rounded-xl border p-4 hover:shadow-md transition">
  <!-- The “whole card” link overlay -->
  <a
    href={detailsHref}
    aria-label={`Open ${title}`}
    class="absolute inset-0 z-0"
  ></a>

  <!-- Actual content sits above the overlay -->
  <div class="relative z-10 flex gap-4">
    <img src={imageLink} alt={title} class="w-40 h-24 object-cover rounded-lg" />

    <div class="flex-1">
      <h3 class="text-xl font-semibold">{title}</h3>
      <p class="text-sm opacity-80 mt-1">{description}</p>

      <div class="mt-3 flex flex-wrap gap-2">
        <a
          class="text-sm px-3 py-1 rounded-full border hover:bg-gray-100"
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </a>

        <a
          class="text-sm px-3 py-1 rounded-full border hover:bg-gray-100"
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo
        </a>

        <a
          class="text-sm px-3 py-1 rounded-full border hover:bg-gray-100"
          href={makingOfLink}
        >
          Making of
        </a>
      </div>

      <div class="mt-3 flex flex-wrap gap-2">
        {#each tools as tool}
          <a
            class={"text-xs px-2 py-1 rounded-full transition " + tool.color}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {tool.name}
          </a>
        {/each}
      </div>
    </div>
  </div>
</article>

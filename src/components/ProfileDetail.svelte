<script lang='ts'>
  import type { Icon } from '../types/Icon';

  export let title: string;
  export let contents: string = "";
  export let icons: Array<Icon> = [];
</script>

<div class="w-full md:w-1/2 p-2">
  <div class="flex flex-col justify-center items-center">
    <h3 class="mt-6 text-lg font-semibold">{title}</h3>
    {#if icons.length}
      <div id="resume-icons" class="flex space-x-4 text-3xl mb-4">
        {#each icons as icon (icon.href)}
          <a href={icon.href} target="_blank">
            <img class="mt-2 h-10 w-10" alt={title} src={icon.path}>
          </a>
        {/each}
      </div>
    {/if}
    <p class="text-gray-700">{contents}</p>
  </div>
</div>
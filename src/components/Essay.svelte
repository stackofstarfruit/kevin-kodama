<script lang='ts'>
  export let title: string;
  export let link: string;
  export let description: string;
</script>

<div class="mb-4">
  <h4 class="text-xl mb-1"><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h4>
  <p class="text-base text-gray-600">{description}</p>
</div>
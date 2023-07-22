<script lang='ts'>
  import Essay from './Essay.svelte'
</script>

<h2 id="essays" class="text-3xl px-4 mt-10">Essays</h2>
<section class="px-4 py-8 space-y-4">
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/2 p-2">
      <h3 class="text-2xl mb-4">Pop Music</h3>
      <Essay 
        title="The Rise, Fall, and Return of Future Nostalgia"
        link="https://synthpop.substack.com/p/great-eras-the-rise-fall-and-rebirth"
        description="A detailed retrospective of pop star Dua Lipa's rise to fame."
      />
      <Essay 
        title="The Allure of Pop Music"
        link="https://synthpop.substack.com/p/the-allure-of-pop-music"
        description="How pop music 'stans' break the mold of traditional music criticism."
      />
      <Essay 
        title="What 'Unholy' Is Really About"
        link="https://synthpop.substack.com/p/what-unholy-is-really-about"
        description="How the smash hit 'Unholy' encapsulates pop star Kim Petras' rocky rise to fame."
      />
    </div>
    <div class="w-full md:w-1/2 p-2">
      <h3 class="text-2xl mb-4">Education</h3>
      <Essay 
        title="An Idea-Based English Curriculum (COMING SOON)"
        link=""
        description="Reimagining how literature is taught in schools."
      />
      <Essay 
        title="The Missing Piece (COMING SOON)"
        link=""
        description="Why the forgotten history of holistic admissions is still revelant today."
      />
      <Essay 
        title="CS, Not Math (COMING SOON)"
        link=""
        description="The case for CS as a core subject."
      />
    </div>
  </div>    
</section>
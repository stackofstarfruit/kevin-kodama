<script lang='ts'>
  import ContactCard from './ContactCard.svelte'
  import Bio from './Bio.svelte'
  import ProfileDetails from './ProfileDetails.svelte'
</script>

<section id="intro" class="grid grid-cols-1 md:grid-cols-3 px-4 py-8 bg-blue-100 rounded-lg shadow-lg gap-4">
  <ContactCard />
  <Bio />
  <ProfileDetails />
</section>
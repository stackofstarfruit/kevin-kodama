<script lang='ts'>
  import ContactCard from './ContactCard.svelte'
  import Bio from './Bio.svelte'
  import ProfileDetails from './ProfileDetails.svelte'
</script>

<section id="bio" class="px-4 py-8 bg-blue-100 rounded-lg shadow-lg grid grid-cols-3 gap-4">
  <ContactCard />
  <Bio />
  <ProfileDetails />
</section>
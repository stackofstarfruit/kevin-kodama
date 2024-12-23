<script lang='ts'>
  import ProfileDetail from './ProfileDetail.svelte'
</script>

<div class="flex flex-wrap">
  <ProfileDetail 
    title="Current Role"
    contents="SWE @Dell"
  />
  <ProfileDetail 
    title="Location"
    contents="Seattle, WA"
  />
  <ProfileDetail 
    title="Magazine"
    icons={[
      { href: "https://synthesizedsunsets.substack.com/", path: "/icons/synthpop.svg" }
    ]}
  />
  <ProfileDetail 
    title="Resume"
    icons={[
      { href: "/files/resume.pdf", path: "/icons/pdf.svg" },
      { href: "/files/resume.docx", path: "/icons/doc.svg" },
    ]}
  />
</div>
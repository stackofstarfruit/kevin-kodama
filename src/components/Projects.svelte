<script lang='ts'>
  import ProjectCard from './ProjectCard.svelte'

  const popheadsChart = {
    title: 'Popheads Chart',
    description: 'A fullstack web application that scrapes music listening data from the Popheads subreddit.',
    imageLink: '/img/popheads-chart.png',
    projectLink: 'https://popheads-chart-cs0o.onrender.com/',
    repoLink: 'https://github.com/stackofstarfruit/popheads-chart',
    makingOfLink: './popheads-chart',
    tools: [
      { name: 'MongoDB', link: 'https://docs.mongodb.com/', color: 'bg-green-100 text-green-500 hover:bg-green-500 hover:text-white' },
      { name: 'Express.js', link: 'https://expressjs.com/', color: 'bg-purple-100 text-purple-500 hover:bg-purple-500 hover:text-white' },
      { name: 'React.js', link: 'https://reactjs.org/', color: 'bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white' },
      { name: 'Node.js', link: 'https://nodejs.org/en/docs/', color: 'bg-green-100 text-green-500 hover:bg-green-500 hover:text-white' },
      { name: 'Tailwind CSS', link: 'https://tailwindcss.com/docs', color: 'bg-cyan-100 text-cyan-500 hover:bg-cyan-500 hover:text-white' },
      { name: 'Chart.js', link: 'https://www.chartjs.org/docs/latest/', color: 'bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white' },
      { name: 'react-select', link: 'https://react-select.com/home', color: 'bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white' },
    ]
  };

  const quizbowlWebsite = {
    title: 'Quizbowl Website',
    description: 'A website I designed for my registered student organization, quizbowl.',
    imageLink: '/img/new-site.png',
    projectLink: 'https://www.students.washington.edu/quizbowl',
    repoLink: 'https://github.com/stackofstarfruit/quizbowl-website/',
    makingOfLink: './quizbowl-website',
    tools: [
      { name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', color: 'bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white' },
      { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', color: 'bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white' },
      { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', color: 'bg-yellow-100 text-yellow-500 hover:bg-yellow-500 hover:text-white' },
      { name: 'Apache Server', link: 'https://httpd.apache.org/', color: 'bg-red-100 text-red-500 hover:bg-red-500 hover:text-white' },
    ],
  };

  const wanderingInn = {
    title: 'Visualization of the Wandering Inn',
    description: 'Data visualization I did for a really long fantasy novel.',
    imageLink: '/img/wandering-inn.png',
    projectLink: 'https://stackofstarfruit.shinyapps.io/Wandering_Inn_7/',
    repoLink: 'https://github.com/stackofstarfruit/wandering-inn-vol-7',
    makingOfLink: './wandering-inn',
    tools: [
      { name: 'R', link: 'https://www.r-project.org/', color: 'bg-blue-100 text-blue-700 hover:bg-blue-700 hover:text-white' },
      { name: 'tidyverse', link: 'https://www.tidyverse.org/', color: 'bg-pink-100 text-pink-700 hover:bg-pink-700 hover:text-white' },
      { name: 'Shiny', link: 'https://shiny.posit.co/', color: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-700 hover:text-white' },
      { name: 'Plot.ly', link: 'https://plotly.com/r/', color: 'bg-blue-100 text-blue-700 hover:bg-blue-700 hover:text-white' },
      { name: 'ggplot2', link: 'https://ggplot2.tidyverse.org/', color: 'bg-gray-100 text-gray-700 hover:bg-gray-700 hover:text-white' },
    ]
  };
</script>

<h2 id="projects" class="text-3xl px-4 mt-10 text-center">Projects</h2>
<section id="gallery" class="px-4 py-8 space-y-4">
  <ProjectCard
    detailsHref="/popheads-chart"
    title={popheadsChart.title}
    description={popheadsChart.description}
    imageLink={popheadsChart.imageLink}
    projectLink={popheadsChart.projectLink}
    repoLink={popheadsChart.repoLink}
    makingOfLink={popheadsChart.makingOfLink}
    tools={popheadsChart.tools}
  />

  <ProjectCard
    detailsHref="/quizbowl-website"
    title={quizbowlWebsite.title}
    description={quizbowlWebsite.description}
    imageLink={quizbowlWebsite.imageLink}
    projectLink={quizbowlWebsite.projectLink}
    repoLink={quizbowlWebsite.repoLink}
    makingOfLink={quizbowlWebsite.makingOfLink}
    tools={quizbowlWebsite.tools}
  />

  <ProjectCard
    detailsHref="/wandering-inn"
    title={wanderingInn.title}
    description={wanderingInn.description}
    imageLink={wanderingInn.imageLink}
    projectLink={wanderingInn.projectLink}
    repoLink={wanderingInn.repoLink}
    makingOfLink={wanderingInn.makingOfLink}
    tools={wanderingInn.tools}
  />
</section>

import { c as create_ssr_component, e as escape, d as each, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const ContactCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="propic" class="flex flex-col items-center justify-center" data-svelte-h="svelte-bsrf34"><h1 class="text-3xl mb-3">Kevin Kodama</h1> <img alt="Kevin Kodama" src="/img/profile.jpeg" class="w-24 h-24 rounded-full shadow border-2 border-blue-300 mb-4"> <div id="contact-icons" class="space-x-4 text-2xl"><a href="mailto:kevin.kodama@protonmail.com" class="text-blue-500 hover:text-blue-700"><i class="fa fa-envelope"></i></a> <a href="https://linkedin.com/in/kevin-kodama" target="_blank" class="text-blue-500 hover:text-blue-700"><i class="fa fa-linkedin"></i></a> <a href="https://github.com/stackofstarfruit" target="_blank" class="text-blue-500 hover:text-blue-700"><i class="fa fa-github"></i></a></div></div>`;
});
const Bio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col justify-center" data-svelte-h="svelte-orfydi"><p class="text-base md:text-lg font-medium text-gray-700">Hi! I am Kevin Kodama, a software engineer and writer seeking to explain big ideas with technology and literature. Right now I am exploring modern tech&#39;s impact on human relationships, new models for education, and the future of pop music. Send me an email at kevin.kodama (at) protonmail.com!</p></div>`;
});
const ProfileDetail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { contents = "" } = $$props;
  let { icons = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.contents === void 0 && $$bindings.contents && contents !== void 0)
    $$bindings.contents(contents);
  if ($$props.icons === void 0 && $$bindings.icons && icons !== void 0)
    $$bindings.icons(icons);
  return `<div class="w-full md:w-1/2 p-2"><div class="flex flex-col justify-center items-center"><h3 class="text-blue-600 mt-6 text-lg font-semibold">${escape(title)}</h3> ${icons.length ? `<div id="resume-icons" class="flex space-x-4 text-3xl mb-4">${each(icons, (icon) => {
    return `<a${add_attribute("href", icon.href, 0)} target="_blank"><img class="mt-2 h-10 w-10"${add_attribute("alt", title, 0)}${add_attribute("src", icon.path, 0)}> </a>`;
  })}</div>` : ``} <p class="text-gray-700">${escape(contents)}</p></div></div>`;
});
const ProfileDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-wrap">${validate_component(ProfileDetail, "ProfileDetail").$$render(
    $$result,
    {
      title: "Current Role",
      contents: "SWE @Dell"
    },
    {},
    {}
  )} ${validate_component(ProfileDetail, "ProfileDetail").$$render(
    $$result,
    {
      title: "Location",
      contents: "Seattle, WA"
    },
    {},
    {}
  )} ${validate_component(ProfileDetail, "ProfileDetail").$$render(
    $$result,
    {
      title: "Blog",
      icons: [
        {
          href: "https://synthpop.substack.com/",
          path: "/icons/synthpop.svg"
        }
      ]
    },
    {},
    {}
  )} ${validate_component(ProfileDetail, "ProfileDetail").$$render(
    $$result,
    {
      title: "Resume",
      icons: [
        {
          href: "/files/resume.pdf",
          path: "/icons/pdf.svg"
        },
        {
          href: "/files/resume.docx",
          path: "/icons/doc.svg"
        }
      ]
    },
    {},
    {}
  )}</div>`;
});
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="bio" class="grid grid-cols-1 md:grid-cols-3 px-4 py-8 bg-blue-100 rounded-lg shadow-lg gap-4">${validate_component(ContactCard, "ContactCard").$$render($$result, {}, {}, {})} ${validate_component(Bio, "Bio").$$render($$result, {}, {}, {})} ${validate_component(ProfileDetails, "ProfileDetails").$$render($$result, {}, {}, {})}</section>`;
});
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { imageLink } = $$props;
  let { projectLink } = $$props;
  let { repoLink } = $$props;
  let { makingOfLink } = $$props;
  let { tools = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.imageLink === void 0 && $$bindings.imageLink && imageLink !== void 0)
    $$bindings.imageLink(imageLink);
  if ($$props.projectLink === void 0 && $$bindings.projectLink && projectLink !== void 0)
    $$bindings.projectLink(projectLink);
  if ($$props.repoLink === void 0 && $$bindings.repoLink && repoLink !== void 0)
    $$bindings.repoLink(repoLink);
  if ($$props.makingOfLink === void 0 && $$bindings.makingOfLink && makingOfLink !== void 0)
    $$bindings.makingOfLink(makingOfLink);
  if ($$props.tools === void 0 && $$bindings.tools && tools !== void 0)
    $$bindings.tools(tools);
  return `<div class="relative border border-blue-200 ml-8 mr-8 mb-1 p-4 rounded transform transition-all duration-200 hover:z-51 hover:scale-105 hover:shadow-lg flex flex-col md:flex-row justify-between items-center"><div class="w-full md:w-2/3"><h2 class="text-lg mb-2">${escape(title)}</h2> <p>${escape(description)}</p> <div class="flex flex-wrap" id="tools">${each(tools, (tool) => {
    return `<a${add_attribute("href", tool.link, 0)}${add_attribute("class", `px-2 py-1 mr-3 rounded hover:text-white ${tool.color}`, 0)}>${escape(tool.name)}</a>`;
  })}</div></div> <div class="relative w-full md:w-1/3 mt-4 md:mt-0 md:ml-4"><a${add_attribute("href", projectLink, 0)}><img${add_attribute("src", imageLink, 0)}${add_attribute("alt", title, 0)} class="rounded-lg w-full h-auto transition-opacity duration-200 hover:opacity-50"></a> <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-200 space-y-4"><a${add_attribute("href", repoLink, 0)} class="px-4 py-2 flex items-center space-x-2 bg-gray-800 text-white rounded"><i class="fa fa-github"></i> <span data-svelte-h="svelte-10y2jod">Github</span></a> <a${add_attribute("href", projectLink, 0)} class="px-4 py-2 flex items-center space-x-2 bg-green-500 text-white rounded"><i class="fa fa-link"></i> <span data-svelte-h="svelte-1uzje85">Project</span></a> <a${add_attribute("href", makingOfLink, 0)} class="px-4 py-2 flex items-center space-x-2 bg-yellow-500 text-white rounded"><i class="fa fa-pencil"></i> <span data-svelte-h="svelte-1rpz9ac">Making Of</span></a></div></div></div>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const popheadsChart = {
    title: "Popheads Chart",
    description: "A fullstack web application that scrapes music listening data from the Popheads subreddit.",
    imageLink: "/img/popheads-chart.png",
    projectLink: "https://popheads-chart-cs0o.onrender.com/",
    repoLink: "https://github.com/stackofstarfruit/popheads-chart",
    makingOfLink: "./popheads-chart",
    tools: [
      {
        name: "MongoDB",
        link: "https://docs.mongodb.com/",
        color: "bg-green-100 text-green-500 hover:bg-green-500 hover:text-white"
      },
      {
        name: "Express.js",
        link: "https://expressjs.com/",
        color: "bg-purple-100 text-purple-500 hover:bg-purple-500 hover:text-white"
      },
      {
        name: "React.js",
        link: "https://reactjs.org/",
        color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
      },
      {
        name: "Node.js",
        link: "https://nodejs.org/en/docs/",
        color: "bg-green-100 text-green-500 hover:bg-green-500 hover:text-white"
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/docs",
        color: "bg-cyan-100 text-cyan-500 hover:bg-cyan-500 hover:text-white"
      },
      {
        name: "Chart.js",
        link: "https://www.chartjs.org/docs/latest/",
        color: "bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white"
      },
      {
        name: "react-select",
        link: "https://react-select.com/home",
        color: "bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white"
      }
    ]
  };
  const quizbowlWebsite = {
    title: "Quizbowl Website",
    description: "A website I designed for my registered student organization, quizbowl.",
    imageLink: "/img/new-site.png",
    projectLink: "https://www.students.washington.edu/quizbowl",
    repoLink: "https://github.com/stackofstarfruit/quizbowl-website/",
    makingOfLink: "./quizbowl-website",
    tools: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
      },
      {
        name: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        color: "bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white"
      },
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        color: "bg-yellow-100 text-yellow-500 hover:bg-yellow-500 hover:text-white"
      },
      {
        name: "Apache Server",
        link: "https://httpd.apache.org/",
        color: "bg-red-100 text-red-500 hover:bg-red-500 hover:text-white"
      }
    ]
  };
  const wanderingInn = {
    title: "Visualization of the Wandering Inn",
    description: "Data visualization I did for a really long fantasy novel.",
    imageLink: "/img/wandering-inn.png",
    projectLink: "https://stackofstarfruit.shinyapps.io/Wandering_Inn_7/",
    repoLink: "https://github.com/stackofstarfruit/wandering-inn-vol-7",
    makingOfLink: "./wandering-inn",
    tools: [
      {
        name: "R",
        link: "https://www.r-project.org/",
        color: "bg-blue-100 text-blue-700 hover:bg-blue-700 hover:text-white"
      },
      {
        name: "tidyverse",
        link: "https://www.tidyverse.org/",
        color: "bg-pink-100 text-pink-700 hover:bg-pink-700 hover:text-white"
      },
      {
        name: "Shiny",
        link: "https://shiny.posit.co/",
        color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-700 hover:text-white"
      },
      {
        name: "Plot.ly",
        link: "https://plotly.com/r/",
        color: "bg-blue-100 text-blue-700 hover:bg-blue-700 hover:text-white"
      },
      {
        name: "ggplot2",
        link: "https://ggplot2.tidyverse.org/",
        color: "bg-gray-100 text-gray-700 hover:bg-gray-700 hover:text-white"
      }
    ]
  };
  return `<h2 id="projects" class="text-3xl px-4 mt-10" data-svelte-h="svelte-1y8ofsc">Projects</h2> <section id="gallery" class="px-4 py-8 space-y-4"><a href="/popheads-chart">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: popheadsChart.title,
      description: popheadsChart.description,
      imageLink: popheadsChart.imageLink,
      projectLink: popheadsChart.projectLink,
      repoLink: popheadsChart.repoLink,
      makingOfLink: popheadsChart.makingOfLink,
      tools: popheadsChart.tools
    },
    {},
    {}
  )}</a> <a href="/quizbowl-website">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: quizbowlWebsite.title,
      description: quizbowlWebsite.description,
      imageLink: quizbowlWebsite.imageLink,
      projectLink: quizbowlWebsite.projectLink,
      repoLink: quizbowlWebsite.repoLink,
      makingOfLink: quizbowlWebsite.makingOfLink,
      tools: quizbowlWebsite.tools
    },
    {},
    {}
  )}</a> <a href="/wandering-inn">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: wanderingInn.title,
      description: wanderingInn.description,
      imageLink: wanderingInn.imageLink,
      projectLink: wanderingInn.projectLink,
      repoLink: wanderingInn.repoLink,
      makingOfLink: wanderingInn.makingOfLink,
      tools: wanderingInn.tools
    },
    {},
    {}
  )}</a></section>`;
});
const Essay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { link } = $$props;
  let { description } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="mb-4"><h4 class="text-xl mb-1"><a${add_attribute("href", link, 0)} target="_blank" rel="noopener noreferrer">${escape(title)}</a></h4> <p class="text-base text-gray-600">${escape(description)}</p></div>`;
});
const Essays = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="essays" class="text-3xl px-4 mt-10" data-svelte-h="svelte-sd6it0">Essays</h2> <section class="px-4 py-8 space-y-4"><div class="flex flex-wrap"><div class="w-full md:w-1/2 p-2"><h3 class="text-2xl mb-4" data-svelte-h="svelte-1qal79f">Pop Music</h3> ${validate_component(Essay, "Essay").$$render(
    $$result,
    {
      title: "The Rise, Fall, and Return of Future Nostalgia",
      link: "https://synthpop.substack.com/p/great-eras-the-rise-fall-and-rebirth",
      description: "A detailed retrospective of pop star Dua Lipa's rise to fame."
    },
    {},
    {}
  )} ${validate_component(Essay, "Essay").$$render(
    $$result,
    {
      title: "The Allure of Pop Music",
      link: "https://synthpop.substack.com/p/the-allure-of-pop-music",
      description: "How pop music 'stans' break the mold of traditional music criticism."
    },
    {},
    {}
  )} ${validate_component(Essay, "Essay").$$render(
    $$result,
    {
      title: "What 'Unholy' Is Really About",
      link: "https://synthpop.substack.com/p/what-unholy-is-really-about",
      description: "How the smash hit 'Unholy' encapsulates pop star Kim Petras' rocky rise to fame."
    },
    {},
    {}
  )}</div> <div class="w-full md:w-1/2 p-2"><h3 class="text-2xl mb-4" data-svelte-h="svelte-1on88ll">Education</h3> ${validate_component(Essay, "Essay").$$render(
    $$result,
    {
      title: "An Idea-Based English Curriculum (COMING SOON)",
      link: "",
      description: "Reimagining how literature is taught in schools."
    },
    {},
    {}
  )} ${validate_component(Essay, "Essay").$$render(
    $$result,
    {
      title: "The Missing Piece (COMING SOON)",
      link: "",
      description: "Why the forgotten history of holistic admissions is still revelant today."
    },
    {},
    {}
  )} ${validate_component(Essay, "Essay").$$render(
    $$result,
    {
      title: "CS, Not Math (COMING SOON)",
      link: "",
      description: "The case for CS as a core subject."
    },
    {},
    {}
  )}</div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-tmtjdd_START -->${$$result.title = `<title>Kevin Kodama</title>`, ""}<!-- HEAD_svelte-tmtjdd_END -->`, ""} <body class="bg-blue-50 text-blue-900">${validate_component(Intro, "Intro").$$render($$result, {}, {}, {})} ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})} ${validate_component(Essays, "Essays").$$render($$result, {}, {}, {})} <p class="m-3" data-svelte-h="svelte-yksaaf">This website was built with <a href="https://kit.svelte.dev/">SvelteKit</a>, <a href="https://tailwindcss.com/">Tailwind CSS</a>, and <a href="https://www.typescriptlang.org/">TypeScript</a>.</p></body>`;
});
export {
  Page as default
};

import { c as create_ssr_component, e as escape, d as each, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const ContactCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="propic" class="flex flex-col items-center justify-center" data-svelte-h="svelte-bsrf34"><h1 class="text-3xl mb-3">Kevin Kodama</h1> <img alt="Kevin Kodama" src="/img/profile.jpeg" class="w-24 h-24 rounded-full shadow border-2 border-blue-300 mb-4"> <div id="contact-icons" class="space-x-4 text-2xl"><a href="mailto:kevin.kodama@protonmail.com" class="text-blue-500 hover:text-blue-700"><i class="fa fa-envelope"></i></a> <a href="https://linkedin.com/in/kevin-kodama" target="_blank" class="text-blue-500 hover:text-blue-700"><i class="fa fa-linkedin"></i></a> <a href="https://github.com/stackofstarfruit" target="_blank" class="text-blue-500 hover:text-blue-700"><i class="fa fa-github"></i></a></div></div>`;
});
const Bio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col justify-center" data-svelte-h="svelte-fnrfnc"><p class="text-base md:text-lg font-medium text-gray-700">Hi! I am Kevin Kodama, a software engineer and writer seeking new ways to explain big ideas. My latest project is a sci-fi &amp; fantasy magazine called <a class="text-blue-600" href="https://linktr.ee/synthesized.sunsets">Synthesized Sunsets</a>, which explores speculative topics through a romantic lens. Feel free to reach out and send me an email at kevin.kodama (at) protonmail.com!</p></div>`;
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
  return `<div class="w-full md:w-1/2 p-2"><div class="flex flex-col justify-center items-center"><h3 class="mt-6 text-lg font-semibold">${escape(title)}</h3> ${icons.length ? `<div id="resume-icons" class="flex space-x-4 text-3xl mb-4">${each(icons, (icon) => {
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
      title: "Magazine",
      icons: [
        {
          href: "https://synthesizedsunsets.substack.com/",
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
  return `<h2 id="projects" class="text-3xl px-4 mt-10 text-center" data-svelte-h="svelte-1p9zkvf">Projects</h2> <section id="gallery" class="px-4 py-8 space-y-4"><a href="/popheads-chart">${validate_component(ProjectCard, "ProjectCard").$$render(
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
  let { description } = $$props;
  let { link } = $$props;
  let { image } = $$props;
  let { tools = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.tools === void 0 && $$bindings.tools && tools !== void 0)
    $$bindings.tools(tools);
  return `<div class="relative border border-blue-200 ml-8 mr-8 mb-1 p-4 rounded transform transition-all duration-200 hover:z-51 hover:scale-105 hover:shadow-lg flex flex-col md:flex-row justify-between items-center"><div class="w-full md:w-2/3"><h2 class="text-lg mb-2">${escape(title)}</h2> <p class="mb-2">&quot;${escape(description)}&quot;</p> <p data-svelte-h="svelte-1k7kqub">Click the image on the right to continue reading!</p> <div class="flex flex-wrap" id="tools">${each(tools, (tool) => {
    return `<a${add_attribute("href", tool.link, 0)}${add_attribute("class", `px-2 py-1 mr-3 rounded hover:text-white ${tool.color}`, 0)}>${escape(tool.name)}</a>`;
  })}</div></div> <div class="relative w-full md:w-1/3 mt-4 md:mt-0 md:ml-4"><a${add_attribute("href", link, 0)}><img${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} class="rounded-lg w-full h-auto transition-opacity duration-200 hover:opacity-50"></a></div></div>`;
});
const Essays = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="essays" class="text-3xl px-4 mt-10 text-center" data-svelte-h="svelte-1v4hiez">Essays</h2> <section class="px-4 py-8 space-y-4">${validate_component(Essay, "Essay").$$render(
    $$result,
    {
      title: "Will Science Fiction Ever Be Literary?",
      description: "In the world of literature, genres constantly rise, fall, divide, and recombine. But two broad categories of books always maintain their relevance: genre fiction and literary fiction. These broad categories are determined not by aesthetics, but by goals. Genre fiction is by far the more popular of the two, and its primary goal is to entertain. While the “genre fiction” label technically applies to any book that fits into one of those shelves at the bookstore (e.g. “Mystery”, “Fantasy”), in practice the label implies that a book is escapist. Its goal is to turn the reader’s attention away from the world by giving their mind somewhere else to live for a while.",
      link: "https://synthesizedsunsets.substack.com/p/will-science-fiction-ever-be-literary",
      image: "/img/literary.jpg",
      tools: [
        {
          name: "science-fiction",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "literary-fiction",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "genre",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        }
      ]
    },
    {},
    {}
  )} ${validate_component(Essay, "Essay").$$render(
    $$result,
    {
      title: "In Caroline M. Yoachim's Fragile Worlds, Acts of Care Take Center Stage",
      description: "Caroline M. Yoachim (yo-kum) is one of my favorite Seattle speculative fiction writers. Because of the limits of the form, most of my favorite short stories are equal parts narrative and thought experiment: evocative vehicles for an interesting idea instead of full-on narratives. But Yoachim is the rare author who can consistently pack epic tales into a small space, making 20 pages feel like an entire novel.",
      link: "https://synthesizedsunsets.substack.com/p/in-caroline-m-yoachims-fragile-worlds",
      image: "/img/yoachim.webp",
      tools: [
        {
          name: "caroline-m-yoachim",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "fantasy",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "motherhood",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        }
      ]
    },
    {},
    {}
  )} ${validate_component(Essay, "Essay").$$render(
    $$result,
    {
      title: "'Grand Nostalgia' and the Temporal Injustice of 'Castle in the Sky'",
      description: "When I first watched the Studio Ghibli film Castle in the Sky, I really didn’t like it. It took me years to find the words for why. Castle in the Sky is an animated film about the ancient floating city of Laputa. Laputa is said to be a utopia with advanced technology and valuable treasure, making it a prize for explorers of all stripes. The film’s protagonists have a jewel that can locate the city, so they are constantly evading ambitious raiders who hope to gain the power of Laputa for themselves. But when the main characters finally arrive at Laputa, it turns out to be an abandoned wreck. Powerful yet dormant technology is the only lasting legacy of their once-mighty civilization.",
      link: "https://synthesizedsunsets.substack.com/p/grand-nostalgia-and-the-temporal",
      image: "/img/castle.webp",
      tools: [
        {
          name: "nostalgia",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "civilization",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "miyazaki",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        }
      ]
    },
    {},
    {}
  )} ${validate_component(Essay, "Essay").$$render(
    $$result,
    {
      title: "Beaches of Rebirth and Memory",
      description: "When I think about beaches, I instinctively think of a beach day: unstable umbrellas, sprawled-out towels, and kids shouting amid the waves. Beach days have a relaxing commotion to them— there’s enough peace for them to be soothing, but also enough activity to drown out bothersome thoughts. But beaches take on an entirely new character in the absence of crowds. When I’m on the beach alone, the vast planes of sand and water have a way of encouraging deep thought. Eventually I start to feel this pull, not unlike the “call of the void” that comes when standing on the edge of a cliff. It’s like the depths are calling out to me, singing a siren song.",
      link: "https://synthesizedsunsets.substack.com/p/beaches-of-rebirth-and-memory",
      image: "/img/beaches.jpg",
      tools: [
        {
          name: "memory",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "dreams",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "pokemon",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        }
      ]
    },
    {},
    {}
  )} ${validate_component(Essay, "Essay").$$render(
    $$result,
    {
      title: "Ships Create the Rhythm of Adventure",
      description: "Adventure is a very general term, but I think of it as a narrative that comes from intentionally striving towards wonder. An epic journey may start out of necessity, but it does not become an adventure until someone embraces their inner adventurous desire. Good adventures need both stress and stability. The ideal adventure protagonist has a stable life: not stable in any specific sense, but just disappointingly consistent in some way. This is where that adventurous desire comes from! Stress is needed to light the fire of adventure, but without stability there is no fuel.",
      link: "https://synthesizedsunsets.substack.com/p/ships-create-the-rhythm-of-adventure",
      image: "/img/adventure.webp",
      tools: [
        {
          name: "adventure",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "star-wars",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "voyages",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        }
      ]
    },
    {},
    {}
  )} ${validate_component(Essay, "Essay").$$render(
    $$result,
    {
      title: "Dissonance and Danger in 'The Princess and the Clock'",
      link: "https://synthesizedsunsets.substack.com/p/dissonance-and-danger-in-the-princess",
      description: "One of the best songs to come out of the pandemic years was 'The Princess and the Clock' by Kero Kero Bonito. It has the sound of a video game, the themes of early quarantine, and the lyrics of an ancient myth. This union of future, present, and past became the common thread for KKB’s compilation album Civilization. According to Kero Kero Bonito, the track 'is the tale of a young explorer who is kidnapped while sailing the world, imprisoned at the top of a tower and worshipped as royalty by an isolated society. Trapped in her chamber, she spends years dreaming of escaping, until one day she disappears.'.",
      image: "/img/princess.webp",
      tools: [
        {
          name: "pop-music",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "adventure",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "captivity",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        }
      ]
    },
    {},
    {}
  )} ${validate_component(Essay, "Essay").$$render(
    $$result,
    {
      title: "'The Wandering Inn' Allows Us to Properly Fear the Sea",
      description: "The Wandering Inn is one of the greatest stories ever told. It is a fantasy web novel that updates weekly— think The Pickwick Papers for the 21st century. Since its inception in 2016, The Wandering Inn has amassed nearly 8,000 Patreon subscribers and over 13 million words. The Wandering Inn is part of the isekai genre, which focuses on 'a displaced person or people who are transported to and have to survive in another world, such as a fantasy world, game world, or parallel universe without the possibility of returning to their original world'.",
      link: "https://synthesizedsunsets.substack.com/p/the-wandering-inn-allows-us-to-properly",
      image: "/img/inn.webp",
      tools: [
        {
          name: "web-fiction",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "wandering-inn",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "genre",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        }
      ]
    },
    {},
    {}
  )} ${validate_component(Essay, "Essay").$$render(
    $$result,
    {
      title: "Was 'Radical Optimism' a Flop?",
      link: "https://synthpop.substack.com/p/was-radical-optimism-a-flop",
      description: "Some artists have diehard fanbases that will always come out for them. This is true of certain Main Pop Girls like Taylor Swift, but it is also true of less popular artists who are thus able to punch above their weight. Even though Ed Sheeran is a fair bit more popular than Nicki Minaj, he still has more flop potential due to his more casual fanbase. You could say Sheeran’s fanbase is more fragile. Like Sheeran, Perry had a more fragile fanbase. And so after Witness, her house of cards came tumbling down. I’m not saying anything crazy here; artists with more dedicated fanbases are obviously going to have more success. But I’d like to raise a deeper question: why do some artists have a more dedicated fanbase? And what can artists do to cultivate that image?",
      image: "/img/snowball.webp",
      tools: [
        {
          name: "pop-music",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "fandom",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "sociology",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        }
      ]
    },
    {},
    {}
  )} ${validate_component(Essay, "Essay").$$render(
    $$result,
    {
      title: "On Spotify, *YOU* Are the Genre",
      link: "https://synthpop.substack.com/p/on-spotify-you-are-the-genre",
      description: "If you’ve paid close attention to Spotify genres, you might have noticed a genre called 'escape room'. There are other unfamiliar genres, like 'metropopolis', and 'chamber pop', but those at least call to mind a specific vibe. “Escape room' sounds completely nonsensical. This has spawned a number of think pieces about what this term means. These articles make valid points, but a true understanding of escape room requires us to throw out the conventional understanding of genre. Ultimately, the reason for this confusion is a very recent shift in the way genre is defined.",
      image: "/img/genre.webp",
      tools: [
        {
          name: "pop-music",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "sociology",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        },
        {
          name: "genre",
          link: "",
          color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
        }
      ]
    },
    {},
    {}
  )}</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-tmtjdd_START -->${$$result.title = `<title>Kevin Kodama</title>`, ""}<!-- HEAD_svelte-tmtjdd_END -->`, ""} <body class="bg-blue-50 text-blue-900">${validate_component(Intro, "Intro").$$render($$result, {}, {}, {})} ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})} ${validate_component(Essays, "Essays").$$render($$result, {}, {}, {})} <p class="m-3" data-svelte-h="svelte-yksaaf">This website was built with <a href="https://kit.svelte.dev/">SvelteKit</a>, <a href="https://tailwindcss.com/">Tailwind CSS</a>, and <a href="https://www.typescriptlang.org/">TypeScript</a>.</p></body>`;
});
export {
  Page as default
};

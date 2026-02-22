import { $ as fallback, e as escape_html, a0 as ensure_array_like, a1 as attr, a2 as bind_props, a3 as attr_class, h as head } from "../../chunks/index.js";
import "clsx";
function ContactCard($$renderer) {
  $$renderer.push(`<div id="propic" class="flex flex-col items-center justify-center"><h1 class="text-3xl mb-3">Kevin Kodama</h1> <div class="w-72 aspect-[3/2] rounded-2xl overflow-hidden shadow-lg border border-blue-300 mb-4 bg-blue-100"><img alt="Kevin Kodama" src="/img/profile.jpeg" class="w-full h-full object-cover object-center" loading="eager" decoding="async"/></div> <div id="contact-icons" class="space-x-4 text-2xl"><a href="mailto:hello@kevinkodama.com" class="text-blue-500 hover:text-blue-700" aria-label="Email Kevin" title="Email"><i class="fa fa-envelope" aria-hidden="true"></i></a> <a href="https://linkedin.com/in/kevin-kodama" target="_blank" rel="noreferrer" class="text-blue-500 hover:text-blue-700" aria-label="Kevin on LinkedIn" title="LinkedIn"><i class="fa fa-linkedin" aria-hidden="true"></i></a> <a href="https://github.com/stackofstarfruit" target="_blank" rel="noreferrer" class="text-blue-500 hover:text-blue-700" aria-label="Kevin on GitHub" title="GitHub"><i class="fa fa-github" aria-hidden="true"></i></a></div></div>`);
}
function Bio($$renderer) {
  $$renderer.push(`<div class="flex flex-col justify-center"><p class="text-base md:text-lg font-medium text-gray-700">Hi! I am Kevin Kodama, a software engineer and writer seeking new ways to explain big ideas. I love to write about web dev, pop music, and human connection! My latest project is a sci-fi &amp; fantasy magazine called <a class="text-blue-600" href="https://linktr.ee/synthesized.sunsets">Synthesized Sunsets</a>, which explores speculative topics through a romantic lens. Feel free to reach out— shoot me an email at <a class="text-blue-600" href="mailto:hello@kevinkodama.com">hello@kevinkodama.com!</a></p></div>`);
}
function ProfileDetail($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let title = $$props["title"];
    let contents = fallback($$props["contents"], "");
    let icons = fallback($$props["icons"], () => [], true);
    $$renderer2.push(`<div class="w-full md:w-1/2 p-2"><div class="flex flex-col justify-center items-center"><h3 class="mt-6 text-lg font-semibold">${escape_html(title)}</h3> `);
    if (icons.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div id="resume-icons" class="flex space-x-4 text-3xl mb-4"><!--[-->`);
      const each_array = ensure_array_like(icons);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let icon = each_array[$$index];
        $$renderer2.push(`<a${attr("href", icon.href)} target="_blank"><img class="mt-2 h-10 w-10"${attr("alt", title)}${attr("src", icon.path)}/></a>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <p class="text-gray-700">${escape_html(contents)}</p></div></div>`);
    bind_props($$props, { title, contents, icons });
  });
}
function ProfileDetails($$renderer) {
  $$renderer.push(`<div class="flex flex-wrap">`);
  ProfileDetail($$renderer, { title: "Current Role", contents: "SWE @Dell" });
  $$renderer.push(`<!----> `);
  ProfileDetail($$renderer, { title: "Location", contents: "Seattle, WA" });
  $$renderer.push(`<!----> `);
  ProfileDetail($$renderer, {
    title: "Magazine",
    icons: [
      {
        href: "https://synthesizedsunsets.substack.com/",
        path: "/icons/synthpop.svg"
      }
    ]
  });
  $$renderer.push(`<!----> `);
  ProfileDetail($$renderer, {
    title: "Resume",
    icons: [
      { href: "/files/resume.pdf", path: "/icons/pdf.svg" },
      { href: "/files/resume.docx", path: "/icons/doc.svg" }
    ]
  });
  $$renderer.push(`<!----></div>`);
}
function Intro($$renderer) {
  $$renderer.push(`<section id="intro" class="grid grid-cols-1 md:grid-cols-3 px-4 py-8 bg-blue-100 rounded-lg shadow-lg gap-4">`);
  ContactCard($$renderer);
  $$renderer.push(`<!----> `);
  Bio($$renderer);
  $$renderer.push(`<!----> `);
  ProfileDetails($$renderer);
  $$renderer.push(`<!----></section>`);
}
function ProjectCard($$renderer, $$props) {
  let detailsHref = $$props["detailsHref"];
  let title = $$props["title"];
  let description = $$props["description"];
  let imageLink = $$props["imageLink"];
  let projectLink = $$props["projectLink"];
  let repoLink = $$props["repoLink"];
  let makingOfLink = $$props["makingOfLink"];
  let tools = $$props["tools"];
  $$renderer.push(`<article class="relative rounded-xl border p-4 hover:shadow-md transition"><a${attr("href", detailsHref)}${attr("aria-label", `Open ${title}`)} class="absolute inset-0 z-0"></a> <div class="relative z-10 flex gap-4"><img${attr("src", imageLink)}${attr("alt", title)} class="w-40 h-24 object-cover rounded-lg"/> <div class="flex-1"><h3 class="text-xl font-semibold">${escape_html(title)}</h3> <p class="text-sm opacity-80 mt-1">${escape_html(description)}</p> <div class="mt-3 flex flex-wrap gap-2"><a class="text-sm px-3 py-1 rounded-full border hover:bg-gray-100"${attr("href", projectLink)} target="_blank" rel="noopener noreferrer">Live</a> <a class="text-sm px-3 py-1 rounded-full border hover:bg-gray-100"${attr("href", repoLink)} target="_blank" rel="noopener noreferrer">Repo</a> <a class="text-sm px-3 py-1 rounded-full border hover:bg-gray-100"${attr("href", makingOfLink)}>Making of</a></div> <div class="mt-3 flex flex-wrap gap-2"><!--[-->`);
  const each_array = ensure_array_like(tools);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tool = each_array[$$index];
    $$renderer.push(`<a${attr_class("text-xs px-2 py-1 rounded-full transition " + tool.color)}${attr("href", tool.link)} target="_blank" rel="noopener noreferrer">${escape_html(tool.name)}</a>`);
  }
  $$renderer.push(`<!--]--></div></div></div></article>`);
  bind_props($$props, {
    detailsHref,
    title,
    description,
    imageLink,
    projectLink,
    repoLink,
    makingOfLink,
    tools
  });
}
function Projects($$renderer) {
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
  $$renderer.push(`<h2 id="projects" class="text-3xl px-4 mt-10 text-center">Projects</h2> <section id="gallery" class="px-4 py-8 space-y-4">`);
  ProjectCard($$renderer, {
    detailsHref: "/popheads-chart",
    title: popheadsChart.title,
    description: popheadsChart.description,
    imageLink: popheadsChart.imageLink,
    projectLink: popheadsChart.projectLink,
    repoLink: popheadsChart.repoLink,
    makingOfLink: popheadsChart.makingOfLink,
    tools: popheadsChart.tools
  });
  $$renderer.push(`<!----> `);
  ProjectCard($$renderer, {
    detailsHref: "/quizbowl-website",
    title: quizbowlWebsite.title,
    description: quizbowlWebsite.description,
    imageLink: quizbowlWebsite.imageLink,
    projectLink: quizbowlWebsite.projectLink,
    repoLink: quizbowlWebsite.repoLink,
    makingOfLink: quizbowlWebsite.makingOfLink,
    tools: quizbowlWebsite.tools
  });
  $$renderer.push(`<!----> `);
  ProjectCard($$renderer, {
    detailsHref: "/wandering-inn",
    title: wanderingInn.title,
    description: wanderingInn.description,
    imageLink: wanderingInn.imageLink,
    projectLink: wanderingInn.projectLink,
    repoLink: wanderingInn.repoLink,
    makingOfLink: wanderingInn.makingOfLink,
    tools: wanderingInn.tools
  });
  $$renderer.push(`<!----></section>`);
}
function EssayCard($$renderer, $$props) {
  let title = $$props["title"];
  let description = $$props["description"];
  let link = $$props["link"];
  let image = $$props["image"];
  let tools = fallback($$props["tools"], () => [], true);
  $$renderer.push(`<div class="relative border border-blue-200 ml-8 mr-8 mb-1 p-4 rounded transform transition-all duration-200 hover:z-51 hover:scale-105 hover:shadow-lg flex flex-col md:flex-row justify-between items-center cursor-pointer" role="link" tabindex="0"${attr("aria-label", `Read: ${title}`)}><div class="w-full md:w-2/3"><h2 class="text-lg mb-2">${escape_html(title)}</h2> <p class="mb-2">"${escape_html(description)}"</p> <p class="mb-2">Click to continue reading!</p> <div class="flex flex-wrap" id="tools"><!--[-->`);
  const each_array = ensure_array_like(tools);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tool = each_array[$$index];
    $$renderer.push(`<a${attr("href", tool.link)}${attr_class(`px-2 py-1 mr-3 rounded hover:text-white ${tool.color}`)}>${escape_html(tool.name)}</a>`);
  }
  $$renderer.push(`<!--]--></div></div> <div class="relative w-full md:w-1/3 mt-4 md:mt-0 md:ml-4"><a${attr("href", link)}><img${attr("src", image)}${attr("alt", title)} class="rounded-lg w-full h-auto transition-opacity duration-200 hover:opacity-50"/></a></div></div>`);
  bind_props($$props, { title, description, link, image, tools });
}
function SynthesizedSunsets($$renderer) {
  $$renderer.push(`<h2 id="synthesized-sunsets" class="text-3xl px-4 mt-10 text-center">Synthesized Sunsets</h2> <section class="px-4 py-8 space-y-4">`);
  EssayCard($$renderer, {
    title: "‘17776’ by Jon Bois and the Slow Cancellation of the Future",
    description: "On a hot summer day in 2017, I was killing time at the airport when I stumbled across a mysterious Facebook link simply titled '17776'. Before long, I was downloading as many webpages from the site as I could. Because '17776' had already become the most exciting story I had ever read. I did not want to board that plane.",
    link: "https://synthesizedsunsets.substack.com/p/17776-by-jon-bois-and-the-slow-cancellation",
    image: "/img/17776.webp",
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
  });
  $$renderer.push(`<!----> `);
  EssayCard($$renderer, {
    title: "How 'Chinese Goodreads' Illuminates Fading Sci-Fi Classics",
    description: "Lately I have been reflecting on what happens when a culture imports a foreign work of art. In most cases, the goal of both translator and curator is for the work to strike a similar chord as it did in its original culture. Sometimes it does indeed have the same type of impact that it did in its home country; other times the import will totally flop. But in rare cases, the work will do better in a foreign context than it did originally.",
    link: "https://synthesizedsunsets.substack.com/p/how-chinese-goodreads-illuminates",
    image: "/img/china.webp",
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
  });
  $$renderer.push(`<!----> `);
  EssayCard($$renderer, {
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
  });
  $$renderer.push(`<!----> `);
  EssayCard($$renderer, {
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
  });
  $$renderer.push(`<!----> `);
  EssayCard($$renderer, {
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
  });
  $$renderer.push(`<!----> `);
  EssayCard($$renderer, {
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
  });
  $$renderer.push(`<!----> `);
  EssayCard($$renderer, {
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
  });
  $$renderer.push(`<!----> `);
  EssayCard($$renderer, {
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
  });
  $$renderer.push(`<!----> `);
  EssayCard($$renderer, {
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
  });
  $$renderer.push(`<!----></section>`);
}
function OtherEssays($$renderer) {
  $$renderer.push(`<h2 id="other-essays" class="text-3xl px-4 mt-10 text-center">Synthpop</h2> <section class="px-4 py-8 space-y-4">`);
  EssayCard($$renderer, {
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
  });
  $$renderer.push(`<!----> `);
  EssayCard($$renderer, {
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
  });
  $$renderer.push(`<!----> `);
  EssayCard($$renderer, {
    title: "Great Eras: The Rise, Fall, and Rebirth of Future Nostalgia",
    link: "https://synthpop.substack.com/p/great-eras-the-rise-fall-and-rebirth",
    description: "It’s been three years since the release of Future Nostalgia, the album that put Dua Lipa on top of the pop world. Future Nostalgia was the soundtrack of quarantine for many, and it was widely considered one of the best albums of the new decade. Despite Future Nostalgia’s staying power, it didn’t do opening numbers like you might expect. In fact, the album netted zero number ones (yes, even the 2021 year-end chart topper “Levitating”). And the album itself didn’t do great numbers either — it peaked at #3 in the US and didn’t even debut at #1 in the UK.",
    image: "/img/nostalgia.webp",
    tools: [
      {
        name: "dua-lipa",
        link: "",
        color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
      },
      {
        name: "pop-music",
        link: "",
        color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
      },
      {
        name: "fandom",
        link: "",
        color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
      }
    ]
  });
  $$renderer.push(`<!----></section>`);
}
function _page($$renderer) {
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Kevin Kodama</title>`);
    });
  });
  $$renderer.push(`<div class="bg-blue-50 text-blue-900 scroll-smooth min-h-screen">`);
  Intro($$renderer);
  $$renderer.push(`<!----> `);
  Projects($$renderer);
  $$renderer.push(`<!----> `);
  SynthesizedSunsets($$renderer);
  $$renderer.push(`<!----> `);
  OtherEssays($$renderer);
  $$renderer.push(`<!----> <div id="end"><p class="m-3">This website was built with <a href="https://kit.svelte.dev/">SvelteKit</a>, <a href="https://tailwindcss.com/">Tailwind CSS</a>,
      and <a href="https://www.typescriptlang.org/">TypeScript</a>.</p></div></div>`);
}
export {
  _page as default
};

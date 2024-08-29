import "./speakers-styles.scss";

const speakersData = [
  {
    id: "Mark-Thompson",
    name: "Mark Thompson",
    title: "Developer Advocate <br></br>Angular Core Team, Google",
    bio: "Mark loves to teach and code.<br></br>His love for both of these disciplines has led to becoming an award winning university instructor and software engineer. He comes with a passion for creating meaningful learning experiences. With over a decade of developing solutions across the tech stack, Mark likes to use that experience to break down fear of technology and make challenging technical tipics more accessible. Lately, Mark has been spending time as a Developer Advocate at Google.",
    imageUrl: "/assets/speakers-highlight/mark.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/marktechson/",
      x: "https://x.com/marktechson?lang=en",
      github: "https://github.com/MarkTechson",
    },
    talkTitle: "“Angular Team Q&A Session”",
    talkDescription: "",
  },

  {
    id: "Eliran-Eliassy",
    name: "Eliran Eliassy",
    title: "Founder & CEO @ E-square.io | Google Developer Expert (GDE)",
    bio: "I'm a Google Developer Expert (GDE) for Angular. Experienced FE developer, specialized in high performance applications. Founder & CEO @ e-square.io. Angular enthusiast, Public speaker, Community leader. Organiser @ Angular-TLV.",
    imageUrl: "/assets/speakers-highlight/eliran.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/eliran-els/",
      x: "https://x.com/eliraneliassy",
      github: "https://github.com/eliraneliassy",
    },
    talkTitle: "“Angular Renaissance”",
    talkDescription: "TBA",
  },
  {
    id: "Rainer-Hahnekamp",
    name: "Rainer Hahnekamp",
    title:
      "Trainer & Consultant @ Angular Architects | Google Developer Expert (GDE)",
    bio: "Rainer is a passionate software developer. As trainer and consultant at Angular Architects, he is responsible for the Spring workshop, as well other Angular-related trainings. You can find him giving talks at various conferences such as Devoxx BE, JAX, and the WeAreDevelopers World Congress.",
    imageUrl: "/assets/speakers-highlight/rainer.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/rainerhahnekamp",
      x: "https://twitter.com/rainerhahnekamp",
      github: "https://github.com/rainerhahnekamp",
    },
    talkTitle: "“Towards Modern Change Detection”",
    talkDescription:
      "At the core of Angular lies a fascinating process - how it updates the DOM. This process, known as change detection, is pivotal for the framework's performance and success. I am going to unravel the intricacies of change detection, zone.js, dirty marking, OnPush, and Signals. Additionally, I'll explore the groundbreaking zoneless mode introduced in Angular 18, providing insights and live coding demonstrations to empower you in customizing these mechanisms to suit your requirements.",
  },
  {
    id: "Matan-Shushan",
    name: "Matan Shushan",
    title:
      "Principal Engineer @ Palo Alto Networks | Full Stack Architect | Angular Enthusiast | Dog Lover",
    bio: "A dedicated web developer serving as a Principal Engineer at Palo Alto Networks and Full Stack Architect. Passionate about JavaScript, Angular, React, and Node.js. Developed and architected projects in decentralized ad tech. Active in the tech community and loves sharing knowledge. Pizza-making enthusiast and proud dog dad to two furry friends. Connect with Matan for tech insights and pizza recipes!",
    imageUrl: "/assets/speakers-highlight/matan.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/matan-shushan/",
      x: "https://twitter.com/matan_bs",
      github: "https://github.com/MatanShushan",
    },
    talkTitle: "“Angular Signals: The End of State Management Libraries?”",
    talkDescription:
      "Dive into a fiery debate as two seasoned developers tackle the necessity of state management. Each will advocate for and against using state management libraries through three practical use cases. Witness their live demonstrations, hear their compelling arguments, and watch as they challenge each other's approaches. Which strategy will prove more efficient and simplify development? Join us for a battle over the best way to handle state - where only one philosophy can prevail!",
  },
  {
    id: "Omer-Gronich",
    name: "Omer Gronich",
    title: "Senior Front End Developer @ Palo Alto",
    bio: "A seasoned frontend developer crafting exceptional user experiences at Palo Alto Networks. With a deep-rooted passion for Angular, TypeScript, RxJS, and NX, he has dedicated himself to pushing the boundaries of reactive programming and declarative code. As a contributor to the MobX official adapter for Angular, he has helped foster a thriving Angular ecosystem. When he's not immersed in code, he's likely wrangling his half-bear, half-shepherd companion, strumming his guitar, or perfecting the art of brewing high-end coffee.",
    imageUrl: "/assets/speakers-highlight/omer.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/omer-gronich-6617a7202/",
      x: "https://x.com/OmerGronich",
      github: "https://github.com/OmerGronich",
    },
    talkTitle: "“Angular Signals: The End of State Management Libraries?”",
    talkDescription:
      "Dive into a fiery debate as two seasoned developers tackle the necessity of state management. Each will advocate for and against using state management libraries through three practical use cases. Witness their live demonstrations, hear their compelling arguments, and watch as they challenge each other's approaches. Which strategy will prove more efficient and simplify development? Join us for a battle over the best way to handle state - where only one philosophy can prevail!",
  },
  {
    id: "Tally-Barak",
    name: "Tally Barak",
    title: "A Passion for Code that Spans Decades | Developer @ Yoobic",
    bio: "Tally has over 30 years of software development, product management, and consulting experience. Today Tally works for Yoobic as an architect responsible for all the Frontend tooling, testing, and DevOps processes. Tally loves Javascript and its ecosystem and happily shares this knowledge with other developers. Playwright Ambassador.",
    imageUrl: "/assets/speakers-highlight/tally.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/tallybarak/?originalSubdomain=il",
      x: "https://x.com/tallybarak",
      github: "https://tallybarak.com",
    },
    talkTitle: "“The Comedy of Errors - Advanced Playwrighting”",
    talkDescription:
      "Jest? Vite? Playwright? Cypress? Storybook? JSDOM? Tired of drowning in UI testing tools and buzzwords? Join us for an eye-opening talk that cuts through the noise! This talk takes a bird's-eye view of UI testing, soaring above the confusion of tools and Jargon. We'll explore six different testing approaches from this higher perspective, and dive into their pros, cons, and costs. This helps you focus on effective strategies rather than getting lost in technical details. Walk away with the knowledge to pick the right tools and techniques that truly matter. Your journey to testing zen awaits!",
  },
  {
    id: "Ofir-Sayag",
    name: "Ofir Sayag",
    title: "FE Guild Lead @ Hibob",
    bio: "An innovative technology leader with over 7+ years of dedicated expertise in frontend software development, focusing on Angular & Flutter. I am working in Hibob for the last 5 years, started as frontend developer and today managing the frontend platform team and FE guild.",
    imageUrl: "/assets/speakers-highlight/ofir.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ofir-sayag-37a723aa",
      x: "",
      github: "https://github.com/ofirsg",
    },
    talkTitle: "“Empower angular schematics with AI”",
    talkDescription:
      "<li>1. How to use AI to quickly generate tools Showing best practices on how we can use the AI to automatically and quickly create rich tools. Here I will show how I created a tool that anlyze the code for each team in the company I worked, and how I did it in 1 day using chat gpt, including generating the code for the tool, add full documentation on how to use it, and send a message to each team with the report hightlights.</li><li>2. Show how to use the schematics to analyze code and enhance our prompts and make them more strong. Here I will give an example of how we can use schematics to create better prompts for chatgpt to automatically create unit tests. From improving the mocks by putting the context and type from the code inside the prompt, to generate all our unit tests.</li>",
  },
  {
    id: "Younes-Jaaidi",
    name: "Younes Jaaidi",
    title:
      "Software Cook, Coach & Teacher @ Marmicode | Google Developer Expert (GDE)",
    bio: "Younes is a Software Cook born in eXtreme Programming, which made him a passionate advocate of Collective Ownership, TDD, and snacks in the office. He trains and coaches teams like yours to cook better apps. He's also an NX champion, an Angular GDE, and a mediocre sailor. His favorite command is `sleep 300; git reset --hard; git clean -df`",
    imageUrl: "/assets/speakers-highlight/younes.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/yjaaidi/",
      x: "https://twitter.com/yjaaidi",
      github: "https://marmicode.io",
    },
    talkTitle: "“Fake it till you Mock it”",
    talkDescription:
      'No matter what tests you implement, sooner or later, you will eventually need "Test Doubles". But what is a "Test Double"? A jargon for saying "Mock" or more than that? Although attractive, especially in the JS ecosystem, some "Test Doubles" can make our tests more expensive to maintain while harming their readability. They can also over-specify our tests and couple them to implementation details... even worse, they can end up discouraging us from implementing new tests, or even pushing us to get rid of some of them. Oops. I don\'t have much room to tell you the rest here, but I\'ll see you at Angular TLV to tell you how "Fakes" and their faithful companions "Object Mothers" and "Gloves" end up becoming the pillars of your testing strategy.',
  },
  {
    id: "Omri-Bar-Zik",
    name: "Omri Bar-Zik",
    title: "FrontEnd Infrastructure Developer @ Outbrain",
    bio: "A FrontEnd infrastructure developer at outbrain, an open-source contributor, and a tech lecturer.",
    imageUrl: "/assets/speakers-highlight/omri.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/omri-bar-zik/",
      x: "https://x.com/omri_barzik?lang=en",
      github: "https://github.com/omribarzik",
    },
    talkTitle: "“NG WHAT? Make angular CLI work for you!”",
    talkDescription:
      "When we write a component library for internal company use or as open source, we want to minimize any breaking changes to prevent hurting our users' productivity, but sometimes it's inevitable. In these cases, we can create detailed documentation explaining what and where to change, but we can take it a step further. Angular has a build-it mechanism that allows us to automatically update the user's code when they update our library. In this session, we will learn what “ng update” does and what tools we can use to implement this feature for our library with ease.",
  },
  {
    id: "Idan-Sharvit",
    name: "Idan Sharvit",
    title: "Frontend developer @ E-square.io",
    bio: "A frontend developer specializing in the latest versions of Angular. With a passion for staying updated on cutting-edge technologies, loves diving deep into documentation and sharing his knowledge by teaching others how to code.",
    imageUrl: "/assets/speakers-highlight/idan.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/idan-sharvit/",
      x: "",
      github: "",
    },
    talkTitle: "“SSR & Hydration”",
    talkDescription:
      "Sometimes we require to boost SEO performance or enhance user experience by reducing page load times, this session will briefly cover SSR and explore the world of hydration in depth.",
  },
  {
    id: "Michael-Hladky",
    name: "Michael Hladky",
    title: "Founder & CEO @ Push-based.io | Google Developer Expert (GDE)",
    bio: "Michael Hladky is a Google Developer Expert (GDE), Microsoft MVP, Nx champion, trainer, and consultant with a focus on Angular and RxJS. For years he has been helping companies and developers to set up scalable architectures and performant processes enabling teams to keep up with state-of-the-art development. A vibrant member of the tech community, he organizes multiple community events and workshops each year to give back.",
    imageUrl: "/assets/speakers-highlight/michael.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/michael-hladky-519340148",
      x: "https://twitter.com/Michael_Hladky",
      github: "https://push-based.io",
    },
    talkTitle: "TBA",
    talkDescription: "TBA",
  },
  {
    id: "Shai-Reznik",
    name: "Shai Reznik",
    title: "Team lead @ Qwix framework | Google Developer Expert (GDE)",
    bio: "Shai Reznik is a Google Developer Expert (GDE), Microsoft MVP, Nx champion, trainer, and consultant with a focus on Angular and RxJS. For years he has been helping companies and developers to set up scalable architectures and performant processes enabling teams to keep up with state-of-the-art development. A vibrant member of the tech community, he organizes multiple community events and workshops each year to give back.",
    imageUrl: "/assets/speakers-highlight/shai.png",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/shaireznik/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=il",
      x: "https://x.com/shai_reznik?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      github: "https://github.com/shairez",
    },
    talkTitle: "“Panel Discussion and Q&A”",
    talkDescription: "",
  },
  {
    id: "Vojtech-Mašek",
    name: "Vojtech Mašek",
    title: "CTO @Flowup",
    bio: "",
    imageUrl: "/assets/speakers-highlight/vojtech.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/vojtechmasek/",
      x: "https://x.com/FlowUp_Tech",
      github: "https://github.com/flowup",
    },
    talkTitle: "“Can imports hurt your build speed & size?”",
    talkDescription:
      "Organizing code into files is crucial. Once in files, you need to import. More files? Libs are becoming useful, but do you know what different export styles do to the bundle size? How do they affect performance? We are about to find out. <br><br>Topics: import & export, ESM, CJS, barrel files, bundle-size, Nx libs Talks wraps up experience of bundle size optimization with file import structure organization and Nx libraries use-cases from import boundaries, avoiding cyclic dependencies to impact different export strategies on your bundles.",
  },
  {
    id: "Ran-Rosenmann",
    name: "Ran Rosenmann",
    title: "Frontend Tech Lead @ Atera",
    bio: "Ran Rosenmann - is a passionate Frontend Tech Lead at Atera, with a deep-rooted love for programming that began at the age of 12 using GWBASIC under DOS. A dedicated frontend enthusiast since the early days of jQuery, they have mastered Angular, evolving from AngularJS to the latest version, making it their go-to framework for web development. With a keen interest in the synergy between nature and science, they enjoy exploring nature-inspired algorithms. Outside of work, they are a devoted spouse and parent, with a love for music and the great outdoors.",
    imageUrl: "/assets/speakers-highlight/ran.png",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/ran-rosenmann-a2507a34/?originalSubdomain=il",
      x: "",
      github: "https://github.com/novice3030",
    },
    talkTitle: "“Practical usage of defferable views”",
    talkDescription:
      "Join us for an in-depth exploration of Angular's Deferable Views, the latest groundbreaking innovation from the Angular team, second only to Signals. In this lecture, Ran Rosenmann, a seasoned Angular expert and Frontend Tech Lead at Atera, will dive into the mechanics of Deferable Views, demonstrating when and how to leverage this powerful feature for optimized UI rendering. Through detailed explanations and real-world examples, attendees will gain a comprehensive understanding of how Deferable Views can transform their web applications, making them more efficient and responsive. Whether you're an Angular novice or a seasoned developer, this session will provide valuable insights into one of Angular's most exciting new features.",
  },
];

function renderSpeakerDetails(speakerId) {
  // Find the speaker object in the data array
  const speaker = speakersData.find((speaker) => speaker.id === speakerId);

  if (speaker) {
    // Create the speaker details HTML with conditional rendering
    const speakerDetailsHTML = `
      <div id="${speaker.id}" class="speaker-page">
        <div class="container">
          <div class="left-side">
            <img src="${speaker.imageUrl}" alt="${speaker.name}" />
            <div class="social-media-links">
              ${
                speaker.socialLinks.linkedin
                  ? `<a href="${speaker.socialLinks.linkedin}" target="_blank"><img src="/assets/social-media/linkedin.png" alt="LinkedIn" /></a>`
                  : ""
              }
              ${
                speaker.socialLinks.x
                  ? `<a href="${speaker.socialLinks.x}" target="_blank"><img src="/assets/social-media/x.png" alt="X" /></a>`
                  : ""
              }
              ${
                speaker.socialLinks.github
                  ? `<a href="${speaker.socialLinks.github}" target="_blank"><img src="/assets/social-media/github.png" alt="GitHub" /></a>`
                  : ""
              }
            </div>
          </div>
          <div class="right-side">
            <section class="upper-section">
              <div class="full-name">
                <img src="/assets/microphone.png" alt="Microphone" />
                <h1>${speaker.name}</h1>
              </div>
              ${
                speaker.title
                  ? `<h2 class="title">${speaker.title}${
                      speaker.company ? ` @ ${speaker.company}` : ""
                    }</h2>`
                  : ""
              }
              <p class="information">${speaker.bio}</p>
            </section>
            <section class="lower-section">
              <h2 class="subject-title">${speaker.talkTitle}</h2>
              <p class="description">${speaker.talkDescription}</p>
            </section>
          </div>
        </div>
      </div>
    `;

    // Get the container where the speaker details should be rendered
    const container = document.querySelector(".speakers-container");

    // Clear the current speaker details and insert the new one
    container.innerHTML = speakerDetailsHTML;
  }
}

// Initial page load: Check if there's a speaker ID in the URL and load it
document.addEventListener("DOMContentLoaded", () => {
  const url = new URL(window.location.href);
  const pathSegments = url.pathname.split("/");

  if (pathSegments.length > 2 && pathSegments[1] === "speakers") {
    const speakerId = decodeURIComponent(pathSegments[2]);
    renderSpeakerDetails(speakerId);

    // Add initial state to history stack
    history.replaceState(
      { speakerId: speakerId },
      "",
      `/speakers/${speakerId}`
    );
  }
});

function loadSpeakerDetails(event) {
  // Get the speaker ID from the clicked element's data attribute
  const speakerId = event.currentTarget.getAttribute("data-speaker");

  // Update the URL and push the state to the history stack
  history.pushState({ speakerId }, "", `/speakers/${speakerId}`);

  // Render the speaker details
  renderSpeakerDetails(speakerId);

  // Smooth scroll to the top of the page
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

// Add event listeners to each speaker element in the grid
document.querySelectorAll(".speaker").forEach((speaker) => {
  speaker.addEventListener("click", loadSpeakerDetails);
});

// Handle the popstate event to render the correct speaker details when navigating back or forward
window.addEventListener("popstate", (event) => {
  const speakerId = event.state ? event.state.speakerId : null;

  if (speakerId) {
    renderSpeakerDetails(speakerId);
  }
});

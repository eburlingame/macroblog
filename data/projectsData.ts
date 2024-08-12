interface Project {
  title: string
  description: string
  imgSrc?: string
  demoURL?: string
  repoURL?: string
}

const projectsData: Project[] = [
  {
    title: 'FlightDocs.io',
    description: `An open-source repository of aviation and ground-school study materials. 
    Grown out of my own internal study guides, I'm hoping to make this a community-driven
    reference site for pilots.`,
    imgSrc: '/static/images/projects/flightdocs.png',
    demoURL: 'https://flightdocs.io/docs',
    repoURL: 'https://github.com/eburlingame/flightdocs',
  },
  {
    title: 'lnav.io',
    description: `A work-in-progress aviation map and flight planning tool, built using React, 
    Maplibre, and Rust. Currently shows U.S. airports, airspace, and NAVAIDs, along with detailed information
    for each. METAR and TAF information is currently under development.`,
    imgSrc: '/static/images/projects/lnav.png',
    demoURL: 'https://lnav.io',
  },
  {
    title: 'Fstop: Dead-simple photo sharing service',
    description: `Outrageously simple server for sharing photos. Written in Go using the Gin 
    framework, images are served from S3 and can be cached behind CloudFront.`,
    imgSrc: '/static/images/projects/fstop.png',
    repoURL: 'https://github.com/eburlingame/fstop',
  },
  {
    title: 'Macroblog (this site)',
    description: `Yet another rendition of my personal blog (my old was call miniblog). This was
    part of the grand tradition of entirely rewriting your personal site every two years. This one was 
    built using Next.js and Tailwind CSS, using the Tailwind Next.js Starter Blog template as a base.`,
    imgSrc: '/static/images/projects/macroblog-screenshot.png',
    demoURL: 'https://www.ericburlingame.com',
  },
  {
    title: 'Uno',
    description: `A web-based, multiplayer version of the classic card game. Build using Go on 
    the backend and TypeScript + React on the frontend.`,
    imgSrc: '6831d36b656842c1bec23cd2d914aedd_xlarge.webp',
    demoURL: 'https://uno.ericburlingame.com',
    repoURL: 'https://github.com/eburlingame/isa/',
  },
  {
    title: 'Disruptors of Silitan Valley',
    description: `Multiplayer Catan game with tech-y theme. Built with love during the pandemic 
    in Node.js, Typescript, React, and Chakra UI.`,
    imgSrc:
      'https://user-images.githubusercontent.com/7151584/123522657-71936400-d673-11eb-96f7-a3c42a240a05.png',
    demoURL: 'https://uno.ericburlingame.com',
    repoURL: 'https://github.com/eburlingame/disruptors',
  },
  {
    title: "Rubix: A Rubik's Cube Solver",
    description: `A browser-based Rubick's cube solver, which guides a user through the steps
    of solving a Rubik's cube. Built using vanilla JavaScript and CSS.`,
    imgSrc: 'https://github.com/eburlingame/rubix/raw/master/docs/img/rubiks-cover.png',
    demoURL: 'https://rubix.ericburlingame.com',
    repoURL: 'https://github.com/eburlingame/rubix',
  },
  {
    title: 'Homelab',
    description: `I'm an avid homelabber and run a number of services on my home servers. I'm currently running
    Gitea, Drone CI, PiHole, Home Assistant, Graphana, and lots of other stuff. I'm running a Unifi network stack
    and a couple of home-built servers, built with consumer hardware.`,
    imgSrc: 'f98817e9c5c542a2b51c9ea57a6321f7_medium.webp',
  },
]

export default projectsData

interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  repo?: string
}

const projectsData: Project[] = [
  {
    title: 'Macroblog (this site)',
    description: `Yet another rendition of my personal blog (following the obligatory biannual 
    re-write of the entire site). This one was built using Next.js and Tailwind CSS, using the
    Tailwind Nextjs Starter Blog template as a base.`,
    imgSrc: '/static/images/macroblog-screenshot.png',
    href: 'https://www.ericburlingame.com',
  },
  {
    title: 'Fstop: Dead-simple photo sharing service, written in Go',
    description: `Outrageously simple server for sharing photos. Written in Go using the Gin 
    framework, images are served from S3 and can be cached behind CloudFront.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/eburlingame/fstop',
    repo: 'https://github.com/eburlingame/fstop',
  },
  {
    title: 'Uno',
    description: `A web-based, multiplayer version of the classic card game. Build using Go on 
    the backend and TypeScript + React on the frontend.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Disruptors of Silitan Valley',
    description: `Multiplayer Catan game with tech-y theme. Built with love during the pandemic 
    in Node.js, Typescript, React, and Chakra UI.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

// Flight docs
// Homelab
// Lnav.io
// Rubix
// Roller rink
// Yule tides
// Homebuilt flight simulator

export default projectsData

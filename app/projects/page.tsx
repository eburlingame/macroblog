import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="sm:leading-10md:leading-14 text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Things I've worked on in my spare time.
          </p>
        </div>

        <div className="mx-w-20 container mx-auto py-12">
          <ul className="flex flex-wrap">
            {projectsData.map((d) => (
              <div key={d.title} className="mb-5">
                <a
                  href={d.href}
                  className="text-2xl font-bold text-primary-500 hover:text-primary-400 dark:text-gray-400"
                >
                  {d.title}
                </a>

                <img src={d.imgSrc} alt={d.title} className="mt-4" style={{ width: '20em' }} />

                <p className="mt-4 dark:text-gray-200">{d.description}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

import { photoURL } from '@/components/ResponsiveImage'
import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div
        className="mx-auto divide-y divide-gray-200 dark:divide-gray-700"
        style={{ maxWidth: '75ch' }}
      >
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="sm:leading-10md:leading-14 text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Things I've worked on in my spare time
          </p>
        </div>

        <div className="mx-w-20 container mx-auto py-12">
          <ul className="flex flex-wrap">
            {projectsData.map((d) => (
              <div key={d.title} className="my-8 flex w-full flex-wrap">
                <img
                  src={photoURL(d.imgSrc)}
                  alt={d.title}
                  className="mb-2 mr-4 rounded-lg shadow-xl"
                  style={{ maxWidth: '20em' }}
                />

                <div className="flex flex-1 flex-col">
                  <div className="w-full text-3xl font-bold ">{d.title}</div>

                  <div className="mt-4 flex">
                    {d.demoURL && (
                      <a
                        target="_blank"
                        href={d.demoURL}
                        className="mr-4 text-primary-600 hover:text-primary-400 dark:text-primary-400"
                      >
                        Demo
                      </a>
                    )}
                    {d.repoURL && (
                      <a
                        target="_blank"
                        href={d.repoURL}
                        className="text-primary-600 hover:text-primary-400 dark:text-primary-400"
                      >
                        Repo
                      </a>
                    )}
                  </div>

                  <p className="mt-4 dark:text-gray-200">{d.description}</p>
                </div>

                <hr className="mt-4" />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

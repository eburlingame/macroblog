import ResponsiveImage, { photoURL } from '@/components/ResponsiveImage'
import photoData from '@/data/photoData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Photos' })

export default function Photos() {
  return (
    <>
      <div className="mx-auto divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="sm:leading-10md:leading-14 text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Photos
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A bunch of photos I've taken over the years
          </p>
        </div>

        <div className="mx-w-20 container mx-auto py-12">
          {photoData.map((photo, index) => (
            <div key={index} className="mb-8">
              <ResponsiveImage src={photoURL(photo.src)} alt={photo.caption} />
              <p className="text-sm text-gray-500 dark:text-gray-400">{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

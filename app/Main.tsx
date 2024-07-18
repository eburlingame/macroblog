import FullWidthRow from '@/components/FullWidthRow'
import Link from '@/components/Link'
import SwiperSlider from '@/components/SwiperSlider'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 5

const mastheadSliderImages = [
  'ef117c97c3b54db7b7bc96f1684841c0_large.webp',
  'ba77b16cf742402b91daace45db5525d_large.webp',
  '73973f45b08d42379376e1e9680c1c5e_large.webp',
]

const separatorSliderImages = [
  '360bcc33cd0d4b019f220cd5c6db5244_large.webp',
  '8857e66ae665462ba0c53bbb707635c1_large.webp',
  'a60390c0f9554b57b6a858ed5cb15fe8_large.webp',
]

const closerImage = '3af18871622147e295b7e674c0bff04e_large.webp'

export default function Home({ posts }) {
  return (
    <>
      <div className="mt-30 text-4xl font-extrabold">Hi there, I'm Eric</div>
      <div className="mb-10 mt-5 text-lg font-normal text-gray-500 dark:text-gray-400">
        I am a pilot, photographer, and software engineer living in the beautiful Pacific Northwest.
      </div>

      <FullWidthRow>
        <SwiperSlider images={mastheadSliderImages} />
      </FullWidthRow>

      <div className="mt-16" />

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
            Blog
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="mb-10 flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}

      <FullWidthRow>
        <SwiperSlider images={separatorSliderImages} />
      </FullWidthRow>
    </>
  )
}

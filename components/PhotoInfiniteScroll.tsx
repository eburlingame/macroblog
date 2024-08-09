'use client'

import FullWidthRow from '@/components/FullWidthRow'
import { photoURL } from '@/components/ResponsiveImage'
import SwiperSlider from '@/components/SwiperSlider'
import photoData, { FeaturePhotoRow } from '@/data/photoData'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'

export type PhotoInfiniteScrollProps = {
  pageSize: number
  photos: FeaturePhotoRow[]
}

const PhotoInfiniteScroll = ({ pageSize, photos }: PhotoInfiniteScrollProps) => {
  const [page, setPage] = useState(1)

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={() => setPage(page + 1)}
      hasMore={page > 0 && page * pageSize < photoData.length}
      loader={<div>Loading ...</div>}
    >
      {photoData.slice(0, page * pageSize).map((photo, index) => {
        if (Array.isArray(photo)) {
          return (
            <div key={index} className="mb-8">
              <FullWidthRow>
                <SwiperSlider images={photo} />
              </FullWidthRow>
            </div>
          )
        } else {
          return (
            <div key={index} className="mb-8">
              <img src={photoURL(photo.src)} alt={photo.date} />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{photo.caption}</p>
            </div>
          )
        }
      })}
    </InfiniteScroll>
  )
}

export default PhotoInfiniteScroll

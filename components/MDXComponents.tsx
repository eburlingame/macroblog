import type { MDXComponents } from 'mdx/types'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import Pre from 'pliny/ui/Pre'
import TOCInline from 'pliny/ui/TOCInline'
import CustomLink from './Link'
import OutsetImage from './OutsetImage'
import TableWrapper from './TableWrapper'

export const components: MDXComponents = {
  img: OutsetImage,
  Image: OutsetImage,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
}

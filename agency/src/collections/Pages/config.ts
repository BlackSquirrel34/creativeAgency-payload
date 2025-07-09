/* import { Cover } from '@/blocks/cover/schema'
import { RichText } from '@/blocks/richText/schema'
import { Image } from '@/blocks/image/schema' */
import { HeroBlock } from '@/blocks/hero/schema'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [HeroBlock],
    },
  ],
}

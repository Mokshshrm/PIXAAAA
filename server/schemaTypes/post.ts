import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'keywords',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',

    }),
    defineField({
      name: 'filesource',
      title: 'Filetype',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Other', value: 'other' }
        ],
        layout: 'radio',
      },

    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'otherMedia',
      title: 'Other Media',
      type: 'file',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'string',
    })
  ],
})

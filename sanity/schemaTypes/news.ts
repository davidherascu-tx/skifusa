import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Publish Date',
      type: 'date',
      options: { dateFormat: 'MMMM D, YYYY' }
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true }, 
    }),
    defineField({
      name: 'pdfDocument',
      title: 'PDF Attachment (Optional)',
      type: 'file',
      options: { accept: '.pdf' }
    }),
    defineField({
      name: 'description',
      title: 'Description / Content text',
      type: 'text',
    }),
  ],
})
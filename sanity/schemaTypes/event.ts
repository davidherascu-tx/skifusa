import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['Seminar', 'Tournament'] },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Posting Date (When this shows up on the Frontpage)',
      type: 'date',
      options: { dateFormat: 'MMMM D, YYYY' }
    }),
    defineField({
      name: 'eventStartDate',
      title: 'Event Start Date',
      type: 'date',
      options: { dateFormat: 'MMMM D, YYYY' }
    }),
    defineField({
      name: 'eventEndDate',
      title: 'Event End Date (Optional for multi-day)',
      type: 'date',
      options: { dateFormat: 'MMMM D, YYYY' }
    }),
    defineField({
      name: 'schedule',
      title: 'Event Schedule (Optional)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'day', title: 'Day (e.g., Saturday 7th)', type: 'string' },
          { name: 'time', title: 'Time (e.g., 5:30PM - 7:30PM)', type: 'string' }
        ]
      }]
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Event Image (Optional)',
      type: 'image',
      options: { hotspot: true }, 
    }),
    defineField({
      name: 'pdfDocument',
      title: 'Information PDF (Optional)',
      type: 'file',
      options: { accept: '.pdf' }
    }),
    // --- NEW REGISTRATION LINK FIELD ---
    defineField({
      name: 'registrationLink',
      title: 'Registration Link (Optional)',
      type: 'url',
      description: 'Add a link to Eventbrite, Google Forms, or an external registration page.',
    }),
    // -----------------------------------
    defineField({
      name: 'shortDescription',
      title: 'Short Description (Shows on the Event List)',
      type: 'text',
      rows: 3, 
    }),
    defineField({
      name: 'description',
      title: 'Full Event Details (Shows inside the popup window)',
      type: 'text',
    }),
  ],
})
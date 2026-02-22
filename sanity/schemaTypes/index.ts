import { type SchemaTypeDefinition } from 'sanity'
import event from './event'
import news from './news'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, news],
}
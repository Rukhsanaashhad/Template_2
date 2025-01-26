import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { Category } from './category'
import { orderType } from './orderTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,Category,orderType],
}

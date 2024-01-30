import vine from '@vinejs/vine'
import { FieldContext } from '@vinejs/vine/types'

/**
 * Implementation
 */
export function isRequiredIfPostPublished(value: unknown, _: any, field: FieldContext) {
  console.log('pass in isRequiredIfPostPublished()')
  return
}

export const isRequiredIfPostPublishedRule = vine.createRule(isRequiredIfPostPublished, {
  implicit: true,
})

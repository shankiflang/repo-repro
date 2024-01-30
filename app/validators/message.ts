import vine from '@vinejs/vine'

import { isRequiredIfPostPublishedRule } from '#validators/rules/is_required_if_post_published'

export const messageValidator = vine.compile(
  vine.object({
    postId: vine.number(),
    config: vine
      .array(
        vine.object({
          hi: vine.string(),
          bye: vine.string(),
        })
      )
      .use(isRequiredIfPostPublishedRule()),
  })
)

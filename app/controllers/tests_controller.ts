import { messageValidator } from '#validators/message'
import type { HttpContext } from '@adonisjs/core/http'

export default class TestsController {
  async createMessage({ request }: HttpContext) {
    const query = request.all()

    const payload = await messageValidator.validate(query)

    return payload
  }
}

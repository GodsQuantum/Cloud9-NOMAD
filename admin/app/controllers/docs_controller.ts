import { DocsService } from '#services/docs_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class DocsController {
    constructor(
        private docsService: DocsService
    ) { }

    async list({ }: HttpContext) {
        return await this.docsService.getDocs();
    }

    async show({ params, inertia }: HttpContext) {
        const [content, contentFr] = await Promise.all([
            this.docsService.parseFile(params.slug),
            this.docsService.parseFile(params.slug, 'fr'),
        ]);
        return inertia.render('docs/show', { content, contentFr });
    }
}
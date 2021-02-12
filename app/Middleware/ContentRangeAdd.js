/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
class ContentRangeAdd {
    /**
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Function} next
     */
    async handle({ request, response }, next) {
        // call next to advance the request
        await next();
  
        // verificando se é get o metodo, se tem conteudo e se o conteudo ta paginado
        if (
            response.request.method === 'GET' &&
            response.lazyBody.content &&
            response.lazyBody.content.pages
        ) {
            const cont = response.lazyBody.content;
            // quantidade a ser retornada
            const len = (cont.rows && cont.rows.length) || 0;
            // primeiro valor a ser retornado
            const min = !len ? 0 : (cont.pages.page - 1) * cont.pages.perPage;
            response.header(
                'Content-Range',
                `${min}-${min + (len ? len - 1 : 0)}/${+cont.pages.total}`
            );
            response.lazyBody.content = cont.rows || response.lazyBody.data;
        }
    }
  }
  module.exports = ContentRangeAdd; 
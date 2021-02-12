class Tools {
    /**
     * função que busca com paginação caso necessário
     * @param {any} request
     * @param {any} model
     * @param {Array<String>} includes
     */
    static async format_get(request, model, includes) {
        let _data;
        const query = request.qs;
        const do_query = model.query();
        // adicionando withs
        
        if(includes){
            includes.forEach(inc => {
                do_query.with(inc);
            });
        }
        // se houver o range
        if (query.range) {
            // realiza os calcos de paginação
            query.range = JSON.parse(query.range);
            const per_page = query.range[1] - query.range[0] + 1;
            const the_page = (query.range[1] + 1) / per_page;
            // se houver ordenação
            if (query.sort) {
                query.sort = JSON.parse(query.sort);
                do_query.orderBy(query.sort[0], query.sort[1]);
            }
            _data = await do_query.paginate(the_page, per_page);
        } else _data = await do_query.fetch();
        return _data;
    }
}
module.exports = Tools;
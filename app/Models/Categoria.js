'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {
    produto()
    {
        return this.hasMany('App/Models/produtos', 'produto_id')
    }
}

module.exports = Categoria

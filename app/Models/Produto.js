'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {
    categoria()
    {
        return this.belongsTo('App/Models/categorias', 'categoria_id');
    }
}

module.exports = Produto

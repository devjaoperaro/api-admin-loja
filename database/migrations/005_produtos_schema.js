'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutosSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.string('Nome', 80).notNullable().unique()
      table.float('preco').notNullable().unique()
      table.string('imagem', 255).notNullable()
      table.integer('categoria_id').unsigned().references('id').inTable('categorias')
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutosSchema

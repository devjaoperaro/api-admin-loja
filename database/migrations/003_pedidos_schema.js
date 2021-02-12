'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidosSchema extends Schema {
  up () {
    this.create('pedidos', (table) => {
      table.increments()
      table.string('cliente', 100).notNullable().unique()
      table.boolean('status').notNullable()
      table.float('total').notNullable().unique()
      table.datetime('data').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('pedidos')
  }
}

module.exports = PedidosSchema

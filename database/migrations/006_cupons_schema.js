'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CuponsSchema extends Schema {
  up () {
    this.create('cupons', (table) => {
      table.increments()
      table.string('codigo').notNullable().unique()
      table.integer('desconto').unique()
      table.integer('quantidade').unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('cupons')
  }
}

module.exports = CuponsSchema

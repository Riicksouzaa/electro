import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AccountKeys extends BaseSchema {
  protected tableName = 'account_keys'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('key').unique()
      table
        .integer('account_id')
        .references('id')
        .inTable('accounts')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

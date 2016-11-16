/**
 * Log.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
    schema: true
    , connection: 'sqlitedb'
    , tableName: 'Log'
    , attributes: {
        Log: {
            DeviceID: {
                type: 'integer'
                , primaryKey: true
            }
            , LogID: {
                type: 'integer'
                , primaryKey: true
            }
            , ConditionID: {
                type: 'integer'
            }
            , Description: {
                type: 'text'
            }
            , StartDate: {
                type: 'date'
            }
            , EndDate: {
                type: 'date'
            }
        }
    }
}
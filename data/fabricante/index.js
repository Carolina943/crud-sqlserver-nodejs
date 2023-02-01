'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async () =>{
   try {
     let pool = await sql.connect(config.sql);
     const sqlQueries = await utils.loadSqlQueries('fabricante');
     const eventlist = await pool.request().query(sqlQueries.eventlist);
     console.log(eventlist);
     return eventlist.recordset;
   }catch(error){
     return error.message;
   }
}


const getById = async (eventId) => {
   try {
    
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('fabricante')
    const oneEvent = await pool.request()
                     .input('fabricante_id', sql.Int, eventId)
                     .query(sqlQueries.eventbyId);
      return oneEvent.recordset;
   } catch (error) {
    return error.message;
    
   }
}


module.exports = {
   getEvents,
   getById,
}
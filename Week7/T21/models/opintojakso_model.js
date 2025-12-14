const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from Opintojakso', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from Opintojakso where OpintojaksoID=?', [id], callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (koodi,Laajuus,Nimi) values(?,?,?)',
      [opintojakso.koodi, opintojakso.Laajuus, opintojakso.Nimi],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where OpintojaksoID=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set koodi=?,Laajuus=?,Nimi=? where OpintojaksoID=?',
      [opintojakso.koodi, opintojakso.Laajuus, opintojakso.Nimi, id],
      callback
    );
  }
};
module.exports = opintojakso;
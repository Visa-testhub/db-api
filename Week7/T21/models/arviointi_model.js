const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from Arviointi', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from Arviointi where ArviointiID=?', [id], callback);
  },
  add: function(Arviointi, callback) {
    return db.query(
      'insert into Arviointi (Paivamaara,Arvosana,OpiskelijaID,OpintojaksoID) values(?,?,?,?)',
      [Arviointi.Paivamaara, Arviointi.Arvosana, Arviointi.OpiskelijaID, Arviointi.OpintojaksoID],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Arviointi where ArviointiID=?', [id], callback);
  },
  update: function(id, Arviointi, callback) {
    return db.query(
      'update Arviointi set Paivamaara=?,Arvosana=?,OpiskelijaID=?,OpintojaksoID=?  where ArviointiID=?',
      [Arviointi.Paivamaara, Arviointi.Arvosana, Arviointi.OpiskelijaID, Arviointi.OpintojaksoID, id],
      callback
    );
  }
};
module.exports = arviointi;
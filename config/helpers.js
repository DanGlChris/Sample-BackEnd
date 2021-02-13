const MySqli = require("mysqli");

var conn  = new MySqli({
    Host    : 'localhost',
    post    : "3306",
    user    : 'root',
    passwd: '',
    db : 'mega_shop'
});
let db = conn.emit(false, "");

module.exports = {
  database: db
};
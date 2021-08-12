/*
cannot enqueue handshake after invoking quit
Cannot enqueue Quit after invoking quit
*/
const mysql = require('mysql2');
let db;
class database {
    constructor() {
        if (database.instance) {
            return database.instance;
        }
        database.instance = this;

        return this;
    }

    //GET METHODS

    async dbopen() {
        console.log("Core done!")
        db = mysql.createConnection({
            host: "localhost",
            port: "3306",
            user: "wolfybot",
            password: "ABEuC9FmhshJIYCc",
            database: "wolfybot2",
            charset: "utf8mb4"
        });

        if(db.state === 'disconnected') {
            console.log("DISCONNECTED. TRY DBCONNECT")
            await db.connect(err => {

                if(err) throw err;
            
                console.log('Adatbazisra csatlakozva! - Core');
            });
        }
    }

    async dbclose() {
        console.log("DISCONNECT DATABASE CONNECTION");
        await db.end();
    }

    query(query) {
        this.dbopen();
        let promise = new Promise(function(resolve, reject) {
        
            db.query(query, function (err, rows, fields) {
                // Call reject on error states,
                // call resolve with results
                if (err) {
                    return reject( JSON.parse(JSON.stringify(err)) );
                }
                resolve( JSON.parse(JSON.stringify(rows)) );
            });
        });
        this.dbclose();
        return promise;
    }
}

module.exports = database;
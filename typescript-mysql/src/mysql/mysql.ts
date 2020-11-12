import mysql = require('mysql');

export default class MySQL {
    private static _instance : MySQL;

    public connection : mysql.Connection;
    public connected : boolean = false;

    constructor() {
        console.log('Class init');
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '123456',
            database: 'node_js_ts_mysql_db'
        });

        this.connectDB();
    }

    private connectDB() {
        this.connection.connect((error: mysql.MysqlError) => {
            if (error) {
                console.log(error.message);
                return;
            }

            this.connected = true;
        });
    }

    public static get instance() {
        if (this._instance === undefined || this._instance === null) {
            this._instance = new this();
        }

        return this._instance;
    }

    public static execQuery(query : string, callback : Function) {
        this.instance.connection.query(query, (error, results: Object [], fields: any) => {
            if (error) {
                console.log(error);
                return callback(error, null);
            }

            callback(null, results);
        });
    }
}
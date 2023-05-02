const oracledb = require('oracledb');
const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    oracledb.getConnection({
        user: 'MANIS',
        password: 'password01',
        connectString: '10.146.1.79:1521/VP'
    }, (err, conn) => {
        if (err) {
            console.error(err.message);
            return;
        }



        conn.execute(
            'SELECT * FROM z5_color', [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT },
            (err, result) => {
                if (err) {
                    console.error(err.message);
                    doRelease(conn);
                    return;
                }
                // console.log(result.rows);
                res.render('index', { data: result.rows, abc: "asu" });
                doRelease(conn);
            }
        );
    });

    function doRelease(connection) {
        connection.close((err) => {
            if (err) {
                console.error(err.message);
            }
        });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

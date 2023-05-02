const express = require('express');
const app = express();
const oracledb = require('oracledb');
const dbConfig = {
    user: 'MANIS',
    password: 'password01',
    connectString: '10.146.1.79:1521/VP'
};

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    oracledb.getConnection(dbConfig, (err, conn) => {
        if (err) {
            console.error(err);
            return;
        }
        const sql = `SELECT * FROM z5_color `;
        conn.execute(sql, (err, result) => {
            if (err) {
                console.error(err);
                return;
            }
            res.render('index', { data: result.rows });
        });
    });
});

app.listen(3000, () => console.log('Server started on port 3000'));

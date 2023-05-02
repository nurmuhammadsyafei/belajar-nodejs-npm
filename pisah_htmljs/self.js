const oracledb = require('oracledb');

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
        'SELECT * FROM z5_color',
        (err, result) => {
            if (err) {
                console.error(err.message);
                doRelease(conn);
                return;
            }

            console.log(result.rows); // Menampilkan hasil query
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

const oracledb = require('oracledb');

oracledb.getConnection({
    user: 'MANIS',
    password: 'password01',
    connectString: '10.146.1.79:1521/VP'
}, function (err, connection) {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Connection was successful!');

    connection.execute(
        'SELECT * FROM z5_color where rownum <=1',
        [],
        function (err, result) {
            if (err) {
                console.error(err.message);
                doRelease(connection);
                return;
            }
            console.log(result.rows);
            doRelease(connection);
        });
});

function doRelease(connection) {
    connection.release(function (err) {
        if (err) {
            console.error(err.message);
        }
    });
}
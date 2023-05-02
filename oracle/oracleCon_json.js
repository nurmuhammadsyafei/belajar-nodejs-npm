const oracledb = require('oracledb');

async function run() {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: 'MANIS',
            password: 'password01',
            connectString: '10.146.1.79:1521/VP'
        });

        const result = await connection.execute(
            'SELECT * FROM z5_color where rownum <=1',
            [], // Bind parameters
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );

        console.log(result.rows);

    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}

run();

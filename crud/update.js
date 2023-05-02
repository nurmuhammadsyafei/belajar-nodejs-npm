const oracledb = require('oracledb');
const dbConfig = {
    user: "MANIS",
    password: "password01",
    connectionString: "10.146.1.79/VP"
};

async function runUpdateQuery() {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);

        const query = `UPDATE z5_color SET color_rgba = :value1 WHERE color_hex = :id`;
        const bindParams = {
            value1: 'Lionel Messi',
            id: '1'
        };
        const options = {
            autoCommit: true
        };

        const result = await connection.execute(query, bindParams, options);
        console.log(`Rows updated: ${result.rowsAffected}`);

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

runUpdateQuery();

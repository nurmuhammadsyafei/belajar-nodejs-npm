const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function fun() {
    let con;

    try {
        con = await oracledb.getConnection({
            user: "MANIS",
            password: "password01",
            connectionString: "10.146.1.79/DEV_MANIS"
        });

        const data = await con.execute(
            `select * from z5_color`,
        );
        console.log(data.rows)
    }
    catch (err) {
        console.error(err)
    }
}
fun(); 
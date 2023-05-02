const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
        "<style>"
        + "table, th, td {"
        + "  border:1px solid black;"
        + "}"
        + "</style><html>"
        + "<body>"

        + "<h2>A basic HTML table</h2>"

        + "<table style='width:100%'>"
        + "  <tr>"
        + "    <th>Company</th>"
        + "    <th>Contact</th>"
        + "    <th>Country</th>"
        + "  </tr>"
        + "  <tr>"
        + "    <td>Alfreds Futterkiste</td>"
        + "    <td>Maria Anders</td>"
        + "    <td>Germany</td>"
        + "  </tr>"
        + "  <tr>"
        + "    <td>Centro comercial Moctezuma</td>"
        + "    <td>Francisco Chang</td>"
        + "    <td>Mexico</td>"
        + "  </tr>"
        + "</table>"

        + "<p>To understand the example better, we have added borders to the table.</p>"

        + "</body></html>");
    res.end();
});

server.listen(1447, () => {
    console.log('Server is listening on port 1447');
});
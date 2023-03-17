import https from "https";

const endpoint = "https:hookb.in/1gmEeY3JLZhd6N006161";
const request = https.request(endpoint, {
    method: "POST",
    header: {
        "content-Type": "application/json",
        "Accept": "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive data : ${data.toString()}`);
    })
});
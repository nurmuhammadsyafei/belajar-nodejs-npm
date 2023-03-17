import http from "http";
import { TodolistService } from "./todolist-service.mjs";

const service = new TodolistService();
const server = http.createServer((request, response) => {
    // response.write("TodolistApi");
    // response.end();
    response.setHeader("Content-Type", "application/json")
    if (request.method === "GET") {
        service.getTodoList(request, response);
    } else if (request.method === "POST") {
        service.createTodo(request, response);
    } else if (request.method === "PUT") {
        service.updateTodo(request, response);
    } else if (request.method === "DELETE") {
        service.deleteTodo(request, response);
    }
})

server.listen(3001);


// import http from "http";

// const server = http.createServer((request, response) => {
//     console.info(request.method);
//     console.info(request.url);
//     // console.table(request.headers);
//     // console.info(request,headers);
//     response.write("Helo HTTP SERVERdasdas");
//     response.end();
// })

// server.listen(5500);
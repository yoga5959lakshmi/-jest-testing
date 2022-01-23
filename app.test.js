const request = require("supertest");
const app = require ('./app')

describe("given username and password", () => {
    test("should respond with status code 200", async () =>{
        const response = await request(app).post("/users").send({
            username: "username",
            password:"password"
        })
        expect(response.statusCode).toBe(200);
    })
    test("should specify json in content type header", async () =>{
        const response = await request(app).post("/users").send({
            username: "username",
            password:"password"
        })
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
    })
})
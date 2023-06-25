const request = require ("supertest")("https://reqres.in/api")
const expect = require("chai").expect;

describe  ("get user list page 2", ()=>{
it("returns all user page 2", async function () {
    const response = await request.get('/users?page=2') //page =2 query params
    console.log(await response)

    expect(await response.status).to.equal(200);
})
})
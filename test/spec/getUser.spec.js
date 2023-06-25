const request = require("supertest");
const expect = require("chai").expect;

const apiBaseUrl = "https://reqres.in/api";

async function getUserPages(page) {
  const response = await request(apiBaseUrl).get(`/users?page=${page}`);
  return response;
}

describe("GET /users", function() {
  it("returns page users 2", async function() {
    const query1 = "2";
    const response = await getUserPages(query1); // page = 2 query params

    expect(response.status).to.equal(200);
    expect(response.body.data.length).to.equal(6);
  });

  it("returns page users 3", async function() {
    const query1 = "3";
    const response = await getUserPages(query1); // page = 3 query params

    expect(response.status).to.equal(200);
    expect(response.body.data.length).to.equal(0);
  });
});

module.exports = { getUserPages };
const request = require("supertest")("https://reqres.in/api");
const expect = require("chai").expect;
const getUser = require("./getUser.spec.js");

describe("Post /users", function() {
  it("create new user", async function() {
    const response = await request
      .post("/users")
      .send({
        name: "morpheus",
        job: "leader"
      });

    expect(response.statusCode).to.eql(201);
    expect(response.body.name).to.eql("morpheus");
    expect(response.body.job).to.eql("leader");

    const resp2 = await getUser.getUserPages(2);
    // Add any assertions or further test logic for `resp2` here
  });
});
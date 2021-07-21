const { expect } = require("chai");

describe("MyToken", function () {
  it("Deploys the contract", async function () {
    const MyToken = await ethers.getContractFactory("MyToken");
    const mytoken = await MyToken.deploy();
    await mytoken.deployed();
    expect(await mytoken.name() === "MyToken");
  });
});

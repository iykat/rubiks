const { expect } = require("chai");

describe("UConnect contract", function () {
  let uconnect;
  let owner;
  let recipient;

  beforeEach(async () => {
    const UConnect = await ethers.getContractFactory("UConnect");
    uconnect = await UConnect.deploy();
    await uconnect.deployed();

    [owner, recipient] = await ethers.getSigners();
  });

  it("should have the contract owner set correctly", async function () {
    const contractOwner = await uconnect.owner();
    expect(contractOwner).to.equal(owner.address);
  });

  it("should allow the contract owner to send funds", async function () {
    const initialBalance = await recipient.getBalance();
    const amountToSend = ethers.utils.parseEther("0.5"); // Sending 0.5 Ether

    await uconnect.connect(owner).sendFunds(recipient.address, amountToSend);

    const finalBalance = await recipient.getBalance();
    expect(finalBalance.sub(initialBalance)).to.equal(amountToSend);
  });

  it("should return the correct balance for the owner", async function () {
    const balance = await uconnect.checkBalance();
    const ownerBalance = await owner.getBalance();
    expect(balance).to.equal(ownerBalance);
  });

  it("should get previous payment data", async function () {
    const amountToSend = ethers.utils.parseEther("1");
    await uconnect.connect(owner).sendFunds(recipient.address, amountToSend);

    const [sender, receiver, amount, timestamp] = await uconnect.getPreviousPaymentData();
    expect(sender).to.equal(owner.address);
    expect(receiver).to.equal(recipient.address);
    expect(amount).to.equal(amountToSend);
    expect(timestamp).to.be.gt(0);
  });
});
const { expect } = require("chai");

describe("UConnect contract", function () {
  let uconnect;
  let owner;
  let recipient;

  beforeEach(async () => {
    const UConnect = await ethers.getContractFactory("UConnect");
    uconnect = await UConnect.deploy();
    await uconnect.deployed();

    [owner, recipient] = await ethers.getSigners();
  });

  it("should have the contract owner set correctly", async function () {
    const contractOwner = await uconnect.owner();
    expect(contractOwner).to.equal(owner.address);
  });

  it("should allow the contract owner to send funds", async function () {
    const initialBalance = await recipient.getBalance();
    const amountToSend = ethers.utils.parseEther("0.5"); // Sending 0.5 Ether

    await uconnect.connect(owner).sendFunds(recipient.address, amountToSend);

    const finalBalance = await recipient.getBalance();
    expect(finalBalance.sub(initialBalance)).to.equal(amountToSend);
  });

  it("should return the correct balance for the owner", async function () {
    const balance = await uconnect.checkBalance();
    const ownerBalance = await owner.getBalance();
    expect(balance).to.equal(ownerBalance);
  });

  it("should get previous payment data", async function () {
    const amountToSend = ethers.utils.parseEther("1");
    await uconnect.connect(owner).sendFunds(recipient.address, amountToSend);

    const [sender, receiver, amount, timestamp] = await uconnect.getPreviousPaymentData();
    expect(sender).to.equal(owner.address);
    expect(receiver).to.equal(recipient.address);
    expect(amount).to.equal(amountToSend);
    expect(timestamp).to.be.gt(0);
  });
});

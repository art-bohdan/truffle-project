const Lock = artifacts.require("Lock");

module.exports = async function(deployer) {
  deployer.deploy(Lock)
  await Lock.deployed();
  console.log(Lock.address)
};

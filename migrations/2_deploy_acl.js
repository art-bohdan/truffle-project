const Acl = artifacts.require("Acl");
const Voting = artifacts.require("Voting");

module.exports = async function(deployer) {
    const deployerAddress =""
    await deployer.deploy(Acl, deployerAddress)
    await Acl.deployed();
    console.log('Acl:', Acl.address)

    await deployer.deploy(Voting, Acl.address)
    await Voting.deployed();
    console.log('Voting:', Voting.address)
};

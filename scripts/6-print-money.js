import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // This is the address of our ERC-20 contract printed out in the step before.
    const token = await sdk.getContract("0xffc492bcAbA592C0d3Ba4Fe11207CCe475aDD83D", "token");
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 910_000_000;
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log("✅ There now is", totalSupply.displayValue, "₹IND in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
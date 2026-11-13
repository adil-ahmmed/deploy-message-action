const fs = require('fs');

const environment = process.env.INPUT_ENVIRONMENT;
const deployedAt = new Date().toISOString();

console.log(`🚀 Deploying to ${environment}`);

fs.appendFileSync(process.env.GITHUB_OUTPUT, `deployed-at=${deployedAt}\n`);

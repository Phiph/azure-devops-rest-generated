const OpenAPI = require('openapi-typescript-codegen');
const axios = require('axios');
const { Worker } = require('worker_threads');
const path = require('path');
const fs = require('fs');

const dirPath = path.join(__dirname, 'vsts-rest-api-specs', 'specification');

// Function to get JSON files
function getJsonFiles(dirPath) {
    let jsonFiles = [];

    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (file !== 'httpExamples') { // Exclude the http-examples folder
                jsonFiles = jsonFiles.concat(getJsonFiles(fullPath));
            }
        } else if (stat.isFile() && file.endsWith('.json')) {
            jsonFiles.push(fullPath);
        }
    }

    return jsonFiles;
}


 // Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const jsonFiles = getJsonFiles(dirPath);
    console.log('JSON file paths:', jsonFiles);

    for (const filePath of jsonFiles) {
        const parts = filePath.split(path.sep);
        const name = parts[parts.length - 3]; // Extract the name from the path
        const version = parts[parts.length - 2]; // Extract the version from the path

        // Log the name and version
        console.log(`Name: ${name}, Version: ${version}`);

        // Check if the version is 7 or above
        const versionNumber = parseFloat(version.split('.')[0]);
        if (versionNumber >= 7) {
            await OpenAPI.generate({
                input: filePath,
                output: `generated-sources/azure/${name}/${version}`,
                useUnionTypes: true,
                useOptions: true,
                clientName: `${name}Api`
            });

            // Sleep for 1 second between each file processing
            await sleep(1000);
        } else {
            console.log(`Skipping version ${version} as it is below 7`);
        }
    }
}

main().catch(console.error);
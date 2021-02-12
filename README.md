# Uniworld API

## Setup Instructions

1. Clone this repository

2. Install [VS Code](https://code.visualstudio.com/)

3. Install the [Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions) extension and login with your Azure account

4. Run `npm install` in the project directory

5. Create a file: `local.settings.json` in the project root directory with the following content and make sure to fill in the values (i.e. DB_PASSWORD):

```
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "DB_NAME": "uniworlddb",
    "DB_PORT": 10255,
    "DB_USER": "ENTER_DB_USER_HERE",
    "DB_PASSWORD": "ENTER_DB_PASSWORD_HERE",
    "BLOBSTORAGE_BASE_URL": "https://uniworldstorage.blob.core.windows.net",
    "BLOBSTORAGE_CONNECTION_STRING": "DefaultEndpointsProtocol=https;AccountName=uniworldstorage;AccountKey=ENTER_BLOBSTORAGE_ACCOUNT_KEY_HERE;EndpointSuffix=core.windows.net"
  },
  "Host": {
    "CORS": "*"
  }
}
```

6. Run the application locally (F5)

## Available Scripts

In the project directory, you can run:

### `npm run test`

Runs unit and integration tests.

### `npm run release`

This command can be executed to bump the version of the app according to [semver](https://semver.org/) specifications.

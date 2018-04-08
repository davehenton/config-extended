# config-extended
An easy to use package to handle configuration in your Node.js application.
This package extends the standard [config](https://www.npmjs.com/package/config) package to automatically resolve
environment variables.

## Example
```
# DB_INFO=mongo://localhost:27017/example npm start
```
config/default.json
```
{
  "database": "DB_INFO"
}
```

index.js
```
import Config from '@evanion/config-extended';

const dbHost = Config.get('database'); // > mongo://localhost:27017/example
```

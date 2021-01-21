# Shirtnetwork Designer Backend Node

This backend will handle configuration files, font management and uploading files for
the [shirtnetwork](https://www.shirtnetwork.com) designer. This backend is used for all implementations. Feel free to adapt
this skeleton to your own needs. This is the nodejs version, **[PHP Version can be found here](https://github.com/aggrosoft/designer-backend-skeleton)**

## Installation

Use git to clone the repository

```bash
git clone https://github.com/aggrosoft/designer-backend-skeleton-node.git
```

Then install the dependencies using npm (or yarn) inside the created folder

```bash
npm install
```

## Configuration

The repository comes with a config.sample.json file, copy this file to config.json and
adjust it to your needs. **If you do not copy the file before first request startup will fail**. 
Files are stored in the var/ subfolders by default.

Point your webserver to serve the root of the application, it is pre configured to work with
apache webserver. We recommend using a subdomain or a separate domain for the app e.g.: https://config.example.org

## Running

We recommend using [pm2](https://pm2.keymetrics.io/) to run the application, we ship a process.json file that you can use
for easy start up:

```bash
npm install pm2 -g
pm2 run process.json
```

There are multiple ways to keep the application running on system restarts - see [pm2 docs](https://pm2.keymetrics.io/docs/usage/startup/).
One easy way that does not need root permissions is saving the process list and adding a startup cron

```bash
pm2 save
```

Cronjob (adjust path to node and pm2 accordingly)

```
@reboot /usr/bin/node /usr/bin/pm2 resurrect
```

For root enabled servers we recommend using `pm2 startup` to generate a startup script

## Usage

Depending on your consuming system you will need to configure upload and config urls. Use as following:

**Upload Endpoint**

https://config.example.org/files

**Config Endpoint**

https://config.example.org

Fire up the settings interface to define fonts:

https://config.example.org/settings/fonts

## Security

:exclamation: Be sure to modify user in the auth section of the config file,
otherwise authentication defaults to **user** / **passw0rd** this is insecure!

Also be sure to set allowed-origins in config.json so only specific endpoints can upload files and configurations.

## NGINX / other webservers

Currently not documented, configure your webserver to proxy all requests 
to the port you set in config.json (default is 8080)

## Updating

Similar to installing, if you did not change the skeleton do the following:

```bash
git pull
npm update
```

Omit git pull if you did any changes to the skeleton.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

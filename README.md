# Documentation
Runs on Docusaurus v3.6.0.

# How to run locally

## Ubuntu 20.04: install dependencies

`Node.js` and `nvm` (here versions [v22](https://nodejs.org/en/about/previous-releases) and [v0.40.1](https://github.com/nvm-sh/nvm/releases))
```bash
curl -sL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get -y install nodejs
curl https://raw.githubusercontent.com/creationix/nvm/v0.40.1/install.sh | bash
```

## Run

```bash
cd name.github.io && git pull
npm run start
```

Open `http://localhost:3000` in your browser. **No need to restart if you make local changes, `npm` should deploy your changes in real-time** (no more `<leader>m` to html conversion).

# Troubleshooting

### Removing Node.js

```bash
sudo apt-get remove nodejs ^node-* nodejs-*
sudo apt-get autoremove
sudo apt-get clean
```

### Cleaning `npm` cache

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
```

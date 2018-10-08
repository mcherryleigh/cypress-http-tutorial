# Starting the Server
```
cd server
npm install
npm start
```

# Starting Cypress (init route)
```
npm install
npm run cy:open
```

# Changing to example specs
```
npm install
# change package.json to use different config
# ex: "cy:open": "cypress open --project ./_test/cypress_presentation"
npm run cy:open
```
### how to setup a Typescript Express project

```
1. npm init -y

```

```

2. npm install -D typescript
 npm install concurrently

```


```
3. tsc --init
```

```
npx tsc command to compile ts file and convert to JS
```

```
4. Add the following script in package.json

"scripts": {
    "build": "npx tsc",
    "watch": "npx tsc -w",
    "prestart": "npm run build",
    "start": "npx nodemon dist/index.js",
    "dev": "npx concurrently \"npm run watch\" \"npm start \""
},

```

```
Note :Make relavant changes to tsconfig.json
```

```
 5. npm run dev

 ```


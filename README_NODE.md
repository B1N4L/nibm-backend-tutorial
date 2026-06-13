Node.js Hello World (Dev note: ignore this file because because we switched to Express project)
-------------------

Files added:

- `hello.js` — simple CLI script that prints "Hello, world!"
- `server.js` — small HTTP server that responds with "Hello, world!" on port 3000
- `package.json` — project metadata with `start` and `console` scripts

Quick start (PowerShell):

1) Install dependencies:

```powershell
Set-Location 'C:\Users\Binal Lokitha\Desktop\Documents\GitHub\nibm\nibm-backend-tutorial'
npm install
```

2) Run the CLI example:

```powershell
node .\hello.js
```

3) Run the Express HTTP server:

```powershell
npm start
```

4) (Optional) Run the server in development mode with auto-restart (requires nodemon):

```powershell
npm install -g nodemon
npm run dev
```

Test the HTTP server (PowerShell):

```powershell
# start server in background, test, then stop it
$proc = Start-Process node -ArgumentList '.\server.js' -PassThru; Start-Sleep -Milliseconds 200; Invoke-RestMethod 'http://localhost:3000'; $proc | Stop-Process
```


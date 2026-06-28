Node.js Express Hello World
-------------------

Files added:

- `hello.js` — simple CLI script that prints "Hello, world!"
- `server.js` — Express app shared by local Node and Vercel
- `api/index.js` — Vercel serverless entrypoint
- `vercel.json` — routing config for Vercel
- `package.json` — project metadata with `start`, `dev`, and `console` scripts

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

Deploy to Vercel:

1. Install the Vercel CLI:

```powershell
npm install -g vercel
```

2. Log in and deploy from the project folder:

```powershell
Set-Location 'C:\Users\Binal Lokitha\Desktop\Documents\GitHub\nibm\nibm-backend-tutorial'
vercel
```

3. For production deployment:

```powershell
vercel --prod
```

Your deployed app will serve:
- `/` → `Hello, world!`
- `/json` → `{ "message": "Hello, world!" }`

Test the HTTP server (PowerShell):

```powershell
# start server in background, test, then stop it
$proc = Start-Process node -ArgumentList '.\server.js' -PassThru; Start-Sleep -Milliseconds 200; Invoke-RestMethod 'http://localhost:3000'; $proc | Stop-Process
```


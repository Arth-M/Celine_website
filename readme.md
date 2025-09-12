# Using Next.js and React

1. To use next.js you should add a **package.json** file with an empty object **{}** in the same directory as the index.html file.

2. Then in the **terminal**, in the root the project, run the following **command**:

npm install react@latest react-dom@latest next@latest

This will install all the depencies in the package-lock.json

3. The packages that should be seen in package.json are
  - Next
  - React
  - React-dom

4. Next automatically uses Telemetry to see wich usage is made of Next, to opt-out add
**NEXT_TELEMETRY_DISABLED=1** in your .env file.

Next recommends to have your **.gitignore** file pointing to
.env.*.local
for your **secrets**

5. Add

`"scripts": {
  "dev": "next dev"
},`

in your package.json object to enable next server.
package.json should look like this:
`{
  "scripts": {
    "dev": "next dev"
  },
  "dependencies": {
    "next": "^14.0.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}`

6. Add an **app** directory with an **page.js** and **layout.js** file in it

page.js:
`export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>Your app is running successfully.</p>
    </div>
  )
}`

layout.js:
`export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>{children}</body>
    </html>
  )
}`

Project structure: <br><br>
|your-project/|  --- | --- |<br>
| --- | app/| --- | <br>
| ---  | -> |layout.js| <br>
| ---   | -> |page.js| <br>
| -> |package.json| --- | <br>
| -> |.env (optional)| --- | <br>
| -> |.gitignore (optional)| --- | <br>

6. Run **npm run dev** in your terminal to launch the local server

7. The **layout.js** file in the app directory is now the main layout of the app. You can add metadata, and UI elements
that will be shared across all the pages (e.g. navigation, footer and so on).
i.e. the layout.js file is the root layout that wraps all pages in your app, and page.js is your home page component.

8. Add your **.gitignore** file with the following before any git init and add :

- Starts here

node_modules/
.next/
.swc/
.*.env

# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

- Ends here

**if you forgot and didn't do any git commit, use **git reset** and check the files using *git status* **

## In the terminal : **git init git add . ** etc... then use github to create your remote origin and push

9. Add tailwind to your project

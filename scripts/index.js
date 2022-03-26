const fs = require('fs')
const path = require('path')

const createPage = (component) => {
  fs.writeFile(
    path.resolve(__dirname, `../src/pages/${component}.tsx`),
    `
      import { ${component} } from 'antd-mobile'
  
      export default ()=> {
          return <${component}>${component} Demo</${component}>
      }
      `,
    console.log
  )
}

const createApp = (pages) => {
  const components = pages.map(
    (page) => `const ${page} = lazy(() => import('./pages/${page}'))`
  )

  const routes = [
    {
      path: '/',
      element: '<Layout />',
      children: pages.map((page) => ({
        path: `/${page}`,
        element: `<Suspense fallback={<span>loading...</span>}><${page} /></Suspense>`
      }))
    }
  ]

  fs.writeFile(
    path.resolve(__dirname, `../src/App.tsx`),
    `
    import { Suspense, lazy } from 'react'
    import { useRoutes } from 'react-router'
    import Layout from './Layout'

    ${components.join('\n')}

    const routes = ${JSON.stringify(routes, null, 2)
      .replaceAll('"<', '<')
      .replaceAll('>"', '>')}

    export default ()=> {
        return  useRoutes(routes)
    }
          `,
    console.log
  )
}

const createLayout = (pages) => {
  const links = pages.map(
    (page) => `
<li>
    <Link to="/${page}">${page}</Link>
</li>
`
  )

  fs.writeFileSync(
    path.resolve(__dirname, `../src/Layout.tsx`),
    `
  import { Outlet, Link } from "react-router-dom";

  export default ()=> {
      return <div><ul>${links}</ul> <hr /><Outlet /></div>    
  }
  
  `,
    console.log
  )
}

const entry = fs
  .readFileSync(
    path.resolve(__dirname, '../node_modules/antd-mobile/es/index.js')
  )
  .toString()
const iterator = entry.matchAll(/default as ([a-zA-Z]+)/g)

const pages = []

for (const [_, item] of iterator) {
  pages.push(item)
}

createApp(pages)
// createLayout(pages)

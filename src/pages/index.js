import * as React from "react"
import Layout from '../components/layout/layout'
import '../assets/styles/normilize.css'
const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <p>This is my first Gatsby Blog.</p>
      </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

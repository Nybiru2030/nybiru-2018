import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Teste" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Go REACTJS</h1>
    <p>Hooks é Vida</p>
    <p>versão 0.0</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
<<<<<<< HEAD
    <Link to="/page-2/">Próxima1</Link>
=======
    <Link to="/page-2/">Próxima 1</Link>
>>>>>>> master
  </Layout>
)

export default IndexPage

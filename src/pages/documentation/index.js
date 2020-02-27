import React from 'react'

import Layout from '../../components/Layout'
import DocumentationRoll from '../../components/DocumentationRoll'

export default class DocumentationIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{              
              color: 'white',
              padding: '1rem',
            }}
          >
            Documentation / Tutorials
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <DocumentationRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import DocumentationRoll from '../components/DocumentationRoll'
import iconFundamentals from '../../static/img/icon-fundamentals.svg'
import iconSetup from '../../static/img/icon-setup.svg'
import iconTutorials from '../../static/img/icon-tutorials.svg'


export const IndexPageTemplate = ({
  image,
  title,  
  subheading,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image.publicURL
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{           
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-thin is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{            
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="columns">                
                  <div className="column is-3 feature-card shadow-default">
                  <a href="/documentation/fundamentals/">
                    <img class="icons" src={iconFundamentals} alt="Fundamentals"  />    
                    <p className="has-text-weight-semibold is-size-5 margin-bottom-0 margin-top-2">                    
                      Core fundamentals
                    </p>
                    <p className="feature-card-description">An overview of JUNIPA's approach to NCCD and your school.</p>
                    <p class="text-link">Learn more <svg width="8" height="8" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="#FA7500"/>
</svg></p>
                    </a>
                  </div>
                
                <div className="column is-3 feature-card shadow-default is-offset-1">
                  <a href="/documentation/install-setup/">
                    <img class="icons" src={iconSetup} alt="Install and Setup icon"  />
                    <p className="has-text-weight-semibold is-size-5 margin-bottom-0 margin-top-2">
                      Install / Setup
                    </p>
                    <p className="feature-card-description">Setting up JUNIPA for your school.</p>
                    <p class="text-link">Learn more <svg width="8" height="8" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="#880088"/>
</svg>
</p>
                    </a>
                </div>                  
                <div className="column is-3 feature-card shadow-default is-offset-1">
                <a href="/documentation">
                <img class="icons" src={iconTutorials} alt="Tutorials"  />
                  <p className="has-text-weight-semibold is-size-5 margin-bottom-0 margin-top-2">
                      Tutorials
                    </p>
                    <p className="feature-card-description">Browse tutorials for most common setup and development use-cases</p>
                    <p class="text-link">Learn more <svg width="8" height="8" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="#D6002B"/>
</svg></p>
                  </a>
                </div>
                </div>
                {/* <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div> */}
                {/* <Features gridItems={intro.blurbs} /> */}
                {/* <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div> */}
                </div>
                {/* <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-4 has-text-centered has-padding-top-20 has-padding-bottom-30">
                  Latest Updates
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div> */}
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-4 has-text-centered has-padding-top-20 has-padding-bottom-30">
                    Tutorials
                  </h3>
                  <DocumentationRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/documentation">
                      Read more documentation
                    </Link>
                  </div>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          extension
          publicURL 
        }
        heading
        subheading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL  
            }            
            text
          }
          heading
          description
        }
      }
    }
  }
`

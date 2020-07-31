import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import footerLogo from "../img/junipa-logo.svg";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  uniqueClass,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div className={uniqueClass}>
      <div className="masthead has-padding-20">
        <h1 className="title is-size-1 has-text-centered	">{title}</h1>
        <h2 className="has-text-centered	">{description}</h2>
      </div>
      <section className="section">
        {helmet || ""}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="blog-content">
                <PostContent content={content} />
                {tags && tags.length ? (
                  <div style={{ marginTop: `4rem` }}>
                    <h4>Tags</h4>
                    <ul className="taglist">
                      {tags.map((tag) => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="columns has-margin-top-100 has-background-black blog-content">
            <div className="column has-padding-50 is-one-third">
              <img
                className="image is-128x128 has-padding-10"
                src={footerLogo}
                alt="Junipa Logo"
              />
            </div>
            <div className="column has-text-light has-padding-30">
              <p className="has-text-light ">
                Define, record and monitor NCCD from one platform. JUNIPA is the
                the fastest way for schools to manage NCCD adjustments, unlock
                funding confidence and breeze through audits, and more.
              </p>
              <a className="button" href="https://junipa.com.au#demo">
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  uniqueClass: PropTypes.string,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        uniqueClass={post.frontmatter.uniqueClass}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags        
      }
    }
  }
`;

import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
    <StaticQuery
        query={graphql`
        query HeadingQuery {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `}
        render={data => (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="description" content={data.site.siteMetadata.description} />
                    <title>{data.site.siteMetadata.title} </title>
                </Helmet>
            </>
        )}
    />
)
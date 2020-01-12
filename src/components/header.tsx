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
                }
            }
        }
    `}
        render={data => (
            <>
                <Helmet title={data.site.siteMetadata.title} defer={false} />
            </>
        )}
    />
)
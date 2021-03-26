import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        allDatoCmsJerocamshop {
          edges {
            node {
              ahora
              name
              id
            }
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default ComponentName

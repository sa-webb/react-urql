import React from 'react'
import Link from './Link'
import { useQuery } from 'urql'

const FEED_QUERY = `
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`

const LinkList = () => {
    useQuery({ query: FEED_QUERY });
    const [result] = useQuery({ query: FEED_QUERY })
    const { data, fetching, error } = result
    
    if (fetching) return <div>Fetching</div>
    if (error) return <div>Error</div>
    
    const linksToRender = data.feed.links
  
    return (
      <div>
        {linksToRender.map(link => <Link key={link.id} link={link} />)}
      </div>
    );
  };

export default LinkList
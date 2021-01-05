import { Link } from 'react-router-dom'
import React from 'react'

interface Props {
  title: string
  to:string
}
function MenuItem({title,to}:Props) {
  return (
    <Link to={to}><a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
        {title}
      </a></Link>
  )
}

export default MenuItem

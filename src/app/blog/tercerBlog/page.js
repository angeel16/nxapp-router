import React from 'react'
import Link from 'next/link'

function page() {
  return (

    <div className='pagTienda'>
      <h1 className='tienda'><b>Blog/tercerBlog</b></h1>
      <p ><Link>Blog 1</Link></p>
      <p ><Link href='/blog/segundoBlog'>Blog 2</Link></p>
      <p><Link href='/blog/tercerBlog'>Blog 3</Link></p>
      <p ><Link href='/blog/cuartoBlog'>Blog 4</Link></p>
    </div>
  )
}

export default page
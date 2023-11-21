import React from 'react'
import Link from 'next/link'


function Navbar() {
    return (
        <nav className='navbar'>
            <Link href="/">Inicio</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/acercade">Acerca de...</Link>
            <Link href="/registro">Registrarme</Link>
        </nav>
    )
}

export default Navbar
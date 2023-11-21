import React from 'react'
import Link from 'next/link'
function page() {
    return (
        <div className='pagtienda'>
            <h1>tienda</h1>
            <p><Link href="/electronica">electronica</Link></p>
            <p><Link href="/decoracion">decoracion</Link></p>
            <p><Link href="/mobiliario">mobiliario</Link></p>
            <p><Link href="/libros">libros</Link></p>
        </div>
    )
}

export default page
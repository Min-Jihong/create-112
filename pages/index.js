import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='container'>
      <h1>Welcome to the Dog Store</h1>
      <nav>
        <ul>
          <li><Link href='/products'><a>Products</a></Link></li>
          <li><Link href='/about'><a>About Us</a></Link></li>
        </ul>
      </nav>
    </div>
  );
}
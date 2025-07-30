import React from 'react';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <h1 style={{ margin: 0 }}>Navbar</h1>
      <a href="/" style={{ marginRight: '1rem' }}>Home</a>
      <a href="/about" style={{ marginRight: '1rem' }}>About</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}

export default Navbar;
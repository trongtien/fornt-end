import React from 'react'
import ProductComponent from '../components/Product/ProductComponent'
import BlogComponent from '../components/Blog/BlogComponent'

function HomePage() {
  return (
    <div className="home-page">
      <ProductComponent />
      <BlogComponent />
    </div>
  )
}

export default HomePage;
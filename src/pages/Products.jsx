import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 'iphone',
    name: 'iPhone 15 Pro',
    tagline: 'Titanium. Powerful. Pro.',
    image: '/assets/images/Apple-iPhone-15-Pro.jpg',
    link: '/iphone',
    learn: 'https://www.istore.co.za/shop-iphone-15-pro?srsltid=AfmBOorFh49KWHupWVqJXaomT7yT7lQCmuwjgMRj_uC9pmwpZyKDWzty',
  },
  {
    id: 'mac',
    name: 'Mac',
    tagline: 'Supercharged by Apple silicon.',
    image: '/assets/mac_Assets/MacBook.jpg',
    link: '/macbook',
    learn: 'https://www.apple.com/shop/buy-mac/macbook-pro/14-inch-m4-pro',
  },
  {
    id: 'ipad',
    name: 'iPad',
    tagline: 'Supercharged by Apple silicon.',
    image: '/assets/iPad_Assets/images/iPadImage.png',
    link: '/ipad',
    learn: 'https://www.apple.com/in/ipad-pro/specs/',
  },
]

const Products = () => {
  const [zoomImageCoordinate, setZoomImageCoordinate] = useState({ x: 0, y: 0 })
  const [zoomImage, setZoomImage] = useState(false)
  const [activeImage, setActiveImage] = useState(null)

  const handleZoom = useCallback((e, image) => {
    setZoomImage(true)
    setActiveImage(image)

    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = Math.min(Math.max((e.clientX - left) / width, 0), 1)
    const y = Math.min(Math.max((e.clientY - top) / height, 0), 1)


    requestAnimationFrame(() => {
      setZoomImageCoordinate({ x, y })
    })
  }, [])

  const handleZoomOutImage = () => {
    setZoomImage(false)
    setActiveImage(null)
  }

  return (
    <section className="min-h-screen bg-gray-950 text-white">
      {/* HERO */}
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight">
          Explore the lineup
        </h1>
        <p className="mt-6 text-white/60 text-lg">
          Choose a product. Experience it in 3D.
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="mx-auto max-w-6xl px-6 space-y-32">
        {products.map(product => (
          <div
            key={product.id}
            className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-16"
          >
            {/* IMAGE */}
            <div className="relative flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                onMouseMove={(e) => handleZoom(e, product.image)}
                onMouseLeave={handleZoomOutImage}
                className="max-h-[420px] object-contain opacity-90"
              />

              {/* ZOOM PREVIEW */}
              {zoomImage && activeImage === product.image && (
                <div className="hidden lg:block absolute right-[-520px] top-16 w-[420px] h-[420px] rounded-full overflow-hidden bg-[#f5f5f7] shadow-2xl border border-black/10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${activeImage})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: `${zoomImageCoordinate.x * 100}% ${zoomImageCoordinate.y * 100}%`,
                      backgroundSize: '200%',
                    }}
                  />
                </div>
              )}

            </div>

            {/* INFO */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light">
                {product.name}
              </h2>

              <p className="text-white/60 text-lg max-w-md">
                {product.tagline}
              </p>

              <div className="flex gap-6 pt-4">
                <div className="hover:bg-gradient-to-bl from-blue to-purple-700 p-0.5 rounded-full">
                  <a
                    href={product.link}
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm transition hover:bg-black"
                  >
                    View in 3D
                  </a>
                </div>

                <button className="text-sm text-white/60 hover:text-white transition">
                <a
                    href={product.learn}
                    target='blank'
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm transition hover:bg-black"
                  >
                    Learn more →
                  </a>
                  
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER SPACING */}
      <div className="h-32" />
    </section>
  )
}

export default Products

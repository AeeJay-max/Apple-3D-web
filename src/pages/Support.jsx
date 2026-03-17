import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ViewerHelp from './ViewerHelp'

const supportItems = [
  {
    title: 'iPhone Support',
    description: 'Help with viewing, performance, and features.',
    link: '/iphone',
    type: 'link',
  },
  {
    title: 'Mac Support',
    description: 'Get help exploring Mac in 3D.',
    link: '/macBook',
    type: 'link',
  },
  {
    title: '3D Viewer Help',
    description: 'Learn how to interact with and control 3D models.',
    type: 'modal',
  },
  {
    title: 'Contact Support',
    description: 'Reach out for assistance or feedback.',
    link: '#contact',
    type: 'link',
  },
]

const Support = () => {
  const [showViewerHelp, setShowViewerHelp] = useState(false)

  return (
    <section className="min-h-screen bg-black text-white">
      {/* HERO */}
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight">
          Support
        </h1>
        <p className="mt-6 text-white/60 text-lg max-w-xl mx-auto">
          Get help with products, features, and your 3D experience.
        </p>
      </div>

      {/* SUPPORT OPTIONS */}
      <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {supportItems.map(item => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 p-8 hover:border-white/30 transition"
          >
            <h2 className="text-2xl font-light mb-3">
              {item.title}
            </h2>

            <p className="text-white/60 mb-6">
              {item.description}
            </p>

            {item.type === 'link' && (
              <Link
                to={item.link}
                className="text-sm text-white/80 hover:text-white transition"
              >
                Learn more →
              </Link>
            )}

            {item.type === 'modal' && (
              <button
                onClick={() => setShowViewerHelp(true)}
                className="text-sm text-white/80 hover:text-white transition"
              >
                Learn more →
              </button>
            )}
          </div>
        ))}
      </div>

      {/* VIEWER HELP MODAL */}
      {showViewerHelp && (
        <ViewerHelp onClose={() => setShowViewerHelp(false)} />
      )}

      <div className="h-32" />
    </section>
  )
}

export default Support

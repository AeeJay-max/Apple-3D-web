import React from 'react'

const ViewerHelp = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-black text-white rounded-2xl w-full max-w-3xl h-[80%] overflow-y-auto p-8 border border-white/10"
        onClick={e => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-light">3D Viewer Help</h2>

          <button
            onClick={onClose}
            className="text-2xl text-white/60 hover:text-red-500 transition"
          >
            X
          </button>
        </div>

        {/* CONTENT */}
        <div className="space-y-10">
          <section>
            <h3 className="text-xl font-light mb-2">Rotate</h3>
            <p className="text-white/60">
              Click and drag to rotate the model freely in any direction.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-light mb-2">Zoom</h3>
            <p className="text-white/60">
              Scroll or pinch to zoom in and examine fine details.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-light mb-2">Performance</h3>
            <p className="text-white/60">
              3D models are optimized for smooth performance across devices.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ViewerHelp

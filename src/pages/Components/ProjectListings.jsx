

import React from 'react'

const ProjectListings = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700 px-12">We have properties with shares that cost as little as XAF 100,000</h1>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900">Featured Investment Properties</h2>
          <p className="text-gray-600 mt-2">Curated high-yield opportunities for RealBay investors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Property 1 */}
          <div className="group">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-purple-50">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600" 
                alt="Modern Villa" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-blue-900">Douala Villas</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Prime waterfront property with a projected 12% annual return. Fully managed and ready for fractional investment.
                </p>
              </div>
            </div>
          </div>

          {/* Property 2 */}
          <div className="group">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-purple-50">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600" 
                alt="Office Building" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-blue-900"> Yaounde Tech Hub Offices</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Commercial real estate in the heart of the city. Stable monthly dividends from top-tier corporate tenants.
                </p>
              </div>
            </div>
          </div>

          {/* Property 3 */}
          <div className="group">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-purple-50">
              <img 
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600" 
                alt="Suburban Estate" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-blue-900">Kribi Green Valley Estate</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Eco-friendly residential community. Focused on long-term capital appreciation and sustainable living.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default ProjectListings

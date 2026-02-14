import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Components/Logo.jsx";
import Navbar from "../Components/Navbar.jsx";

let investments = [1];

export default function MyInvestments() {
  return (
    <div>
        <Navbar showLinks={false} />
        <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-blue-700 px-12">My Investments</h1>
      {investments.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">You have not made any investments yet.</p>
      ) : (
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
          

        </div>)}
      </div>
    </section>
      {/* <h1 className="text-3xl font-bold text-blue-700 px-12">My Investments</h1>
      {investments.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">You have not made any investments yet.</p>
      ) : (
        <div className="px-12">
          {investments.map((investment) => (
            <div key={investment.id} className="border-b border-gray-200 py-4">
              <h2 className="text-xl font-semibold text-blue-800">{investment.propertyName}</h2>
              <p className="text-gray-600">{investment.description}</p>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}

export default function Home() {
  const products = [
    { name: "Hydrating Serum", price: "$45", category: "Serums", image: "https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Vitamin C Cream", price: "$38", category: "Moisturizers", image: "https://images.pexels.com/photos/3762882/pexels-photo-3762882.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Retinol Night Treatment", price: "$52", category: "Night Care", image: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Gentle Cleanser", price: "$28", category: "Cleansers", image: "https://images.pexels.com/photos/6621163/pexels-photo-6621163.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "SPF 50 Sunscreen", price: "$32", category: "Sun Protection", image: "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Eye Repair Complex", price: "$48", category: "Eye Care", image: "https://images.pexels.com/photos/4620866/pexels-photo-4620866.jpeg?auto=compress&cs=tinysrgb&w=800" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2"><span className="text-3xl">🛍️</span><div><h1 className="text-2xl font-bold">Modern Glow Skincare</h1><p className="text-xs text-white/80">Clean Beauty, Glowing Results</p></div></div>
          <div className="flex gap-6"><a href="#products" className="hover:text-purple-100 transition">Shop</a><a href="#about" className="hover:text-purple-100 transition">About</a><a href="#contact" className="hover:text-purple-100 transition">Contact</a><button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-50 transition">Cart</button></div>
        </nav>
      </header>

      <section className="relative h-[600px] overflow-hidden">
        <img src="https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Skincare" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-indigo-900/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl text-white"><h2 className="text-6xl font-bold mb-6">Radiant Skin Starts Here</h2><p className="text-xl mb-8">Premium, cruelty-free skincare formulated with natural ingredients</p><button className="bg-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 transition shadow-lg">Shop Collection</button></div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><h2 className="text-4xl font-bold text-gray-900 mb-4">Our Best Sellers</h2><p className="text-xl text-gray-600">Clean, effective skincare</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative h-64"><img src={product.image} alt={product.name} className="w-full h-full object-cover"/><div className="absolute top-4 right-4 bg-purple-500 text-white px-4 py-2 rounded-full font-bold">{product.price}</div></div>
                <div className="p-6"><span className="text-xs text-purple-600 font-semibold">{product.category}</span><h3 className="text-xl font-bold text-gray-900 mt-1 mb-4">{product.name}</h3><button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-full font-semibold hover:from-purple-600 hover:to-indigo-600 transition">Add to Cart</button></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 Modern Glow Skincare | Powered by <a href="https://pitchmarketing.agency" className="text-purple-400">Pitch Marketing Agency</a></p>
        </div>
      </footer>
    </div>
  );
}

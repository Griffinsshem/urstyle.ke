export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          About Urstyle.ke
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
          Urstyle.ke is a premium fashion brand designed to bring modern,
          high-quality, and stylish clothing to Kenya. We believe fashion is
          more than outfits — it's confidence, expression, and identity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">

          {/* Mission */}
          <div className="bg-gray-50 rounded-2xl p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide premium fashion at fair prices while giving customers
              a smooth shopping experience through superior technology and design.
            </p>
          </div>

          {/* Values */}
          <div className="bg-gray-50 rounded-2xl p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Values</h2>
            <ul className="text-gray-600 space-y-3">
              <li>✨ Premium Quality Standards</li>
              <li>✨ Customer-Centric Experience</li>
              <li>✨ Ethical Sourcing</li>
              <li>✨ Innovative & Trend-Driven Designs</li>
            </ul>
          </div>

        </div>

      </section>

    </div>
  );
}

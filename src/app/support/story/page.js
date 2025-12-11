export default function OurStoryPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-10">
        Our Story
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-3xl">
        Urstyle.ke was born from a simple vision — make premium fashion accessible
        and affordable for every Kenyan. What started as a small online shop has
        grown into one of the fastest-rising fashion platforms in the country.
      </p>

      {/* Founding */}
      <section className="mb-14 bg-white border rounded-xl p-10 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">🌟 How It All Began</h2>
        <p className="text-gray-600 leading-relaxed">
          In 2022, we noticed a gap in the market — stylish, high-quality clothing
          was either overpriced or hard to access. With a passion for fashion
          and a commitment to quality, we launched Urstyle.ke to bring premium
          styles closer to Kenyan shoppers.
        </p>
      </section>

      {/* Mission Evolution */}
      <section className="mb-14 bg-white border rounded-xl p-10 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">🚀 Growth & Evolution</h2>
        <p className="text-gray-600 leading-relaxed">
          From our humble beginnings, we’ve expanded our collections to include
          men's fashion, women’s outfits, sneakers, and accessories. Today,
          we proudly deliver nationwide with fast, reliable shipping.
        </p>
      </section>

      {/* Values */}
      <section className="mb-14 bg-white border rounded-xl p-10 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">💜 What Drives Us</h2>
        <ul className="space-y-3 text-gray-600">
          <li>• Commitment to premium quality</li>
          <li>• Fair pricing accessible to all</li>
          <li>• Ethical sourcing and sustainability</li>
          <li>• Excellent customer experience always</li>
        </ul>
      </section>

      {/* Future Vision */}
      <section className="bg-white border rounded-xl p-10 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">🌍 Our Vision for the Future</h2>
        <p className="text-gray-600 leading-relaxed">
          We aim to be the leading online fashion brand in Kenya and eventually
          across Africa — setting new standards in quality, technology, and
          customer satisfaction.
        </p>
      </section>

    </div>
  );
}

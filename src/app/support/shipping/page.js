export default function ShippingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-10">
        Shipping & Delivery
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-10">
        At Urstyle.ke, we ensure fast, safe, and reliable delivery across Kenya. Whether you're in
        Nairobi or upcountry, our logistics partners ensure you receive your order quickly and securely.
      </p>

      <div className="space-y-10">

        {/* Delivery Time */}
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            🚚 Delivery Time
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>• Nairobi: <strong>24 – 48 hours</strong></li>
            <li>• Major towns: <strong>2 – 3 days</strong></li>
            <li>• Remote areas: <strong>3 – 5 days</strong></li>
          </ul>
        </div>

        {/* Delivery Fees */}
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            💳 Delivery Fees
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>• Standard shipping: <strong>KSh 250</strong></li>
            <li>• Free delivery for orders above <strong>KSh 7,000</strong></li>
            <li>• Same-day delivery available in Nairobi (extra fees apply)</li>
          </ul>
        </div>

        {/* Tracking */}
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            📦 Order Tracking
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Once your order is shipped, you will receive an SMS/Email with your tracking number.
            You can track your parcel via our delivery partners or contact our support team for updates.
          </p>
        </div>

        {/* Packaging */}
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            🎁 Packaging
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All items are packaged securely to avoid damage during transportation. Clothing items are sealed,
            folded neatly, and placed inside protective bags.
          </p>
        </div>

      </div>
    </div>
  );
}

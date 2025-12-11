export default function ShippingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-10">
        Shipping & Delivery
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-10">
        We deliver nationwide across Kenya with fast, reliable, and affordable shipping options.
        Below is everything you need to know about our delivery timelines and costs.
      </p>

      <div className="space-y-10">

        {/* Delivery Times */}
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            🚚 Delivery Timelines
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>• **Nairobi & Kiambu:** Same-day or next-day delivery</li>
            <li>• **Major towns (Mombasa, Kisumu, Eldoret, Nakuru):** 1–2 days</li>
            <li>• **Remote areas:** 2–4 days depending on courier routes</li>
          </ul>
        </div>

        {/* Delivery Fees */}
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            💵 Delivery Fees
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>• Nairobi CBD: **KSh 150**</li>
            <li>• Nairobi outskirts / Kiambu: **KSh 200–300**</li>
            <li>• Major towns: **KSh 300–400**</li>
            <li>• Remote regions: **KSh 400–600**</li>
          </ul>
        </div>

        {/* Order Processing */}
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            🕒 Order Processing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Orders placed before **3:00 PM** are processed the same day.
            Orders placed after cut-off time are processed the next morning.
          </p>
        </div>

        {/* Delivery Notifications */}
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            📱 Delivery Notifications
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You’ll receive SMS or WhatsApp updates once your item is dispatched.
            Our rider or courier will call you when arriving at your location.
          </p>
        </div>

        {/* Pickup Option */}
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            🏬 Pickup Option
          </h2>
          <p className="text-gray-600 leading-relaxed">
            For urgent orders, we offer pickup from selected collection points in Nairobi.
            Contact customer support to confirm availability.
          </p>
        </div>
      </div>
    </div>
  );
}

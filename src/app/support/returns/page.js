export default function ReturnsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-10">
        Returns & Refunds
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-10">
        At Urstyle.ke, customer satisfaction is our top priority. If you're not happy with your order,
        we offer a smooth and fair return or exchange process—hassle free.
      </p>

      <div className="space-y-10">

        {/* Return Eligibility */}
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            ✅ Return Eligibility
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>• Items must be returned within <strong>7 days</strong> of delivery.</li>
            <li>• Products must be <strong>unused, unwashed, and in original packaging</strong>.</li>
            <li>• Tags must still be attached.</li>
            <li>• Items like innerwear or swimwear are not eligible for return due to hygiene reasons.</li>
          </ul>
        </div>

        {/* Exchanges */}
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            🔄 Exchanges
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you need a different size or color, we offer <strong>free exchanges</strong> as long as
            the item meets the return conditions. Exchanges depend on stock availability.
          </p>
        </div>

        {/* Refunds */}
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            💰 Refunds
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Once your returned product is inspected and approved, you will receive:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• Refund to M-Pesa within <strong>24–72 hours</strong></li>
            <li>• Or store credit redeemable on your next purchase</li>
          </ul>
        </div>

        {/* Return Process */}
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            📬 How to Start a Return
          </h2>
          <ol className="text-gray-600 list-decimal list-inside space-y-2">
            <li>Contact us via WhatsApp, email, or the support page.</li>
            <li>Provide your order number and the reason for return.</li>
            <li>Our team will guide you on where to drop off the item or how to schedule pickup.</li>
            <li>Wait for inspection and refund/exchange confirmation.</li>
          </ol>
        </div>

      </div>
    </div>
  );
}

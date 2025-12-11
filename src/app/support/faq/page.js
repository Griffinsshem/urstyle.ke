export default function FAQPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-10">
        Frequently Asked Questions
      </h1>

      <div className="space-y-8">

        {/* Question 1 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            How long does delivery take?
          </h2>
          <p className="text-gray-600 mt-2">
            Delivery within Nairobi takes 24–48 hours. Other regions in Kenya take 2–4 days depending on courier routes.
          </p>
        </div>

        {/* Question 2 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Do you offer free delivery?
          </h2>
          <p className="text-gray-600 mt-2">
            Orders above KSh 7,000 qualify for free delivery nationwide.
          </p>
        </div>

        {/* Question 3 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            How do I return an item?
          </h2>
          <p className="text-gray-600 mt-2">
            Items can be returned within 7 days if unworn and in original packaging. Visit our Returns Policy page for details.
          </p>
        </div>

        {/* Question 4 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Do you have a physical shop?
          </h2>
          <p className="text-gray-600 mt-2">
            Yes — we have pickups available in Nairobi. Contact our support team for location details.
          </p>
        </div>

      </div>
    </div>
  );
}

"use client";
import { Package, RotateCcw, HandCoins, Mail } from "lucide-react";

export default function ReturnsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Returns & Refunds
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>

        <p className="text-gray-900 font-semibold mt-4 text-lg font-medium">
          Easy, transparent, and customer-first return policy.
        </p>
      </div>

      <div className="space-y-10">
        {/* Return Eligibility */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-red-300 transition-all duration-200">
          <div className="flex items-center gap-3 mb-4">
            <Package className="w-7 h-7 text-red-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              Return Eligibility
            </h2>
          </div>

          <ul className="text-gray-900 font-base space-y-2 leading-relaxed">
            <li>• Items must be returned within <strong>7 days</strong> of delivery.</li>
            <li>• Products must be <strong>unused, unwashed, and in original packaging</strong>.</li>
            <li>• Tags must still be attached.</li>
            <li>• Innerwear and swimwear cannot be returned for hygiene reasons.</li>
          </ul>
        </div>

        {/* Exchanges */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-200">
          <div className="flex items-center gap-3 mb-4">
            <RotateCcw className="w-7 h-7 text-purple-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              Exchanges
            </h2>
          </div>

          <p className="text-gray-900 leading-relaxed">
            Need a different size or color? No problem. We offer
            <strong> free exchanges</strong> as long as items meet the return conditions.
            All exchanges depend on stock availability.
          </p>
        </div>

        {/* Refunds */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-orange-300 transition-all duration-200">
          <div className="flex items-center gap-3 mb-4">
            <HandCoins className="w-7 h-7 text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              Refunds
            </h2>
          </div>

          <p className="text-gray-900 leading-relaxed mb-3">
            Once your returned product is inspected and approved, you can receive:
          </p>

          <ul className="text-gray-900 font-semibold space-y-2">
            <li>• Refund to M-Pesa within <strong>24–72 hours</strong></li>
            <li>• Store credit for future purchases</li>
          </ul>
        </div>

        {/* How to Return */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-7 h-7 text-blue-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              How to Start a Return
            </h2>
          </div>

          <ol className="text-gray-900 list-decimal list-inside space-y-3 leading-relaxed">
            <li>Contact us via WhatsApp, email, or through the support page.</li>
            <li>Share your order number and reason for return.</li>
            <li>We’ll guide you on drop-off points or pickup arrangements.</li>
            <li>Wait for inspection and confirmation of refund or exchange.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

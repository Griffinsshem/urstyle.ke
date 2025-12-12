"use client";
import {
  Truck,
  Wallet,
  Clock,
  MessageCircle,
  Store,
} from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Shipping & Delivery
        </h1>
        <div className="w-28 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-600 mt-4 text-lg font-medium">
          Fast, reliable, and nationwide delivery across Kenya.
        </p>
      </div>

      <div className="space-y-10">
        {/* Delivery Timelines */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200">
          <div className="flex items-center gap-3 mb-4">
            <Truck className="w-7 h-7 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Delivery Timelines
            </h2>
          </div>

          <ul className="text-gray-600 space-y-2 leading-relaxed">
            <li>• <strong>Nairobi & Kiambu:</strong> Same-day or next-day delivery</li>
            <li>• <strong>Major towns (Mombasa, Kisumu, Eldoret, Nakuru):</strong> 1–2 days</li>
            <li>• <strong>Remote areas:</strong> 2–4 days depending on courier routes</li>
          </ul>
        </div>

        {/* Delivery Fees */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-200">
          <div className="flex items-center gap-3 mb-4">
            <Wallet className="w-7 h-7 text-purple-500" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Delivery Fees
            </h2>
          </div>

          <ul className="text-gray-600 space-y-2 leading-relaxed">
            <li>• <strong>Nairobi CBD:</strong> KSh 150</li>
            <li>• <strong>Nairobi outskirts / Kiambu:</strong> KSh 200–300</li>
            <li>• <strong>Major towns:</strong> KSh 300–400</li>
            <li>• <strong>Remote regions:</strong> KSh 400–600</li>
          </ul>
        </div>

        {/* Order Processing */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-200">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-7 h-7 text-indigo-500" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Order Processing
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Orders placed before <strong>3:00 PM</strong> are processed the same day.
            Orders placed after the cut-off will be prepared the next morning.
          </p>
        </div>

        {/* Delivery Notifications */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="w-7 h-7 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Delivery Notifications
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            You’ll receive SMS or WhatsApp updates once your order is dispatched.
            Riders or courier partners will also call upon arrival.
          </p>
        </div>

        {/* Pickup Option */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-200">
          <div className="flex items-center gap-3 mb-4">
            <Store className="w-7 h-7 text-green-500" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Pickup Option
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Need your order urgently? You can pick it up from selected collection
            points in Nairobi. Contact customer support to check availability.
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag, Minus, Plus, Package, CreditCard } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeItem);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 250 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <ShoppingBag className="w-8 h-8 text-purple-600" />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 
                        bg-clip-text text-transparent">
            Your Cart
          </h1>
        </div>

        {/* EMPTY CART */}
        {cart.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl shadow-lg border">
            <Package className="w-16 h-16 mx-auto text-gray-400 mb-6" />

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mb-6">
              Start shopping and discover our premium fashion collection.
            </p>

            <Link
              href="/products"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 
                         text-white px-8 py-3 rounded-xl font-semibold shadow hover:opacity-90"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">

            {/* CART ITEMS */}
            <div className="md:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="relative w-32 h-32 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-purple-600 font-bold text-sm mt-1">
                      KSh {item.price.toLocaleString()}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4 mt-4">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                      >
                        <Minus className="w-4 h-4 text-gray-700" />
                      </button>

                      <span className="font-semibold text-gray-800">{item.quantity}</span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                      >
                        <Plus className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600 transition"
                  >
                    <Trash2 className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>

            {/* ORDER SUMMARY */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 h-fit">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="w-6 h-6 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">Order Summary</h3>
              </div>

              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">KSh {subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold">KSh {shipping.toLocaleString()}</span>
                </div>

                <div className="border-t border-gray-200 my-4"></div>

                <div className="flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span className="text-purple-700">KSh {total.toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-500 
                                 text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90">
                Proceed to Checkout
              </button>

              <Link
                href="/products"
                className="block text-center mt-4 text-purple-600 hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

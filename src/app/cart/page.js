"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeItem);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 250 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-extrabold mb-10 text-gray-900">
          Your Cart
        </h1>

        {/* EMPTY CART */}
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven't added anything yet.
            </p>

            <Link
              href="/products"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-purple-700"
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
                  className="flex items-center gap-6 bg-white p-5 rounded-xl shadow border"
                >
                  <div className="relative w-28 h-28 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-red-600 font-bold text-sm mt-1">
                      KSh {item.price.toLocaleString()}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 text-lg bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        -
                      </button>

                      <span className="font-semibold">{item.quantity}</span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 text-lg bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* ORDER SUMMARY */}
            <div className="bg-white p-6 rounded-xl shadow border h-fit">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>

              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>KSh {subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>KSh {shipping.toLocaleString()}</span>
                </div>

                <div className="border-t border-gray-200 my-4"></div>

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>KSh {total.toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold shadow hover:opacity-90">
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

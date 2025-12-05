import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold">
        Premium Cloth
      </Link>

      <nav className="flex gap-4">
        <Link href="/products" className="text-gray-700 hover:text-gray-900">
          Products
        </Link>
        <Link href="/cart" className="text-gray-700 hover:text-gray-900">
          Cart
        </Link>
        <Link href="/admin/login" className="text-gray-700 hover:text-gray-900">
          Admin
        </Link>
      </nav>
    </header>
  );
}

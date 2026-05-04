import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-6">
      <div className="text-center max-w-md">
        {/* Error Code */}
        <h1 className="text-6xl font-bold text-neutral-800 mb-4">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-neutral-700 mb-2">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-neutral-500 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="px-5 py-2 rounded-xl bg-black text-white hover:bg-neutral-800 transition"
          >
            Go Home
          </Link>

          <Link
            href="/contact"
            className="px-5 py-2 rounded-xl border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

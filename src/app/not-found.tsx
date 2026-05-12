import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span
            className="material-symbols-outlined text-primary text-4xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            search_off
          </span>
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-4">
          404
        </h1>
        <p className="font-body text-lg text-on-surface-variant mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-full font-label font-bold text-lg hover:bg-primary-container transition-all duration-300 shadow-md active:scale-95"
        >
          <span className="material-symbols-outlined text-xl">home</span>
          Back to Home
        </Link>
      </div>
    </div>
  );
}

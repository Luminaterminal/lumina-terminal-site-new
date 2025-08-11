export default function NotFound() {
  return (
    <main className="grid h-[60vh] place-items-center text-center">
      <div>
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="mt-2 text-gray-600">The page you’re looking for doesn’t exist.</p>
        <a
          href="/"
          className="mt-6 inline-block rounded bg-indigo-600 px-4 py-2 text-white"
        >
          Go home
        </a>
      </div>
    </main>
  );
}

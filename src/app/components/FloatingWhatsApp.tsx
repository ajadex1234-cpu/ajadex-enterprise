export function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hi AJADEX, I want to build or grow my ecommerce brand.",
  );

  return (
    <a
      href={`https://wa.me/2347014080845?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AJADEX on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/40 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-8 w-8 md:h-9 md:w-9"
        fill="currentColor"
      >
        <path d="M16.01 3.2c-7.05 0-12.78 5.67-12.78 12.64 0 2.25.6 4.45 1.73 6.37L3.12 28.8l6.8-1.78a12.9 12.9 0 0 0 6.09 1.53c7.05 0 12.78-5.67 12.78-12.65S23.06 3.2 16.01 3.2Zm0 23.2c-1.86 0-3.68-.49-5.27-1.42l-.38-.22-4.03 1.06 1.07-3.87-.25-.4a10.4 10.4 0 0 1-1.62-5.7c0-5.79 4.7-10.5 10.48-10.5s10.48 4.71 10.48 10.5-4.7 10.55-10.48 10.55Zm5.75-7.9c-.31-.16-1.85-.91-2.14-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.37.24-.68.08-.31-.16-1.32-.48-2.52-1.54-.93-.82-1.56-1.84-1.74-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.69-.97-2.31-.26-.6-.52-.52-.71-.53h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.06-1.1 2.6s1.13 3.02 1.29 3.23c.16.21 2.23 3.37 5.4 4.72.75.32 1.34.52 1.8.66.76.24 1.45.21 2 .13.61-.09 1.85-.75 2.11-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z" />
      </svg>
    </a>
  );
}

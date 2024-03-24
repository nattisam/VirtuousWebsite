export default function Homepage() {
  return (
    <div id="hero" className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="font-bold tracking-tight text-gray-900 sm:text-6xl">
              Virtuous Promotions Agency
            </h1>
            <p className="mt-12 text-lg leading-8 text-gray-600">
              We facilitate the connection of highly skilled and passionate promoters with our esteemed partner companies, fostering synergistic relationships that drive mutual growth and success.            </p>
            {/* Buttons */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="https://forms.gle/AvBBuNB7LJTmfMf67" className="rounded-md bg-[#f5d480] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                We are hiring
              </a>
              <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">
                Let's Talk <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

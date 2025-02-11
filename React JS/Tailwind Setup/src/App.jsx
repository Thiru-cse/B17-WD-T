import "./App.css";

function App() {
  return (
    <>
      {/* <!-- Header, Main --> */}
      <div className="container mx-auto">
        <header className="flex justify-between items-center px-8 py-5 bg-white shadow">
          <div className="text-xl font-semibold text-black">Brainwave.io</div>
          <nav className="flex space-x-4 text-gray-600">
            <a href="" className="hover:text-gray-900">
              Demos
            </a>
            <a href="" className="hover:text-gray-900">
              Pages
            </a>
            <a href="" className="hover:text-gray-900">
              Support
            </a>
            <a href="" className="hover:text-gray-900">
              Contact
            </a>
          </nav>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Get Started Free
          </button>
        </header>

        <main className="text-center mt-12">
          <h1 className="text-4xl font-semibold text-black">
            Get things done by awesome remote team
          </h1>
          <p className="text-gray-500 mt-4">
            We share common trends and strategies for improving your rental
            income and making sure you stay in high demand.
          </p>
          <div className="flex justify-center mt-5 space-x-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Get Started for free
            </button>
            <button className="bg-transparent border border-gray-500 px-4 py-2 rounded">
              Learn More
            </button>
          </div>

          <div className="flex justify-center mt-12">
            <img
              className="w-2/4 rounded shadow-lg"
              src="./assests/firstimage.png"
              alt=""
            />
          </div>
        </main>

        {/* <!-- Features --> */}
        <section className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div>
            <h1 className="text-xl font-semibold mt-6">Project management</h1>
            <p className="text-sm mt-3 text-gray-700">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold mt-6">Time tracking</h1>
            <p className="text-sm mt-3 text-gray-700">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold mt-6">Beautiful mobile app</h1>
            <p className="text-sm mt-3 text-gray-700">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
        </section>
      </div>

      {/* <!-- Body Content --> */}
      <div className="container mx-auto mt-12 bg-gray-100">
        <section className="flex justify-center items-center py-10">
          <div className="w-1/2 px-10 text-left">
            <h2 className="text-3xl font-bold text-black">
              Getting started with Albino is easier than ever
            </h2>
            <p className=" mt-5 text-sm text-gray-600">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page so quickly with Albino.
            </p>
            <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded text-sm">
              Getting Started Free
            </button>
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              src="./assests/secondimage.png"
              alt=""
              className="rounded shadow-sm"
            />
          </div>
        </section>

        <section className="bg-white">
          <div className="flex justify-around text-center">
            <div className="mt-12 mb-12">
              <h2 className="text-2xl font-bold">1M+</h2>
              <p className="text-cxl text-gray-600 mt-3">
                Customers visit Albino every month
              </p>
            </div>
            <div className="mt-12 mb-12">
              <h2 className="text-2xl font-bold">93%</h2>
              <p className="text-cxl text-gray-600 mt-3">
                Satisfaction rate from our customers
              </p>
            </div>
            <div className="mt-12 mb-12">
              <h2 className="text-2xl font-bold">4.9</h2>
              <p className="text-cxl text-gray-600 mt-3">
                Average customer rating on our platform
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- Hero Section --> */}
      <div className="container mx-auto mt-10">
        <section className="bg-gray-100 py-16">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-black mb-4">
              Manage your projects fast
            </h1>
            <p className="text-gray-600">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          <div className="flex justify-center items-center gap-16">
            <div className="flex justify-center items-center w-96">
              <img
                src="./assests/thirdimage.png"
                alt=""
                className="rounded shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-white w-8 h-8 bg-blue-600 rounded-full text-sm flex flex-shrink-0 items-center justify-center">
                  1
                </div>
                <div className="-mt-1">
                  <h3 className="text-2xl font-semibold text-black">
                    Create a project
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    With lots of unique blocks, you can easily build a page
                    without coding
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-white w-8 h-8 bg-blue-600 rounded-full text-sm flex flex-shrink-0 items-center justify-center">
                  2
                </div>
                <div className="-mt-1">
                  <h3 className="text-2xl font-semibold text-black">
                    Assign related people
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    With lots of unique blocks, you can easily build a page
                    without coding
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-white w-8 h-8 bg-blue-600 rounded-full text-sm flex flex-shrink-0 items-center justify-center">
                  3
                </div>
                <div className="-mt-1">
                  <h3 className="text-2xl font-semibold text-black">
                    Make it done on-time
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    With lots of unique blocks, you can easily build a page
                    without coding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- Testimonial --> */}
      <div className="container mx-auto mt-20">
        <div className="flex justify-evenly items-center">
          {/* <!-- Testimonial 1 --> */}
          <div className="flex-col flex justify-center items-center">
            <img
              src="./assests/fourthimage.png"
              alt=""
              className="rounded-full w-16 h-16"
            />
            <h1 className="text-xl font-semibold text-black">
              "You made it so simple"
            </h1>
            <p className="text-sm text-gray-600 w-56 text-center mt-6">
              My new site is so much faster and easier to work with than my old
              site.
            </p>
            <p className="font-semibold text-xl text-black mt-8">
              Corey Valdez
            </p>
            <p className="text-sm">Founder at Zenix</p>
          </div>
          {/* <!-- Testimonial 2 --> */}
          <div>
            <img
              src="./assests/fifthimage.png"
              alt=""
              className="rounded-full w-16 h-16"
            />
            <h1 className="text-xl font-semibold text-black">
              "You made it so simple"
            </h1>
            <p className="text-sm text-gray-600 w-56 text-center mt-6">
              My new site is so much faster and easier to work with than my old
              site.
            </p>
            <p className="font-semibold text-xl text-black mt-8">
              Corey Valdez
            </p>
            <p className="text-sm">Founder at Zenix</p>
          </div>
        </div>
      </div>

      {/* <!-- Pricing & plan --> */}
      <div className="container mx-auto mt-10 ">
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Pricing & Plans
            </h2>
            <p className="text-sm text-gray-400 text-center mb-10">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>

          <div className="flex justify-center space-x-6 m-8 mb-15">
            {/* <!-- basic plan --> */}
            <div className="bg-white text-gray-900 rounded-lg p-8 flex flex-col items-center">
              <span className="text-indigo-700 font-semibold mb-4">BASIC</span>
              <h2 className="text-4xl font-bold mb-3">$29</h2>
              <p className="text-gray-600 mb-6">One time purchase</p>
              <p className="text-gray-600 mb-8 text-center">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
              <button
                className="bg-indigo-600 text-white px-6 py-3 
                        rounded-full "
              >
                Get Started for free
              </button>
            </div>

            {/* <!-- standard plan -->                 */}
            <div className="bg-white text-gray-900 rounded-lg p-8 flex flex-col items-center">
              <span className="text-indigo-700 font-semibold mb-4">
                STANDARD
              </span>
              <h2 className="text-4xl font-bold mb-3">$29</h2>
              <p className="text-gray-600 mb-6">One time purchase</p>
              <p className="text-gray-600 mb-8 text-center">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
              <button
                className="bg-indigo-600 text-white px-6 py-3 
                        rounded-full "
              >
                Get Started for free
              </button>
            </div>

            {/* <!-- premium plan --> */}
            <div className="bg-white text-gray-900 rounded-lg p-8 flex flex-col items-center">
              <span className="text-indigo-700 font-semibold mb-4">
                PREMIUM
              </span>
              <h2 className="text-4xl font-bold mb-3">$29</h2>
              <p className="text-gray-600 mb-6">One time purchase</p>
              <p className="text-gray-600 mb-8 text-center">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
              <button
                className="bg-indigo-600 text-white px-6 py-3 
                    rounded-full "
              >
                Get Started for free
              </button>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Can I use Albino for my clients?
                  </h4>
                  <p className="text-gray-400">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page. Intuitive
                    timeline sagittis interdum halkanastra.
                  </p>
                  <a href="#" className="text-indigo-400 mt-2 inline-block">
                    Click to learn more ›
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Does it work with WordPress?
                  </h4>
                  <p className="text-gray-400">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page. Intuitive
                    timeline sagittis interdum halkanastra.
                  </p>
                  <a href="#" className="text-indigo-400 mt-2 inline-block">
                    Click to learn more ›
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
                <div>
                  <h4 className="font-semibold mb-2">Do I get free updates?</h4>
                  <p className="text-gray-400">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page. Intuitive
                    timeline sagittis interdum halkanastra.
                  </p>
                  <a href="#" className="text-indigo-400 mt-2 inline-block">
                    Click to learn more ›
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Will you provide support?
                  </h4>
                  <p className="text-gray-400">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page. Intuitive
                    timeline sagittis interdum halkanastra.
                  </p>
                  <a href="#" className="text-indigo-400 mt-2 inline-block">
                    Click to learn more ›
                  </a>
                </div>
              </div>
            </div>

            <p className="text-center mt-12 text-gray-400">
              Haven't got your answer?{" "}
              <a href="#" className="text-indigo-400">
                Contact our support now
              </a>
            </p>
          </div>
        </section>
      </div>

      {/* <!-- Blocks Section --> */}
      <div className="flex justify-center space-x-6 bg-white py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black  mr-20">
            Build better landing page fast
          </h2>
          <p className="text-gray-600 mt-2 text-wrap text-left ml-34 ">
            With lots of unique blocks, you can easily build a page without
            coding. <br /> Build your next landing page.
          </p>
        </div>
        <div className="flex justify-evenly space-x-6 mt-8 ">
          <button className="w-25 h-10 px-2 bg-blue-100 text-blue-700 rounded ml-16">
            Learn more
          </button>
          <button className="w-25 h-10 px-2 bg-blue-600 text-white  rounded">
            Get it now
          </button>
        </div>
      </div>

      {/* <!-- Footer Section --> */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-5 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-black">Brainwave.io</h3>
              <p className="text-gray-600 mt-4">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Help desk
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Content Writing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    SEO for Business
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    UI Design
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Return Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

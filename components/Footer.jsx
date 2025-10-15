import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500;600;700&display=swap');
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      
      <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white font-poppins">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Organization Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-playfair font-bold mb-4">Aawaz-e-Khalq Foundation</h3>
              <p className="text-green-100 mb-6 leading-relaxed">
                Empowering communities through sustainable initiatives. Together, we create lasting change and build a brighter future for all.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: FacebookIcon, href: "#" },
                  { icon: TwitterIcon, href: "#" },
                  { icon: InstagramIcon, href: "#" },
                  { icon: YoutubeIcon, href: "#" }
                ].map((Social, index) => (
                  <a key={index} href={Social.href} className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center hover:bg-green-600 transition-all duration-300 hover:scale-110">
                    <Social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-5 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Projects', 'Events', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link 
                      href={`/${link.toLowerCase().replace(' ', '-')}`} 
                      className="text-green-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Global Offices */}
            <div>
              <h4 className="text-lg font-semibold mb-5 text-white">Our Offices</h4>
              <div className="space-y-4">
                {/* Pakistan Office */}
                <div className="bg-green-800/40 rounded-xl p-4 border border-green-700/30 hover:border-green-600/50 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mr-2 shadow-lg">
                      <span className="text-white text-xs font-bold">PK</span>
                    </div>
                    <h5 className="font-semibold text-green-300">Pakistan</h5>
                  </div>
                  <div className="text-sm space-y-1">
                    <p className="text-green-200 font-medium">+92 344 9513020</p>
                    <p className="text-green-300 text-xs leading-tight">
                      Office no. 2, Al Madina Market, Opposite BHU Jabri Kalish, Shohal Mazullah Tehsil Balakot, District Mansehra, KPK
                    </p>
                  </div>
                </div>

                {/* USA Office */}
                <div className="bg-green-800/40 rounded-xl p-4 border border-green-700/30 hover:border-green-600/50 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mr-2 shadow-lg">
                      <span className="text-white text-xs font-bold">US</span>
                    </div>
                    <h5 className="font-semibold text-green-300">USA</h5>
                  </div>
                  <div className="text-sm space-y-1">
                    <p className="text-green-200 font-medium">+1 (301) 755-8323</p>
                    <p className="text-green-300 text-xs leading-tight">
                      Briggs Chaney Rd, Silver Spring, MD
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center text-green-200 bg-green-800/30 rounded-lg p-3">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">info.aawazekhalq@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-10 pt-8 border-t border-green-700/50">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-xl font-playfair font-bold mb-3">Stay Connected</h4>
              <p className="text-green-200 mb-6">Subscribe to our newsletter for updates on our projects and initiatives</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="px-4 py-3 rounded-lg bg-green-800 border border-green-600 text-white placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent flex-1 min-w-0"
                />
                <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-green-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-green-950 border-t border-green-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-green-400 text-sm text-center md:text-left mb-3 md:mb-0">
                © {new Date().getFullYear()} Aawaz-e-Khalq Foundation. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link href="/privacy" className="text-green-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-green-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/disclaimer" className="text-green-400 hover:text-white transition-colors duration-300">
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

// Social Media Icons Components
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
)

const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
  </svg>
)

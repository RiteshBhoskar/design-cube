

export default function Footer() {
    return (
      <footer id="footer" className="bg-[#9cff33] text-[#57a515] px-6 py-10 lg:px-20 -mx-4 relative overflow-clip">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">
          <div className="space-y-4">
            <h3 className="font-semibold">CONTACT US</h3>
            <p className="text-black">
              42 Market Avenue<br />
              Westminster London W1B<br />
              4DE United Kingdom
            </p>
            <p className="text-sm text-gray-700">design@designcube.com</p>
            <a href="#" className="underline">Book a Call</a>
            <button className="mt-4 ml-5 sm:ml-0 px-5 py-3 bg-black text-white rounded-full">
              Get a Price Quote
            </button>
          </div>
  
          <div>
            <h3 className="font-semibold mb-3">MENU</h3>
            <ul className="space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-3">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Licensing</a></li>
              <li><a href="#">404</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-3">SOCIAL MEDIA</h3>
            <ul className="space-y-2">
              <li><a href="#">X(Twitter)</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Youtube</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">INSIGHTS</h3>
            <ul className="space-y-2">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Design Trends 2025</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
        </div>
  
        <h3 className="text-5xl sm:text-[150px] font-bold mt-10 flex justify-center text-[#7ef500]">
          DESIGN*CUBE
        </h3>
      </footer>
    )
  }
  
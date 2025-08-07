const Footer = () => {
  return (
    <footer className="bg-[#0A4860] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-2">LoanSpring</h4>
          <p className="text-sm text-gray-300">
            Empowering your financial journey with simple and secure loans.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">How it works</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-sm text-gray-300">
            support@loanspring.com<br />
            +1 (800) 123-4567<br />
            Mon - Fri: 9am - 5pm
          </p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} LoanSpring. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

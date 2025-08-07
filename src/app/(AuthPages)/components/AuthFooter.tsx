const AuthFooter = () => {
  return (
    <footer className="text-center text-sm text-gray-500 py-6 px-4">
      <p>
        &copy; {new Date().getFullYear()} LoanSpring. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
      </div>
    </footer>
  )
}

export default AuthFooter

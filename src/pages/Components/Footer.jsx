export default function Footer () {
    return (
        <div>
            <section className="bg-blue-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-bold mb-4">RealBay</h3>
                            <p className="text-sm">Invest in real estate with fractional ownership.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                            <ul className="text-sm space-y-2">
                                <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
                                <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
                                <li><a href="/faq" className="hover:text-blue-300">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Legal</h3>
                            <ul className="text-sm space-y-2">
                                <li><a href="/terms" className="hover:text-blue-300">Terms of Service</a></li>
                                <li><a href="/privacy" className="hover:text-blue-300">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                            <p className="text-sm">Email: info@realbay.com</p>
                            <p className="text-sm">Phone: +237 123 456 789</p>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-blue-800 mt-8 pt-6 text-center text-sm">
                        &copy; {new Date().getFullYear()} RealBay. All rights reserved.
                    </div>

                </div>

            </section>

        </div>
    )
}
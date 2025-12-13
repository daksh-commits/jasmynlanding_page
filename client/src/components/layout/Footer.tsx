import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <a className="text-4xl font-serif font-bold text-primary mb-6 block">Jasmyn AI</a>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Ready when you are. The AI receptionist that never sleeps.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Links</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Capabilities</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Waitlist</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Get Early Access</h4>
            <p className="text-sm text-gray-500 mb-4">
              Join the future of business automation.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400 mb-4 md:mb-0">
            © 2025 Jasmyn AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <div className="w-5 h-5 bg-gray-200 rounded-full hover:bg-primary cursor-pointer transition-colors" />
            <div className="w-5 h-5 bg-gray-200 rounded-full hover:bg-primary cursor-pointer transition-colors" />
            <div className="w-5 h-5 bg-gray-200 rounded-full hover:bg-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}

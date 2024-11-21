import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-4">
            <div className="max-w-7xl mx-auto px-4">
                {/* Footer Links */}
                <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-600">
                    <a href="#" className="hover:text-blue-600">Hiring Lab</a>
                    <a href="#" className="hover:text-blue-600">Career advice</a>
                    <a href="#" className="hover:text-blue-600">Browse Jobs</a>
                    <a href="#" className="hover:text-blue-600">Browse Companies</a>
                    <a href="#" className="hover:text-blue-600">Resume help</a>
                    <a href="#" className="hover:text-blue-600">Salaries</a>
                    <a href="#" className="hover:text-blue-600">Indeed Events</a>
                    <a href="#" className="hover:text-blue-600">Work at Indeed</a>
                    <a href="#" className="hover:text-blue-600">Countries</a>
                    <a href="#" className="hover:text-blue-600">About</a>
                    <a href="#" className="hover:text-blue-600">Help Center</a>
                    <a href="#" className="hover:text-blue-600">ESG at Indeed</a>
                </div>

                {/* Additional Links and Copyright */}
                <div className="mt-4 flex flex-wrap justify-center space-x-4 text-sm text-gray-500">
                    <span>© 2024 Indeed</span>
                    <a href="#" className="hover:text-blue-600">Your Privacy Choices</a>
                    <a href="#" className="hover:text-blue-600">Accessibility at Indeed</a>
                    <a href="#" className="hover:text-blue-600">Privacy Center and Ad Choices</a>
                    <a href="#" className="hover:text-blue-600">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

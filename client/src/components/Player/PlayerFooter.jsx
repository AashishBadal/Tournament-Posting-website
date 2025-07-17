import React from 'react';
import { FaDiscord, FaTwitter, FaTwitch, FaYoutube, FaQuestionCircle } from 'react-icons/fa';

const PlayerFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 border-t border-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left section - Logo and copyright */}
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                TournamentHub
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              © {new Date().getFullYear()} TournamentHub. All rights reserved.
            </p>
          </div>

          {/* Middle section - Quick links */}
          <div className="mb-4 md:mb-0">
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Support
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Right section - Social media */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Discord"
            >
              <FaDiscord size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitch"
            >
              <FaTwitch size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Help"
            >
              <FaQuestionCircle size={20} />
            </a>
          </div>
        </div>

        {/* Tournament status bar */}
        <div className="mt-6 pt-4 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex items-center mb-2 sm:mb-0">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              <span>Tournament System Status: Operational</span>
            </div>
            <div>
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PlayerFooter;
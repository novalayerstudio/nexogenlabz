import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-dark border-t border-white/10 py-12 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-nexogen-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-nexogen-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © {currentYear} NexogenLabz. All rights reserved.
            </p>

            {/* Contact Info */}
            <div className="text-center md:text-right space-y-1 text-gray-400">
              <p>
                Email: <a href="mailto:Nexogenlabz@proton.me" className="hover:text-white transition-colors">Nexogenlabz@proton.me</a>
              </p>
              {/* <p>
                Phone: <a href="tel:+1-555-NEXOGEN" className="hover:text-white transition-colors">+1 (555) NEXOGEN</a>
              </p> */}
              <a
                href="https://discord.gg/matgfQTbVn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-purple-400 transition-colors font-medium"
              >
                Join Discord Server
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
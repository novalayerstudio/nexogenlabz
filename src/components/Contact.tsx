import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';


const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to optimize your performance? Connect with our research team for personalized guidance
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 justify-center">
            {/* Email */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Email Us</h3>
              <p className="text-gray-300 mb-4">Get in touch with our team</p>
              <a
                href="mailto:Nexogenlabz@proton.me"
                className="text-blue-400 hover:text-purple-400 transition-colors font-medium"
              >
                Nexogenlabz@proton.me
              </a>
            </div>
            
            
            {/* Discord */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaDiscord className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Join Our Discord</h3>
              <p className="text-gray-300 mb-4">Connect with our community</p>
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
    </section>
  );
};

export default Contact;
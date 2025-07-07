import React, { useState, useEffect } from 'react';
import { Info, X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  detailedInfo: {
    benefits: string[];
    dosage: string;
    ingredients: string;
    research: string;
  };
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

const products: Product[] = [
  {
    id: 1,
    name: "KLOW",
    description: "Powerful peptide blend designed to support healing, recovery, and overall wellness",
    image: "/images/klow-1222.png",
    detailedInfo: {
      benefits: [
        "Supports faster tissue repair",
        "Helps reduce inflammation",
        "Promotes wound healing",
        "Enhances recovery and wellbeing"
      ],
      dosage: "80mg blend per serving",
      ingredients: "GHK-Cu, TB-500, BPC-157, KPV",
      research: "A synergistic combination of four regenerative peptides known for their ability to accelerate healing, reduce inflammation, and support the body's natural recovery processes."
    }
  },
  {
    id: 2,
    name: "GLP-1",
    description: "GLP-1 support for appetite control and metabolic balance",
    image: "/images/glp-12222.png",
    detailedInfo: {
      benefits: [
        "Helps reduce appetite",
        "Supports healthy blood sugar levels",
        "Improves energy balance",
        "Promotes metabolic health"
      ],
      dosage: "Take orally as directed",
      ingredients: "Orforglipron (GLP-1 receptor activator)",
      research: "A next-generation, orally available compound that activates GLP-1 pathways to help regulate appetite, glucose levels, and energy use—without the need for injections."
    }
  },
  {
    id: 3,
    name: "TESTOSTERONE",
    description: "Essential hormone support for strength, vitality, and performance",
    image: "/images/test-12222.png",
    detailedInfo: {
      benefits: [
        "Boosts muscle growth and strength",
        "Enhances endurance and recovery",
        "Supports mood and energy",
        "Maintains hormonal balance"
      ],
      dosage: "Use as directed",
      ingredients: "Testosterone (bioavailable androgen compound)",
      research: "A key hormone that plays a vital role in muscle development, energy levels, and overall performance, helping you feel and function at your best."
    }
  }
];

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setTimeout(() => setIsModalVisible(true), 10);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProduct) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedProduct]);

  return (
    <section id="products" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge peptide formulations designed for peak human performance and optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => openModal(product)}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 relative group"
            >
              {/* Info button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(product);
                }}
                className="absolute top-4 right-4 w-8 h-8 bg-blue-500/20 hover:bg-blue-500/40 rounded-full flex items-center justify-center transition-all duration-300 z-10"
              >
                <Info size={16} className="text-blue-400" />
              </button>

              <div className="text-center">
                <div className="mb-6 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 mx-auto transition-all duration-300"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Info Modal */}
      {selectedProduct && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
            isModalVisible 
              ? 'bg-black/70 backdrop-blur-sm' 
              : 'bg-black/0 backdrop-blur-none'
          }`}
          onClick={closeModal}
        >
          <div 
            className={`bg-gray-900/90 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ease-out ${
              isModalVisible 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 translate-y-4'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedProduct.name}</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Benefits</h4>
                <ul className="space-y-2">
                  {selectedProduct.detailedInfo.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Dosage</h4>
                <p className="text-gray-300">{selectedProduct.detailedInfo.dosage}</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Ingredients</h4>
                <p className="text-gray-300">{selectedProduct.detailedInfo.ingredients}</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Research</h4>
                <p className="text-gray-300">{selectedProduct.detailedInfo.research}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
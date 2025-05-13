import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  imgSrc: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imgSrc,
  category,
}) => {
  return (
    <div className="group bg-cream-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative overflow-hidden h-48 sm:h-64">
        <div className="absolute top-2 right-2 bg-purple-700 text-cream-100 px-2 py-1 text-xs font-medium rounded-full z-10">
          {category}
        </div>
        <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-purple-900 mb-2">{title}</h3>
        <p className="text-purple-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
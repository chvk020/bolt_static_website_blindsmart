import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-cream-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
      <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-purple-700" />
      </div>
      <h3 className="text-xl font-semibold text-purple-900 mb-2">{title}</h3>
      <p className="text-purple-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
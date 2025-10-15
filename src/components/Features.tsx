import React from 'react';
import { LockIcon, LineChartIcon, ServerIcon } from 'lucide-react';
interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}
interface FeaturesProps {
  sectionTitle: string;
  items: Array<{
    title: string;
    description: string;
  }>;
}
export const Features = ({
  sectionTitle,
  items
}: FeaturesProps) => {
  const featuresWithIcons: FeatureItem[] = [{
    ...items[0],
    icon: <LockIcon className="w-8 h-8 text-primary-400" />
  }, {
    ...items[1],
    icon: <LineChartIcon className="w-8 h-8 text-primary-400" />
  }, {
    ...items[2],
    icon: <ServerIcon className="w-8 h-8 text-primary-400" />
  }];
  return <section id="features" className="py-24 bg-dark-400">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
          {sectionTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuresWithIcons.map((feature, index) => <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="mb-6 p-4 bg-dark-300 rounded-full border border-dark-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-light-300">
                {feature.title}
              </h3>
              <p className="text-light-500 leading-relaxed">
                {feature.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
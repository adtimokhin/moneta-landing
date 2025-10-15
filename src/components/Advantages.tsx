import React from 'react';
import { ShieldCheckIcon, ZapIcon, CoinsIcon, AnchorIcon } from 'lucide-react';
interface AdvantageItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}
interface AdvantagesProps {
  sectionTitle: string;
  items: Array<{
    title: string;
    description: string;
  }>;
}
export const Advantages = ({
  sectionTitle,
  items
}: AdvantagesProps) => {
  const advantagesWithIcons: AdvantageItem[] = [{
    ...items[0],
    icon: <ShieldCheckIcon className="w-6 h-6 text-primary-400" />
  }, {
    ...items[1],
    icon: <ZapIcon className="w-6 h-6 text-primary-400" />
  }, {
    ...items[2],
    icon: <CoinsIcon className="w-6 h-6 text-primary-400" />
  }, {
    ...items[3],
    icon: <AnchorIcon className="w-6 h-6 text-primary-400" />
  }];
  return <section id="advantages" className="py-24 bg-dark-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
          {sectionTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {advantagesWithIcons.map((item, index) => <div key={index} className="bg-dark-400 p-8 rounded-lg border border-dark-300 hover:border-dark-200 transition-all duration-300">
              <div className="flex items-start">
                <div className="p-3 bg-dark-300 rounded-lg mr-5 border border-dark-200">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-light-300">
                    {item.title}
                  </h3>
                  <p className="text-light-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
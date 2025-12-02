import { Users, Coffee, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '1500+',
    label: 'Farmers Supported'
  },
  {
    icon: Coffee,
    number: '2M+',
    label: 'Cups Served'
  },
  {
    icon: Award,
    number: '10+',
    label: 'Years of Quality'
  }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-xl text-white/90">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Card from './Card';
import Button from './Button';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

export default function ProductCard({ name, description, image }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col bg-white/5 border border-gold-500/20">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gold-400 mb-2">{name}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        <Button variant="outline" size="sm" className="w-full border-gold-500 text-gold-400 hover:bg-gold-500/10">
          View Details
        </Button>
      </div>
    </Card>
  );
}

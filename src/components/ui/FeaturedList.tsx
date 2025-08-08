import { Check } from 'lucide-react'; 

interface FeatureListProps {
  items: string[];
}

export const FeatureList: React.FC<FeatureListProps> = ({ items }) => (
  <ul className="space-y-3 mt-6">
    {items.map((item, index) => (
      <li key={index} className="flex items-center">
        <Check className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
        <span className="text-gray-600 dark:text-gray-300">{item}</span>
      </li>
    ))}
  </ul>
);
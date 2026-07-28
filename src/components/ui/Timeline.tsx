interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description?: string;
  current?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-200"></div>
      
      {items.map((item, index) => (
        <div key={item.id} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          {/* Timeline dot */}
          <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
            item.current ? 'bg-blue-600 border-blue-200' : 'bg-gray-300 border-gray-100'
          }`}></div>
          
          {/* Content */}
          <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
            <div className={`p-4 rounded-lg ${item.current ? 'bg-blue-50 border border-blue-200' : 'bg-white border border-gray-200'}`}>
              <span className="text-sm text-gray-500">{item.date}</span>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.subtitle}</p>
              {item.description && (
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
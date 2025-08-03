import React from 'react';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const sampleArticles: Article[] = [
  {
    id: '1',
    title: 'Strategic Planning in Uncertain Times: A Framework for Success',
    excerpt: 'Learn how to develop resilient business strategies that adapt to market volatility and economic uncertainty while maintaining growth momentum.',
    author: 'Bay State Growth Team',
    date: 'January 12, 2025',
    readTime: '8 min read',
    category: 'Strategy',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Digital Transformation: Beyond Technology Implementation',
    excerpt: 'Discover why successful digital transformation requires cultural change, process optimization, and strategic alignment beyond just technology adoption.',
    author: 'Bay State Growth Team',
    date: 'January 8, 2025',
    readTime: '6 min read',
    category: 'Digital Transformation',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Building High-Performance Teams in Remote Work Environments',
    excerpt: 'Explore proven methodologies for creating cohesive, productive teams that excel in distributed work settings while maintaining company culture.',
    author: 'Bay State Growth Team',
    date: 'January 5, 2025',
    readTime: '7 min read',
    category: 'Leadership',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Data-Driven Decision Making: From Analytics to Action',
    excerpt: 'Transform your business intelligence into actionable insights with frameworks that bridge the gap between data analysis and strategic execution.',
    author: 'Bay State Growth Team',
    date: 'December 28, 2024',
    readTime: '9 min read',
    category: 'Analytics',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'Sustainable Growth: Balancing Profitability and Purpose',
    excerpt: 'Learn how to build business models that drive financial success while creating positive impact for stakeholders and communities.',
    author: 'Bay State Growth Team',
    date: 'December 22, 2024',
    readTime: '5 min read',
    category: 'Sustainability',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'Innovation Management: Turning Ideas into Market Success',
    excerpt: 'Discover systematic approaches to innovation that help organizations consistently bring breakthrough products and services to market.',
    author: 'Bay State Growth Team',
    date: 'December 18, 2024',
    readTime: '10 min read',
    category: 'Innovation',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const categories = ['All', 'Strategy', 'Digital Transformation', 'Leadership', 'Analytics', 'Sustainability', 'Innovation'];

interface InsightsPageProps {
  onBack: () => void;
}

export default function InsightsPage({ onBack }: InsightsPageProps) {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [filteredArticles, setFilteredArticles] = React.useState(sampleArticles);

  React.useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredArticles(sampleArticles);
    } else {
      setFilteredArticles(sampleArticles.filter(article => article.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>
            <div className="text-right">
              <h1 className="text-3xl font-bold text-gray-900">Business Insights</h1>
              <p className="text-gray-600 mt-1">Strategic perspectives and industry expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Insights That Drive Growth
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay ahead of industry trends with our expert analysis, strategic frameworks, 
            and actionable insights designed to accelerate your business success.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                  
                  <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Informed</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Get the latest insights and strategic perspectives delivered to your inbox monthly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
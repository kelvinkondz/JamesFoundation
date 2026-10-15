import VideoShowcase from '../components/VideoShowcase';

const Impact = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Impact</h1>
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-600">
            See the difference we're making in communities around the world through our youth empowerment initiatives.
          </p>
        </div>
        
        <VideoShowcase />
      </div>
    </div>
  );
};

export default Impact;

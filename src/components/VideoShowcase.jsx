import { useState } from 'react';

const videos = [
  {
    id: 1,
    url: "/video/WhatsApp Video 2026-01-15 at 22.38.59.mp4",
    title: "Support Programs"
  },
  {
    id: 2,
    url: "/video/WhatsApp Video 2026-04-30 at 15.00.35.mp4",
    title: "Our Progress"
  },
  {
    id: 3,
    url: "/video/WhatsApp Video 2026-04-30 at 15.00.36.mp4",
    title: "Youth Empowerment"
  },
  {
    id: 4,
    url: "/video/WhatsApp Video 2026-04-30 at 15.00.40.mp4",
    title: "Empowering Communities"
  }
];

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => setSelectedVideo(video);
  const closeModal = () => setSelectedVideo(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Work in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we're making a real difference in communities around the world through our humanitarian efforts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg bg-black group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => openModal(video)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <video
                  className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  muted
                  loop
                  playsInline
                  onMouseOver={(e) => e.target.play()}
                  onMouseOut={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                >
                  <source src={video.url} type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-indigo-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l8-5-8-5z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                <p className="text-white text-sm font-medium">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fadeIn" 
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white text-4xl font-light hover:text-gray-300 transition-colors"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <video
                controls
                autoPlay
                className="w-full max-h-[80vh]"
              >
                <source src={selectedVideo.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">{selectedVideo.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoShowcase;

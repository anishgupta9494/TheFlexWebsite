import { Dumbbell } from 'lucide-react';

export const Home = () => {
  const galleryImages = [
    { id: 1, src: '/images/gym-1.webp', alt: 'Modern Gym Facility' },
    { id: 2, src: '/images/gym-2.webp', alt: 'Training Equipment' },
    { id: 3, src: '/images/gym-3.webp', alt: 'Fitness Studio' },
    { id: 4, src: '/images/gym-4.webp', alt: 'Exercise Area' },
    { id: 5, src: '/images/gym-5.webp', alt: 'Workout Zone' },
    { id: 6, src: '/images/gym-6.jpg', alt: 'Gym Interior' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Orange */}
      <section className="relative bg-gradient-to-b from-orange-600 to-orange-500 text-white py-20 px-4 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-700 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Dumbbell className="w-12 h-12" />
            <span className="text-sm font-semibold tracking-widest uppercase opacity-95">
              Welcome to The Flex
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Experience Our Facilities
          </h1>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto leading-relaxed">
            State-of-the-art fitness facilities designed for your health and wellness journey
          </p>
        </div>
      </section>

      {/* Gallery Section - Orange Background */}
      <section className="bg-orange-50 py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">Our Gym Gallery</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-orange-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Explore our premium fitness facilities and discover the perfect environment for your workouts
            </p>
          </div>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 md:h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="bg-orange-600 text-white p-5 text-center">
                  <p className="text-base font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Info Section - Orange Accent */}
      <section className="bg-white py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join The Flex Community</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg mb-12 leading-relaxed">
              Welcome to The Flex - your premier fitness destination. Whether you're a beginner or an experienced athlete, 
              our world-class facilities and supportive community are here to help you achieve your fitness goals and transform your life.
            </p>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-8 border-orange-600 p-8 rounded-xl shadow-lg">
              <p className="text-orange-900 font-semibold text-lg leading-relaxed">
                ✨ Discover world-class training equipment, expert coaching, and a community dedicated to your success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Orange */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Fitness?</h2>
          <p className="text-lg opacity-95 mb-8">
            Join our community and start your fitness journey today
          </p>
          <button className="bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

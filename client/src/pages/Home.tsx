import { ChevronRight, Dumbbell, Instagram, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const CONTACT_NUMBER = '9326126576';

type GalleryImage = {
  src: string;
  alt: string;
};

type LocationGallery = {
  id: string;
  name: string;
  description: string;
  address: string;
  instagramUrl: string;
  images: GalleryImage[];
};

const locationGalleries: LocationGallery[] = [
  {
    id: 'malad-east',
    name: 'The Flex (Malad East)',
    description:
      'A fully equipped training space near Malad Railway Station with strength, cardio, and functional workout zones.',
    address:
      '2nd Floor, Daftary Road, above Janta Niwas, near Railway Station, Malad, Malad East, Mumbai, Maharashtra 400097',
    instagramUrl: 'https://www.instagram.com/theflex_____/?hl=en',
    images: [
      { src: '/images/gym-1.webp', alt: 'The Flex Malad East training floor' },
      { src: '/images/gym-2.webp', alt: 'The Flex Malad East workout equipment' },
      { src: '/images/gym-3.webp', alt: 'The Flex Malad East fitness studio' },
      { src: '/images/gym-4.webp', alt: 'The Flex Malad East exercise area' },
      { src: '/images/gym-5.webp', alt: 'The Flex Malad East workout zone' },
      { src: '/images/gym-6.jpg', alt: 'The Flex Malad East gym interior' },
    ],
  },
  {
    id: 'malad-west',
    name: 'The Flex (Malad West)',
    description:
      'A bright, modern gym floor in Nadiadwala Colony with free weights, racks, turf, and dedicated workout spaces.',
    address:
      '1st floor, Nadiadwala Colony No.1, Malad, Nadiyawala Colony 1, Malad West, Mumbai, Maharashtra 400064',
    instagramUrl: 'https://www.instagram.com/theflexmaladwest/',
    images: [
      { src: '/images/malad-west/malad-west-1.webp', alt: 'The Flex Malad West dumbbell area' },
      { src: '/images/malad-west/malad-west-2.webp', alt: 'The Flex Malad West members posing in the gym' },
      { src: '/images/malad-west/malad-west-3.webp', alt: 'The Flex Malad West open training floor' },
      { src: '/images/malad-west/malad-west-4.webp', alt: 'The Flex Malad West free weights and benches' },
      { src: '/images/malad-west/malad-west-5.webp', alt: 'The Flex Malad West rack and strength area' },
      { src: '/images/malad-west/malad-west-6.webp', alt: 'The Flex Malad West mirror and dumbbell station' },
      { src: '/images/malad-west/malad-west-7.webp', alt: 'The Flex Malad West reception desk' },
      { src: '/images/malad-west/malad-west-8.webp', alt: 'The Flex Malad West turf and machine area' },
    ],
  },
];

const initialGalleryIndexes = locationGalleries.reduce<Record<string, number>>((indexes, location) => {
  indexes[location.id] = 0;
  return indexes;
}, {});

export const Home = () => {
  const [activeIndexes, setActiveIndexes] = useState<Record<string, number>>(initialGalleryIndexes);

  useEffect(() => {
    const rotationTimer = window.setInterval(() => {
      setActiveIndexes((currentIndexes) => {
        const nextIndexes = { ...currentIndexes };

        locationGalleries.forEach((location) => {
          nextIndexes[location.id] = ((currentIndexes[location.id] ?? 0) + 1) % location.images.length;
        });

        return nextIndexes;
      });
    }, 4500);

    return () => window.clearInterval(rotationTimer);
  }, []);

  const showNextImage = (location: LocationGallery) => {
    setActiveIndexes((currentIndexes) => ({
      ...currentIndexes,
      [location.id]: ((currentIndexes[location.id] ?? 0) + 1) % location.images.length,
    }));
  };

  const showImage = (location: LocationGallery, imageIndex: number) => {
    setActiveIndexes((currentIndexes) => ({
      ...currentIndexes,
      [location.id]: imageIndex,
    }));
  };

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
            State-of-the-art fitness facilities across Malad East and Malad West
          </p>
        </div>
      </section>

      {/* Location Gallery Section */}
      <section className="bg-gray-950 py-20 md:py-28 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Gym Gallery</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Explore both The Flex locations and find the training floor closest to you
            </p>
          </div>

          <div className="space-y-10">
            {locationGalleries.map((location) => {
              const activeIndex = activeIndexes[location.id] ?? 0;
              const activeImage = location.images[activeIndex];

              return (
                <article
                  key={location.id}
                  className="grid overflow-hidden rounded-lg bg-white text-gray-950 shadow-2xl lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]"
                >
                  <div className="relative min-h-[420px] bg-gray-900 sm:min-h-[520px]">
                    <img
                      src={activeImage.src}
                      alt={activeImage.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute left-4 top-4 rounded-md bg-black/70 px-3 py-2 text-sm font-semibold text-white">
                      {activeIndex + 1} / {location.images.length}
                    </div>
                    <button
                      type="button"
                      onClick={() => showNextImage(location)}
                      className="absolute bottom-4 right-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
                      aria-label={`Show next ${location.name} photo`}
                    >
                      <ChevronRight className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="flex flex-col justify-between gap-8 p-6 md:p-8">
                    <div>
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
                        Location Gallery
                      </p>
                      <h3 className="mb-4 text-3xl font-bold text-gray-950 md:text-4xl">
                        {location.name}
                      </h3>
                      <p className="text-base leading-relaxed text-gray-600">{location.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex gap-3 text-gray-700">
                        <MapPin className="mt-1 h-5 w-5 shrink-0 text-orange-600" aria-hidden="true" />
                        <p className="text-sm leading-relaxed md:text-base">{location.address}</p>
                      </div>
                      <a
                        href={location.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-sm font-semibold text-gray-900 hover:text-orange-700 md:text-base"
                      >
                        <Instagram className="h-5 w-5 text-orange-600" aria-hidden="true" />
                        Instagram
                      </a>
                      <a
                        href={`tel:${CONTACT_NUMBER}`}
                        className="flex items-center gap-3 text-sm font-semibold text-gray-900 hover:text-orange-700 md:text-base"
                      >
                        <Phone className="h-5 w-5 text-orange-600" aria-hidden="true" />
                        {CONTACT_NUMBER}
                      </a>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {location.images.map((image, imageIndex) => {
                        const isActive = imageIndex === activeIndex;

                        return (
                          <button
                            key={image.src}
                            type="button"
                            onClick={() => showImage(location, imageIndex)}
                            className={`h-16 overflow-hidden rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-orange-600 ${
                              isActive ? 'border-orange-600' : 'border-transparent'
                            }`}
                            aria-label={`Show ${location.name} photo ${imageIndex + 1}`}
                          >
                            <img src={image.src} alt="" className="h-full w-full object-cover" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </article>
              );
            })}
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

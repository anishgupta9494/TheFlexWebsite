import { ChevronRight, Dumbbell, Instagram, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const CONTACT_NUMBER = '9773115684';
const getGoogleMapsUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

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
    <div className="overflow-hidden bg-gray-950">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-64px)] overflow-hidden px-4 py-16 text-white md:py-24">
        <img
          src="/images/malad-west/malad-west-4.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/88 to-gray-950/55"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-950 to-transparent"></div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-220px)] max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.55fr)]">
          <div>
            <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-300">
              <Dumbbell className="h-8 w-8" />
              <span>Mumbai Training Club</span>
            </div>
            <div className="mb-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <img
                src="/images/logo.png"
                alt="The Flex Logo"
                className="h-32 w-32 shrink-0 rounded-full bg-white object-contain p-3 shadow-2xl ring-4 ring-white/40 md:h-[200px] md:w-[200px]"
              />
              <h1 className="max-w-3xl text-5xl font-black leading-none md:text-7xl">
                Experience Our Facilities
              </h1>
            </div>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
              State-of-the-art fitness facilities across Malad East and Malad West
            </p>
            <div className="mt-8 border-l-4 border-orange-500 pl-5">
              <p className="text-lg font-bold uppercase tracking-[0.18em] text-orange-200 md:text-2xl">
                Your Complete Fitness Destination
              </p>
              <p className="mt-3 text-base font-semibold text-white md:text-xl">
                Cardio + Strength | Steam Room
              </p>
              <p className="mt-2 text-base font-semibold text-white md:text-xl">
                Yoga | Zumba | Karate | Functional Training
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-white/15 bg-black/45 p-5 shadow-2xl backdrop-blur-md">
            {['Strength Zone', 'Cardio Floor', 'Steam Room', 'Group Classes'].map((feature) => (
              <div
                key={feature}
                className="flex items-center justify-between border-b border-white/10 py-4 last:border-b-0"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-300">
                  {feature}
                </span>
                <span className="h-2 w-8 bg-orange-500" aria-hidden="true"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Gallery Section */}
      <section className="bg-gray-950 px-4 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black md:text-5xl">Our Gym Gallery</h2>
            <div className="mx-auto mb-6 h-1 w-20 bg-orange-600"></div>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300">
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
                  className="grid overflow-hidden rounded-lg border border-white/10 bg-gray-900 text-white shadow-2xl lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]"
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
                      <h3 className="mb-4 text-3xl font-black text-white md:text-4xl">
                        {location.name}
                      </h3>
                      <p className="text-base leading-relaxed text-gray-300">{location.description}</p>
                    </div>

                    <div className="space-y-4">
                      <a
                        href={getGoogleMapsUrl(location.address)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex gap-3 text-gray-300 hover:text-orange-300"
                      >
                        <MapPin className="mt-1 h-5 w-5 shrink-0 text-orange-600" aria-hidden="true" />
                        <span className="text-sm leading-relaxed md:text-base">{location.address}</span>
                      </a>
                      <a
                        href={location.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-sm font-semibold text-gray-200 hover:text-orange-300 md:text-base"
                      >
                        <Instagram className="h-5 w-5 text-orange-600" aria-hidden="true" />
                        Instagram
                      </a>
                      <a
                        href={`tel:${CONTACT_NUMBER}`}
                        className="flex items-center gap-3 text-sm font-semibold text-gray-200 hover:text-orange-300 md:text-base"
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
                            className={`h-16 overflow-hidden rounded-md border-2 opacity-85 focus:outline-none focus:ring-2 focus:ring-orange-600 hover:opacity-100 ${
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
      <section className="bg-gray-100 px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Train With Intent</p>
            <h2 className="text-4xl font-black leading-tight text-gray-950 md:text-5xl">Join The Flex Community</h2>
          </div>
          <div className="border-l-4 border-orange-600 pl-6">
            <p className="text-lg leading-relaxed text-gray-700">
              Welcome to The Flex - your premier fitness destination. Whether you're a beginner or an experienced athlete, 
              our world-class facilities and supportive community are here to help you achieve your fitness goals and transform your life.
            </p>
            <div className="mt-6">
              <p className="text-lg font-bold leading-relaxed text-gray-950">
                Discover world-class training equipment, expert coaching, and a community dedicated to your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Orange */}
      <section className="bg-orange-600 px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-black md:text-4xl">Ready to Transform Your Fitness?</h2>
          <p className="mb-8 text-lg opacity-95">
            Join our community and start your fitness journey today
          </p>
          <a
            href={`tel:${CONTACT_NUMBER}`}
            className="mx-auto inline-flex items-center justify-center gap-3 rounded-full bg-gray-950 px-6 py-3 text-lg font-bold text-white shadow-xl hover:bg-gray-900"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {CONTACT_NUMBER}
          </a>
        </div>
      </section>
    </div>
  );
};


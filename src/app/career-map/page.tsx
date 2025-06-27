'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const CareerMapPage = () => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imagePath, setImagePath] = useState("");

  // Set the page title and image path
  useEffect(() => {
    document.title = 'Career Map | Kaizen';
    
    // Base URL for the application
    const baseUrl = window.location.origin;
    
    // Try different image paths
    const possiblePaths = [
      `${baseUrl}/images/career/career-map.png`,
      `${baseUrl}/_next/static/media/career-map.png`,
      `${baseUrl}/career-map.png`,
      "/images/career/career-map.png",
      "/_next/static/media/career-map.png",
      "/career-map.png"
    ];
    
    // Try to find the correct image path
    const checkImage = (path: string) => {
      return new Promise<string | null>((resolve) => {
        const img = new window.Image();
        img.src = path;
        img.onload = () => resolve(path);
        img.onerror = () => resolve(null);
      });
    };

    const findImage = async () => {
      for (const path of possiblePaths) {
        try {
          const result = await checkImage(path);
          if (result) {
            console.log('Found image at:', result);
            // Use relative path for Next.js Image component
            const relativePath = path.replace(baseUrl, '');
            setImagePath(relativePath);
            setIsLoading(false);
            setImageError(false);
            return;
          }
        } catch (error) {
          console.error(`Error checking image at ${path}:`, error);
        }
      }
      console.error('Image not found at any of the following paths:', possiblePaths);
      setIsLoading(false);
      setImageError(true);
    };

    findImage();
  }, []);

  if (isLoading) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <div className="container">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Loading career map...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-5xl">
            Career Growth Path
          </h1>
          <p className="mt-4 text-base text-body-color dark:text-body-color-dark md:text-lg">
            Your journey to success starts here at Kaizen
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="relative rounded-xl bg-white p-4 shadow-three dark:bg-gray-dark sm:p-6 md:p-8 lg:p-10">
            {!imageError ? (
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <Image
                  src={imagePath}
                  alt="Kaizen Career Map"
                  fill
                  className="rounded-lg object-contain"
                  priority
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                <div className="mb-4 text-5xl">📊</div>
                <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white">Career Map Coming Soon</h3>
                <p className="mb-6 text-body-color dark:text-body-color-dark">
                  We're currently working on our career progression map. Check back soon to explore career opportunities at Kaizen.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  (Image not found at: {imagePath})
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white">
              Start Your Journey With Us
            </h2>
            <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
              Explore exciting career opportunities and grow with Kaizen
            </p>
            <a
              href="/contact"
              className="inline-block rounded-md bg-primary px-8 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-signUp"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerMapPage;

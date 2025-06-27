'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function TestImagePage() {
  const [imageStatus, setImageStatus] = useState('loading...');
  const imagePath = '/images/career/career-map.png';
  const fullUrl = `${window.location.origin}${imagePath}`;

  useEffect(() => {
    // Try to load the image
    const img = new window.Image();
    
    img.onload = () => {
      setImageStatus(`✅ Image loaded successfully from: ${fullUrl}`);
    };
    
    img.onerror = (e) => {
      setImageStatus(`❌ Failed to load image from: ${fullUrl}\nError: ${e.toString()}`);
    };
    
    img.src = fullUrl;
  }, [fullUrl]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Image Loading Test</h1>
      
      <div className="mb-6 p-4 bg-gray-100 rounded">
        <h2 className="font-semibold mb-2">Test Results:</h2>
        <pre className="whitespace-pre-wrap bg-white p-3 rounded">{imageStatus}</pre>
      </div>
      
      <div className="mb-6 p-4 bg-gray-100 rounded">
        <h2 className="font-semibold mb-2">Image Preview:</h2>
        <div className="relative w-full h-64 bg-white border border-gray-300 rounded flex items-center justify-center">
          <Image
            src={imagePath}
            alt="Test Career Map"
            fill
            className="object-contain p-2"
            onLoadingComplete={() => console.log('Image loaded')}
            onError={(e) => console.error('Image error:', e)}
          />
        </div>
      </div>
      
      <div className="p-4 bg-gray-100 rounded">
        <h2 className="font-semibold mb-2">Troubleshooting Steps:</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Check if the file exists at: <code className="bg-gray-200 px-1 rounded">public{imagePath}</code></li>
          <li>Verify file permissions</li>
          <li>Try accessing the image directly: <a href={fullUrl} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{fullUrl}</a></li>
          <li>Check browser's developer console (F12) for any error messages</li>
        </ol>
      </div>
    </div>
  );
}

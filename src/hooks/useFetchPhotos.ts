import { useEffect, useState } from "react";
import axios from "axios";

const UNSPLASH_API_KEY = "CbkCtJMDdUBwUv_8FDOlgRu6MGQ36JTL_kP6dr0AcKI"; // Replace with your actual API key

export const useFetchPhotos = (refreshInterval: number) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchPhotos = async (retries = 3) => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: { count: 9 },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
        },
      });
      const photoUrls = response.data.map((photo: any) => photo.urls.small);
      setPhotos(photoUrls);
    } catch (error: any) {
      if (retries > 0 && error.response?.status === 403) {
        // Retry after a delay
        console.log(`Rate limit exceeded. Retrying in 30 seconds...`);
        setTimeout(() => fetchPhotos(retries - 1), 30000);
      } else {
        setError("Error fetching photos: " + (error.response ? error.response.data : error.message));
        console.error("Error fetching photos", error);
      }
    }
  };
  

  useEffect(() => {
    fetchPhotos();
    const intervalId = setInterval(fetchPhotos, refreshInterval);
    return () => clearInterval(intervalId);
  }, [refreshInterval]);

  return { photos, error }; // Return both photos and error
};

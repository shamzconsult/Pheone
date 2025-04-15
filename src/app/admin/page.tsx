"use client";

import React, { useEffect, useState } from 'react';
import GalleryDashboard from './_components/GalleryDashboard';
import EventCreationForm from './_components/EventDashboard';
import { getAllImageClient } from '@/service/gallery/gallery.client';
import { isAuthenticated, redirectToLogin } from '@/utils/auth';

export default function AdminPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      redirectToLogin();
      return;
    }

    const fetchImages = async () => {
      try {
        const data = await getAllImageClient();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (!isAuthenticated()) {
    return null; 
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <GalleryDashboard images={images}/>
      <EventCreationForm/>
    </div>
  );
}
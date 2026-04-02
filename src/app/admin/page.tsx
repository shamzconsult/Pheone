"use client";

import React, { useEffect, useState } from "react";
import GalleryDashboard from "./_components/GalleryDashboard";
import EventCreationForm from "./_components/EventDashboard";
import { getAllImageClient } from "@/service/gallery/gallery.client";
import { getAllPopupsClient, type Popup } from "@/service/popup/popup.client";
import { isAuthenticated, redirectToLogin } from "@/utils/auth";
import PopupCreationForm from "./_components/PopupCreationForm";
import PopupDashboard from "./_components/PopupDashboard";

export default function AdminPage() {
  const [images, setImages] = useState([]);
  const [popups, setPopups] = useState<Popup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      redirectToLogin();
      return;
    }

    const fetchData = async () => {
      try {
        const [galleryData, popupData] = await Promise.all([
          getAllImageClient(),
          getAllPopupsClient(),
        ]);

        setImages(galleryData);
        setPopups(popupData);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
    <div className="space-y-10">
      <GalleryDashboard images={images} />
      <EventCreationForm />

      <PopupCreationForm
        onCreated={(newPopup: Popup) => setPopups((prev) => [newPopup, ...prev])}
      />

      <PopupDashboard popups={popups} setPopups={setPopups} />
    </div>
  );
}
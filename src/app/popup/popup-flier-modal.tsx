"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { getActivePopupClient } from "@/service/popup/popup.client";

type PopupType = {
  _id: string;
  images?: string[];
  image?: string;
  isActive: boolean;
  showOncePerSession: boolean;
};

export default function PopupFlyerModal() {
  const [popup, setPopup] = useState<PopupType | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPopup = async () => {
      try {
        const data = await getActivePopupClient();

        if (!data) {
          setLoading(false);
          return;
        }

        const sessionKey = `popup_seen_${data._id}`;
        const alreadySeen = sessionStorage.getItem(sessionKey);

        if (data.showOncePerSession && alreadySeen) {
          setLoading(false);
          return;
        }

        setPopup(data);
        setOpen(true);

        if (data.showOncePerSession) {
          sessionStorage.setItem(sessionKey, "true");
        }
      } catch (error) {
        console.error("Error fetching popup:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopup();
  }, []);

  const popupImages = useMemo(() => {
    if (!popup) return [];

    if (Array.isArray(popup.images) && popup.images.length > 0) {
      return popup.images;
    }

    if (popup.image) {
      return [popup.image];
    }

    return [];
  }, [popup]);

  const handlePrev = () => {
    if (!popupImages.length) return;

    setCurrentIndex((prev) =>
      prev === 0 ? popupImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!popupImages.length) return;

    setCurrentIndex((prev) =>
      prev === popupImages.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (currentIndex >= popupImages.length) {
      setCurrentIndex(0);
    }
  }, [popupImages.length, currentIndex]);

  if (loading || !popup || !open || popupImages.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white"
        >
          <FiX />
        </button>

        <div className="relative h-[500px] w-full">
          <Image
            src={popupImages[currentIndex]}
            alt={`Popup flyer ${currentIndex + 1}`}
            fill
            className="object-cover"
          />

          {popupImages.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white"
              >
                <FiChevronLeft />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white"
              >
                <FiChevronRight />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
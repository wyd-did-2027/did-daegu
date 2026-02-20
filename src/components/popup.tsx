"use client";

import { useState, useEffect, startTransition } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const POPUP_STORAGE_KEY = "popup_hidden_until";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hiddenUntil = localStorage.getItem(POPUP_STORAGE_KEY);
    if (hiddenUntil) {
      const hideDate = new Date(hiddenUntil);
      if (new Date() < hideDate) {
        return;
      }
    }
    startTransition(() => {
      setIsOpen(true);
    });
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleHideFor7Days = () => {
    const hideUntil = new Date();
    hideUntil.setDate(hideUntil.getDate() + 7);
    localStorage.setItem(POPUP_STORAGE_KEY, hideUntil.toISOString());
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="max-w-md p-0 overflow-hidden"
        showCloseButton={false}
      >
        <div className="relative w-full aspect-square">
          <Image
            src="/main01.jpg"
            alt="팝업 이미지"
            fill
            className="object-cover"
          />
        </div>

        <DialogHeader className="px-6 pt-4">
          <DialogTitle className="heading04B text-gray-900">
            2026 세계청년대회 안내
          </DialogTitle>
          <DialogDescription className="body02R text-gray-900">
            인천교구에서 준비하는 세계청년대회 소식을 확인해보세요.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex-row border-t border-border p-0 sm:flex-row sm:justify-stretch gap-x-0">
          <button
            onClick={handleHideFor7Days}
            className="flex-1 py-4 body02M text-muted-foreground hover:bg-gray-50 transition-colors border-r border-border"
          >
            7일간 보지 않기
          </button>
          <button
            onClick={handleClose}
            className="flex-1 py-4 body02M text-foreground hover:bg-gray-50 transition-colors"
          >
            닫기
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

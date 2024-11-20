"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

export default function Banner14() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="bg-muted px-4 py-3 md:py-2">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <p className="text-sm">
          <span className="font-medium">v2.1.0</span>
          <span className="mx-2 text-muted-foreground">•</span>
          New features and improvements available
        </p>
        <Button
          size="sm"
          variant="outline"
          disabled={isDownloading}
          onClick={handleDownload}
          className="min-w-24"
        >
          {isDownloading ? (
            <>
              <LoaderCircle className="animate-spin me-2 -ms-0.5" size={16} strokeWidth={2} aria-hidden="true" />
              Updating...
            </>
          ) : (
            <>
              <Download size={16} className="me-2 -ms-0.5" aria-hidden="true" />
              Update now
            </>
          )}
        </Button>
      </div>
    </div>
  );
}


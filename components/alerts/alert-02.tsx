// Dependencies: pnpm install lucide-react

import { TriangleAlert } from "lucide-react";

export default function Alert02() {
  return (
    <div className="rounded-lg bg-amber-400 bg-opacity-20 px-4 py-3 text-amber-700 dark:bg-opacity-10 dark:text-amber-600">
      <p className="text-sm">
        <TriangleAlert
          className="-mt-0.5 me-3 inline-flex opacity-60"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Some information is missing!
      </p>
    </div>
  );
}

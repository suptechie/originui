// Dependencies: pnpm install lucide-react

import { CircleAlert } from "lucide-react";

export default function AlertDemo() {
  return (
    <div className="rounded-lg bg-red-400 bg-opacity-20 px-4 py-3 text-red-700 dark:bg-opacity-10 dark:text-red-600">
      <p className="text-sm">
        <CircleAlert
          className="-mt-0.5 me-3 inline-flex opacity-60"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        An error occurred!
      </p>
    </div>
  );
}

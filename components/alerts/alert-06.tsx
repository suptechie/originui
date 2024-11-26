// Dependencies: pnpm install lucide-react

import { CircleCheck } from "lucide-react";

export default function AlertDemo() {
  return (
    <div className="rounded-lg bg-emerald-400 bg-opacity-20 px-4 py-3 text-emerald-700 dark:bg-opacity-10 dark:text-emerald-600">
      <p className="text-sm">
        <CircleCheck
          className="-mt-0.5 me-3 inline-flex opacity-60"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Completed successfully!
      </p>
    </div>
  );
}

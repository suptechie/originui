import { TriangleAlert } from "lucide-react";

export default function Alert07() {
  return (
    <div className="rounded-lg border border-border px-4 py-3">
      <p className="text-sm">
        <TriangleAlert
          className="-mt-0.5 me-3 inline-flex text-amber-500"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Some information is missing!
      </p>
    </div>
  );
}

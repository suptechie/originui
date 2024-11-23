import { useEffect, useState } from "react";

const formatStarCount = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

export default function GithubButton() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/origin-space/originui")
      .then((response) => response.json())
      .then((data) => setStars(data.stargazers_count))
      .catch((error) => console.error("Error fetching GitHub stars:", error));
  }, []);

  return (
    <a
      className="inline-flex h-8 items-center justify-center whitespace-nowrap rounded-full bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50"
      href="https://github.com/origin-space/originui"
      target="_blank"
    >
      <svg
        className="-ms-0.5 me-2 fill-current text-zinc-500"
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        aria-hidden="true"
        role="presentation"
      >
        <path d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6C16 3.6 12.4 0 8 0Z" />
      </svg>
      <span className="flex items-baseline gap-1">
        Star
        {stars !== null && (
          <span className="text-xs text-primary-foreground/60">{formatStarCount(stars)}</span>
        )}
      </span>
    </a>
  );
}

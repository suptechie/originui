// Dependencies: npm install react-payment-inputs lucide-react

"use client";

import { Input } from "@/components/ui/input";
import { CreditCard } from "lucide-react";
import { usePaymentInputs } from "react-payment-inputs";
import images, { type CardImages } from "react-payment-inputs/images";

export default function Input50() {
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps } =
    usePaymentInputs();

  return (
    <div className="space-y-2">
      <legend className="text-sm font-medium text-foreground">Card Details</legend>
      <div className="rounded-lg shadow-sm shadow-black/[.04]">
        <div className="relative focus-within:z-10">
          <Input className="peer rounded-b-none pr-9 shadow-none" {...getCardNumberProps()} />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 text-muted-foreground/80 peer-disabled:opacity-50">
            {meta.cardType ? (
              <svg
                className="overflow-hidden rounded-sm"
                {...getCardImageProps({ images: images as unknown as CardImages })}
                width={20}
              />
            ) : (
              <CreditCard size={16} strokeWidth={2} aria-hidden="true" role="presentation" />
            )}
          </div>
        </div>
        <div className="-mt-px flex">
          <div className="w-1/2 min-w-0 flex-1 focus-within:z-10">
            <Input
              className="rounded-r-none rounded-t-none shadow-none"
              {...getExpiryDateProps()}
            />
          </div>
          <div className="-ml-px w-1/2 min-w-0 flex-1 focus-within:z-10">
            <Input className="rounded-l-none rounded-t-none shadow-none" {...getCVCProps()} />
          </div>
        </div>
      </div>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Built with{" "}
        <a
          className="underline hover:text-foreground"
          href="https://github.com/medipass/react-payment-inputs"
          target="_blank"
          rel="noopener nofollow"
        >
          React Payment Inputs
        </a>
      </p>
    </div>
  );
}

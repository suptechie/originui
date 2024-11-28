// Dependencies: pnpm install lucide-react react-payment-inputs

"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Store } from "lucide-react";
import { useState } from "react";
import { usePaymentInputs } from "react-payment-inputs";
import images, { type CardImages } from "react-payment-inputs/images";

export default function DialogDemo() {
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps } =
    usePaymentInputs();
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Checkout</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
            aria-hidden="true"
          >
            <Store className="opacity-80" size={16} strokeWidth={2} />
          </div>
          <DialogHeader>
            <DialogTitle className="text-left">Confirm and pay</DialogTitle>
            <DialogDescription className="text-left">
              Pay securely and cancel any time.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <RadioGroup className="grid-cols-2" defaultValue="yearly">
              {/* Monthly */}
              <label className="relative flex cursor-pointer flex-col gap-1 rounded-lg border border-input px-4 py-3 shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70">
                <RadioGroupItem
                  id="radio-monthly"
                  value="monthly"
                  className="sr-only after:absolute after:inset-0"
                />
                <p className="text-sm font-medium text-foreground">Monthly</p>
                <p className="text-sm text-muted-foreground">$32/month</p>
              </label>
              {/* Yearly */}
              <label className="relative flex cursor-pointer flex-col gap-1 rounded-lg border border-input px-4 py-3 shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70">
                <RadioGroupItem
                  id="radio-yearly"
                  value="yearly"
                  className="sr-only after:absolute after:inset-0"
                />
                <div className="inline-flex items-start justify-between gap-2">
                  <p className="text-sm font-medium text-foreground">Yearly</p>
                  <div className="inline-flex items-center rounded-full bg-primary px-2 text-xs font-medium leading-5 text-primary-foreground">
                    Popular
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">$320/month</p>
              </label>
            </RadioGroup>
            <div className="space-y-2">
              <Label htmlFor="nameOnCard">Name on card</Label>
              <Input id="nameOnCard" type="text" required />
            </div>
            <div className="space-y-2">
              <legend className="text-sm font-medium text-foreground">Card Details</legend>
              <div className="rounded-lg shadow-sm shadow-black/5">
                <div className="relative focus-within:z-10">
                  <Input
                    className="peer rounded-b-none pe-9 shadow-none [direction:inherit]"
                    {...getCardNumberProps()}
                  />
                  <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    {meta.cardType ? (
                      <svg
                        className="overflow-hidden rounded-sm"
                        {...getCardImageProps({ images: images as unknown as CardImages })}
                        width={20}
                      />
                    ) : (
                      <CreditCard size={16} strokeWidth={2} aria-hidden="true" />
                    )}
                  </div>
                </div>
                <div className="-mt-px flex">
                  <div className="min-w-0 flex-1 focus-within:z-10">
                    <Input
                      className="rounded-e-none rounded-t-none shadow-none [direction:inherit]"
                      {...getExpiryDateProps()}
                    />
                  </div>
                  <div className="-ms-px min-w-0 flex-1 focus-within:z-10">
                    <Input
                      className="rounded-s-none rounded-t-none shadow-none [direction:inherit]"
                      {...getCVCProps()}
                    />
                  </div>
                </div>
              </div>
            </div>
            {!showCouponInput ? (
              <button
                type="button"
                onClick={() => setShowCouponInput(true)}
                className="text-sm underline hover:no-underline"
              >
                + Add coupon
              </button>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="coupon">Coupon code</Label>
                <Input
                  id="coupon"
                  placeholder="Enter your code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
              </div>
            )}
          </div>
          <Button type="button" className="w-full">
            Subscribe
          </Button>
        </form>

        <p className="text-center text-xs text-muted-foreground">
          Payments are non-refundable. Cancel anytime.
        </p>
      </DialogContent>
    </Dialog>
  );
}

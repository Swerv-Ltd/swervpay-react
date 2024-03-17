"use client";

import { useSwervpayCheckout } from "@swervpaydev/react";

export default function Home() {
  const checkoutWidget = useSwervpayCheckout({
    checkoutId: "checkoutId",
    onSuccess(response) {
      console.log(response);
    },
    onLoad() {
      console.log("Widget loaded");
    },
    onClose() {
      console.log("Widget closed");
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-center font-mono text-sm gap-3">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to Swervpay Checkout
        </p>
        <button
          onClick={() => checkoutWidget()}
          className="bg-black text-white rounded-lg px-4 py-2"
        >
          Pay Swervpay NGN 100
        </button>
      </div>
    </main>
  );
}

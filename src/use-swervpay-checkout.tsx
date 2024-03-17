import useScript from "./script";
import { useEffect } from "react";
import type { SwervpayCheckoutConfig, SwervpayProps } from "./types";

declare const window: Window &
  typeof globalThis & {
    Swervpay: SwervpayProps;
  };

export const useSwervpayCheckout = (props: SwervpayCheckoutConfig) => {
  const [loaded, error] = useScript();

  const errorMsg = "Swervpay failed to load checkout widget";

  useEffect(() => {
    if (error) throw new Error(errorMsg);
  }, [error]);

  return () => {
    if (error) throw new Error(errorMsg);

    if (loaded) {
      const checkout = window.Swervpay && window.Swervpay.Checkout(props);
      checkout.setup();
      return checkout.open();
    }
  };
};

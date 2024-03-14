import useScript from "./script";
import { useEffect } from "react";
import { SwervpayIdentityConfig, SwervpayProps } from "./types";

declare const window: Window &
  typeof globalThis & {
    Swervpay: SwervpayProps;
  };

const useSwervpayIdentity = (props: SwervpayIdentityConfig) => {
  const [loaded, error] = useScript();

  const errorMsg = "Swervpay failed to load identity widget";

  useEffect(() => {
    if (error) throw new Error(errorMsg);
  }, [error]);

  return () => {
    if (error) throw new Error(errorMsg);

    if (loaded) {
      const checkout = window.Swervpay && window.Swervpay.Identity(props);
      checkout.setup();
      return checkout.open();
    }
  };
};

export default useSwervpayIdentity;

interface MetaProps {
  [key: string]: any;
}

type SwervpayCustomer = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
};

type NestedFuncs = {
  setup: () => void;
  open: () => void;
};

export type EventResponse = {
  type: string;
  event: string;
  data: Object;
};

export type Callback = (response: EventResponse) => void;

export interface SwervpayCheckoutConfig
  extends Record<
    string,
    string | number | MetaProps | Callback | boolean | undefined
  > {
  key?: string;
  checkoutId?: string;
  data?: {
    amount: string | number;
    meta?: MetaProps;
    currency?: string;
    description?: string;
    customer?: SwervpayCustomer;
  };
  onSuccess: Callback;
  onClose: Callback;
}

export interface SwervpayIdentityConfig
  extends Record<
    string,
    string | number | MetaProps | Callback | boolean | undefined
  > {
  key?: string;
  data?: {
    meta?: MetaProps;
  };
  onSuccess: Callback;
  onClose: Callback;
}

export interface SwervpayProps {
  Identity: (config: SwervpayIdentityConfig) => NestedFuncs;
  Checkout: (config: SwervpayCheckoutConfig) => NestedFuncs;
}

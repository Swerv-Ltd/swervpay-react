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

export type ValueChanged = (response: EventResponse) => void;
export type VoidCallback = () => void;

export interface SwervpayCheckoutConfig
  extends Record<
    string,
    | string
    | number
    | MetaProps
    | VoidCallback
    | ValueChanged
    | boolean
    | undefined
  > {
  key?: string;
  checkoutId?: string;
  scope?: "deposit" | "collection" | "payment";
  data?: {
    amount: string | number;
    meta?: MetaProps;
    currency?: string;
    description?: string;
    customer?: SwervpayCustomer;
  };
  onSuccess: ValueChanged;
  onClose: VoidCallback;
  onLoad: VoidCallback;
}

export interface SwervpayIdentityConfig
  extends Record<
    string,
    | string
    | number
    | MetaProps
    | VoidCallback
    | ValueChanged
    | boolean
    | undefined
  > {
  key?: string;
  data?: {
    meta?: MetaProps;
  };
  onSuccess: ValueChanged;
  onClose: VoidCallback;
  onLoad: VoidCallback;
}

export interface SwervpayProps {
  Identity: (config: SwervpayIdentityConfig) => NestedFuncs;
  Checkout: (config: SwervpayCheckoutConfig) => NestedFuncs;
}

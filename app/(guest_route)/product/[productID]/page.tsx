"use client";
import * as React from "react";
import { useSession, signOut } from "next-auth/react";
export interface IProductProps {}

export default function Product(props: IProductProps) {
  const data = {
    itemExternalId: 6082928,
    itemInternalId: 5166048,
    estimatedDelivery: "5-6 business days",
    isAvailable: true,
    country: "Thailand",
    currency: "USD",
    variants: {
      medium: {
        id: 16576266,
        size: "medium",
        description: "45 cm / 32 cm",
        weight: "0.7kg (1.54 pounds)",
        mobileDescription: "45x32 cm",
        matte: {
          finish: "matte",
          none: {
            frame: "none",
            price: {
              formatted: "$49",
              amountInCurrency: 49,
            },
            itemVariantCode: "5166048-1001-0-0",
          },
          graphite: {
            frame: "graphite",
            price: {
              formatted: "$74",
              amountInCurrency: 74,
            },
            itemVariantCode: "5166048-1001-0-128",
          },
          white: {
            frame: "white",
            price: {
              formatted: "$74",
              amountInCurrency: 74,
            },
            itemVariantCode: "5166048-1001-0-256",
          },
          black: {
            frame: "black",
            price: {
              formatted: "$74",
              amountInCurrency: 74,
            },
            itemVariantCode: "5166048-1001-0-512",
          },
          natural: {
            frame: "natural",
            price: {
              formatted: "$74",
              amountInCurrency: 74,
            },
            itemVariantCode: "5166048-1001-0-64",
          },
        },
        gloss: {
          finish: "gloss",
          none: {
            frame: "none",
            price: {
              formatted: "$59",
              amountInCurrency: 59,
            },
            itemVariantCode: "5166048-1001-2-0",
          },
          graphite: {
            frame: "graphite",
            price: {
              formatted: "$84",
              amountInCurrency: 84,
            },
            itemVariantCode: "5166048-1001-2-128",
          },
          white: {
            frame: "white",
            price: {
              formatted: "$84",
              amountInCurrency: 84,
            },
            itemVariantCode: "5166048-1001-2-256",
          },
          black: {
            frame: "black",
            price: {
              formatted: "$84",
              amountInCurrency: 84,
            },
            itemVariantCode: "5166048-1001-2-512",
          },
          natural: {
            frame: "natural",
            price: {
              formatted: "$84",
              amountInCurrency: 84,
            },
            itemVariantCode: "5166048-1001-2-64",
          },
        },
      },
      large: {
        id: 16576267,
        size: "large",
        description: "67.5 cm / 48 cm",
        weight: "1.2kg (2.65 pounds)",
        mobileDescription: "68x48 cm",
        matte: {
          finish: "matte",
          none: {
            frame: "none",
            price: {
              formatted: "$99",
              amountInCurrency: 99,
            },
            itemVariantCode: "5166048-1002-0-0",
          },
          graphite: {
            frame: "graphite",
            price: {
              formatted: "$144",
              amountInCurrency: 144,
            },
            itemVariantCode: "5166048-1002-0-128",
          },
          white: {
            frame: "white",
            price: {
              formatted: "$144",
              amountInCurrency: 144,
            },
            itemVariantCode: "5166048-1002-0-256",
          },
          black: {
            frame: "black",
            price: {
              formatted: "$144",
              amountInCurrency: 144,
            },
            itemVariantCode: "5166048-1002-0-512",
          },
          natural: {
            frame: "natural",
            price: {
              formatted: "$144",
              amountInCurrency: 144,
            },
            itemVariantCode: "5166048-1002-0-64",
          },
        },
        gloss: {
          finish: "gloss",
          none: {
            frame: "none",
            price: {
              formatted: "$119",
              amountInCurrency: 119,
            },
            itemVariantCode: "5166048-1002-2-0",
          },
          graphite: {
            frame: "graphite",
            price: {
              formatted: "$164",
              amountInCurrency: 164,
            },
            itemVariantCode: "5166048-1002-2-128",
          },
          white: {
            frame: "white",
            price: {
              formatted: "$164",
              amountInCurrency: 164,
            },
            itemVariantCode: "5166048-1002-2-256",
          },
          black: {
            frame: "black",
            price: {
              formatted: "$164",
              amountInCurrency: 164,
            },
            itemVariantCode: "5166048-1002-2-512",
          },
          natural: {
            frame: "natural",
            price: {
              formatted: "$164",
              amountInCurrency: 164,
            },
            itemVariantCode: "5166048-1002-2-64",
          },
        },
      },
      xlarge: {
        id: 16576268,
        size: "xlarge",
        description: "90 cm / 64 cm",
        weight: "2.8kg (6.17 pounds)",
        mobileDescription: "90x64 cm",
        matte: {
          finish: "matte",
          none: {
            frame: "none",
            price: {
              formatted: "$164",
              amountInCurrency: 164,
            },
            itemVariantCode: "5166048-1007-0-0",
          },
        },
      },
    },
    shop: {
      estimatedDelivery: "5-6 business days",
      country: "Thailand",
      countryCode: "TH",
      currency: "USD",
      isAvailable: true,
    },
    promo: {
      contentMobileHtml:
        "<p><strong>15% OFF</strong> with 1 Displate</p><p><strong>25% OFF</strong> with 2+ Displates</p>",
      contentDesktopHtml:
        "<p><strong>15% OFF</strong> with 1 Displate</p><p><strong>25% OFF</strong> with 2+ Displates</p>",
      promoBoxContentHtml:
        "<p><strong>15% OFF</strong> with 1 Displate</p><p><strong>25% OFF</strong> with 2+ Displates</p>",
      promoCode: "WKND",
      startDate: "2023-09-15T04:15:00Z",
      endDate: "2023-09-18T08:00:00Z",
    },
  };
  console.log(data);

  return <div className="break-words">{JSON.stringify(data, null, 2)}</div>;
}

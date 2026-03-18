import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import MetaPixel from "./MetaPixel";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Server component — injects GTM, GA4, and Meta Pixel scripts.
 * Place once in the root locale layout body.
 * IDs are read from environment variables at build time.
 */
export default function Analytics() {
  return (
    <>
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      <MetaPixel />
    </>
  );
}

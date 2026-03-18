/**
 * Analytics event tracking — GA4, GTM dataLayer, Meta Pixel.
 * All functions guard against SSR / window unavailability.
 */

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    fbq?: (
      command: string,
      event: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

type DataLayerWindow = typeof window & { dataLayer?: object[] };

// ---------------------------------------------------------------------------
// Primitives
// ---------------------------------------------------------------------------

export function trackGA4Event(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export function pushToDataLayer(data: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    const w = window as DataLayerWindow;
    w.dataLayer = w.dataLayer ?? [];
    w.dataLayer.push(data);
  }
}

export function trackPixelEvent(
  event: string,
  params?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, params);
  }
}

// ---------------------------------------------------------------------------
// Named events — lead generation & CTA tracking
// ---------------------------------------------------------------------------

export const analytics = {
  /**
   * Any primary CTA click (hero, features strip, navbar).
   * @param source Human-readable label identifying which CTA was clicked.
   */
  ctaClick(source: string) {
    trackGA4Event("cta_click", { cta_source: source });
    pushToDataLayer({ event: "cta_click", cta_source: source });
  },

  /**
   * Contact form submitted (fires before API response).
   * Sends GA4 `generate_lead`, GTM dataLayer event, and FB `Lead`.
   */
  leadFormSubmit(data: { name: string; email: string; phone: string }) {
    trackGA4Event("generate_lead", {
      cta_source: "contact_form",
      has_phone: Boolean(data.phone),
    });
    pushToDataLayer({
      event: "generate_lead",
      cta_source: "contact_form",
      has_phone: Boolean(data.phone),
    });
    trackPixelEvent("Lead", {
      content_name: "contact_form",
      content_category: "investment_advisory",
    });
  },

  /**
   * Contact form successfully submitted (after API resolves).
   * Sends GA4 event, GTM dataLayer event, and FB `Contact`.
   */
  leadFormSuccess() {
    trackGA4Event("lead_form_success", { cta_source: "contact_form" });
    pushToDataLayer({ event: "lead_form_success", cta_source: "contact_form" });
    trackPixelEvent("Contact");
  },
};

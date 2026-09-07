/**
 * Chiller Travel - Affiliate Providers Configuration
 * 
 * INSTRUCTIONS FOR UPDATING PROVIDERS:
 * When a new provider is approved or you want to activate affiliate tracking:
 * 1. Locate the provider by its `id` in the array below.
 * 2. Set `isActive` to `true`.
 * 3. Update `affiliateUrl` to your tracking URL.
 *    - If you want to forward to a specific page on the provider's site,
 *      you can use the `{{dest}}` placeholder in the `affiliateUrl` template.
 *      E.g., "https://tp.media/r?marker=12345&p=115&u={{dest}}"
 *      If a custom destination query param (?dest=...) is passed, it will replace this placeholder.
 *      If no placeholder is present, the user will be redirected to your affiliate link as-is.
 *
 * NOTE: provider `id` values here must stay in sync with the separate bot repo's
 * chiller-bot/services/affiliateConfig.js (that file is what the AI model uses to pick a
 * valid providerId when generating a link). Provider IDs are fully in sync as of
 * 2026-08-20 — check both files together whenever a provider is added or removed.
 *
 * UPDATING YOUR TRAVELPAYOUTS MARKER (partner ID):
 * All tp.media affiliateUrl templates below share the same `marker` value via the
 * AFFILIATE_MARKER constant right below this comment. To change it (e.g. new Travelpayouts
 * account), edit that ONE line — every provider's URL picks it up automatically.
 * (Fixed 2026-08-25: previously the marker was hardcoded as a literal string separately inside
 * all 15 affiliateUrl templates, so changing it meant hunting down and editing 15 lines by hand
 * and risking missing one.)
 *
 * PROVIDERS THAT USE `linkType: 'append'` INSTEAD OF `{{dest}}`:
 * Not every affiliate program wraps the destination through a tracking domain (tp.media/...).
 * Some (Trip.com's own direct affiliate platform is the first example here) just want two fixed
 * tracking params appended straight onto whatever destination URL you're already sending the
 * user to — no per-destination link creation needed. For those providers, set:
 *   linkType: 'append',
 *   affiliateParams: 'key1=value1&key2=value2'   // fixed per your account, same for every destination
 * redirect.js appends these to the real destination URL (with '?' or '&' as needed) instead of
 * doing the {{dest}} substitution. Leave `affiliateUrl` as '' for these providers.
 */
const AFFILIATE_MARKER = '750063';

export const affiliateProviders = [
  // --- eSIM & Connectivity ---
  {
    id: 'airalo',
    name: 'Airalo',
    category: 'esim',
    cleanUrl: 'https://www.airalo.com',
    affiliateUrl: `https://tp.media/r?marker=${AFFILIATE_MARKER}&p=8310&campaign_id=541&u={{dest}}`,
    isActive: true
  },
  {
    id: 'saily',
    name: 'Saily',
    category: 'esim',
    cleanUrl: 'https://saily.com',
    affiliateUrl: `https://tp.media/r?campaign_id=629&marker=${AFFILIATE_MARKER}&p=8979&trs=550285&u={{dest}}`,
    isActive: true
  },
  {
    id: 'yesim',
    name: 'Yesim',
    category: 'esim',
    cleanUrl: 'https://yesim.app',
    affiliateUrl: `https://tp.media/r?campaign_id=224&marker=${AFFILIATE_MARKER}&p=5998&trs=550285&u={{dest}}`,
    isActive: true
  },
  {
    id: 'drimsim',
    name: 'Drimsim',
    category: 'esim',
    cleanUrl: 'https://drimsim.com',
    affiliateUrl: 'https://drimsim.tpx.lu/c6V7Ofxr',
    isActive: true
  },


  // --- Activities & Tours ---
  {
    id: 'klook',
    name: 'Klook',
    category: 'activities',
    cleanUrl: 'https://www.klook.com',
    affiliateUrl: `https://tp.media/r?campaign_id=137&marker=${AFFILIATE_MARKER}&p=4110&trs=550285&u={{dest}}`,
    isActive: true
  },
  {
    id: 'tiqets',
    name: 'Tiqets',
    category: 'activities',
    cleanUrl: 'https://www.tiqets.com',
    affiliateUrl: `https://tp.media/r?campaign_id=89&marker=${AFFILIATE_MARKER}&p=2074&trs=550285&u={{dest}}`,
    isActive: true
  },
  {
    id: 'kkday',
    name: 'KKday',
    category: 'activities',
    cleanUrl: 'https://www.kkday.com',
    affiliateUrl: `https://tp.media/r?campaign_id=633&marker=${AFFILIATE_MARKER}&p=9074&trs=550285&u={{dest}}`,
    isActive: true
  },
  {
    id: 'gocity',
    name: 'Go City',
    category: 'activities',
    cleanUrl: 'https://gocity.com',
    affiliateUrl: `https://tp.media/r?campaign_id=62&marker=${AFFILIATE_MARKER}&p=1942&trs=550285&u={{dest}}`,
    isActive: true
  },
  {
    id: 'wegotrip',
    name: 'WeGoTrip',
    category: 'activities',
    cleanUrl: 'https://wegotrip.com',
    affiliateUrl: `https://tp.media/r?campaign_id=150&marker=${AFFILIATE_MARKER}&p=4487&trs=550285&u={{dest}}`,
    isActive: true
  },
  {
    id: 'getyourguide',
    name: 'GetYourGuide',
    category: 'activities',
    cleanUrl: 'https://www.getyourguide.com',
    affiliateUrl: '',
    isActive: false
  },
  {
    id: 'viator',
    name: 'Viator',
    category: 'activities',
    cleanUrl: 'https://www.viator.com',
    affiliateUrl: '',
    isActive: false
  },
  {
    id: 'tripadvisor',
    name: 'Tripadvisor Experiences',
    cleanUrl: 'https://www.tripadvisor.com/Attractions',
    affiliateUrl: '',
    isActive: false
  },

  // --- Flights & Transit ---
  {
    id: 'trip',
    name: 'Trip.com',
    category: 'accommodation',
    cleanUrl: 'https://www.trip.com',
    // Trip.com's own direct affiliate platform (Account ID 10464826, site "Chiller - Travel")
    // works differently from the tp.media providers above: it doesn't wrap the destination
    // through a tracking domain, it just appends two fixed tracking params directly onto
    // whatever Trip.com URL you're already sending the user to.
    // VERIFIED LIVE 2026-09-07: created a test link on the real dashboard by pasting
    //   https://www.trip.com/hotels/list?city=249&checkin=2026-10-01&checkout=2026-10-03
    // and got back the SAME url with "&Allianceid=10464826&SID=330520163" appended — nothing
    // else changed. Allianceid/SID are fixed per Noam's account (not per-destination), so this
    // one template covers ANY Trip.com deep link Chiller ever builds (hotel search, flight
    // search, homepage, etc.) with no need to pre-create a link per destination in their UI.
    // NOT YET VERIFIED: the test link also auto-included "trip_sub3=D19714102" (looked like a
    // random ID their form generates per link). Unknown whether that param is required for the
    // click to be credited, or purely cosmetic for their own reporting UI. Before fully trusting
    // attribution here: click a real generated /go/trip link, then check Trip.com's "Booking
    // Performance" dashboard to confirm the click registers without trip_sub3 — or ask Trip.com
    // affiliate support directly.
    linkType: 'append',
    affiliateParams: 'Allianceid=10464826&SID=330520163',
    affiliateUrl: '',
    isActive: true
  },

  {
    id: 'aviasales',
    name: 'Aviasales',
    category: 'transit',
    cleanUrl: 'https://www.aviasales.com',
    affiliateUrl: `https://tp.media/r?campaign_id=100&marker=${AFFILIATE_MARKER}&p=4114&trs=550285&u={{dest}}`,
    isActive: true
  },
  {
    id: 'kiwi',
    name: 'Kiwi.com',
    category: 'transit',
    cleanUrl: 'https://www.kiwi.com',
    // FIXED 2026-08-28: the old value was a static kiwi.tpx.lu short-link with NO {{dest}}
    // placeholder at all -- meaning even when the bot built a real, route+date-specific Kiwi
    // deep link (services/affiliateService.js's new `kiwi` urlBuilder), it was silently thrown
    // away here and every user landed on whatever the static short-link points to (likely the
    // Kiwi homepage), un-personalized. Per Travelpayouts' own documented pattern for Kiwi deep
    // links (support.travelpayouts.com/hc/en-us/articles/360010109719-Kiwi-com-affiliate-links):
    // wrap the real kiwi.com/deep?... URL in their click-tracking template so it's both a real
    // route-specific search result AND attributed to Noam's account.
    // NOT YET VERIFIED: promo_id=3791 is the value shown in Travelpayouts' generic Kiwi docs --
    // it may be a fixed per-program ID shared by all their Kiwi affiliates, or it may need to
    // match Noam's own Kiwi program page in his Travelpayouts dashboard specifically. Worth a
    // quick check there before trusting this fully; if it's wrong the link likely still works
    // (Kiwi's site itself doesn't care about promo_id) but the click may not get credited.
    affiliateUrl: `https://c111.travelpayouts.com/click?shmarker=${AFFILIATE_MARKER}&promo_id=3791&source_type=customlink&type=click&custom_url={{dest}}`,
    isActive: true
  },
  {
    id: 'gettransfer',
    name: 'GetTransfer.com',
    category: 'transit',
    cleanUrl: 'https://gettransfer.com',
    affiliateUrl: `https://tp.media/r?campaign_id=147&marker=${AFFILIATE_MARKER}&p=4439&trs=550285&u={{dest}}`,
    isActive: true
  },
  {
    id: 'welcomepickups',
    name: 'Welcome Pickups',
    category: 'transit',
    cleanUrl: 'https://www.welcomepickups.com',
    affiliateUrl: `https://tp.media/r?campaign_id=627&marker=${AFFILIATE_MARKER}&p=8919&trs=550285&u={{dest}}`,
    isActive: true
  },
  {
    id: 'kiwitaxi',
    name: 'Kiwitaxi',
    category: 'transit',
    cleanUrl: 'https://kiwitaxi.com',
    affiliateUrl: `https://tp.media/r?campaign_id=1&marker=${AFFILIATE_MARKER}&p=647&trs=550285&u={{dest}}`,
    isActive: true
  },
  {
    id: 'busbud',
    name: 'Busbud',
    category: 'transit',
    cleanUrl: 'https://www.busbud.com',
    affiliateUrl: '',
    isActive: false
  },
  {
    id: 'omio',
    name: 'Omio',
    category: 'transit',
    cleanUrl: 'https://www.omio.com',
    affiliateUrl: '',
    isActive: false
  },

  {
    id: 'wayaway',
    name: 'WayAway',
    category: 'transit',
    cleanUrl: 'https://www.wayaway.io',
    affiliateUrl: '',
    isActive: false
  },
  {
    id: '12go',
    name: '12Go',
    category: 'transit',
    cleanUrl: 'https://12go.asia',
    affiliateUrl: '',
    isActive: false
  },
  {
    id: 'skyscanner',
    name: 'Skyscanner',
    category: 'transit',
    cleanUrl: 'https://www.skyscanner.net',
    affiliateUrl: '',
    isActive: false
  },
  {
    id: 'google_flights',
    name: 'Google Flights',
    category: 'transit',
    cleanUrl: 'https://www.google.com/travel/flights',
    affiliateUrl: '',
    isActive: false
  },
  {
    id: 'bookaway',
    name: 'Bookaway',
    category: 'transit',
    cleanUrl: 'https://www.bookaway.com',
    affiliateUrl: '',
    isActive: false
  },

  // --- Accommodation & Hostels ---
  {
    id: 'hostelworld',
    name: 'Hostelworld',
    category: 'accommodation',
    cleanUrl: 'https://www.hostelworld.com',
    affiliateUrl: '',
    isActive: false
  },
  {
    id: 'booking',
    name: 'Booking.com',
    category: 'accommodation',
    cleanUrl: 'https://www.booking.com',
    affiliateUrl: '',
    isActive: false
  },
  {
    id: 'agoda',
    name: 'Agoda',
    category: 'accommodation',
    cleanUrl: 'https://www.agoda.com',
    affiliateUrl: '',
    isActive: false
  },
  {
    id: 'hotels',
    name: 'Hotels.com',
    category: 'accommodation',
    cleanUrl: 'https://www.hotels.com',
    affiliateUrl: '',
    isActive: false
  },
  {
    id: 'expedia',
    name: 'Expedia',
    category: 'accommodation',
    cleanUrl: 'https://www.expedia.com',
    affiliateUrl: 'https://expedia.com/affiliate/TWN5VV1',
    isActive: true
  },
  {
    id: 'vrbo',
    name: 'Vrbo',
    category: 'accommodation',
    cleanUrl: 'https://www.vrbo.com',
    affiliateUrl: '',
    isActive: false
  },

  // --- Car Rental & Insurance ---
  {
    id: 'localrent',
    name: 'Localrent.com',
    category: 'car_insurance',
    cleanUrl: 'https://localrent.com',
    affiliateUrl: `https://tp.media/r?campaign_id=87&marker=${AFFILIATE_MARKER}&p=2043&trs=550285&u={{dest}}`,
    isActive: true
  },
  {
    id: 'economybookings',
    name: 'Economybookings.com',
    category: 'car_insurance',
    cleanUrl: 'https://www.economybookings.com',
    affiliateUrl: `https://tp.media/r?campaign_id=10&marker=${AFFILIATE_MARKER}&p=2018&trs=550285&u={{dest}}`,
    isActive: true
  },
  {
    id: 'qeeq',
    name: 'QEEQ',
    category: 'car_insurance',
    cleanUrl: 'https://www.qeeq.com',
    affiliateUrl: `https://tp.media/r?campaign_id=172&marker=${AFFILIATE_MARKER}&p=4845&trs=550285&u={{dest}}`,
    isActive: true
  },
  {
    id: 'ekta',
    name: 'EKTA',
    category: 'car_insurance',
    cleanUrl: 'https://ektatraveling.com',
    affiliateUrl: '',
    isActive: false
  },
  {
    id: 'discovercars',
    name: 'DiscoverCars',
    category: 'car_insurance',
    cleanUrl: 'https://www.discovercars.com',
    affiliateUrl: '',
    isActive: false
  },
  {
    id: 'insubuy',
    name: 'Insubuy',
    category: 'car_insurance',
    cleanUrl: 'https://www.insubuy.com',
    affiliateUrl: '',
    isActive: false
  },
  {
    id: 'visitorscoverage',
    name: 'VisitorsCoverage',
    category: 'car_insurance',
    cleanUrl: 'https://www.visitorscoverage.com',
    affiliateUrl: '',
    isActive: false
  }
];

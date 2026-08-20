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
 */
export const affiliateProviders = [
  // --- eSIM & Connectivity ---
  {
    id: 'airalo',
    name: 'Airalo',
    category: 'esim',
    cleanUrl: 'https://www.airalo.com',
    affiliateUrl: 'https://tp.media/r?marker=750063&p=8310&campaign_id=541&u={{dest}}',
    isActive: true
  },
  {
    id: 'saily',
    name: 'Saily',
    category: 'esim',
    cleanUrl: 'https://saily.com',
    affiliateUrl: 'https://tp.media/r?campaign_id=629&marker=750063&p=8979&trs=550285&u={{dest}}',
    isActive: true
  },
  {
    id: 'yesim',
    name: 'Yesim',
    category: 'esim',
    cleanUrl: 'https://yesim.app',
    affiliateUrl: 'https://tp.media/r?campaign_id=224&marker=750063&p=5998&trs=550285&u={{dest}}',
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
    affiliateUrl: 'https://tp.media/r?campaign_id=137&marker=750063&p=4110&trs=550285&u={{dest}}',
    isActive: true
  },
  {
    id: 'tiqets',
    name: 'Tiqets',
    category: 'activities',
    cleanUrl: 'https://www.tiqets.com',
    affiliateUrl: 'https://tp.media/r?campaign_id=89&marker=750063&p=2074&trs=550285&u={{dest}}',
    isActive: true
  },
  {
    id: 'kkday',
    name: 'KKday',
    category: 'activities',
    cleanUrl: 'https://www.kkday.com',
    affiliateUrl: 'https://tp.media/r?campaign_id=633&marker=750063&p=9074&trs=550285&u={{dest}}',
    isActive: true
  },
  {
    id: 'gocity',
    name: 'Go City',
    category: 'activities',
    cleanUrl: 'https://gocity.com',
    affiliateUrl: 'https://tp.media/r?campaign_id=62&marker=750063&p=1942&trs=550285&u={{dest}}',
    isActive: true
  },
  {
    id: 'wegotrip',
    name: 'WeGoTrip',
    category: 'activities',
    cleanUrl: 'https://wegotrip.com',
    affiliateUrl: 'https://tp.media/r?campaign_id=150&marker=750063&p=4487&trs=550285&u={{dest}}',
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
    affiliateUrl: '',
    isActive: false
  },

  {
    id: 'aviasales',
    name: 'Aviasales',
    category: 'transit',
    cleanUrl: 'https://www.aviasales.com',
    affiliateUrl: 'https://tp.media/r?campaign_id=100&marker=750063&p=4114&trs=550285&u={{dest}}',
    isActive: true
  },
  {
    id: 'kiwi',
    name: 'Kiwi.com',
    category: 'transit',
    cleanUrl: 'https://www.kiwi.com',
    affiliateUrl: 'https://kiwi.tpx.lu/UCx2XBi8',
    isActive: true
  },
  {
    id: 'gettransfer',
    name: 'GetTransfer.com',
    category: 'transit',
    cleanUrl: 'https://gettransfer.com',
    affiliateUrl: 'https://tp.media/r?campaign_id=147&marker=750063&p=4439&trs=550285&u={{dest}}',
    isActive: true
  },
  {
    id: 'welcomepickups',
    name: 'Welcome Pickups',
    category: 'transit',
    cleanUrl: 'https://www.welcomepickups.com',
    affiliateUrl: 'https://tp.media/r?campaign_id=627&marker=750063&p=8919&trs=550285&u={{dest}}',
    isActive: true
  },
  {
    id: 'kiwitaxi',
    name: 'Kiwitaxi',
    category: 'transit',
    cleanUrl: 'https://kiwitaxi.com',
    affiliateUrl: 'https://tp.media/r?campaign_id=1&marker=750063&p=647&trs=550285&u={{dest}}',
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
    affiliateUrl: '',
    isActive: false
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
    affiliateUrl: 'https://tp.media/r?campaign_id=87&marker=750063&p=2043&trs=550285&u={{dest}}',
    isActive: true
  },
  {
    id: 'economybookings',
    name: 'Economybookings.com',
    category: 'car_insurance',
    cleanUrl: 'https://www.economybookings.com',
    affiliateUrl: 'https://tp.media/r?campaign_id=10&marker=750063&p=2018&trs=550285&u={{dest}}',
    isActive: true
  },
  {
    id: 'qeeq',
    name: 'QEEQ',
    category: 'car_insurance',
    cleanUrl: 'https://www.qeeq.com',
    affiliateUrl: 'https://tp.media/r?campaign_id=172&marker=750063&p=4845&trs=550285&u={{dest}}',
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

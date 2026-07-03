export interface Operator {
  id: number
  name: string
  county: string
  waterway: string
  lat: number
  lon: number
  vesselTypes: string[]
  certLevel: 'I' | 'II' | 'III'
  memberSince: number
  insuranceVerified: boolean
  description: string
  contactName: string
  contactEmail: string
  contactPhone: string
  website?: string
  operatingHours: string
  services: string[]
  fleetSize: string
}

export const OPERATORS: Operator[] = [
  {
    id: 1,
    name: 'Crystal Waters Rentals',
    county: 'Orange',
    waterway: 'Lake Eustis',
    lat: 28.8686,
    lon: -81.7493,
    vesselTypes: ['Pontoon', 'Jet ski'],
    certLevel: 'II',
    memberSince: 2024,
    insuranceVerified: true,
    description: 'Crystal Waters Rentals has been serving Lake Eustis for over 15 years. We specialize in pontoon rentals for families and small groups, with a focus on safety and customer experience. Our fleet is regularly maintained and all captains are certified through the FWSC program.',
    contactName: 'Sarah Mitchell',
    contactEmail: 'sarah@crystalwatersrentals.com',
    contactPhone: '(407) 555-0142',
    website: 'www.crystalwatersrentals.com',
    operatingHours: 'Daily 8 AM - 6 PM',
    services: ['Pontoon rentals', 'Boat tours', 'Fishing charters', 'Sunset cruises'],
    fleetSize: '12 vessels',
  },
  {
    id: 2,
    name: 'Tampa Bay Tours',
    county: 'Hillsborough',
    waterway: 'Tampa Bay',
    lat: 27.9506,
    lon: -82.4332,
    vesselTypes: ['Charter', 'Pontoon'],
    certLevel: 'III',
    memberSince: 2023,
    insuranceVerified: true,
    description: 'Tampa Bay Tours is the premier destination for guided tours of Tampa Bay and the surrounding waterways. Our experienced captains provide educational and entertaining tours for tourists and locals alike. Certified Level III with comprehensive safety protocols.',
    contactName: 'Captain Mike Rodriguez',
    contactEmail: 'mike@tampabaytours.com',
    contactPhone: '(813) 555-0198',
    website: 'www.tampabaytours.com',
    operatingHours: 'Daily 9 AM - 5 PM, Evening tours Fri-Sat',
    services: ['Guided bay tours', 'Corporate events', 'Wedding cruises', 'Dolphin watching'],
    fleetSize: '8 vessels',
  },
  {
    id: 3,
    name: 'Kayak Adventures Co',
    county: 'Duval',
    waterway: 'St Johns River',
    lat: 30.3322,
    lon: -81.6557,
    vesselTypes: ['Kayak / SUP'],
    certLevel: 'I',
    memberSince: 2024,
    insuranceVerified: false,
    description: 'Kayak Adventures Co offers guided paddling tours and rentals on the scenic St Johns River. Perfect for beginners and experienced paddlers. Newly certified with FWSC, we maintain rigorous safety standards.',
    contactName: 'Jessica Chen',
    contactEmail: 'jessica@kayakadventures.com',
    contactPhone: '(904) 555-0167',
    operatingHours: 'Daily 8 AM - 4 PM',
    services: ['Kayak rentals', 'Guided tours', 'SUP lessons', 'Wildlife tours'],
    fleetSize: '20+ kayaks and SUPs',
  },
  {
    id: 4,
    name: 'Gulf Coast Jet Ski',
    county: 'Pinellas',
    waterway: 'Gulf of Mexico',
    lat: 27.9759,
    lon: -82.6303,
    vesselTypes: ['Jet ski'],
    certLevel: 'II',
    memberSince: 2023,
    insuranceVerified: true,
    description: 'Gulf Coast Jet Ski provides high-octane water sport experiences on the Gulf of Mexico. All renters receive comprehensive safety briefings and training. Located at Clearwater Beach with easy access to pristine Gulf waters.',
    contactName: 'Tommy Valdez',
    contactEmail: 'tommy@gulfcoastjetski.com',
    contactPhone: '(727) 555-0134',
    website: 'www.gulfcoastjetski.com',
    operatingHours: 'Daily 9 AM - Sunset',
    services: ['Jet ski rentals', 'Safety training', 'Guided tours', 'Lessons for beginners'],
    fleetSize: '15 jet skis',
  },
  {
    id: 5,
    name: 'Everglades Tours LLC',
    county: 'Miami-Dade',
    waterway: 'Biscayne Bay',
    lat: 25.7907,
    lon: -80.13,
    vesselTypes: ['Charter', 'Pontoon'],
    certLevel: 'III',
    memberSince: 2022,
    insuranceVerified: true,
    description: 'Everglades Tours LLC is a leading provider of Biscayne Bay and Everglades experiences. Our expert guides specialize in marine ecology and wildlife observation. Level III certified with extensive training and safety infrastructure.',
    contactName: 'Dr. Robert Martinez',
    contactEmail: 'robert@everglades-tours.com',
    contactPhone: '(305) 555-0189',
    website: 'www.everglades-tours.com',
    operatingHours: 'Daily 7 AM - 4 PM',
    services: ['Ecology tours', 'Wildlife photography', 'Research expeditions', 'Educational groups'],
    fleetSize: '6 vessels',
  },
  {
    id: 6,
    name: 'Sunrise Pontoon Rentals',
    county: 'Orange',
    waterway: 'Lake Eustis',
    lat: 28.8500,
    lon: -81.7600,
    vesselTypes: ['Pontoon'],
    certLevel: 'I',
    memberSince: 2024,
    insuranceVerified: false,
    description: 'Sunrise Pontoon Rentals offers affordable pontoon boat rentals for families and groups. Recently joined the FWSC, we are committed to maintaining the highest safety standards and providing excellent customer service.',
    contactName: 'Amanda Foster',
    contactEmail: 'amanda@sunrisepontoon.com',
    contactPhone: '(407) 555-0156',
    operatingHours: 'Daily 7 AM - 7 PM (seasonal hours in winter)',
    services: ['Pontoon rentals', 'Picnic packages', 'Fishing rentals', 'Family outings'],
    fleetSize: '5 pontoons',
  },
]

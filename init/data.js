const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listing-image-1",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listing-image-2",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listing-image-3",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Rustic Lakeside Cabin",
    description:
      "Experience serenity in this lakeside cabin with beautiful sunset views and a private dock.",
    image: {
      filename: "listing-image-4",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Luxury Villa with Pool",
    description:
      "Indulge in luxury in this spacious villa with a private pool and modern amenities.",
    image: {
      filename: "listing-image-5",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Los Angeles",
    country: "United States",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Charming Countryside B&B",
    description:
      "Stay in a cozy countryside bed and breakfast with homemade meals and scenic views.",
    image: {
      filename: "listing-image-6",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Cotswolds",
    country: "United Kingdom",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes directly from this ski-in/ski-out chalet in the snowy mountains.",
    image: {
      filename: "listing-image-7",
      url: "https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Whistler",
    country: "Canada",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Historic City Apartment",
    description:
      "Step back in time with a stay in this beautifully restored historic apartment in the city center.",
    image: {
      filename: "listing-image-8",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Rome",
    country: "Italy",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Beachfront Luxury Condo",
    description:
      "Enjoy modern comforts and panoramic views of the beach from this luxury condo.",
    image: {
      filename: "listing-image-9",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Miami",
    country: "United States",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Secluded Jungle Treehouse",
    description:
      "Immerse yourself in nature with this unique treehouse stay surrounded by jungle wildlife.",
    image: {
      filename: "listing-image-10",
      url: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Bali",
    country: "Indonesia",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Elegant Parisian Flat",
    description:
      "Live like a local in this chic Parisian apartment with a view of the Eiffel Tower.",
    image: {
      filename: "listing-image-11",
      url: "https://images.unsplash.com/photo-1505691723518-36a0f6737e54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Paris",
    country: "France",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Cozy Tokyo Studio",
    description:
      "Compact yet comfortable studio in the heart of Tokyo, perfect for solo travelers.",
    image: {
      filename: "listing-image-12",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 600,
    location: "Tokyo",
    country: "Japan",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Santorini Cliffside House",
    description:
      "Enjoy breathtaking views of the caldera from this traditional whitewashed cliffside house.",
    image: {
      filename: "listing-image-13",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Santorini",
    country: "Greece",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Desert Glamping Tent",
    description:
      "A luxurious camping experience in the desert with comfortable bedding and starry skies.",
    image: {
      filename: "listing-image-14",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Sahara",
    country: "Morocco",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Countryside Farmhouse",
    description:
      "Relax in this charming farmhouse surrounded by fields and fresh country air.",
    image: {
      filename: "listing-image-15",
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Tuscany",
    country: "Italy",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Private Island Retreat",
    description:
      "An exclusive island retreat offering complete privacy and luxury amenities.",
    image: {
      filename: "listing-image-16",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Maldives",
    country: "Maldives",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Modern Dubai Apartment",
    description:
      "A sleek apartment in the heart of Dubai with views of the Burj Khalifa.",
    image: {
      filename: "listing-image-17",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Dubai",
    country: "United Arab Emirates",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Seaside Cliff Cabin",
    description:
      "Perched on a cliff, this cabin offers sweeping ocean views and peaceful sunsets.",
    image: {
      filename: "listing-image-18",
      url: "https://images.unsplash.com/photo-1505691723518-36a0f6737e54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Big Sur",
    country: "United States",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Icelandic Glass Igloo",
    description:
      "Stay under the Northern Lights in this unique glass igloo in the Icelandic wilderness.",
    image: {
      filename: "listing-image-19",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Reykjavik",
    country: "Iceland",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Luxury Safari Lodge",
    description:
      "Enjoy wildlife sightings and luxury comfort in this safari lodge.",
    image: {
      filename: "listing-image-20",
      url: "https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Maasai Mara",
    country: "Kenya",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Sydney Harbour Apartment",
    description:
      "A modern apartment with views of the Sydney Opera House and Harbour Bridge.",
    image: {
      filename: "listing-image-21",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Sydney",
    country: "Australia",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Swiss Alps Chalet",
    description:
      "A cozy wooden chalet surrounded by snowy peaks and ski slopes.",
    image: {
      filename: "listing-image-22",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Zermatt",
    country: "Switzerland",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Hawaiian Beach Hut",
    description:
      "A tropical beach hut just steps away from crystal-clear waters.",
    image: {
      filename: "listing-image-23",
      url: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Maui",
    country: "United States",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Amsterdam Canal House",
    description:
      "Stay in a charming canal-side house in the heart of Amsterdam.",
    image: {
      filename: "listing-image-24",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Amsterdam",
    country: "Netherlands",
    owner: "68cea191f33b3f53403f9741",
  },
  {
    title: "Moroccan Riad",
    description:
      "A traditional riad with colorful tiles and a peaceful courtyard.",
    image: {
      filename: "listing-image-25",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Marrakech",
    country: "Morocco",
    owner: "68cea191f33b3f53403f9741",
  },
];

module.exports = { data: sampleListings };

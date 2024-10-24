import { image } from "../../assets/image/image"

export const properties = [
  {
    id: 1,
    "title": "King Abdullah Economic City",
    "location": "Durrat Al Arous - Fun Beach Chalet",
    "type": "Villas & Apartments",
    "price": {
      "original": 3000,
      "discounted": 2500,
      "currency": "SAR",
      "per": "Night"
    },
    "rating": {
      "stars": 4.8,
      "reviews": 50
    },
    "attributes": {
      "guests": 1,
      "area": 1000,
      "bedrooms": 4,
      "bathrooms": 3,
      "parkingSpaces": 2
    },
    "discount": {
      "percentage": "50%",
      "label": "50% Discount",
      "validUntil": "2024-12-31"
    },
    "image_url": image.property1,
    "gallery": [
      image.property1,
      image.property3,
      image.property2,
    ],
    "is_favorited": true,
    "amenities": [
      "wifi",
      "pool",
      "gym",
      "kitchen",
      "petsAllowed",
      "airConditioning"
    ],
    "description": "A beautiful beach chalet located in Durrat Al Arous offering a scenic view and luxurious stay.",
    "availability": {
      "availableFrom": "2024-10-15",
      "availableTo": "2025-03-31"
    },
    "cancellationPolicy": "Free cancellation within 48 hours.",
    "owner": {
      "name": "John Doe",
      "contact": "+966 123456789",
      "email": "john.doe@example.com"
    },
    "terms": {
      "checkIn": "3:00 PM",
      "checkOut": "12:00 PM",
      "minStay": "2 nights",
      "maxStay": "30 nights"
    },
    coordinates: {
      "latitude": 21.694025,
      "longitude": 39.103656
    }
  },
  {
    id: 2,
    "title": "Jeddah Corniche Resort",
    "location": "North Obhur - Luxury Villa",
    "type": "Chalets & Resorts",
    "price": {
      "original": 4500,
      "discounted": 4000,
      "currency": "SAR",
      "per": "Night"
    },
    "rating": {
      "stars": 4.9,
      "reviews": 120
    },
    "attributes": {
      "guests": 2,
      "area": 1200,
      "bedrooms": 5,
      "bathrooms": 4,
      "parkingSpaces": 3
    },
    "discount": {
      "percentage": "20%",
      "label": "20% Discount",
      "validUntil": "2025-01-15"
    },
    "image_url": image.property2,
    "gallery": [
      image.property3,
      image.property1,
      image.property2,
    ],
    "is_favorited": false,
    "amenities": [
      "wifi",
      "pool",
      "gym",
      "kitchen",
      "petsAllowed",
      "airConditioning"
    ],
    "description": "A luxury villa located in Jeddah Corniche offering magnificent sea views and premium amenities.",
    "availability": {
      "availableFrom": "2024-11-01",
      "availableTo": "2025-05-31"
    },
    "cancellationPolicy": "Free cancellation within 72 hours.",
    "owner": {
      "name": "Sarah Ahmed",
      "contact": "+966 987654321",
      "email": "sarah.ahmed@example.com"
    },
    "terms": {
      "checkIn": "2:00 PM",
      "checkOut": "11:00 AM",
      "minStay": "3 nights",
      "maxStay": "45 nights"
    },
    "coordinates": {
      "latitude": 21.612356,
      "longitude": 39.086978
    }
  },
  {
    id: 3,
    "title": "Riyadh Luxury Apartment",
    "location": "Al Olaya District - City Center Penthouse",
    "type": "Farms",
    "price": {
      "original": 2200,
      "discounted": 2000,
      "currency": "SAR",
      "per": "Night"
    },
    "rating": {
      "stars": 4.7,
      "reviews": 80
    },
    "attributes": {
      "guests": 3,
      "area": 900,
      "bedrooms": 3,
      "bathrooms": 2,
      "parkingSpaces": 1
    },
    "discount": {
      "percentage": "10%",
      "label": "10% Discount",
      "validUntil": "2024-11-30"
    },
    "image_url": image.property3,
    "gallery": [
      image.property2,
      image.property3,
      image.property1,
    ],
    "is_favorited": true,
    "amenities": [
      "wifi",
      "pool",
      "gym",
      "kitchen",
      "petsAllowed",
      "airConditioning"
    ],
    "description": "A stylish penthouse in the heart of Riyadh, perfect for both short and long stays.",
    "availability": {
      "availableFrom": "2024-09-20",
      "availableTo": "2024-12-20"
    },
    "cancellationPolicy": "Free cancellation within 24 hours.",
    "owner": {
      "name": "Mohammed Bin Ali",
      "contact": "+966 1122334455",
      "email": "mohammed.ali@example.com"
    },
    "terms": {
      "checkIn": "4:00 PM",
      "checkOut": "12:00 PM",
      "minStay": "1 night",
      "maxStay": "60 nights"
    },
    "coordinates": {
      "latitude": 24.711445,
      "longitude": 46.674233
    }
  },
  {
    id: 4,
    "title": "Mecca Family Retreat",
    "location": "Ajyad - Holy Mosque View",
    "type": "Family Retreat",
    "price": {
      "original": 5000,
      "discounted": 4500,
      "currency": "SAR",
      "per": "Night"
    },
    "rating": {
      "stars": 4.9,
      "reviews": 200
    },
    "attributes": {
      "guests": 6,
      "area": 1500,
      "bedrooms": 6,
      "bathrooms": 5,
      "parkingSpaces": 4
    },
    "discount": {
      "percentage": "15%",
      "label": "15% Discount",
      "validUntil": "2025-02-28"
    },
    "image_url": image.property1,
    "gallery": [
     image.property1,
     image.property3,
     image.property2,
    ],
    "is_favorited": false,
    "amenities": [
      "wifi",
      "kitchen",
      "washing machine"
    ],
    "description": "A spacious family retreat located near the Holy Mosque in Mecca, ideal for religious tourists.",
    "availability": {
      "availableFrom": "2024-12-01",
      "availableTo": "2025-04-15"
    },
    "cancellationPolicy": "Free cancellation within 72 hours.",
    "owner": {
      "name": "Fatima Khalid",
      "contact": "+966 5566778899",
      "email": "fatima.khalid@example.com"
    },
    "terms": {
      "checkIn": "1:00 PM",
      "checkOut": "11:00 AM",
      "minStay": "4 nights",
      "maxStay": "90 nights"
    },
    "coordinates": {
      "latitude": 21.422510,
      "longitude": 39.826168
    }
  },
  {
    id: 5,
    "title": "Al Khobar Beachfront Condo",
    "location": "Al Corniche - Premium Sea View",
    "type": "Camps",
    "price": {
      "original": 3200,
      "discounted": 2800,
      "currency": "SAR",
      "per": "Night"
    },
    "rating": {
      "stars": 4.6,
      "reviews": 60
    },
    "attributes": {
      "guests": 2,
      "area": 800,
      "bedrooms": 2,
      "bathrooms": 2,
      "parkingSpaces": 1
    },
    "discount": {
      "percentage": "12%",
      "label": "12% Discount",
      "validUntil": "2024-12-31"
    },
    "image_url": image.property2,
    "gallery": [
      image.property2,
      image.property1,
      image.property3,
    ],
    "is_favorited": true,
    "amenities": [
      "wifi",
      "gym",
      "airConditioning",
      "petsAllowed"
    ],
    "description": "A beachfront condo located in Al Khobar, offering modern amenities and stunning sea views.",
    "availability": {
      "availableFrom": "2024-11-10",
      "availableTo": "2025-03-20"
    },
    "cancellationPolicy": "Free cancellation within 48 hours.",
    "owner": {
      "name": "Ahmed Al-Saud",
      "contact": "+966 3344556677",
      "email": "ahmed.saudi@example.com"
    },
    "terms": {
      "checkIn": "5:00 PM",
      "checkOut": "12:00 PM",
      "minStay": "2 nights",
      "maxStay": "25 nights"
    },
    "coordinates": {
      "latitude": 26.278029,
      "longitude": 50.208351
    }
  },{
    id: 6,
    "title": "Abha Mountain View Lodge",
    "location": "Soudah - Mountain Top Chalet",
    "type": "Lodge",
    "price": {
      "original": 1800,
      "discounted": 1500,
      "currency": "SAR",
      "per": "Night"
    },
    "rating": {
      "stars": 4.5,
      "reviews": 30
    },
    "attributes": {
      "guests": 4,
      "area": 700,
      "bedrooms": 2,
      "bathrooms": 2,
      "parkingSpaces": 1
    },
    "discount": {
      "percentage": "16%",
      "label": "16% Discount",
      "validUntil": "2024-11-30"
    },
    "image_url": image.property3,
    "gallery": [
      image.property2,
      image.property1,
      image.property3,
    ],
    "is_favorited": false,
    "amenities": [
      "wifi",
      "kitchen",
      "fireplace",
      "airConditioning"
    ],
    "description": "A charming lodge in the highlands of Abha, perfect for a quiet retreat with a breathtaking mountain view.",
    "availability": {
      "availableFrom": "2024-10-05",
      "availableTo": "2025-01-30"
    },
    "cancellationPolicy": "Free cancellation within 72 hours.",
    "owner": {
      "name": "Khalid Al-Mutairi",
      "contact": "+966 5566778899",
      "email": "khalid.mutairi@example.com"
    },
    "terms": {
      "checkIn": "2:00 PM",
      "checkOut": "12:00 PM",
      "minStay": "3 nights",
      "maxStay": "20 nights"
    },
    "coordinates": {
      "latitude": 18.210802,
      "longitude": 42.505891
    }
  },
  {
    id: 7,
    "title": "Medina Heritage Villa",
    "location": "Al-Masjid an-Nabawi - Historic District",
    "type": "Villa",
    "price": {
      "original": 4000,
      "discounted": 3500,
      "currency": "SAR",
      "per": "Night"
    },
    "rating": {
      "stars": 4.7,
      "reviews": 90
    },
    "attributes": {
      "guests": 5,
      "area": 1100,
      "bedrooms": 5,
      "bathrooms": 4,
      "parkingSpaces": 2
    },
    "discount": {
      "percentage": "12%",
      "label": "12% Discount",
      "validUntil": "2025-01-01"
    },
    "image_url": image.property1,
    "gallery": [
      image.property1,
      image.property3,
      image.property2,
    ],
    "is_favorited": true,
    "amenities": [
      "wifi",
      "gym",
      "airConditioning",
      "petsAllowed",
      "kitchen",
      "washing machine"
    ],
    "description": "A heritage villa near the Prophet's Mosque, blending modern comfort with historic architecture.",
    "availability": {
      "availableFrom": "2024-11-01",
      "availableTo": "2025-04-01"
    },
    "cancellationPolicy": "Free cancellation within 48 hours.",
    "owner": {
      "name": "Fatima Al-Sheikh",
      "contact": "+966 7788990011",
      "email": "fatima.sheikh@example.com"
    },
    "terms": {
      "checkIn": "3:00 PM",
      "checkOut": "12:00 PM",
      "minStay": "2 nights",
      "maxStay": "40 nights"
    },
    "coordinates": {
      "latitude": 24.468611,
      "longitude": 39.611111
    }
  },
  {
    id: 8,
    "title": "Taif Rose Valley Resort",
    "location": "Al Hada - Hilltop Cottage",
    "type": "Resort",
    "price": {
      "original": 2700,
      "discounted": 2400,
      "currency": "SAR",
      "per": "Night"
    },
    "rating": {
      "stars": 4.6,
      "reviews": 75
    },
    "attributes": {
      "guests": 3,
      "area": 950,
      "bedrooms": 3,
      "bathrooms": 3,
      "parkingSpaces": 1
    },
    "discount": {
      "percentage": "11%",
      "label": "11% Discount",
      "validUntil": "2025-02-01"
    },
    "image_url": image.property2,
    "gallery": [
      image.property3,
      image.property1,
      image.property2,
    ],
    "is_favorited": false,
    "amenities": [
      "wifi",
      "gym",
      "kitchen",
      "pool",
      "fireplace"
    ],
    "description": "A tranquil hilltop resort in the scenic Rose Valley of Taif, known for its cool climate and spectacular views.",
    "availability": {
      "availableFrom": "2024-12-10",
      "availableTo": "2025-03-30"
    },
    "cancellationPolicy": "Free cancellation within 24 hours.",
    "owner": {
      "name": "Mohammed Al-Harbi",
      "contact": "+966 6677889900",
      "email": "mohammed.harbi@example.com"
    },
    "terms": {
      "checkIn": "4:00 PM",
      "checkOut": "11:00 AM",
      "minStay": "3 nights",
      "maxStay": "30 nights"
    },
    "coordinates": {
      "latitude": 21.262741,
      "longitude": 40.417908
    }
  },
  {
    id: 9,
    "title": "Yanbu Seafront Apartment",
    "location": "Royal Commission - Waterfront Views",
    "type": "Apartment",
    "price": {
      "original": 2200,
      "discounted": 1900,
      "currency": "SAR",
      "per": "Night"
    },
    "rating": {
      "stars": 4.4,
      "reviews": 45
    },
    "attributes": {
      "guests": 2,
      "area": 850,
      "bedrooms": 2,
      "bathrooms": 2,
      "parkingSpaces": 1
    },
    "discount": {
      "percentage": "14%",
      "label": "14% Discount",
      "validUntil": "2024-12-20"
    },
    "image_url": image.property3,
    "gallery": [
      image.property2,
      image.property1,
      image.property3,
    ],
    "is_favorited": true,
    "amenities": [
      "wifi",
      "airConditioning",
      "petsAllowed",
      "kitchen",
      "gym"
    ],
    "description": "A modern waterfront apartment located in the Royal Commission of Yanbu, offering direct sea views and premium facilities.",
    "availability": {
      "availableFrom": "2024-11-01",
      "availableTo": "2025-01-31"
    },
    "cancellationPolicy": "Free cancellation within 48 hours.",
    "owner": {
      "name": "Ali Al-Yousef",
      "contact": "+966 8899001122",
      "email": "ali.yousef@example.com"
    },
    "terms": {
      "checkIn": "5:00 PM",
      "checkOut": "12:00 PM",
      "minStay": "1 night",
      "maxStay": "50 nights"
    },
    "coordinates": {
      "latitude": 24.097222,
      "longitude": 38.064444
    }
  },
  {
    id: 10,
    "title": "Dammam Business Suite",
    "location": "King Fahd District - Luxury Business Apartment",
    "type": "Business Suite",
    "price": {
      "original": 3200,
      "discounted": 2900,
      "currency": "SAR",
      "per": "Night"
    },
    "rating": {
      "stars": 4.8,
      "reviews": 100
    },
    "attributes": {
      "guests": 1,
      "area": 700,
      "bedrooms": 1,
      "bathrooms": 1,
      "parkingSpaces": 1
    },
    "discount": {
      "percentage": "9%",
      "label": "9% Discount",
      "validUntil": "2024-12-31"
    },
    "image_url": image.property1,
    "gallery": [
      image.property3,
      image.property1,
      image.property2,
    ],
    "is_favorited": false,
    "amenities": [
      "wifi",
      "gym",
      "airConditioning",
      "petsAllowed",
      "businessCenter"
    ],
    "description": "A high-end business suite located in Dammam, tailored for business travelers seeking luxury and convenience.",
    "availability": {
      "availableFrom": "2024-12-01",
      "availableTo": "2025-03-01"
    },
    "cancellationPolicy": "Free cancellation within 24 hours.",
    "owner": {
      "name": "Salim Al-Rashid",
      "contact": "+966 5566771122",
      "email": "salim.rashid@example.com"
    },
    "terms": {
      "checkIn": "3:00 PM",
      "checkOut": "12:00 PM",
      "minStay": "1 night",
      "maxStay": "15 nights"
    },
    "coordinates": {
      "latitude": 26.420682,
      "longitude": 50.088794
    }
  }

]

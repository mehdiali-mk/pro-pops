const initData = [
  {
    title: "Luxury Apartment in Mumbai",
    description:
      "Spacious 3 BHK apartment with sea view, located in the heart of Mumbai.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 20000000,
    location: "Mumbai, Maharashtra",
    country: "India",
  },
  {
    title: "Penthouse in Bangalore",
    description:
      "4 BHK penthouse with rooftop garden and private swimming pool.",
    image: {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 30000000,
    location: "Bangalore, Karnataka",
    country: "India",
  },
  {
    title: "Villa in Goa",
    description:
      "Beachfront villa with private access to the beach, perfect for vacation home.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 35000000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Modern Apartment in Delhi",
    description:
      "2 BHK apartment in a prime location, with modern amenities and security.",
    image: {
      url: "https://images.unsplash.com/photo-1664813953897-ada06817c48c?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 15000000,
    location: "Delhi",
    country: "India",
  },
  {
    title: "Farmhouse in Punjab",
    description:
      "Beautiful 5-acre farmhouse with gardens, ideal for peaceful living.",
    image: {
      url: "https://images.unsplash.com/photo-1714402582129-7c363203367e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 25000000,
    location: "Amritsar, Punjab",
    country: "India",
  },
  {
    title: "Residential Plot in Hyderabad",
    description:
      "A well-located plot in a residential area, ready for construction.",
    image: {
      url: "https://images.unsplash.com/photo-1506092309076-af15fb0051e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 10000000,
    location: "Hyderabad, Telangana",
    country: "India",
  },
  {
    title: "Eco-Friendly Home in Kerala",
    description:
      "2 BHK eco-friendly house surrounded by lush greenery, close to backwaters.",
    image: {
      url: "https://images.unsplash.com/photo-1485996463739-9cb09adbe6c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 12000000,
    location: "Alleppey, Kerala",
    country: "India",
  },
  {
    title: "Luxury Bungalow in Chennai",
    description: "4 BHK bungalow with private garden and spacious living area.",
    image: {
      url: "https://images.unsplash.com/photo-1552873547-b88e7b2760e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 40000000,
    location: "Chennai, Tamil Nadu",
    country: "India",
  },
  {
    title: "Studio Apartment in Pune",
    description:
      "Compact and modern studio apartment in a young and vibrant neighborhood.",
    image: {
      url: "https://images.unsplash.com/photo-1702014860012-e0139aae6f69?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 8000000,
    location: "Pune, Maharashtra",
    country: "India",
  },
  {
    title: "Mountain Cottage in Manali",
    description:
      "3 BHK cozy cottage in the mountains, perfect for a holiday retreat.",
    image: {
      url: "https://images.unsplash.com/photo-1646376350957-1b2c1813bcab?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 15000000,
    location: "Manali, Himachal Pradesh",
    country: "India",
  },
  {
    title: "Duplex in Jaipur",
    description:
      "Spacious duplex with traditional Rajasthani architecture and modern facilities.",
    image: {
      url: "https://images.unsplash.com/photo-1643297551340-19d8ad4f20ad?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 18000000,
    location: "Jaipur, Rajasthan",
    country: "India",
  },
  {
    title: "Luxury Apartment in Gurgaon",
    description:
      "High-rise 3 BHK apartment with a stunning city view, located in a premium area.",
    image: {
      url: "https://images.unsplash.com/photo-1680919838857-d54e011093d3?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 22000000,
    location: "Gurgaon, Haryana",
    country: "India",
  },
  {
    title: "Heritage Property in Udaipur",
    description:
      "A beautiful heritage home overlooking Lake Pichola, with exquisite decor.",
    image: {
      url: "https://images.unsplash.com/photo-1719297491193-5fd6a4d04467?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 60000000,
    location: "Udaipur, Rajasthan",
    country: "India",
  },
  {
    title: "Contemporary Villa in Kochi",
    description:
      "4 BHK villa with a modern design and open living spaces, close to the city center.",
    image: {
      url: "https://images.unsplash.com/photo-1686385798052-0e86d41b4a60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 35000000,
    location: "Kochi, Kerala",
    country: "India",
  },
  {
    title: "Beach House in Puri",
    description:
      "3 BHK beach house with direct access to the sea, ideal for vacation rentals.",
    image: {
      url: "https://images.unsplash.com/photo-1511840831832-3efd661c1d0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 20000000,
    location: "Puri, Odisha",
    country: "India",
  },
  {
    title: "Penthouse in Chandigarh",
    description:
      "Luxurious penthouse with a view of the city, includes a private terrace.",
    image: {
      url: "https://images.unsplash.com/photo-1707484687082-9493754d389f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 27000000,
    location: "Chandigarh",
    country: "India",
  },
  {
    title: "Hilltop Bungalow in Ooty",
    description:
      "Charming 3 BHK bungalow located on a hilltop, surrounded by tea gardens.",
    image: {
      url: "https://images.unsplash.com/photo-1711114435495-76503f9f3181?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 18000000,
    location: "Ooty, Tamil Nadu",
    country: "India",
  },
  {
    title: "Riverfront House in Varanasi",
    description:
      "A unique riverfront property with breathtaking views of the Ganges.",
    image: {
      url: "https://images.unsplash.com/photo-1702567919133-5c0b4db02cf9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 25000000,
    location: "Varanasi, Uttar Pradesh",
    country: "India",
  },
  {
    title: "Serviced Apartment in Ahmedabad",
    description:
      "2 BHK serviced apartment in a secure complex, ideal for professionals.",
    image: {
      url: "https://images.unsplash.com/photo-1629078691977-dc51747c0263?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 12000000,
    location: "Ahmedabad, Gujarat",
    country: "India",
  },
  {
    title: "Luxury Villa in Shimla",
    description:
      "5 BHK villa in the mountains, with a fireplace and scenic views.",
    image: {
      url: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fileName: "propsImages",
    },
    price: 45000000,
    location: "Shimla, Himachal Pradesh",
    country: "India",
  },
];

module.exports = { data: initData };

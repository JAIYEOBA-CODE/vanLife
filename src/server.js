import { createServer, Model } from "miragejs";

createServer({
    models: {
        van: Model,
    },

    seeds(server) {
        // --- Existing Vans ---
        server.create("van", {
            id: "1",
            name: "Modest Explorer",
            price: 60,
            hostId: "123",
            description: "The Modest Explorer is a reliable van for your everyday adventures. It comes equipped with all the essentials you need for a comfortable journey.",
            imageUrl: "https://picsum.photos/seed/van1/400/300",
            type: "Simple",
            capacity: 2,
            features: ["Basic Kitchen", "Comfortable Seating", "Compact Design"],
        });

        server.create("van", {
            id: "2",
            name: "Luxury Cruiser",
            price: 120,
            hostId: "12211",
            description: "Experience the ultimate in comfort and style with the Luxury Cruiser. This van is perfect for those who want to travel in luxury.",
            imageUrl: "https://picsum.photos/seed/van2/400/300",
            type: "Luxury",
            capacity: 4,
            features: ["Full Kitchen", "Spacious Interior", "Premium Sound System"],
        });

        server.create("van", {
            id: "3",
            name: "Family Adventurer",
            price: 90,
            hostId: "123",
            description: "The Family Adventurer is designed for families who love to explore together. It offers plenty of space and amenities for a fun-filled trip.",
            imageUrl: "https://picsum.photos/seed/van3/400/300",
            type: "Rugged",
            capacity: 6,
            features: ["Large Sleeping Area", "Outdoor Shower", "Durable Build"],
        });

        // --- Auto-generate 50 More Vans ---
        const types = ["Simple", "Luxury", "Rugged"];
        const featuresList = [
            "Solar Panels",
            "Wi-Fi",
            "Mini Fridge",
            "Portable Toilet",
            "Roof Rack",
            "Smart TV",
            "Air Conditioning",
        ];

        for (let i = 4; i <= 53; i++) {
            server.create("van", {
                id: String(i),
                name: `Adventure Van ${i}`,
                price: 100 + (i % 7) * 40,
                hostId: i % 3 === 0 ? "123" : "456",
                description: `Adventure Van ${i} is designed for travelers who love comfort and freedom on the road.
  It comes with a variety of features to make your journey enjoyable. 
Whether you're heading to the mountains or the beach, this van has got you covered, no matter the destination.  quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. come along for the ride and explore the world in style with Adventure Van ${i}.
  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. see you on the road!
  
        `,
                imageUrl: `https://picsum.photos/seed/van${i}/400/300`,
                type: types[i % types.length],
                capacity: 2 + (i % 5),
                features: featuresList.slice(0, (i % featuresList.length) + 1),
            });
        }
    },

    routes() {
        this.namespace = "api";

        this.get("/vans", (schema) => {
            return schema.vans.all();
        });

        this.get("/vans/:id", (schema, request) => {
            return schema.vans.find(request.params.id);
        });

        this.get("/host/vans", (schema, request) => {
            return schema.vans.where({ hostId: "123" });
        });
        this.get("/host/vans/:id", (schema, request) => {
            return schema.vans.where({ id: request.params.id, hostId: "123" });
        });
    },
});
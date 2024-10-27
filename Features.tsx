export const designsList = [
    {
        id: "style..1",
        name: "Floral Design",
        price: "200",
        image: "/Mehndi2.jpeg",
        description: "An elegant blend of intricate patterns and floral motifs that beautifully adorns the skin."



,
    },
    {
        id: "style..2",
        name: "Arabic Design",
        price: "400",
        image: "/Mehndi1.jpeg",
        description: "Arabic Mehndi design features bold, flowing patterns and intricate details that create a stunning and unique look."
    },
     {
        id: "style..3",
        name: "Wedding Design",
        price: "1500",
        image: "/Mehndi14.jpeg",
        description: "Wedding Mehndi design combines exquisite patterns and romantic motifs, symbolizing love and celebration on your special day."
    },
    {
        id: "style..4",
        name: "Party Design",
        price: "700",
        image: "/Mehndi16.jpeg",
        description: "Party Mehndi design showcases vibrant patterns and playful details, perfect for adding a festive touch to any celebration.",
    },
    {
        id: "style..5",
        name: "Kashees Design",
        price: "500",
        image: "/Mehndi20.jpeg",
        description: "Kashees Mehndi design features intricate and elegant patterns that reflect traditional artistry and timeless beauty.",
    },
    {
        id: "style..6",
        name: "Indian Design",
        price: "1100",
        image: "/Mehndi6.jpeg",
        description:"Indian Mehndi design is characterized by intricate motifs and rich patterns that celebrate cultural heritage and artistry.",
    },
    {
        id: "style..7",
        name: "Moroccan Design",
        price: "800",
        image: "/Mehndi17.jpeg",
        description: "Moroccan Mehndi design features geometric patterns and bold lines, offering a unique blend of tradition and modernity.",
    },
    {
        id: "style..8",
        name: "Pakistani Design",
        price: "900",
        image: "/Mehndi18.jpeg",
        description: "Pakistani Mehndi design showcases elaborate patterns and detailed motifs, reflecting the rich cultural heritage and artistry of the region.",
    },
    {
        id: "style..9",
        name: "Engagment Design",
        price: "1200",
        image: "/Mehndi9.jpeg",
        description:"Engagement Mehndi design features romantic patterns and personalized motifs, celebrating the joy of love and commitment.",
    },
];

import { Designs } from "./Designs";

export const DesignsList = [];

export function Features() {
    return (
        <div className="container pb-20">
            <h3 className="text-4xl text-center mb-2">Features Designs</h3>
            <p className="text-center text-muted-foreground">"Experience the artistry of mehndi with our exquisite and unique designs that celebrate your special moments!"</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                {designsList.map((design) => (
                    <Designs key={design.id} {...design} />
                ))}
            </div>
        </div>
    );
}

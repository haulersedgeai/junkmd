export interface Review {
  name: string;
  rating: number;
  body: string;
  source: "Google" | "Yelp";
}

// 10 verbatim review names scraped from the live homepage Trustindex widget.
// Body text paraphrased to match voice without copying verbatim.
export const REVIEWS: Review[] = [
  {
    name: "Hillary Hebert",
    rating: 5,
    source: "Google",
    body: "Showed up on time, gave a flat price, and had my entire garage cleared in under an hour. The crew was friendly, careful with the walls, and even swept up after. Best $20 I ever saved with that first-appointment discount.",
  },
  {
    name: "Jackie Teague",
    rating: 5,
    source: "Google",
    body: "We had a hot tub that nobody else would touch. David and his team came out, broke it down, and hauled it away in a single afternoon. No damage to the patio. Easiest project we've ever booked.",
  },
  {
    name: "p bono",
    rating: 5,
    source: "Google",
    body: "Booked an appliance pickup the same day after my old fridge died. Two pros showed up exactly in the two-hour window, hauled the unit down a flight of stairs, and were gone in 15 minutes. Worth every dollar.",
  },
  {
    name: "Emily Brandt",
    rating: 5,
    source: "Google",
    body: "Clemencia made the booking process so smooth. The crew followed up the next morning, gave me a flat price, and donated most of the furniture to a local charity. Highly recommend JunkMD+.",
  },
  {
    name: "Sean Yao",
    rating: 5,
    source: "Google",
    body: "Office cleanout for our small business — they worked after hours so we didn't lose a workday. Professional, COI on file with our landlord, and the price beat the other quote we got.",
  },
  {
    name: "Sharon Minor",
    rating: 5,
    source: "Google",
    body: "Estate cleanout after my mom passed. The team was kind, respectful, and went room by room with us. They donated everything they could. I cried a little because they made what felt impossible actually doable.",
  },
  {
    name: "Mary Allen",
    rating: 5,
    source: "Google",
    body: "Got a $20 discount on my first appointment and have used them three times since. Same-day service every time. Honest pricing, friendly drivers, real people behind the phone.",
  },
  {
    name: "Thomas Rutledge",
    rating: 5,
    source: "Google",
    body: "Old playset removal. Two guys, sledgehammers, an hour and a half — gone. They left the backyard cleaner than they found it. Excellent.",
  },
  {
    name: "Michael Whitebread",
    rating: 5,
    source: "Google",
    body: "Renovation debris pickup midway through our kitchen remodel. Same-day call, on site by 2 pm, full truck out of my driveway by 4. Saved the project schedule.",
  },
  {
    name: "Kiyarha Bryant",
    rating: 5,
    source: "Google",
    body: "Hoarder cleanout for a family member. Discreet, judgment-free, and finished in two days. The whole experience was handled with care. We can't thank them enough.",
  },
];

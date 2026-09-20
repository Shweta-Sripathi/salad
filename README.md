# Salad by Selva — Website

A premium, interactive website for Salad by Selva, a home-based healthy food
brand founded by Selva Priya. Built with React, Vite, Tailwind CSS, Framer
Motion, and Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

To build for production:

```bash
npm run build
npm run preview
```

## What's included

- Animated splash screen with a letter-by-letter reveal that morphs the logo
  into the navbar on entry
- Sticky, scroll-aware navbar
- Full-viewport hero with parallax
- Founder story, "Why Choose Us", "What's Inside Your Bowl?" ingredient
  journey, "Our Offerings" (with expandable product cards), health benefits,
  packages, "From Selva's Kitchen", a filterable masonry gallery, and a
  WhatsApp-first contact section
- Floating WhatsApp button
- Fully responsive, mobile-first layout

## Replacing placeholder photography

Most product photos in "Our Offerings" now use your own reference photos,
cropped from the promo posters you shared:

- `public/offerings/rajma-salad.jpg`
- `public/offerings/sweet-corn-cucumber.jpg`
- `public/offerings/abc-juice.jpg`
- `public/offerings/ash-gourd-juice.jpg`
- `public/offerings/karuppu-ulundhu-kanji.jpg`
- `public/offerings/fruit-bowl.jpg`

Paneer Protein Bowl has no reference photo yet, so it shows a styled
"Photo Coming Soon" placeholder — drop a real photo at
`public/offerings/paneer-protein-bowl.jpg` and set its `image` field in
`src/data/offerings.js` once you have one.

Everything else (hero, founder, kitchen, gallery) still uses styled
placehold.co placeholders — swap these `src` values with real photography
when ready:

- `src/components/Hero.jsx` — hero bowl photo
- `src/components/FoundersKitchen.jsx` — kitchen/packaging photos
- `src/data/gallery.js` + `src/components/Gallery.jsx` — gallery photos

The logo at `public/logo.png` and the founder photo at `public/founder.jpg`
are the ones you provided and are already wired in.

## Offerings structure

Products are grouped into three categories in `src/data/offerings.js`:
Veg Salads, Fruit Bowl, and Detox Drinks. The Fruit Bowl category also
shows a "More on the way" card signalling upcoming menu additions — add a
new item with `category: "fruit-bowl"` and an `image` path once a new
variety launches, and the upcoming card will stay alongside it.

## Contact details used in the site

- WhatsApp: +91 99404 64150 (`https://wa.me/919940464150`)
- Instagram: https://www.instagram.com/salad_by_selva

Update these in `src/components/Navbar.jsx`, `Hero.jsx`, `Packages.jsx`,
`Contact.jsx`, `Footer.jsx`, and `WhatsAppButton.jsx` if they ever change.

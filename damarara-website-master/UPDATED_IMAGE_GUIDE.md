# Updated Image Guide - After Recent Changes

## What Changed
✅ All products are now displayed together (no separate Tea/Coffee collections)
✅ No duplicate products shown
✅ Hero slider now includes product cards on slides 2 and 3
✅ Added Farmers section to About page
✅ Navbar is now fully transparent - you can see hero image behind links
✅ Removed testimonials and video sections

## Current Image Setup

### Images You Already Have (6 files)
- `tea-1.jpg` - Tea product image
- `tea-2.jpg` - Tea product image  
- `tea-3.jpg` - Tea product image
- `coffee-1.jpg` - Coffee product image
- `coffee-2.jpg` - Coffee product image
- `about-tea.jpg` - About/Processing image

### Placeholder Images Created (to replace with your own)
- `hero-1.jpg` - Main hero slide (currently uses tea-1.jpg)
- `hero-2.jpg` - Coffee slide with product cards (currently uses coffee-1.jpg)
- `hero-3.jpg` - Tea slide with product cards (currently uses tea-3.jpg)
- `hero-4.jpg` - Final hero slide (currently uses coffee-2.jpg)
- `farmers.jpg` - Farmers section image (currently uses tea-1.jpg)

**Note:** You need to replace `about-coffee.jpg` placeholder if it's missing. Copy one of your images to create it.

## Where Each Image Is Used

### Product Pages
- Tea products use: `tea-1.jpg`, `tea-2.jpg`, `tea-3.jpg`
- Coffee products use: `coffee-1.jpg`, `coffee-2.jpg` (reused)
- **Location:** Home page "All Products" section - shows 6 unique products

### Hero Slider (Auto-rotates every 5 seconds)
- **Slide 1:** `hero-1.jpg` - General introduction (no products)
- **Slide 2:** `hero-2.jpg` - Coffee theme + shows 2 coffee products in cards
- **Slide 3:** `hero-3.jpg` - Tea theme + shows 2 tea products in cards
- **Slide 4:** `hero-4.jpg` - General theme (no products)

### About Page
- Top section: `about-tea.jpg` - Tea processing/plantation
- Featured section (right column): `about-coffee.jpg` - Coffee farm (needs replacement)
- Farmers section: `farmers.jpg` - Farmers community image
- Full-width banner: Uses same `about-coffee.jpg`

## Total Images Needed: 11

### Required Replacements (with recommendations)
1. **hero-1.jpg** - Beautiful Rwanda landscape or farm overview
2. **hero-2.jpg** - Coffee farm or close-up of coffee beans
3. **hero-3.jpg** - Tea plantation or harvesting scene
4. **hero-4.jpg** - Product craftsmanship or packaging
5. **farmers.jpg** - Rwandan farmers working in fields (IMPORTANT)
6. **about-coffee.jpg** - Coffee processing or farm landscape

### Keep As-Is (Your Images)
- `tea-1.jpg` ✓
- `tea-2.jpg` ✓
- `tea-3.jpg` ✓
- `coffee-1.jpg` ✓
- `coffee-2.jpg` ✓
- `about-tea.jpg` ✓

## Next Steps

1. Prepare your replacement images (recommended 800x600px or larger)
2. Replace placeholder files:
   - `public/images/hero-1.jpg`
   - `public/images/hero-2.jpg`
   - `public/images/hero-3.jpg`
   - `public/images/hero-4.jpg`
   - `public/images/farmers.jpg`
   - `public/images/about-coffee.jpg`
3. Run `npm run dev` to see changes immediately

## Important: Navbar Transparency

The navbar is now completely transparent so you can see the hero slider image behind it. The links have `drop-shadow` for visibility. If you want to adjust link colors or shadows, edit `src/components/Header.tsx`.

## Product Display

- Total unique products shown: **6** (3 tea + 3 coffee)
- Display location: Home page "All Products" section
- No duplicate products shown ✓
- Products are in a horizontal carousel you can scroll through

---

**TIP:** When replacing `farmers.jpg`, use a high-quality image of local farmers to strengthen your community connection! This section is powerful for storytelling.

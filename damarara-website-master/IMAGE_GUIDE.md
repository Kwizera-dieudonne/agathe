# Image Replacement Guide

Your website is now ready for your own product images! Here's what you need to do:

## Image Files to Add

Add these image files to the `public/images/` folder:

### Hero Section Images (4 images)
- `hero-1.jpg` - Main hero image (recommended: Rwanda farm/landscape)
- `hero-2.jpg` - Coffee focus image
- `hero-3.jpg` - Tea focus image
- `hero-4.jpg` - General product/craftsmanship image

### Product Images - Tea Collection (4 images)
- `tea-1.jpg` - Premium Black Tea
- `tea-2.jpg` - Green Mountain Tea
- `tea-3.jpg` - White Pearl Tea
- `tea-4.jpg` - Oolong Reserve

### Product Images - Coffee Collection (4 images)
- `coffee-1.jpg` - Arabica Sunrise
- `coffee-2.jpg` - Dark Roast Blend
- `coffee-3.jpg` - Medium Roast Classic
- `coffee-4.jpg` - Honey Process

### About Section Images (2 images)
- `about-tea.jpg` - Tea processing or farm image
- `about-coffee.jpg` - Coffee farm or roasting image

## Total: 12 Image Files

## Image Specifications

- **Format**: JPG or PNG
- **Recommended Size**: 800x600 pixels minimum (larger is better for quality)
- **Optimization**: Compress images to keep load times fast
- **Aspect Ratio**: 
  - Product cards: Square (1:1) or 4:3
  - Hero images: 16:9 or 4:3
  - About images: 4:3 or 3:2

## What Was Changed

✅ **Removed:**
- Herbal Blends section
- Instant Coffee section
- Testimonials section
- Video/Story section

✅ **Kept:**
- Tea Collection (4 products)
- Coffee Collection (4 products)
- Hero Slider (4 slides)
- About Section
- Contact Section
- All styling and functionality

## How to Use

1. Prepare your 12 images (screenshots provided above)
2. Place them in `public/images/` folder
3. Make sure filenames match exactly as listed above
4. Run `npm run dev` to see your website with your images

## Troubleshooting

If images don't appear:
- Check filename spelling and case sensitivity
- Make sure files are in `public/images/` folder
- Verify file extensions (.jpg or .png)
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for 404 errors

## Image Tools

To optimize your images, you can use:
- TinyPNG (tinypng.com) - Compress without losing quality
- Squoosh (squoosh.app) - Google's image optimizer
- ImageMagick or similar for batch processing

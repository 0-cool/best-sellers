🛍️ Best Sellers – Tailwind + Vanilla JS + Swiper

[Preview](https://best-sellers-platter.netlify.app/)

This project implements a responsive Best Sellers product component based on the provided Figma design.

It is built using:

Semantic HTML

TailwindCSS (CDN – no build step)

Vanilla JavaScript

SwiperJS for the desktop slider

The project is fully static and can be previewed directly via GitHub Pages.

✨ Features
📱 Mobile

2-column responsive grid

Only the first 4 products visible

“Show More” button reveals the remaining products

Smooth progressive disclosure (no layout shift)

🖥️ Desktop

Converted to a horizontal slider using SwiperJS

5 products visible per view

Draggable scrollbar matching the design

Proper spacing and overflow behavior

🖼️ Product Card

Hover image swap (primary → secondary)

Dynamic badges:

BEST SELLER

SAVE 15%

Star rating rendered via inline SVG

Review count + price formatting

Rounded image container with solid background tones

🎨 UI Details

Tailwind utility-first layout

Design spacing matched to Figma

Uppercase product titles

Accessible semantic structure (main, section, article)

🧠 Data Handling

Product data is stored in a products.json file to simulate a real data source.

This allows:

Separation of data and presentation

Easier scalability

Reusable rendering logic

fetch('products.json')


Each product includes:

title

price

rating

review count

badges

primary/secondary images

background tone

🛒 Shopify Adaptation

For the Shopify version:

The external JSON data layer will be replaced by the native product object

Product cards will be rendered using:

product.title

product.price

product.featured_image

product.images[1] (for hover swap)

product.metafields (for badges if needed)

The Swiper implementation can be included inside a section and powered by:

section.blocks (manual product selection), or

a collection loop (dynamic best sellers)

This keeps the same UI while using Shopify’s Liquid data model.

📁 Project Structure
/best-sellers
  ├── index.html
  ├── products.json
  ├── script.js
  └── styles.css

📌 Possible Enhancements

Lazy loading images

Keyboard accessibility for “Show More”

ARIA labels for slider controls

Shopify section schema with blocks

Dynamic badge logic via metafields

🤖 AI Usage Disclosure

To be fully transparent:
More than 60% of this project was developed with the assistance of AI.

AI was used as a productivity and scaffolding tool for:

Generating the initial project structure

Creating the base Tailwind layout

Drafting the Swiper integration

Producing the mock product JSON dataset

Writing utility functions for rendering

**All final architectural decisions, responsiveness strategy, component behavior, debugging, and implementation adjustments were reviewed, modified, and validated manually.**

**Desktop Images**
<img width="1494" height="911" alt="image" src="https://github.com/user-attachments/assets/ea645e48-8414-4c5d-8cda-bf8475f1b4b6" />
<img width="1206" height="911" alt="image" src="https://github.com/user-attachments/assets/7f8dc1bf-c5e4-49f2-98b2-4ae43240889c" />

**Tablet Images**
<img width="977" height="911" alt="image" src="https://github.com/user-attachments/assets/7bfc04a4-4285-48ce-97c2-f9cdb57b7909" />
<img width="977" height="911" alt="image" src="https://github.com/user-attachments/assets/463926e8-13bd-469c-89ad-ad194a4320e9" />

**Mobile Image**
<img width="409" height="911" alt="image" src="https://github.com/user-attachments/assets/5dcb265a-8f75-438e-bb24-bed5a2ec8c86" />



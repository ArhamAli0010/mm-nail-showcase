# MM Nail Studio Showcase

Build "MM Nail Studio" — a complete, static, visual-only client presentation demo. No real 
functionality, no database, no authentication, no live payments, no working forms, no 
working booking logic. Every button, link, and form is dummy/decorative UI. The goal is to 
look and feel completely real while being entirely non-functional under the hood.

BUSINESS
MM Nail Studio and Academy — a boutique nail studio based in Newbury, run by a qualified 
nail technician. Instagram: @mm_nail_studio. Offers in-person salon services AND nail 
training courses (online self-paced and in-person classroom). Do not invent an address, 
phone number, or opening hours.

NAVIGATION BAR (strict requirement)
One responsive shared header, single horizontal row, no wrapping or split layout:
- Far left: MM monogram/logo
- Centre: five primary nav links in one row — Studio, Services, Academy, Gallery, Contact
- Far right: Sign in / Book now, grouped together
Switch to a burger menu only on smaller/mobile screens. All items vertically aligned, 
evenly spaced, on one line at desktop and tablet widths.

COLOUR PALETTE (strict requirement — exact hex values, applied on every page)
- Background/base (dominant colour): #FBF6F2
- Headings & high-contrast text: #2B1D1A
- Buttons, CTAs, hover highlights: #5C1A1B (oxblood) — always paired with #FBF6F2 text 
  for legible contrast, check this specifically on "Book now"
- Secondary backgrounds/cards/dividers: #E8C4C0 (blush)
- Borders, icons, small accents only (sparingly, never a large fill): #B8935A (muted gold)
- Body/secondary text: #8A7F7A (neutral grey)
Do not substitute, lighten, or reinterpret these — use the exact hex values throughout.

LAYOUT STYLE
Full-width chapter structure — immersive, full-width image-led sections with polished 
transitions between them, not stacked floating cards. Include reduced-motion support.

TYPOGRAPHY
Editorial serif headings paired with restrained sans-serif body type. Premium, elegant, 
boutique feel — not a generic beauty-template look.

PHOTOGRAPHY
Original, high-end editorial nail imagery throughout — hero carousel, studio story, 
services, academy, and gallery. Polished, fast-loading, responsive.

PAGES & CONTENT

1. Home
   - Autoplay hero carousel (multiple images, smooth fade/slide transitions), tagline, 
     CTAs to book and to explore courses
   - Prominent industry-awards-finalist trust signal — unnamed competition, no year
   - Studio introduction teaser
   - Service preview (3 featured, linking to full Services page)
   - Course preview (3 featured, linking to full Academy page), each with a short 
     "what's included" line (PDFs + video for online; in-person/Newbury for classroom)
   - Editorial gallery strip with link to full Gallery
   - 5-6 placeholder testimonials mixing studio clients and academy students

2. Studio (About)
   - Founder-led story: 3-4 paragraphs — background, philosophy, approach to teaching, 
     what makes MM Nail Studio different
   - Studio values / "what to expect" section
   - Prominent industry-awards-finalist trust marker (no invented name/year)
   - Testimonial section (can reuse/rotate from Home)
   - Studio photography

3. Services
   - Full treatment menu, 8-10 services grouped into categories (Manicures, Extensions, 
     Nail Art, Add-ons), each with duration, explicit placeholder price (e.g. 
     "£45 — placeholder", never blank), inclusions, and a "Book" action
   
4. Academy (Courses)
   - Catalogue of 6 courses, mixing online and classroom: e.g. Foundations of Nail Care, 
     Hybrid & Gel Masterclass, Detailing & Nail Art, Acrylic Extensions, Advanced Nail Art 
     & Chrome, Business Basics for Nail Techs
   - Each card: image, title, online/classroom label, duration, description, explicit 
     placeholder price (e.g. "£240 — placeholder", never blank), inclusions, suitability, 
     outcomes, "what's included" line, enquiry/application action
   - Individual course detail page template: fuller description, full inclusions list 
     (PDFs + tutorial videos for online; date/location/capacity for classroom), placeholder 
     curriculum/module breakdown, placeholder price, testimonials, enrol/apply action

5. Booking
   - Staged dummy booking journey: 
     Step 1 — select a treatment, pulling the complete list from the Services page 
     Step 2 — select a date & time (Calendly-style static widget look, no working 
       navigation, no custom interactive calendar grid)
     Step 3 — enter details (dummy form)
     Ending in a clear demo confirmation screen
   - Note stating this is a visual preview only, nothing is actually booked

6. Gallery
   - Filterable editorial portfolio grid (e.g. Salon Work, Student Work, Nail Art), 
     hover zoom or lightbox-style click-to-enlarge

7. Contact
   - Presentation-only enquiry form (non-submitting), Instagram prompt (@mm_nail_studio)
   - Omit address, phone number, and opening hours

8. Sign in
   - Polished student login/reset interactions using dummy success states, no real auth

9. Student Dashboard
   - Sample course progress, an upcoming lesson, resources (PDFs/videos), certificates, 
     and account controls — all static/placeholder, showing what a logged-in student 
     would see

ANIMATIONS & INTERACTIVITY
- Hero: sliding/fading multi-image carousel with smooth autoplay
- Hover effects on service cards, course cards, buttons, nav links (subtle scale, shadow 
  lift, or colour shift)
- Smooth scroll-triggered fade-ins/slide-ins as sections come into view
- Subtle micro-interactions on buttons (press/hover states)
- Reduced-motion support throughout

FOOTER
Studio name (MM Nail Studio), short tagline, Instagram link (@mm_nail_studio), Newbury, 
Berkshire location, student dashboard link, and a small note: "Visual demo only — 
bookings, checkout, forms and sign-in are not connected."

GOAL
A content-rich, fully static visual walkthrough for a client demo call — every page should 
feel like a complete, established premium studio brand, with all the polish going into 
design, photography, and animation rather than working functionality.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2e2ee2f9-bb4b-4c9c-a6b1-c41f80102a24).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

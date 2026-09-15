# MM Nail Studio — Static Client Presentation Demo

## Goal
Build a polished, content-rich, fully static website for MM Nail Studio and Academy. Every interaction will be presentation-only: no bookings, payments, authentication, data storage, or form submissions.

## Visual direction
- Apply the exact supplied palette across every page: warm base `#FBF6F2`, oxblood `#5C1A1B`, blush `#E8C4C0`, muted gold `#B8935A`, deep text `#2B1D1A`, and grey copy `#8A7F7A`.
- Pair an editorial serif display face with a restrained sans-serif body face.
- Use immersive, image-led full-width chapters rather than floating page sections.
- Create a cohesive set of original editorial nail, studio, and education photography for the carousel, stories, services, academy, and gallery.
- Add restrained motion: carousel fades/slides, section reveals, image zooms, button feedback, and reduced-motion fallbacks.

## Shared site structure
- Build one shared responsive header with the exact desktop/tablet row: MM logo left, five centred links, and Sign in / Book now right.
- Switch to a compact burger menu only on small screens.
- Build the shared footer with studio tagline, Instagram, Newbury/Berkshire, student dashboard link, and the required visual-demo disclaimer.
- Add a persistent but understated demo notice where context requires it.

## Pages
1. **Home** — autoplay editorial carousel, tagline and calls to action, awards-finalist marker, studio teaser, three service previews, three course previews with inclusions, gallery strip, and six mixed testimonials.
2. **Studio** — founder-led story, studio photography, philosophy and teaching approach, expectations/values, awards marker, and testimonials.
3. **Services** — complete menu of 8–10 treatments grouped under Manicures, Extensions, Nail Art, and Add-ons; every item includes duration, explicit placeholder price, inclusions, and dummy Book action.
4. **Academy** — six online/classroom courses with imagery, mode, duration, description, placeholder pricing, suitability, outcomes, inclusions, and enquiry/apply actions.
5. **Course detail template** — reusable detail route for all six courses, including richer description, curriculum, format-specific inclusions, suitability, outcomes, testimonial, placeholder price, and dummy enrol/apply state.
6. **Booking** — staged visual flow for treatment selection, static date/time presentation, details form, and demo confirmation. The complete services list will be shared with the Services page. Controls will only advance the visual demo.
7. **Gallery** — filterable Salon Work, Student Work, and Nail Art portfolio with click-to-enlarge presentation lightbox.
8. **Contact** — non-submitting enquiry form and Instagram prompt; no invented address, phone, or hours.
9. **Sign in** — dummy login and reset-password views with clear presentation success states.
10. **Student Dashboard** — static course progress, upcoming lesson, PDFs/videos, certificates, and account controls.

## Content and data consistency
- Keep shared services, courses, testimonials, and gallery content in reusable static data so every page stays consistent.
- Use “placeholder” explicitly in every price.
- Never invent an address, phone number, opening hours, awards body, awards year, live course dates, or real availability.
- Clearly label classroom location as Newbury where appropriate and mark dates/capacity as placeholders.

## Interaction details
- Navigation and page links will work for presentation flow, while transactional controls remain dummy.
- Forms will prevent submission and show local-only demo states.
- Booking will culminate in an explicit visual-preview confirmation stating nothing was booked.
- Carousel pauses for manual controls and respects reduced-motion preferences.
- Gallery filters and enlargement work only in the browser and save nothing.

## Technical details
- Use the existing TanStack Start route system and shared root layout.
- Add a dedicated route for every named page and a parameterized course-detail route.
- Define all visual values as semantic design tokens in the global stylesheet, with no ad hoc component colours.
- Add unique page titles, descriptions, Open Graph text, `og:type`, and Twitter card metadata for every content route.
- Keep all content local and static; no Cloud connection or server functions.
- Verify desktop and mobile layouts, header alignment, carousel behavior, staged booking, gallery filtering/lightbox, dummy sign-in states, and route navigation in the live preview.

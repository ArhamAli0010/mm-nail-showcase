import oxblood from "@/assets/nails-oxblood.jpg";
import blush from "@/assets/nails-blush.jpg";
import art from "@/assets/nails-art.jpg";
import studio from "@/assets/studio-interior.jpg";
import classroom from "@/assets/academy-classroom.jpg";
import online from "@/assets/academy-online.jpg";

export const imagery = { oxblood, blush, art, studio, classroom, online };
export const services = [
  { category:"Manicures", name:"The Signature Manicure", duration:"60 min", price:"£45 — placeholder", includes:"Detailed cuticle care, shaping, gel colour and finishing oil." },
  { category:"Manicures", name:"BIAB Natural Nail Overlay", duration:"75 min", price:"£52 — placeholder", includes:"Structured builder base, precision prep and a flawless colour finish." },
  { category:"Manicures", name:"Bare Nail Reset", duration:"45 min", price:"£35 — placeholder", includes:"Gentle removal, tidy, hydration and natural high-shine finish." },
  { category:"Extensions", name:"Sculpted Gel Extensions", duration:"2 hr", price:"£72 — placeholder", includes:"Custom sculpted length, structured apex and single-colour finish." },
  { category:"Extensions", name:"Extension Rebalance", duration:"1 hr 45", price:"£62 — placeholder", includes:"Reshape, rebalance, cuticle work and fresh colour." },
  { category:"Nail Art", name:"Minimal Detail", duration:"15 min add-on", price:"£8 — placeholder", includes:"Fine lines, dots, micro-French or subtle accent details." },
  { category:"Nail Art", name:"Editorial Art Set", duration:"35 min add-on", price:"£22 — placeholder", includes:"Bespoke layered design across all ten nails." },
  { category:"Add-ons", name:"Chrome Finish", duration:"15 min", price:"£10 — placeholder", includes:"Mirror, pearl or glazed chrome over your chosen base." },
  { category:"Add-ons", name:"Safe Gel Removal", duration:"30 min", price:"£18 — placeholder", includes:"Careful product removal, reshape and nourishing finish." },
];
export const courses = [
  { slug:"foundations-nail-care", title:"Foundations of Nail Care", mode:"Online", duration:"Self-paced · 6 modules", price:"£120 — placeholder", image:online, description:"Build confident prep, hygiene and natural-nail foundations through calm, close-up demonstrations.", included:"Downloadable PDFs + tutorial videos", suitable:"Aspiring nail technicians and confident beginners", outcomes:"Safe prep, polished shaping and consistent client-ready finishes" },
  { slug:"hybrid-gel-masterclass", title:"Hybrid & Gel Masterclass", mode:"Classroom", duration:"1 day · capacity placeholder", price:"£240 — placeholder", image:classroom, description:"A focused day refining application, structure and removal with guided practical work.", included:"In-person in Newbury · kit list + workbook", suitable:"Qualified or foundation-level technicians", outcomes:"Improved retention, structure and service confidence" },
  { slug:"detailing-nail-art", title:"Detailing & Nail Art", mode:"Online", duration:"Self-paced · 5 modules", price:"£95 — placeholder", image:art, description:"Learn balanced composition, fine lines and wearable salon art at your own pace.", included:"Downloadable PDFs + tutorial videos", suitable:"Technicians ready to expand their art menu", outcomes:"Faster linework, colour balance and repeatable designs" },
  { slug:"acrylic-extensions", title:"Acrylic Extensions", mode:"Classroom", duration:"2 days · capacity placeholder", price:"£420 — placeholder", image:oxblood, description:"Hands-on structure, ratio, filing and refinement taught in an intimate classroom setting.", included:"In-person in Newbury · practice materials", suitable:"Developing technicians with manicure basics", outcomes:"Balanced extensions and a dependable application routine" },
  { slug:"advanced-art-chrome", title:"Advanced Nail Art & Chrome", mode:"Classroom", duration:"1 day · capacity placeholder", price:"£265 — placeholder", image:art, description:"Push your portfolio through layered art, chrome control and editorial finishing.", included:"In-person in Newbury · product practice", suitable:"Working technicians with nail-art experience", outcomes:"Editorial sets, chrome placement and confident pricing" },
  { slug:"business-basics", title:"Business Basics for Nail Techs", mode:"Online", duration:"Self-paced · 4 modules", price:"£80 — placeholder", image:blush, description:"Shape a considered service menu, client journey and sustainable studio routine.", included:"Downloadable PDFs + video workshops", suitable:"New and growing independent technicians", outcomes:"Clear offers, boundaries and an intentional client experience" },
];
export const testimonials = [
  {quote:"Every detail feels considered. My nails lasted beautifully and the appointment felt genuinely restorative.", by:"Studio client · placeholder"},
  {quote:"The explanations are so calm and clear. I finally understand the reason behind every stage of prep.", by:"Online academy student · placeholder"},
  {quote:"Immaculate work, a lovely atmosphere and the kind of finish people stop to ask about.", by:"Studio client · placeholder"},
  {quote:"The classroom size made it easy to ask questions and get feedback that changed my technique immediately.", by:"Classroom student · placeholder"},
  {quote:"My natural nails have never looked healthier. The whole experience feels elevated without being intimidating.", by:"Studio client · placeholder"},
  {quote:"The videos are close-up, practical and easy to revisit. It feels like having a mentor beside you.", by:"Online academy student · placeholder"},
];
export const galleries = [
  {src:oxblood, category:"Salon Work", title:"Oxblood gloss"},{src:blush, category:"Salon Work", title:"Sheer blush"},{src:art, category:"Nail Art", title:"Liquid chrome"},{src:classroom, category:"Student Work", title:"Guided practice"},{src:studio, category:"Salon Work", title:"The studio"},{src:online, category:"Student Work", title:"Learning library"},{src:art, category:"Nail Art", title:"Editorial curves"},{src:blush, category:"Nail Art", title:"Fine gold detail"},
];

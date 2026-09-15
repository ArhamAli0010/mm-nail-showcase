import { Link } from "@tanstack/react-router";
import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [["Studio","/studio"],["Services","/services"],["Academy","/academy"],["Gallery","/gallery"],["Contact","/contact"]] as const;
export function Header(){
 const [open,setOpen]=useState(false);
 return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
  <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-5 px-5 lg:px-10">
   <Link to="/" aria-label="MM Nail Studio home" className="font-display text-3xl font-semibold text-foreground">MM<span className="text-gold">.</span></Link>
   <nav className="hidden items-center justify-center gap-5 lg:flex xl:gap-9" aria-label="Primary navigation">{nav.map(([label,to])=><Link key={to} to={to} className="nav-link" activeProps={{className:"nav-link text-primary"}}>{label}</Link>)}</nav>
   <div className="hidden items-center justify-end gap-3 lg:flex"><Button asChild variant="ghost"><Link to="/sign-in">Sign in</Link></Button><Button asChild><Link to="/booking">Book now</Link></Button></div>
   <Button variant="ghost" size="icon" className="col-start-3 lg:hidden" onClick={()=>setOpen(!open)} aria-label={open?"Close menu":"Open menu"}>{open?<X/>:<Menu/>}</Button>
  </div>
  {open&&<nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation"><div className="grid gap-1">{nav.map(([label,to])=><Link key={to} to={to} onClick={()=>setOpen(false)} className="py-3 text-lg text-foreground">{label}</Link>)}<div className="mt-3 grid grid-cols-2 gap-3"><Button asChild variant="outline"><Link to="/sign-in" onClick={()=>setOpen(false)}>Sign in</Link></Button><Button asChild><Link to="/booking" onClick={()=>setOpen(false)}>Book now</Link></Button></div></div></nav>}
 </header>
}
export function Footer(){return <footer className="bg-foreground text-background"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr] lg:px-10"><div><div className="font-display text-4xl">MM Nail Studio</div><p className="mt-4 max-w-sm text-background/70">Considered nail care and thoughtful education, shaped with precision in Newbury.</p></div><div><p className="eyebrow text-gold">Find us</p><p className="mt-4">Newbury, Berkshire</p><a className="mt-3 inline-flex items-center gap-2 text-background/75 hover:text-background" href="https://instagram.com/mm_nail_studio" target="_blank" rel="noreferrer"><Instagram className="size-4"/> @mm_nail_studio</a></div><div><p className="eyebrow text-gold">Students</p><Link to="/dashboard" className="mt-4 block hover:text-gold">Student dashboard</Link><Link to="/academy" className="mt-3 block hover:text-gold">Browse courses</Link></div></div><div className="border-t border-background/15 px-5 py-5 text-center text-xs text-background/60">Visual demo only — bookings, checkout, forms and sign-in are not connected.</div></footer>}

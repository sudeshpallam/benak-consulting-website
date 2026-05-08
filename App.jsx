import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  FileText,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  SearchCheck,
  ShieldCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import "./index.css";

const pages = [
  { key: "home", label: "Home" },
  { key: "about", label: "About Us" },
  { key: "services", label: "Services" },
  { key: "clients", label: "Clients" },
  { key: "job-seekers", label: "Job Seekers" },
  { key: "contact", label: "Contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    icon: Users,
    title: "IT Staffing Solutions",
    text: "Contract, contract-to-hire, full-time, and project-based staffing for companies that need dependable technology talent.",
  },
  {
    icon: BriefcaseBusiness,
    title: "IT Consulting Services",
    text: "Business-focused technology consulting that helps companies plan, improve, and support their IT operations.",
  },
  {
    icon: Code2,
    title: "Application & Technical Support",
    text: "Support for software teams, enterprise applications, implementation projects, and technical business needs.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Staffing",
    text: "Qualified professionals for cloud, systems, network, infrastructure, and support roles across modern IT environments.",
  },
  {
    icon: Database,
    title: "Data & Business Technology Talent",
    text: "Staffing and consulting support for data analysts, business analysts, reporting teams, and technology operations.",
  },
  {
    icon: ShieldCheck,
    title: "Project-Based IT Delivery",
    text: "Flexible consulting and staffing support for short-term initiatives, long-term programs, and client delivery needs.",
  },
];

const values = [
  {
    title: "Trust",
    text: "We build long-term relationships through honesty, transparency, and dependable communication.",
  },
  {
    title: "Professionalism",
    text: "We represent clients and consultants with a serious corporate standard from first conversation to final delivery.",
  },
  {
    title: "Connection",
    text: "We connect organizations with qualified IT professionals who fit the business need, timeline, and role requirements.",
  },
  {
    title: "Delivery",
    text: "We stay focused on results, accountability, and consistent support for clients and job seekers.",
  },
];

const clientSteps = [
  "Understand your role, project, timeline, and technology needs.",
  "Identify qualified consultants and candidates that match the requirement.",
  "Coordinate interviews, feedback, onboarding, and placement support.",
  "Continue communication after placement to support long-term success.",
];

const jobRoles = [
  "Software Developer",
  "Business Analyst",
  "Data Analyst",
  "Cloud Engineer",
  "QA Analyst",
  "DevOps Engineer",
  "Systems Administrator",
  "Project Manager",
];

function SectionIntro({ eyebrow, title, text, center = false }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <motion.p variants={fadeUp} className="mb-3 font-black uppercase tracking-[0.25em] text-[#ff6a00]">
        {eyebrow}
      </motion.p>
      <motion.h2 variants={fadeUp} className="text-4xl font-black tracking-tight md:text-5xl">
        {title}
      </motion.h2>
      {text && <motion.p variants={fadeUp} className="mt-5 text-lg leading-8 text-black/60">{text}</motion.p>}
    </motion.div>
  );
}

function Header({ activePage, setActivePage }) {
  const [open, setOpen] = useState(false);

  const goTo = (key) => {
    setActivePage(key);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button onClick={() => goTo("home")} className="flex items-center gap-3">
          <img src="/logo-png.png" alt="Benak Consulting logo" className="h-12 w-auto max-w-[220px] object-contain" />
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {pages.map((page) => (
            <button
              key={page.key}
              onClick={() => goTo(page.key)}
              className={`group relative text-sm font-semibold transition ${activePage === page.key ? "text-black" : "text-black/65 hover:text-black"}`}
            >
              {page.label}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-[#ff6a00] transition-all duration-300 ${activePage === page.key ? "w-full" : "w-0 group-hover:w-full"}`} />
            </button>
          ))}
        </nav>

        <button
          onClick={() => goTo("contact")}
          className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#ff6a00] lg:inline-flex"
        >
          Get Started
        </button>

        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Open menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {pages.map((page) => (
              <button key={page.key} onClick={() => goTo(page.key)} className="text-left font-semibold text-black/75">
                {page.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ setActivePage }) {
  return (
    <section className="relative isolate min-h-[88vh] bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[-12rem] top-[-10rem] h-[36rem] w-[36rem] rounded-full bg-[#ff6a00]/12 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-full bg-gradient-to-t from-gray-100 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff6a00]/30 bg-[#ff6a00]/10 px-4 py-2 text-sm font-bold text-[#d45600]">
            <Zap className="h-4 w-4" /> Corporate IT Consulting & Staffing
          </motion.div>
          <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-black md:text-7xl">
            Connecting businesses with trusted <span className="text-[#ff6a00]">IT talent</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
            Benak Consulting helps businesses scale through professional IT consulting, staffing solutions, project-based support, and dependable technology talent.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button onClick={() => setActivePage("clients")} className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6a00] px-7 py-4 font-bold text-white shadow-xl shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-black">
              Hire IT Talent <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
            <button onClick={() => setActivePage("job-seekers")} className="inline-flex items-center justify-center rounded-full border-2 border-black px-7 py-4 font-bold text-black transition hover:-translate-y-1 hover:border-[#ff6a00] hover:text-[#ff6a00]">
              Find Opportunities
            </button>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[#ff6a00]/20 blur-2xl" />
          <div className="relative rounded-[2rem] border border-black/10 bg-black p-4 shadow-2xl">
            <div className="rounded-[1.5rem] bg-white p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#ff6a00]">Benak Consulting</p>
                  <h3 className="text-2xl font-black">Staffing Process</h3>
                </div>
                <div className="rounded-full bg-black p-3 text-white"><Network /></div>
              </div>
              <div className="space-y-4">
                {["Requirement Review", "Candidate Screening", "Interview Coordination", "Placement Support"].map((label, i) => (
                  <div key={label} className="rounded-2xl border border-black/10 bg-gray-50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-bold">{label}</span>
                      <span className="text-sm font-black text-[#ff6a00]">0{i + 1}</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-black/10">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${70 + i * 7}%` }} transition={{ duration: 1.1, delay: 0.35 + i * 0.15 }} className="h-full rounded-full bg-[#ff6a00]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <motion.div key={service.title} variants={fadeUp} className="group rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#ff6a00]/40 hover:shadow-2xl">
            <div className="mb-6 inline-flex rounded-2xl bg-[#ff6a00]/10 p-4 text-[#ff6a00] transition group-hover:bg-[#ff6a00] group-hover:text-white">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-black">{service.title}</h3>
            <p className="mt-3 leading-7 text-black/60">{service.text}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function HomePage({ setActivePage }) {
  return (
    <>
      <Hero setActivePage={setActivePage} />
      <section className="bg-black py-7 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 text-sm font-bold uppercase tracking-[0.22em] text-white/75 lg:px-8">
          {["IT Consulting", "Staffing Solutions", "Trusted Talent", "Project Support", "Business Growth"].map((item) => (
            <span key={item} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#ff6a00]" />{item}</span>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <SectionIntro
            eyebrow="Who We Are"
            title="A corporate IT staffing partner built on trust and delivery."
            text="Benak Consulting supports both companies and technology professionals through reliable IT consulting, staffing, placement support, and project-based resources."
          />
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeUp} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:border-[#ff6a00]/40 hover:shadow-xl">
                <div className="mb-5 h-1.5 w-12 rounded-full bg-[#ff6a00] transition group-hover:w-20" />
                <h3 className="text-2xl font-black">{value.title}</h3>
                <p className="mt-3 leading-7 text-black/60">{value.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionIntro center eyebrow="Our Services" title="IT consulting and staffing support for growing teams." text="We help businesses fill critical technology needs while supporting job seekers with career-focused opportunities." />
          <div className="mt-14"><ServicesGrid /></div>
          <div className="mt-10 text-center">
            <button onClick={() => setActivePage("services")} className="rounded-full bg-black px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#ff6a00]">View All Services</button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-2 lg:px-8">
          <motion.div whileHover={{ y: -8 }} className="rounded-[2rem] bg-black p-8 text-white shadow-xl">
            <Users className="h-10 w-10 text-[#ff6a00]" />
            <h3 className="mt-8 text-3xl font-black">For Clients</h3>
            <p className="mt-4 leading-8 text-white/65">Find qualified IT professionals for contract, full-time, and project-based needs with a partner focused on quality and communication.</p>
            <button onClick={() => setActivePage("clients")} className="mt-8 inline-flex items-center gap-2 font-black text-[#ff6a00]">Client Solutions <ChevronRight className="h-5 w-5" /></button>
          </motion.div>
          <motion.div whileHover={{ y: -8 }} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl">
            <FileText className="h-10 w-10 text-[#ff6a00]" />
            <h3 className="mt-8 text-3xl font-black">For Job Seekers</h3>
            <p className="mt-4 leading-8 text-black/60">Connect with opportunities that match your IT skills, experience, and long-term career goals.</p>
            <button onClick={() => setActivePage("job-seekers")} className="mt-8 inline-flex items-center gap-2 font-black text-[#ff6a00]">Explore Careers <ChevronRight className="h-5 w-5" /></button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <section className="pt-28">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionIntro eyebrow="About Us" title="Benak Consulting is a corporate IT consulting and staffing firm." text="We help organizations connect with dependable technology professionals while helping job seekers find opportunities where they can grow and contribute." />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="rounded-[2rem] bg-gray-100 p-8">
            <motion.h3 variants={fadeUp} className="text-3xl font-black">Our Mission</motion.h3>
            <motion.p variants={fadeUp} className="mt-5 text-lg leading-8 text-black/65">Our mission is to make IT staffing and consulting easier, more transparent, and more reliable for businesses and professionals. We focus on understanding the requirement, communicating clearly, and supporting every placement or project with professionalism.</motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-lg leading-8 text-black/65">Benak Consulting works with companies that need skilled technology talent and with job seekers looking for the right next step in their careers.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-5">
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeUp} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black"><span className="text-[#ff6a00]">/</span> {value.title}</h3>
                <p className="mt-3 leading-7 text-black/60">{value.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesPage({ setActivePage }) {
  return (
    <section className="pt-28">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionIntro center eyebrow="Services" title="Professional IT consulting and staffing services." text="Benak Consulting helps companies hire strong IT talent, support key business initiatives, and manage staffing needs with a professional corporate process." />
        <div className="mt-14"><ServicesGrid /></div>
        <div className="mt-16 rounded-[2rem] bg-black p-8 text-center text-white md:p-12">
          <h3 className="text-3xl font-black">Need help filling an IT role?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">Send us your requirement and our team will help identify the right staffing or consulting support.</p>
          <button onClick={() => setActivePage("contact")} className="mt-8 rounded-full bg-[#ff6a00] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-black">Contact Benak Consulting</button>
        </div>
      </div>
    </section>
  );
}

function ClientsPage({ setActivePage }) {
  return (
    <section className="pt-28">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionIntro eyebrow="For Clients" title="Reliable staffing support for your IT hiring needs." text="We help businesses identify qualified technology professionals for contract, full-time, and project-based roles with a process focused on speed, quality, and communication." />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-black p-8 text-white">
            <h3 className="text-3xl font-black">How We Support Clients</h3>
            <div className="mt-8 space-y-5">
              {clientSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-white/5 p-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff6a00] font-black">{index + 1}</div>
                  <p className="leading-7 text-white/70">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            {["Contract Staffing", "Contract-to-Hire", "Full-Time Placement", "Project-Based Resources"].map((item) => (
              <div key={item} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <SearchCheck className="mb-4 h-8 w-8 text-[#ff6a00]" />
                <h3 className="text-2xl font-black">{item}</h3>
                <p className="mt-3 text-black/60">Flexible staffing support designed around your business timeline and technology requirements.</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => setActivePage("contact")} className="mt-12 rounded-full bg-[#ff6a00] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-black">Submit a Hiring Need</button>
      </div>
    </section>
  );
}

function JobSeekersPage({ setActivePage }) {
  return (
    <section className="pt-28">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionIntro eyebrow="Job Seekers" title="Find IT opportunities that match your skills and goals." text="Benak Consulting supports technology professionals with placement opportunities, communication, and guidance throughout the hiring process." />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {jobRoles.map((role) => (
            <motion.div key={role} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#ff6a00]/40 hover:shadow-xl">
              <BriefcaseBusiness className="mb-4 h-8 w-8 text-[#ff6a00]" />
              <h3 className="text-lg font-black">{role}</h3>
            </motion.div>
          ))}
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-gray-100 p-8">
            <h3 className="text-3xl font-black">Why work with us?</h3>
            <div className="mt-6 space-y-4">
              {["Transparent communication", "Role matching based on your experience", "Support through interview and onboarding", "Long-term professional relationship"].map((item) => (
                <p key={item} className="flex items-center gap-3 text-black/70"><CheckCircle2 className="h-5 w-5 text-[#ff6a00]" /> {item}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-black p-8 text-white">
            <h3 className="text-3xl font-black">Ready to submit your resume?</h3>
            <p className="mt-4 leading-8 text-white/65">Use the contact form and choose “Job Seeker / Resume Submission,” or email your resume directly to info@benakconsulting.com.</p>
            <button onClick={() => setActivePage("contact")} className="mt-8 rounded-full bg-[#ff6a00] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-black">Submit Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="bg-black pt-28 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="mb-3 font-black uppercase tracking-[0.25em] text-[#ff6a00]">Contact</p>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">Let’s talk about your IT staffing or consulting needs.</h2>
          <p className="mt-6 text-lg leading-8 text-white/65">Contact Benak Consulting for business staffing needs, consulting support, or job seeker opportunities.</p>
          <div className="mt-10 space-y-5 text-white/75">
            <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#ff6a00]" /> info@benakconsulting.com</p>
            <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#ff6a00]" /> 732-579-2932</p>
            <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#ff6a00]" /> 732-610-7535</p>
            <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#ff6a00]" /> United States</p>
          </div>
        </div>

        <form className="rounded-[2rem] border border-white/10 bg-white p-6 text-black shadow-2xl md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            {["Name", "Email", "Phone Number", "Company Name"].map((field) => (
              <label key={field} className="block">
                <span className="mb-2 block text-sm font-bold text-black/70">{field}</span>
                <input className="w-full rounded-2xl border border-black/10 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#ff6a00] focus:ring-4 focus:ring-[#ff6a00]/10" placeholder={field} />
              </label>
            ))}
          </div>
          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-bold text-black/70">Service Needed</span>
            <select className="w-full rounded-2xl border border-black/10 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#ff6a00] focus:ring-4 focus:ring-[#ff6a00]/10">
              <option>IT Staffing</option>
              <option>IT Consulting</option>
              <option>Contract Staffing</option>
              <option>Full-Time Hiring Support</option>
              <option>Project-Based Staffing</option>
              <option>Job Seeker / Resume Submission</option>
            </select>
          </label>
          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-bold text-black/70">Message</span>
            <textarea rows={5} className="w-full rounded-2xl border border-black/10 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#ff6a00] focus:ring-4 focus:ring-[#ff6a00]/10" placeholder="Tell us about your hiring need, consulting request, or career interest." />
          </label>
          <button type="button" className="mt-6 w-full rounded-full bg-[#ff6a00] px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-black">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer({ setActivePage }) {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 px-5 py-12 md:grid-cols-4 lg:px-8">
        <div>
          <button onClick={() => setActivePage("home")} className="flex items-center gap-3">
            <img src="/logo-png.png" alt="Benak Consulting logo" className="h-12 w-auto max-w-[220px] rounded bg-white p-1 object-contain" />
          </button>
          <p className="mt-5 text-sm leading-7 text-white/55">Corporate IT consulting and staffing solutions built around trust, professionalism, and long-term growth.</p>
        </div>
        <div>
          <h4 className="mb-4 font-black text-[#ff6a00]">Quick Links</h4>
          <div className="space-y-3 text-sm text-white/60">{pages.map((page) => <button key={page.key} onClick={() => setActivePage(page.key)} className="block hover:text-white">{page.label}</button>)}</div>
        </div>
        <div>
          <h4 className="mb-4 font-black text-[#ff6a00]">Services</h4>
          <div className="space-y-3 text-sm text-white/60"><p>IT Staffing</p><p>IT Consulting</p><p>Contract Staffing</p><p>Project-Based Support</p></div>
        </div>
        <div>
          <h4 className="mb-4 font-black text-[#ff6a00]">Contact</h4>
          <div className="space-y-3 text-sm text-white/60"><p>info@benakconsulting.com</p><p>732-579-2932</p><p>732-610-7535</p></div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-sm text-white/45">© 2026 Benak Consulting. All rights reserved.</div>
    </footer>
  );
}

export default function BenakConsultingWebsite() {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    document.title = `Benak Consulting | ${pages.find((page) => page.key === activePage)?.label || "IT Consulting"}`;
  }, [activePage]);

  const currentPage = useMemo(() => {
    switch (activePage) {
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage setActivePage={setActivePage} />;
      case "clients":
        return <ClientsPage setActivePage={setActivePage} />;
      case "job-seekers":
        return <JobSeekersPage setActivePage={setActivePage} />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  }, [activePage]);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main>{currentPage}</main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

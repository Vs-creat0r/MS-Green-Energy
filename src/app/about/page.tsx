import Image from "next/image";
import Link from "next/link";

const milestones = [
  {
    year: "2009",
    title: "Founded with a Mission",
    description: "Started MS Green Solar with a vision to democratize clean energy access across India. Our first installation was a 3kW system in Mumbai.",
    image: "/images/trust-section.jpg",
    stats: "First 3kW system installed"
  },
  {
    year: "2015",
    title: "1,000th Installation Milestone",
    description: "Reached our first major milestone with 1,000 residential installations across Maharashtra, Gujarat, and Karnataka.",
    image: "/images/trust-section-bg.jpg",
    stats: "1,000+ happy customers"
  },
  {
    year: "2020",
    title: "Commercial Division Launch",
    description: "Expanded into commercial and industrial solar solutions, completing our first 1MW rooftop installation for a textile manufacturer.",
    image: "/images/services-commercial.jpg",
    stats: "First 1MW commercial project"
  },
  {
    year: "2024",
    title: "25 MW Capacity Achieved",
    description: "Proud to have installed 25 MW of clean energy capacity, preventing 35,000 tons of CO2 emissions annually.",
    image: "/images/about-solar-farm.jpg",
    stats: "25 MW total capacity"
  }
];

const team = [
  {
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    experience: "15+ years",
    certifications: ["NABCEP Certified", "IIT Delhi Alumni"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    bio: "Pioneering solar energy adoption in India with a focus on making clean energy accessible to every household."
  },
  {
    name: "Priya Patel",
    role: "Chief Technology Officer",
    experience: "12+ years",
    certifications: ["Solar PV Design Expert", "Energy Storage Specialist"],
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&q=80",
    bio: "Leading our technical innovations in solar system design and energy storage solutions."
  },
  {
    name: "Amit Kumar",
    role: "Head of Operations",
    experience: "10+ years",
    certifications: ["Project Management Professional", "Safety Certified"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    bio: "Ensuring every installation meets our highest standards of quality and safety."
  },
  {
    name: "Sneha Reddy",
    role: "Customer Success Manager",
    experience: "8+ years",
    certifications: ["Customer Experience Specialist", "Solar Consultant"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    bio: "Dedicated to ensuring every customer achieves maximum value from their solar investment."
  }
];

const certifications = [
  "NABCEP Certified Installers",
  "Bureau of Indian Standards (BIS) Approved",
  "Ministry of New & Renewable Energy (MNRE) Empaneled",
  "ISO 9001:2015 Quality Management",
  "Electrical Contractors License",
  "Insurance & Bonded Operations"
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-mission-overlay.jpg"
            alt="Solar installation team at work"
            fill
            className="object-cover"
            quality={70}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-primary/90" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white z-10">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            The MS Green Standard
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            15 years of energy independence. From a small team with big dreams to 25 MW of clean energy installed across India.
          </p>
          
          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="font-headline text-2xl font-bold text-white">15+</div>
              <div className="font-body text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="font-headline text-2xl font-bold text-white">25 MW</div>
              <div className="font-body text-white/80 text-sm">Installed Capacity</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="font-headline text-2xl font-bold text-white">5,000+</div>
              <div className="font-body text-white/80 text-sm">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="font-headline text-2xl font-bold text-white">35,000</div>
              <div className="font-body text-white/80 text-sm">Tons CO₂ Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Our Journey to Energy Independence
            </h2>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
              Every milestone represents thousands of families who chose clean energy and financial freedom.
            </p>
          </div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1 max-w-lg">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="font-headline font-bold text-white text-lg">{milestone.year.slice(-2)}</span>
                    </div>
                    <div className="font-headline text-2xl font-bold text-primary">{milestone.year}</div>
                  </div>
                  
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">
                    {milestone.title}
                  </h3>
                  
                  <p className="font-body text-on-surface-variant text-lg mb-6 leading-relaxed">
                    {milestone.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 border border-accent/20">
                    <span className="material-symbols-outlined text-accent text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      trending_up
                    </span>
                    <span className="font-body font-semibold text-accent text-sm">
                      {milestone.stats}
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 max-w-lg">
                  <div className="relative rounded-[2rem] overflow-hidden shadow-[0_16px_48px_-8px_rgba(5,150,105,0.15)] group">
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Meet Our Expert Team
            </h2>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
              Certified professionals dedicated to delivering the highest quality solar installations and customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-[0_8px_32px_-4px_rgba(5,150,105,0.08)] hover:shadow-[0_16px_48px_-8px_rgba(5,150,105,0.12)] transition-all duration-500">
                  {/* Photo */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                      quality={80}
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="font-headline text-lg font-bold text-on-surface mb-1">
                      {member.name}
                    </h3>
                    <p className="font-body text-primary font-semibold text-sm mb-2">
                      {member.role}
                    </p>
                    <p className="font-body text-on-surface-variant text-xs mb-4">
                      {member.bio}
                    </p>

                    {/* Experience */}
                    <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-3 py-1 mb-3">
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        work_history
                      </span>
                      <span className="font-body font-medium text-secondary text-xs">
                        {member.experience}
                      </span>
                    </div>

                    {/* Certifications */}
                    <div className="space-y-1">
                      {member.certifications.map((cert) => (
                        <div key={cert} className="inline-flex items-center gap-1 bg-primary/10 rounded-full px-2 py-1 mr-1 mb-1">
                          <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                            verified
                          </span>
                          <span className="font-body text-primary text-xs font-medium">
                            {cert}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Trust */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-container">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
              Certified & Trusted
            </h2>
            <p className="font-body text-white/90 text-lg max-w-2xl mx-auto">
              Our certifications and partnerships ensure you receive the highest quality installations backed by industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
                <span className="font-body text-white font-medium text-sm">
                  {cert}
                </span>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="mt-16 bg-white/10 backdrop-blur-md rounded-[2rem] p-8 border border-white/20">
            <h3 className="font-headline text-2xl font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="font-body text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
              To democratize clean energy access across India, empowering every household and business to achieve energy independence while contributing to a sustainable future. We believe that solar energy should be accessible, affordable, and reliable for all.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-on-accent rounded-full font-body font-bold text-lg hover:bg-accent-container transition-all duration-300 shadow-[0_8px_32px_-4px_rgba(245,158,11,0.25)] active:scale-95"
            >
              Join the Clean Energy Revolution
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
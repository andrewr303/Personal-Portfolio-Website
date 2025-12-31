import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { GraduationCap, Award, BookOpen, Trophy, Calendar } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
  highlights?: string[];
}

function TimelineItem({ year, title, institution, description, icon, highlights }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:bg-primary/30 transition-colors">
        {icon}
      </div>

      <div className="ml-6">
        <span className="text-sm text-primary font-medium">{year}</span>
        <h3 className="font-display text-xl font-bold mt-1">{title}</h3>
        <p className="text-muted-foreground">{institution}</p>
        <p className="mt-2 text-foreground/80">{description}</p>
        
        {highlights && highlights.length > 0 && (
          <ul className="mt-3 space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

interface CertificationCardProps {
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

function CertificationCard({ title, issuer, year, description }: CertificationCardProps) {
  return (
    <div className="glass rounded-xl p-6 hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between">
        <div className="p-3 rounded-lg bg-primary/20">
          <BookOpen className="h-5 w-5 text-primary" />
        </div>
        <span className="text-sm text-muted-foreground">{year}</span>
      </div>
      <h3 className="font-display font-semibold mt-4">{title}</h3>
      <p className="text-sm text-muted-foreground">{issuer}</p>
      {description && (
        <p className="text-sm text-foreground/70 mt-2">{description}</p>
      )}
    </div>
  );
}

interface AwardCardProps {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

function AwardCard({ title, organization, year, description }: AwardCardProps) {
  return (
    <div className="glass rounded-xl p-6 hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between">
        <div className="p-3 rounded-lg bg-accent/20">
          <Trophy className="h-5 w-5 text-accent" />
        </div>
        <span className="text-sm text-muted-foreground">{year}</span>
      </div>
      <h3 className="font-display font-semibold mt-4">{title}</h3>
      <p className="text-sm text-muted-foreground">{organization}</p>
      {description && (
        <p className="text-sm text-foreground/70 mt-2">{description}</p>
      )}
    </div>
  );
}

export default function Education() {
  const education = [
    {
      year: "2022 - 2024",
      title: "Bachelor of Science in Business Administration",
      institution: "University of Colorado Boulder - Leeds School of Business",
      description: "Concentration in Finance with focus on financial modeling, investment analysis, and entrepreneurial finance.",
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
      highlights: [
        "Finance concentration with emphasis on startup valuation",
        "Developed comprehensive business plans and financial models",
        "Completed coursework in corporate finance, investments, and accounting",
      ],
    },
    {
      year: "2018 - 2022",
      title: "High School Diploma",
      institution: "Monarch High School",
      description: "Business-focused curriculum with emphasis on entrepreneurship and financial literacy.",
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
      highlights: [
        "Business concentration coursework",
        "DECA and FBLA State Finalist",
        "National recognition in business examinations",
      ],
    },
  ];

  const certifications = [
    {
      title: "Tax Preparation Certification",
      issuer: "Tax Help Colorado / VITA",
      year: "2023",
      description: "IRS-certified volunteer tax preparer specializing in low-income tax assistance.",
    },
    {
      title: "Successful Networking",
      issuer: "LinkedIn Learning",
      year: "2023",
      description: "Professional networking strategies for career advancement and business development.",
    },
    {
      title: "Financial Modeling Fundamentals",
      issuer: "Leeds School of Business",
      year: "2024",
      description: "Advanced Excel-based financial modeling for valuations and projections.",
    },
  ];

  const awards = [
    {
      title: "Top-20 AgTech Startup Finalist",
      organization: "Farm Credit AgVentures",
      year: "2024",
      description: "Farm Insights selected as top-20 finalist among innovative AgTech startups nationwide.",
    },
    {
      title: "Tax Help Colorado Recognition",
      organization: "Tax Help Colorado",
      year: "2023",
      description: "Recognized for volunteer service preparing tax returns for low-income families.",
    },
    {
      title: "DECA State Finalist",
      organization: "DECA Colorado",
      year: "2022",
      description: "State-level competition finalist in business and entrepreneurship categories.",
    },
    {
      title: "FBLA State Finalist",
      organization: "FBLA Colorado",
      year: "2021",
      description: "State-level competition finalist in business leadership and presentation.",
    },
    {
      title: "National Business Exam Recognition",
      organization: "National Business Education Association",
      year: "2021",
      description: "Top scorer in national standardized business examinations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <SectionHeader
            title="Education & Credentials"
            subtitle="Academic foundation, professional certifications, and recognition that shaped my expertise in finance and entrepreneurship."
            centered
          />
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold">Academic Journey</h2>
          </div>
          
          <div className="mt-8">
            {education.map((edu, index) => (
              <TimelineItem key={index} {...edu} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold">Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Honors */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold">Awards & Honors</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <AwardCard key={index} {...award} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

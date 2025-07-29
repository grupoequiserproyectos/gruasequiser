
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { AboutSection } from '@/components/about-section'
import { EquipmentSection } from '@/components/equipment-section'
import { StatsSection } from '@/components/stats-section'
import { ProjectsSection } from '@/components/projects-section'
import { TeamSection } from '@/components/team-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <EquipmentSection />
      <StatsSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

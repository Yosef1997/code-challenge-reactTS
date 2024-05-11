import {
  AboutCulture,
  AboutHero,
  Footer,
  Milestone,
  Navbar,
  Team,
} from "../components"

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <Team />
      <AboutCulture />
      <Milestone />
      <Footer />
    </div>
  )
}

export default About

import {
  Footer,
  Hero,
  Navbar,
  Overview,
  PriceList,
  Products,
  Team,
  Testimony,
} from "../components"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Overview />
      <Team />
      <Products showNavigation={true} />
      <Testimony />
      <PriceList />
      <Footer />
    </div>
  )
}

export default Home

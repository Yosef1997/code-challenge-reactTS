import {
  Footer,
  Hero,
  Navbar,
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
      <Team />
      <Products />
      <Testimony />
      <PriceList />
      <Footer />
    </div>
  )
}

export default Home

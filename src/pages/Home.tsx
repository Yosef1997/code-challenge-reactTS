import {
  Footer,
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
      <Team />
      <Products />
      <Testimony />
      <PriceList />
      <Footer />
    </div>
  )
}

export default Home

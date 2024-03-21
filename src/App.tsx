import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Homepage from './components/Homepage'
import Partners from './components/OurPartners'
import Service from './components/Services'
import Footer from './shared/Footer'
import Header from './shared/Header'
function App() {
  return (
    <>
      <Header />
      <Homepage />
      <AboutUs />
      <Service />
      <Partners />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App

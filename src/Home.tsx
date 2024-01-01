import Footer from "./components/footer/Footer"
import AboutMe from "./homepages/aboutme/AbouMe"
import ContactMe from "./homepages/contactme/ContactMe"
import Projects from './homepages/projects/Projects'

const Home = () => {
  return (
    <>
    <AboutMe />
    <Projects />
    <ContactMe />
    <Footer />
    </>
  )
}

export default Home
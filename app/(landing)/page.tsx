import Footer from "@/app/(landing)/Footer";
import Navbar from "@/app/(landing)/Navbar";
import Hero from "@/app/(landing)/Helo";
import Features from "@/app/(landing)/Features";
import About from "@/app/(landing)/About";
import Team from "@/app/(landing)/Team";
import TechStack from "@/app/(landing)/TechStack";
import Testimonial from "@/app/(landing)/Testimonial";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Team />
      <TechStack />
      <Testimonial />
      <Footer />
    </>
  )
}

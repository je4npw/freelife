import Footer from "./components/main/footer";
import FirstCta from "./components/main/firstCta.tsx";
import VoluntarioCta from "./components/main/voluntarioCta.tsx";
import InvoluntarioCta from "./components/main/involuntarioCta.tsx";
import ConsideraCta from "./components/main/consideraCta.tsx";

export default function App() {
  return (
    <>
      <FirstCta />
      <VoluntarioCta />
      <InvoluntarioCta />
      <ConsideraCta />
      <Footer />
    </>
  );
}

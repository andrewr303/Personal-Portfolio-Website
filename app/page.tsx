import { TopNav } from "@/components/chrome/TopNav";
import { Hero } from "@/components/sections/Hero";
import { HypeStakeFeature } from "@/components/sections/HypeStakeFeature";
import { ProductFlipbook } from "@/components/sections/ProductFlipbook";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
      <TopNav active="home" />
      <main
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 26px 120px",
        }}
      >
        <Hero />
        <HypeStakeFeature />
        <ProductFlipbook />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

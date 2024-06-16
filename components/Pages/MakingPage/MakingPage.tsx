import Layout from "@/components/Layouts"
import Hero from "./Hero"
import PageContainer from "@/components/PageContainer"
import Advantage from "./Advantage"
import Work from "./Work"
import FanFacts from "./FanFacts"

const MakingPage = () => (
  <Layout type="base">
    <Hero />
    <PageContainer>
      <Work />
      <Advantage />
    </PageContainer>
    <FanFacts />
  </Layout>
)
export default MakingPage

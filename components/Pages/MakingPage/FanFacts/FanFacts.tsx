import PageContainer from "@/components/PageContainer"
import Media from "@/shared/Media"
import lists from "./Fans.json"
import GradientText from "@/components/GradientText"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import EarningButton from "@/components/EarningButton"

const FanFacts = () => (
  <div className="relative w-full h-auto flex justify-start items-start">
    <PageContainer>
      <FadeInWhenVisible className="w-full flex flex-col justify-start itemso-start text-white">
        <p
          className="font-space_grotesk text-white
                    font-[400] text-[28px] md:text-[36px] leading-[115%] py-[30px] 
                    mt-[50px] z-[2] mb-[30px]"
        >
          Fan Facts
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 p-2 gap-[20px] py-10">
          {lists.map((list) => (
            <div key={list.num} className="col-span-1 flex flex-col justify-center items-center">
              <GradientText className="text-2xl 3md:text-4xl">
                {list.num} <span>K+</span>
              </GradientText>
              <p className="mt-[10px] font-open_sans font-[400] text-sm md:text-base leading-[130%] text-white">
                {list.label}
              </p>
            </div>
          ))}
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible className="w-[300px] 3md:w-[600px] xl:w-full flex flex-col mt-[30px]">
        <p
          className="font-space_grotesk font-500 text-[26px] 3md:text-[36px] mb-4
                    text-white text-center md:text-left"
        >
          {`What's the result?`}
        </p>
        <div className="w-full mt-[10px]">
          <p
            className="font-poppins font-[400] text-sm md:text-base 
                    text-white mx-auto"
          >
            {`As we can see, selling accounts can really ensure a good income. By automating the process, \n 
            you'll spend very little time creating and farming accounts. Your main audience is marketing, \n 
            traffic arbitrage specialists, and bloggers who buy accounts in bulk, so the money is likely to flow \n 
            in large amounts. The demand for accounts is growing every year, don't miss the opportunity to \n 
            take a niche for yourself as well `}{" "}
            <span className="underline">hStock.</span>
          </p>
        </div>
        <EarningButton />
      </FadeInWhenVisible>
    </PageContainer>
    <div className="absolute w-full h-atuo">
      <Media
        link="/images/making/bg-fun facts.svg"
        blurLink="/images/making/bg-fun facts.png"
        containerClasses="w-full aspect-[1420/520]"
      />
    </div>
  </div>
)

export default FanFacts

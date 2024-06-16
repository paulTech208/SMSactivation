import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import GradientButton from "@/components/GradientButton"
import Media from "@/shared/Media"

const MonetizingMobile = () => (
  <FadeInWhenVisible>
    <div className="w-[300px] 3md:w-[600px] xl:w-full">
      <div className="grid grid-cols-1 3md:grid-cols-7 xl:grid-cols-12 w-full">
        <div className="md:col-span-7">
          <div className="flex items-center gap-4">
            <p
              className="font-poppins font-500 text-lg 3md:text-xl xl:text-xl 
              text-center 3md:text-left 3md:text-2xl
              text-blue_2 py-5 uppercase"
            >
              Making money on SIM cards
            </p>
            <div className="h-[2px] w-[40px] bg-blue_2" />
          </div>
          <p
            className="font-space_grotesk font-500 text-2xl 3md:text-3xl xl:text-4xl 
            text-center 3md:text-left text-white"
          >
            Earning on accounts: monetization and opportunities
          </p>
          <p className="mt-[30px] font-open_sans font-[400] text-sm md:text-base leading-[130%] text-white">
            {`Do you have ready-made accounts? We know where to sell them easily!
 `}
          </p>
          <p className="mt-[30px] font-open_sans font-[400] text-sm md:text-base leading-[130%] text-white">
            {`Our partner hStock.org is a marketplace where digital goods (mostlye \n accounts) are sold out almost instantly. Only verified sellers are placed \n on the platform, so buyers trust the quality of any digital goods.`}
          </p>
          <GradientButton containerClasses="w-[175px] aspect-[175/60] mt-[30px] ">
            More details
          </GradientButton>
        </div>
        <div className="md:col-span-5 flex items-start relative">
          <Media
            link="/images/making/m003t0478_b_money_bag_17jun22 copy 1.svg"
            blurLink="/images/making/m003t0478_b_money_bag_17jun22 copy 1.png"
            containerClasses="w-[250px] 3md:w-full mx-auto aspect-[300/350] z-[2]"
          />
          <Media
            link="/images/earn/earn_blur_2.svg"
            blurLink="/images/earn/earn_blur_2.png"
            containerClasses="!absolute max-w-[552px] aspect-[1/1] z-[1]
            left-0 top-0"
          />
        </div>
      </div>
    </div>
  </FadeInWhenVisible>
)

export default MonetizingMobile

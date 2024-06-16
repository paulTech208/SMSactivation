import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const SimCard = () => (
  <FadeInWhenVisible className="py-5 mt-[100px]">
    <button
      type="button"
      className="font-Jost font-bold text-xs md:text-sm p-[10px] rounded-[25px] h-[30px] 
      bg-[white] text-black flex items-center
      transition duration-[300ms] hover:scale-[1.1]"
    >
      HOW IT WORKS
    </button>

    <FadeInWhenVisible className="w-[300px] 3md:w-[600px] xl:w-full flex flex-col mt-[30px]">
      <p
        className="font-space_grotesk font-500 text-[26px] 3md:text-[36px] mb-4
                    text-white text-center md:text-left"
      >
        Who and why needs accounts?
      </p>
      <div className="w-full mt-[10px]">
        <p
          className="font-poppins font-[400] text-sm md:text-base 
                    text-white mx-auto"
        >
          {`Indeed, the target audience of various accounts buyers is huge: from traffic arbitrage specialists \n 
          to bloggers, from cryptoabusers to infobusinessmen, as well as SEO and marketing specialists,  \n 
          content makers, TikTokers, gamers, spammers, mailers.... All of them sometimes buy hundreds and thousands  \n 
          of accounts for their daily activities.`}
        </p>
        <p
          className="font-poppins font-[400] text-sm md:text-base 
                    text-white mx-auto mt-[20px]"
        >
          {`For example, one traffic arbitrage team of 7-10 members requires 100-150 ready-made Google \n 
          Ads accounts per day for efficient and profitable work. On average, the price for 1 account starts \n 
          from 3000$.`}
        </p>
      </div>
    </FadeInWhenVisible>
    <FadeInWhenVisible className="w-[300px] 3md:w-[600px] xl:w-full flex flex-col mt-[50px]">
      <p
        className="font-space_grotesk font-500 text-[26px] 3md:text-[36px] mb-4 leading-[100%]
                    text-white text-center md:text-left"
      >
        {`How much money can you make and how to \n choose a niche?`}
      </p>
      <div className="w-full mt-[10px]">
        <div className="w-full flex jsutify-start py-2">
          <p
            className="font-poppins font-[400] text-sm md:text-base leading-[20px]
                    text-white mx-auto"
          >
            <span className="font-bold"> A simple example:</span>
            Price for a Telegram number starts from 12$ at the moment of writing the article; A
            ready-made Telegram account on hStock costs 30-50$; An account with a 10-day non-use
            period and manual registration costs from 170$.
          </p>
        </div>
        <div className="w-full flex jsutify-start py-2">
          <p
            className="font-poppins font-[400] text-sm md:text-base leading-[20px]
                    text-white mx-auto"
          >
            <span className="font-bold"> The most popular items today</span>
            {` are definitely Telegram, Twitter, Google and Instagram \n
            accounts. For example, in October 2023, the turnover of one of the largest stores \n
            on hStock reached 4 849,079$ with a number of sales equal to 26,075 accounts. Moreover, \n
            this store specializes only in the sale of Telegram accounts.`}
          </p>
        </div>
        <div className="w-full flex jsutify-start py-2">
          <p
            className="font-poppins font-[400] text-sm md:text-base leading-[20px]
                    text-white mx-auto"
          >
            {`However, don't forget about other digital items, such as Discord. Perhaps the demand for \n
            them is lower, but there is also much less competition among sellers. Take your niche on \n
            hStock today!`}
          </p>
        </div>
      </div>
    </FadeInWhenVisible>
  </FadeInWhenVisible>
)

export default SimCard

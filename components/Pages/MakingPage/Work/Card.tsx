import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"

const Card = ({ data, i }) => (
  <FadeInWhenVisible className="w-full grid grid-cols-1 md:grid-cols-5 justify-start items-center gap-[20px] px-4">
    <div className="w-full col-span-1 mx-auto text-white relative flex justify-center text-[50px] font-poppins items-center">
      <Media
        link={`/images/earn/step${i}.svg`}
        blurLink={`/images/earn/step${i}.svg`}
        containerClasses="w-[70px] xl:w-[100px] aspect-[1/1] rounded-full"
      />
      <div className="absolute bottom-0 left-[25px] md:left-[50px]" />
    </div>
    <div className="col-span-4 flex flex-col justify-start items-start font-poppins text-base text-white">
      <p className="font-poppins text-base leadint-[100%]">{data.answer}</p>
      <p className="font-poppins text-sm opacity-60 leadint-[100%] mt-6">{data.content}</p>
    </div>
  </FadeInWhenVisible>
)

export default Card

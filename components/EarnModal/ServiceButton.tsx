import Media from "@/shared/Media"

const ServiceButton = ({ service, onClick }) => (
  <button
    type="button"
    className="w-full h-max flex justify-start gap-[20px] items-center"
    onClick={onClick}
  >
    <div className="flex items-center w-full gap-[10px] py-1 border-b-[1px] border-b-[#282828] cursor-pointer">
      <Media
        link={`/images/landing/${service?.icon}.svg`}
        blurLink={`/images/landing/${service?.icon}.png`}
        containerClasses="w-[30px] aspect-[30/30]"
      />
      <div className="flex flex-col justify-start font-Poppins text-white flex-grow">
        <p className="text-[16px] font-[400] leading-[27px]">{service?.title}</p>
      </div>
    </div>
  </button>
)

export default ServiceButton

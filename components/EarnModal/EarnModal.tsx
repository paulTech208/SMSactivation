import Modal from "@/shared/Modal"
import Input from "@/shared/Input"
import GradientButton from "../GradientButton"
import useClickOutside from "@/hooks/useClickOutside"
import services from "./services"
import ServiceButton from "./ServiceButton"
import usePhoneData from "@/hooks/usePhoneData"

const EarnModal = ({ isVisible, toggleVisible }) => {
  const { isVisibleSelect, setIsVisibleSelect, selectRef } = useClickOutside()
  const {
    setAppName,
    appName,
    setPhoneAmount,
    phoneNumber,
    setServiceName,
    givePhoneNumber,
    loading,
  } = usePhoneData()

  const setChange = (service) => {
    setAppName(service)
    setServiceName(service.title)
    setIsVisibleSelect(!isVisibleSelect)
  }

  return (
    <Modal isVisible={isVisible} onClose={toggleVisible}>
      <div className="bg-black border border-gray_1 w-[280px] md:w-[350px] h-[400px] md:h-[500px] p-6">
        <div className="relative w-full p-6" ref={selectRef}>
          <ServiceButton service={appName} onClick={() => setIsVisibleSelect(!isVisibleSelect)} />
          {isVisibleSelect && (
            <div
              className="max-w-full max-h-[400px] absolute top-full left-0 z-50
                bg-gray_1 py-4 px-4 overflow-y-auto overflow-x-hidden
                w-full rounded-[15px] flex flex-col gap-3"
            >
              {services.map((service) => (
                <ServiceButton
                  key={service.title}
                  service={service}
                  onClick={() => setChange(service)}
                />
              ))}
            </div>
          )}
        </div>
        <Input
          onChange={(e) => setPhoneAmount(e.target.value)}
          placeholder="Number of Phone"
          type="number"
          className="!w-[200px] md:!w-[260px] ml-[20px] "
        />
        <div className="w-full h-[100px] md:h-[150px] mt-[20px] md:mt-[30px] overflow-y-auto px-6 flex flex-col jsutify-center items-start">
          {phoneNumber.map((list) => (
            <p key={list} className="text-white">
              {list}
            </p>
          ))}
        </div>
        <GradientButton containerClasses="mt-[10px] md:mt-[50px] mx-auto" onClick={givePhoneNumber}>
          <p>{loading ? "pending...." : "Confirm"}</p>
        </GradientButton>
      </div>
    </Modal>
  )
}

export default EarnModal

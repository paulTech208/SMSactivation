import { useState } from "react"
import EarnModal from "../EarnModal"
import GradientButton from "../GradientButton"

const EarningButton = () => {
  const [isOpenEarnModal, setIsOpenEarnModal] = useState(false)
  const toggleVisible = () => {
    setIsOpenEarnModal(!isOpenEarnModal)
  }
  return (
    <>
      <GradientButton
        containerClasses="w-[175px] aspect-[175/60] mt-[30px] mb-[50px] mx-auto"
        onClick={toggleVisible}
      >
        Start earnings
      </GradientButton>
      <EarnModal isVisible={isOpenEarnModal} toggleVisible={toggleVisible} />
    </>
  )
}

export default EarningButton

import axios from "axios"
import handleTxError from "@/lib/handleTxError"
import { API_URL } from "./consts"
import getCookie from "./getCookie"

const getPhoneNumber = async (appName, projectId, num) => {
  try {
    const Authorization = getCookie("token")
    const response = await axios.get(`${API_URL}/receiveSmsPool/getReceivePhone`, {
      headers: {
        Authorization,
      },
      params: {
        num,
        projectId,
        appName,
      },
    })
    return response.data
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default getPhoneNumber

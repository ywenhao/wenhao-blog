import Axios from 'axios'
import servicePath from '../config/apiUrl'
import { GetIcons } from '../utils/get-icons'

async function getClassify() {
  try {
    const classify = await Axios(servicePath.getTypeInfo).then(
      res => {
        const data = res.data.data
        data.map(v => {
          v.icon =  GetIcons(v.icon)
        })
        return data
      }
    )

    return classify
  } catch (err) {
    console.log(err)
  }
}

const classifyApi = {
  getClassify,
}

export default classifyApi

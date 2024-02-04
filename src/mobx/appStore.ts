import { getUrl } from "@/util"
import axios from "axios"
import { makeAutoObservable, toJS } from "mobx"

class App {
  isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  getMatches = async () => {
    try {
      this.isLoading = true
      const res = await axios.post(
        getUrl() + "/matches",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      console.log("getMatches")
      console.log(res)
      this.isLoading = false
      return res.data
    } catch (error) {
      this.isLoading = false
      console.error("Error with getting the matches:", error)
    }
  }
}
const appStore = new App()
export default appStore

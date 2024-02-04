import { makeAutoObservable } from "mobx"

class Filter {
  search: string = ""

  constructor() {
    makeAutoObservable(this)
  }

  setFilter = (search: string) => {
    this.search = search
  }
}

const filterStore = new Filter()
export default filterStore

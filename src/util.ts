import { Timestamp } from "firebase/firestore"
import moment from "moment"

export const modals = {
  addCategory: "addCategory",
  editCategory: "editCategory",
  addWord: "addWord",
  editWord: "editWord",
  viewWord: "viewWord",
  success: "success",
  confirmDeleteCategory: "confirmDeleteCategory",
  confirmDeleteWord: "confirmDeleteWord",
  examSaved: "examSaved",
}

export const getResponse = (message: string, data = "") => {
  return {
    SUCCESS: {
      status: 200,
      message,
      isSuccess: true,
      data,
    },
    PERMISSION: {
      status: 401,
      message,
      isSuccess: false,
    },
    BAD_REQUEST: {
      status: 400,
      message,
      isSuccess: false,
    },
    NOT_FOUND: {
      status: 404,
      message,
      isSuccess: false,
    },
    GENERAL_ERROR: {
      status: 500,
      message,
      isSuccess: false,
    },
  }
}

export const isSameDay = (dateA: Timestamp, dateB: Timestamp) => {
  return getFullDate(dateA) === getFullDate(dateB)
}
export const convertPlainToTimestamp = (plainTimestamp: Timestamp) => {
  const firebaseTimestamp = new Timestamp(
    plainTimestamp.seconds,
    plainTimestamp.nanoseconds
  )
  return firebaseTimestamp
}
export const getFullDate = (date: Timestamp | undefined) => {
  // console.log(toJS(date))

  // console.log(Timestamp.now())
  // console.log(Timestamp.now().toDate())
  if (!date) throw new Error("no date supply")
  const momentDate = moment(convertPlainToTimestamp(date).toDate())
  const strDate = momentDate.format("MM/DD/YYYY")
  return strDate
}

export const sleep = (time: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve("done")
    }, time)
  )

export const getUrl = () => {
  return process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASIC_URL
    : process.env.NEXT_PUBLIC_BASIC_URL_PRODUCTION
}
export const parseJSON = (jsonString: string) => {
  try {
    return JSON.parse(jsonString)
  } catch (e) {
    console.error("Error parsing JSON:", e)
    return null // or return an empty object/array as a fallback
  }
}

export const Language = "filipino (Tagalo)"
export const isDev = () => process.env.NODE_ENV === "development"

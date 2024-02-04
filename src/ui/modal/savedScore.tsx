import Image from "next/image"
import React, { FC, useEffect, useState } from "react"
import ColorList from "@/ui/ColorList"
import { observer } from "mobx-react-lite"
import Modal from "."
import { Timestamp } from "firebase/firestore"
import { FcApproval } from "react-icons/fc"
type ModalProps = {
  onClose: any
  title: string
  message: string
}
const SavedScoreModal: FC<ModalProps> = observer(
  ({ onClose, title, message }) => {
    return (
      <Modal>
        <div className="py-4 flex flex-col items-center justify-around gap-5 h-full  w-full ">
          <FcApproval size={85} />
          <div className="flex flex-col items-center gap-2">
            <div className="font-bold text-2xl ">{title}</div>
            <div className="tracking-wider">{message} </div>
          </div>
          <button
            onClick={onClose}
            className="  border-color-blue border-2 bg-color-blue text-color-white rounded-md py-2 px-4 cursor-pointer"
          >
            DONE
          </button>
        </div>
      </Modal>
    )
  }
)
export default SavedScoreModal

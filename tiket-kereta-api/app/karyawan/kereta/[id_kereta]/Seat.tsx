"use client"

import { KursiType } from "../../types"
import EditKursi from "./editSeat"
import DropKursi from "./dropSeat"

type props = {
    item: KursiType
}

const Seat = (myProp:props) => {
    return (
        <div className="size-20 rounded-sm flex flex-col items-center justify-center bg-sky-700 p-2">
            {/* Nomor kursi */}
            <span className="text-white font-semibold">
                {myProp.item.seat_number}
            </span>

            {/* Tombol edit & Drop dalam satu baris */}
            <div className="mt-2 flex flex-row gap-2">
                <EditKursi item={myProp.item}/>
                <DropKursi item={myProp.item}/>
            </div>

        </div>
    )
}
export default Seat
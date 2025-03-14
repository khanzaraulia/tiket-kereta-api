import { GerbongType } from "../../types"
import AddGerbong from "./addGerbong"
import AddKursi from "./addSeat"
import DropGerbong from "./dropGerbong"
import EditGerbong from "./editGerbong"
import Seat from "./Seat"

type props = {
    item: GerbongType
}
const Gerbong = (myProp: props) => {
    return (
        <div className="w-full my-2 bg-slate-50 rounded-md shadow-md flex flex-wrap justify-between">
            <div className="p-3">
                <small className="text-xs text-sky-600">Nama Gerbong</small>
                <br />
                {myProp.item.name}
                <br />
                Jumlah Kursi: {myProp.item.seat_count}

                <AddKursi id_gerbong={myProp.item.id}/>

                {/* Kursi */}
                <div className="w-full my-2">
                    {myProp.item.seats.length === 0 ? (
                        <div className="bg-sky-200 p-5 rounded-md">
                            Gerbong ini belum mempunyai kursi
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-3">
                            {myProp.item.seats.map((seat, index) => (
                                <Seat key={`keySeat-${index}`} item={seat} />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            

            {/* Tombol Edit & Drop */}
            <div className="p-3 flex gap-2">
                <EditGerbong item={myProp.item} />
                <DropGerbong item={myProp.item} />
            </div>
        </div>
    );
}

export default Gerbong;

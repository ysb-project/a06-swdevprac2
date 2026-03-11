import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";

export default function Booking() {
    return (
        <main className="h-auto w-full flex items-center justify-center px-4 py-12">
            <div className="bg-white rounded-2xl p-6 w-[600px] flex flex-col gap-6  items-center">
                
                <h1  style={{marginTop: '24px'}}  className="text-2xl font-bold text-gray-800 tracking-tight mt-4">
                    Venue Booking
                </h1>
                <hr className="border-gray-100 w-full" />

                <TextField
                    variant="standard"
                    name="Name-Lastname"
                    label="Name-Lastname"
                    className="w-[80%]"
                />

                <TextField
                    variant="standard"
                    name="Contact-Number"
                    label="Contact-Number"
                    className="w-[80%]"
                />

                <div className="flex flex-col gap-4   w-[80%]">
                    <h1 className="text-sm font-medium text-gray-600 ">
                        Pick-Up Date and Location
                    </h1>
                    <DateReserve />
                </div>

                <button style={{marginBottom: '24px'}} 
                    className="w-[40%] h-[50px] rounded-xl bg-sky-600  
                    transition-all duration-200 px-4 py-3 text-white font-semibold 
                    shadow-md text-sm tracking-wide "
                >
                    Book Venue
                </button>

            </div>
        </main>
    );
}
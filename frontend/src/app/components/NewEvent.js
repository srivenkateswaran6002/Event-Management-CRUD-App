import Image from "next/image";

export default function NewEvent() {
    return (
        <div className="bg-blue-400 flex content-center justify-center p-4 rounded shadow hover:shadow-lg hover:bg-blue-500 transition cursor-pointer hover:scale-105 duration-200" onClick={{}}>
            <Image src="Plus.svg" alt="Add Event" width={150} height={150} />
        </div>
    )
}
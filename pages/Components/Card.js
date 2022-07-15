import Image from "next/image";

export default function Card({image, title, text, code_link}) {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl  rounded-lg bg-gray-100 dark:bg-gray-400 shadow-lg">
                <Image
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg outline-1 outline-gray-800"
                    src={image}/>

                <div className="p-6 flex flex-col justify-start">
                    <p className="text-gray-900 text-xl font-medium mb-2">{title}</p>
                    <p className="text-gray-700 text-base mb-4">
                        {text}
                    </p>
                    <p className={"h-16"}></p>
                    <a className={"hover:text-blue-400 hover:dark:text-green-300 text-right"} href = {code_link} target=  '_blank' rel="noreferrer">View Code</a>
                </div>

            </div>
        </div>
    )
}
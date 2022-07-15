import Card from "./Card";
export default function Projects() {
    return (

        <div className={"flex flex-col items-center justify-center"}>
            <span className="text-center text-5xl text-gray-500 dark:text-gray-300 h-20" >Projects</span>
            <div className = "flex flex-col space-y-10" >
                <Card
                    image = "mahjong_classifier_icon.png"
                    title = "Mahjong Computer Vision Model"
                    text = "Computer vision model that is able to recognize and classify mahjong tiles in a hand for next-move recommendations."
                    code_link= "https://github.com/danieljliu/Mahjong-CV"
                />
                <Card
                    image = "wifi_csi.png"
                    title = "Mobile User Authentication with Deep Learning"
                    text = "CNN model using Wi-fi channel state information (CSI) data to identify specific users and activities"
                    code_link= "https://github.com/danieljliu/Mahjong-CV"
                />
                <Card
                    image = "green_gem.webp"
                    title = "Virus DNA Language Model"
                    text = "Deep learning model employing the AWD-LSTM architecture to learn patterns associated specifically with viral DNA"
                    code_link= "https://github.com/danieljliu/Mahjong-CV"
                />
            </div>
        </div>
    )
}

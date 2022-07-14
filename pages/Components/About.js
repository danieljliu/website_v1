export default function About() {
    return (
        <div className={"flex flex-col items-center justify-center dark:text-gray-300 "}>
            <h1 className="text-center text-5xl text-gray-500 dark:text-gray-300 h-20">About Me</h1>
            <div className={"text-center text-2xl w-[50vw]"}>
                Aspiring Data Scientist pursuing a Master's in Data Science. Jumped ship from biotechnology
                because he couldn't get a job. Please help me feed myself.
                I recently received my <span className={"text-blue-400 dark:text-green-500"}>B.S. in Bioinformatics </span>
                at Rutgers University as well as a <span className={"text-blue-400 dark:text-green-500"}>Computer Science minor</span>. I'm
                currently pursuing a <span className={"text-blue-400 dark:text-green-500"}>M.S. in Data Science</span> at Rutgers University.
                Ever since I was young, I loved money.
            </div>
        </div>
    )
}

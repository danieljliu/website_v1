export default function About() {
    return (
        <div className={"flex flex-col items-center justify-center dark:text-gray-300 "}>
            <h1 className="text-center text-5xl text-gray-500 dark:text-gray-300 h-20">About Me</h1>
            <div className={"text-center text-2xl w-[50vw]"}>
                B o y s today I will be trying to get a job by making a generic website. Check me out Im Dan Liu, recent graduate of Rutgers University
                with a
                <span className={"text-blue-400 dark:text-green-500"}>B.S. in Bioinformatics </span>
                and a
                <span className={"text-blue-400 dark:text-green-500"}>minor in Computer Science</span>.
                Im tryna jump ship from biotech so Im currently pursuing a
                <span className={"text-blue-400 dark:text-green-500"}>M.S. in Data Science</span>
                at Rutgers University so someone will hire me. Pls hire me.
            </div>
        </div>
    )
}

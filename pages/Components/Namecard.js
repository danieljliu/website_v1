import Typewriter from 'typewriter-effect'

export default function Namecard() {
    return (
        <div className={"flex flex-col items-center justify-center h-[58vh]"}>
            <span className={"text-gray-500 dark:text-gray-300 font-sans text-7xl"}>Daniel Liu</span>

            <div>
                <Typewriter className="typewriter"
                              options={{
                                  strings: ['Jobless Bum', 'Monster Hunter Addict', 'All Around Drain on Society'],
                                  autoStart: true,
                                  loop: true,
                              }}
            />
            </div>
        </div>
    )
}

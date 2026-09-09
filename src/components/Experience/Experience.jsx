function Experience() {
    return (
        <div className="mx-auto flex max-w-2xl flex-col md:flex-row">
            <section className="flex-1 bg-custom-left p-4 text-left border-b border-neutral-300 md:border-r md:border-b-0 md:p-[10px] md:text-right md:h-[710px]">
                <span className="text-xl font-bold">Professional Experience</span>
            </section>
            <section className="flex-1 p-4 border-b border-neutral-300 md:p-[10px] md:pt-[15px] md:h-[710px]">
                <span className="text-xl font-bold">Experience in IT</span>
                <ul className="mt-2 space-y-2">
                    <li><b>Telecommunications Engineer</b> Current job since July 2022</li>
                    <li>Communications Electromechanic since February 2022 to June 2022</li>
                    <li>Computer Operator since April 2019 to September 2021</li>
                    <li>Equipment Engineer (Computer Equipment) since August 2016 to January 2017</li>
                </ul>
            </section>
        </div>
    );
}

export default Experience;
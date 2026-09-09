function Metrics() {
    return(
        <div className='max-w-2xl mx-auto my-4'>
            <div className='flex flex-wrap justify-center items-center gap-4'>
                <img 
                src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=my-app-s&theme=dark" 
                alt="GitHub Stats"
                className="w-[47%] min-w-[280px] h-auto block"
                />
                <img 
                src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=my-app-s&theme=dark&utcOffset=4" 
                alt="GitHub Productive Time"
                className="w-[47%] min-w-[280px] h-auto block"
                />
            </div>
        </div>
    )
}

export default Metrics

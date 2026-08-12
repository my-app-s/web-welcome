import './Metrics.css'

function Metrics() {
    return(
        <div className='container'>
            <div className='metrics-grid'>
                <img 
                src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=my-app-s&theme=dark" 
                alt="GitHub Stats" 
                />
                <img 
                src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=my-app-s&theme=dark&utcOffset=4" 
                alt="GitHub Productive Time" 
                />
            </div>
        </div>
    )
}

export default Metrics

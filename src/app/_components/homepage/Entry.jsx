export default function Entry( {foodItem} ) {
    return (
        <div className="entry p-2">
            <p className="text-lg pt-1 tracking-wider"><u>{foodItem.provider}</u> has food <span>To Go!</span></p>
            <p className="text-lg pt-1 tracking-wider">Pickup at: <i>{foodItem.location}</i></p>
            <p className="text-lg pt-1 tracking-wider">Stock Left:</p>
            <div className="flex w-full p-2 pb-0 justify-center items-center">
                <div className={`border border-gray-500 h-5 w-1/4 ${foodItem.stock>0 ? 'bg-dark-green' : '' }`}></div>
                <div className={`border border-gray-500 h-5 w-1/4 ${foodItem.stock>10 ? 'bg-dark-green' : '' }`}></div>
                <div className={`border border-gray-500 h-5 w-1/4 ${foodItem.stock>25 ? 'bg-dark-green' : '' }`}></div>
                <div className={`border border-gray-500 h-5 w-1/4 ${foodItem.stock>50 ? 'bg-dark-green' : '' }`}></div>
            </div>
            <div className="flex w-full justify-center items-center">
                <div className="w-1/4 text-center">1-10</div>
                <div className="w-1/4 text-center">10-25</div>
                <div className="w-1/4 text-center">25-50</div>
                <div className="w-1/4 text-center">50+</div>
            </div>
        </div>
    );
}
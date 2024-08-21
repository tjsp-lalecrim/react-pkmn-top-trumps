export default function Score({ yourScore, opponentScore }) {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-full flex flex-col items-center justify-evenly'>
                <span >You</span>
                <span>{yourScore || 0}</span>
            </div>
            <div className='w-full flex flex-col items-center justify-evenly'>
                <span >Opponent</span>
                <span>{opponentScore || 0}</span>
            </div>
        </div>
    );
}
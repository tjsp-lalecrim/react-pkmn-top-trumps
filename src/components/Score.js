export default function Score({yourScore, opponentScore}){
    return (
        <table className='w-full flex flex-col items-center'>
                <thead className='flex justify-items-between'>
                    <tr>
                        <th className="text-center">You</th>
                        <th className="text-center">Opponent</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{yourScore || 0}</td>
                        <td className="text-center">{opponentScore || 0}</td>
                    </tr>
                </tbody>
            </table>
    );
}
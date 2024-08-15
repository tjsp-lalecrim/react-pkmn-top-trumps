export default function Log({ log }) {
    return (
        <div className='w-full bg-slate-50 text-center text-slate-950 rounded py-1 my-2'>
            {
                log.map((value, index) => <p id={`log-${index}`}>{value}</p>)
            }
        </div>
    );
}
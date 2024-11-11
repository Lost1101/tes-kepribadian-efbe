import PropTypes from 'prop-types';
import data from '../data/data';

export default function Result({ hash, setHash, setShowResult}) {
    const numCategories = data.length;
    const interval = 100 / numCategories;

    let index = Math.floor(hash / interval);
    if (index >= numCategories) {
        index = numCategories - 1
    }

    const result = data[index]

    const reset = () =>{
        setHash("")
        setShowResult(false)
    }

    return (
        <div className="bg-base-200 min-h-screen">
            <div className="text-center">
                <div className='py-5'>
                    <p className='block'>Selamat, Kamu adalah...</p>
                    <h1 className='text-5xl font-bold block'>{result.title}</h1>
                    <img src={result.img} alt={result.title} className='w-72 m-auto py-5'/>
                    <p className='block'>{result.text}</p>
                    <button className="btn btn-primary m-auto mt-5" onClick={reset}>Back</button>
                </div>
            </div>
        </div>
    );
}

Result.propTypes = {
    hash: PropTypes.number.isRequired,
    setHash: PropTypes.func.isRequired,
    setShowResult: PropTypes.func.isRequired
};
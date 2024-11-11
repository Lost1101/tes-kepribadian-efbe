import PropTypes from 'prop-types'
import Button from "./Button"
import test from '../../public/karbit.jpeg'

export default function Hero({setHash}){
    console.log(test)
    return(
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">Tes Kepribadian</h1>
                <p className="py-6">
                    Selamat datang di aplikasi gabut :v, silakan uplod foto kamu/foto profil kamu, tenang, fotonya hanya diproses di client-side ;)
                </p>
                    <Button setHash={setHash}/>
                </div>
            </div>
        </div>
    )
}

Hero.propTypes = {
    setHash: PropTypes.func
}
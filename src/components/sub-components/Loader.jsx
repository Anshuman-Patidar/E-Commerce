import Loadding from '../../assets/gif/Loadding.gif'
import './Loader.css'
function Loader(props) {
    return (
        <div className='Loadding'>
            <img width={props.width} src={Loadding} alt="Loader" />

        </div>
    )
}

export default Loader

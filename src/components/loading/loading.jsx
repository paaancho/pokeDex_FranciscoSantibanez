import gifLoading from './loading.gif';
import './loading.css'

const Loading = () => {
    return (
     <div className='loading-container'>
         <img src={gifLoading} alt="loading..." width="50" heigth="50" />
     </div>
    )
}


export default Loading;
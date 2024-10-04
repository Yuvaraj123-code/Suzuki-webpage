import './Background.scss'
import video from '../../Assets/video1.mp4'
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'

const Background=({playStatus,heroCount})=> {
    if (playStatus){
  return (
    <div>
    <video className='background' autoPlay loop muted>
        <source src={video} type='Video/mp4'></source>
        </video>       
    </div>
  )
}
else if(heroCount===0){
    return<img src={image1} className='background fade-in' alt=""/>
}
else if(heroCount===1){
    return<img src={image2} className='background fade-in' alt=""/>
}
else if(heroCount===2){
    return<img src={image3} className='background fade-in' alt=""/>
}
}

export default Background
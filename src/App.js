import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch';
import { useEffect,useState } from 'react';

function App() {

  const [images,setImages] = useState([])

  const [term,setTerm] = useState('')

  useEffect(()=>{

    

    getPhoto()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  
  const getPhoto = async () => {
    const res = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    const data = await res.json()
    setImages(data.hits)
  }

  const searchText = (text) => {
    setTerm(text)
    getPhoto()
}

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={searchText} />
      <div className="grid grid-cols-3 gap-4">
        {
          images.map((i) => {
            return <ImageCard image={i} key={i.id}  />
          })
        }
      </div>
      
    </div>
  );
}

export default App;

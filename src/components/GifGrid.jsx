import { GifNameId } from "./GifNameId";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({categorypro}) => {
  
  const {images,isLoading} = useFetchGifs(categorypro);
  
  //console.log(isLoading);
  return (
    <>
        <h1>{categorypro}</h1>
        {
          isLoading && (<h2>Cargando...</h2>)
        }

        <div className="card-grid">
          {
            images.map(img =>
              <GifNameId key={img.id} 
              {...img}/>
              //<li key={img.id}>{img.title}</li>
              )
          }
        </div>

    </>
  )
}

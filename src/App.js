import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import CarouselComponent from "./components/carousel.component";
import "react-responsive-carousel/lib/styles/carousel.min.css";




const App = () => {
////////////// HOOKS /////////////////////////
// hike array state
const [hike, setHike] = useState([])
// display states
const [displayHike, setDisplayHike] = useState(false)
const [displayAddHike, setDisplayAddHike] = useState(false)
const [displayEditHike, setDisplayEditHike] = useState(false)
const [displayHikeImages, setHikeImages] = useState(false)

// model states
const [hikeName, setHikeName] = useState("")
const [hikeState, setHikeState] = useState("")
const [hikeCity, setHikeCity] = useState("")
const [hikeDescription, setHikeDescription] = useState("")
const [hikeLength, setHikeLength] = useState()
const [hikeElevation, setHikeElevation] = useState()
const [hikeDifficulty, setHikeDifficulty] = useState("")
const [hikeImage, setHikeImage] = useState("")
// const [hikeImageArray, setHikeImageArray] = useState([])

// const [hikedYet, setHikedYet] = useState(false)


//// UPDATE HOOKS/////////////////////////////
const [hikeUpdateName, setUpdateHikeName] = useState("")
const [hikeUpdateState, setUpdateHikeState] = useState("")
const [hikeUpdateCity, setUpdateHikeCity] = useState("")
const [hikeUpdateDescription, setUpdateHikeDescription] = useState("")
const [hikeUpdateLength, setUpdateHikeLength] = useState()
const [hikeUpdateElevation, setUpdateHikeElevation] = useState()
const [hikeUpdateDifficulty, setUpdateHikeDifficulty] = useState("")
const [hikeUpdateImage, setUpdateHikeImage] = useState("")


// const [hikedUpdateYet, setUpdateHikedYet] = useState(false)


/// DISPLAYS ///
// const showAllHikes = () => {
//   setDisplayHike(!displayHike)
//   setDisplayAddHike(false)
//   setDisplayEditHike(false)
// }

const showAddHikes = () => {
  setDisplayAddHike(!displayAddHike)
}

const showEditHikes = () => {
  setDisplayEditHike(!displayEditHike)

}

const showEditImages = () => {
  setHikeImages(!displayHikeImages)
}


//NAME NEW & UPDATE////
const handleNewHikeName = (e) => {
  setHikeName(e.target.value)
}

const handleUpdateHikeName = (e) => {
  setUpdateHikeName(e.target.value)
}


/// STATE NEW & UPDATE////
const handleNewHikeState = (e) => {
  setHikeState(e.target.value)
}

const handleUpdateHikeState = (e) => {
  setUpdateHikeState(e.target.value)
}


/// CITY NEW & UPDATE////
const handleNewHikeCity = (e) => {
  setHikeCity(e.target.value)
}

const handleUpdateHikeCity = (e) => {
  setUpdateHikeCity(e.target.value)
}


/// DESCRIPTION NEW & UPDATE////
const handlesNewHikeDescription = (e) => {
  setHikeDescription(e.target.value)
}

const handleUpdateHikeDescription = (e) => {
  setUpdateHikeDescription(e.target.value)
}

/// LENGTH NEW & UPDATE////
const handleNewHikeLength = (e) => {
  setHikeLength(e.target.value)
}

const handleUpdateHikeLength = (e) => {
  setUpdateHikeLength(e.target.value)
}

/// ELEVATION NEW & UPDATE////
const handlesNewHikeElevation = (e) => {
  setHikeElevation(e.target.value)
}

const handleUpdateHikeElevation = (e) => {
  setUpdateHikeElevation(e.target.value)
}

/// DIFFICULTY NEW & UPDATE////
const handleNewHikeDifficulty = (e) => {
  setHikeDifficulty(e.target.value)
}

const handleUpdateHikeDifficulty = (e) => {
  setUpdateHikeDifficulty(e.target.value)
}

// IMAGE NEW & UDPATE ///////

const handleNewHikeImage = (e) => {
  setHikeImage(e.target.value)
}


const handleUpdateHikeImage = (e) => {
  setUpdateHikeImage(e.target.value)
}






// IMAGE ARRAY NEW & UPDATE////

// const handleNewHikeImages = () => {
//
//   setHikeImageArray([hikeImage].concat(hikeImageArray))
// }

// const handleUpdateHikeImages = () => {
//
//   setHikeImageArray([hikeUpdateImage].concat(hikeImageArray))
// }


//HIKED YET NEW & UPDATE////
// const handlesNewHikedYet = (e) => {
//   setHikedYet(e.target.checked)
// }
// const handleUpdateHikedYet = (e) => {
//   setUpdateHikedYet(e.target.value)
// }


//////POST////////
const handleNewHike = (e) => {
  e.preventDefault()
  axios.post(
    'https://morning-meadow-41338.herokuapp.com/state_hikes',
   {
    name: hikeName,
    state: hikeState,
    city: hikeCity,
    description: hikeDescription,
    length: hikeLength,
    elevationGain: hikeElevation,
    difficulty: hikeDifficulty,
    imageArray: hikeImage

  }
).then(() => {

    axios
    .get('https://morning-meadow-41338.herokuapp.com/state_hikes')
    .then((response) => {
      setHike(response.data)
    })
  })

}


///////FETCH/////
useEffect(() => {
  axios
  .get('https://morning-meadow-41338.herokuapp.com/state_hikes')
  .then((response)=>{
      setHike(response.data)
  })
}, [])



///// DELETE /////
const handleDelete = (hikes) => {
  axios.delete(`https://morning-meadow-41338.herokuapp.com/state_hikes/${hikes._id}`).then(() => {

    axios.get('https://morning-meadow-41338.herokuapp.com/state_hikes').then((response) => {
      setHike(response.data)
    })
  })
}




////// UPDATE //////
const handleUpdateHike = (hikes)=>{
  axios
    .put(
      `https://morning-meadow-41338.herokuapp.com/state_hikes/${hikes._id}`,
      {

        name: hikeUpdateName? hikeUpdateName : hikes.name,
        state: hikeUpdateState? hikeUpdateState : hikes.state,
        city: hikeUpdateCity? hikeUpdateCity : hikes.city,
        description: hikeUpdateDescription? hikeUpdateDescription : hikes.description,
        length: hikeUpdateLength? hikeUpdateLength : hikes.length,
        elevationGain: hikeUpdateElevation? hikeUpdateElevation : hikes.elevationGain,
        difficulty: hikeUpdateDifficulty? hikeUpdateDifficulty : hikes.difficulty,
        // imageArray: hikeUpdateImage
        imageArray: hikeUpdateImage? hikeUpdateImage.split(' ') : hikes.imageArray
        //////////needs work ^^^^^^^
      }
    ).then(() => {
      axios
        .get('https://morning-meadow-41338.herokuapp.com/state_hikes')
        .then((response) => {
          setHike(response.data);
        })
  })
  setDisplayEditHike(!displayEditHike)
}






const addImageArray = ()=>{
  hike.imageArray.unshift()
}






return (
<div>
  <h1> State of Mind Hikes </h1>

<section>

<h2> Post New Hike </h2>
<button onClick={showAddHikes}>
Add Here
</button>
{displayAddHike?
<form onSubmit = {handleNewHike}>

name: <input type='text'  onChange={handleNewHikeName}/><br/>
state: <input type='text'  onChange={handleNewHikeState}/><br/>
city: <input type='text'  onChange={handleNewHikeCity}/><br/>
description: <input type='text'  onChange={handlesNewHikeDescription}/><br/>
length: <input type='number'  onChange={handleNewHikeLength}/><br/>
elevationGain: <input type='number'  onChange={handlesNewHikeElevation}/><br/>
difficulty: <input type='text'  onChange={handleNewHikeDifficulty}/><br/>
Images: <input type='text' onChange={handleNewHikeImage}/><br/>



<input type='submit' value='Post New Hike'/>
</form>
: null }
</section>

<div className='maincontainer'>
  {hike.map((hikes) => {
    console.log(hikes.imageArray)
    return (

      <div className='card' key={hikes._id}>

          <div className="carousel-wrapper">
            <Carousel>
            {hikes.imageArray?.map((images)=>{
              return(

                <img src={images}/>
              )
            })}

            </Carousel>
        </div>

        <h2>{hikes.name} <br/> {hikes.city}  {hikes.state} <br/> {hikes.length} Miles <br/> {hikes.elevationGain} Ft <br/> {hikes.difficulty}</h2>

        <details>
          <summary>Description</summary>
          {hikes.description}
        </details>
        <button onClick = {(e) => {
            handleDelete(hikes)
        }}>
        Remove this Hike</button>
        <br/>

        <button onClick={showEditHikes}>Edit</button>
        {displayEditHike ?

        <section>
        name: <input type='text' placeholder={hikes.name} onChange={handleUpdateHikeName}/><br/>
        state: <input type='text' placeholder={hikes.state}  onChange={handleUpdateHikeState}/><br/>
        city: <input type='text' placeholder={hikes.city} onChange={handleUpdateHikeCity}/><br/>
        description: <input type='text' placeholder={hikes.description} onChange={handleUpdateHikeDescription}/><br/>
        length: <input type='number' placeholder={hikes.length} onChange={handleUpdateHikeLength}/><br/>
        elevationGain: <input type='number' placeholder={hikes.elevationGain} onChange={handleUpdateHikeElevation}/><br/>
        difficulty: <input type='text' placeholder={hikes.difficulty} onChange={handleUpdateHikeDifficulty}/><br/>
        image:  <input type='text' defaultValue={hikes.imageArray} onChange={handleUpdateHikeImage}/><br/>
        <button onClick={(e) => {handleUpdateHike(hikes)} } type='submit' value='Update Hike'>
        Update hike
        </button>
        </section>
        : null }



      </div>


    )
  })
}
</div>




</div>
)





}
export default App;

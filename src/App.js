import {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import CarouselComponent from "./components/carousel.component";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoogleMap, LoadScript } from '@react-google-maps/api';




const App = () => {
////////////// HOOKS /////////////////////////
// hike array state
const [hike, setHike] = useState([])

//carousel

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

const showEditHikes = (hikes) => {
  document.getElementById('edithike'+hikes._id).classList.toggle('showhide');
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

// GOOGLE MAPS API
const mapStyles = {
  height: "25vh",
  width: "100%"};


  // this would be a new state probs for lat & long that represents our updated schema

  // const [lat, setLat] = useState("")
  // const [lng, setLng] = useState("")



const defaultCenter = {
  lat: 60.0180556, lng: -149.9861111
}
//  const center = { lat: lat, lng: lng}

// LatLng={{lat: hikes.lat, lng: hikes.lng}}


// const handleUpdateLng = (e) => {
//   setLng(e.target.value)
// }

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
    imageArray: hikeImage,

  }
).then(() => {

    axios
    .get('https://morning-meadow-41338.herokuapp.com/state_hikes')
    .then((response) => {
      setHike(response.data)
    })
  })
  setDisplayAddHike(!displayAddHike)
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
        imageArray: hikeUpdateImage? hikeUpdateImage.split(',') : hikes.imageArray

        //////////needs work ^^^^^^^
      }
    ).then(() => {
      axios
        .get('https://morning-meadow-41338.herokuapp.com/state_hikes')
        .then((response) => {
          setHike(response.data);
        })
  })
  showEditImages()

}


return (
<div>
  <img className='background' src="https://img.freepik.com/premium-vector/landscape-mountains-hand-drawn-illustration_514781-34.jpg?w=2000"/>
  <h1 className='header'> State of Mind Hikes </h1>
  <div >

  </div>
<section>


<button className='addbutton' onClick={showAddHikes}>
ADD HIKE HERE
</button>
{displayAddHike?
  <div className='addformbox'>
<form onSubmit = {handleNewHike}>

<label>Name: </label><input className='forminput' type='text'  onChange={handleNewHikeName}/><br/>
<label>State: </label><input type='text' className='forminput' onChange={handleNewHikeState}/><br/>
<label>City: </label><input type='text' className='forminput' onChange={handleNewHikeCity}/><br/>
<label>Description: </label><input type='text' className='forminput' onChange={handlesNewHikeDescription}/><br/>
<label>Length: </label><input type='text' className='forminput' onChange={handleNewHikeLength}/><br/>
<label>Elevation Gain: </label><input type='number' className='forminput' onChange={handlesNewHikeElevation}/><br/>
<label>Difficulty: </label><input type='text' className='forminput' onChange={handleNewHikeDifficulty}/><br/>
<label>Images: </label><input type='text' className='forminput' onChange={handleNewHikeImage}/><br/>



<input className='inputbutton' type='submit' value='Post New Hike'/>

</form>
</div>
: null }
</section>

<div className='maincontainer'>
  {hike.map((hikes) => {
    return (

      <div className='card' key={hikes._id}>

          <div className="carousel-wrapper">
            <Carousel showThumbs={false}>
            {hikes.imageArray?.map((images)=>{
              return(

                <img src={images}/>
              )
            })}

            </Carousel>
      <div className="map">

            <LoadScript
            googleMapsApiKey='AIzaSyDlshunWWUTan3KLTvvKlOKtRW-Na7cbDo'>
            <GoogleMap
            mapContainerStyle={mapStyles}


            zoom={10}
            // center={defaultCenter}
            center= {{lat: hikes.lat , lng: hikes.lng }}



          />
          </LoadScript>
     </div>
        </div>

        <h2>{hikes.name} <br/> {hikes.city}  {hikes.state} <br/> {hikes.length} Miles <br/> {hikes.elevationGain} Ft <br/> {hikes.difficulty}</h2>

        <details>
          <summary>Description</summary>
          {hikes.description}
        </details>
        <button className='divbutton' onClick = {(e) => {
            handleDelete(hikes)
        }}>
        Remove this Hike</button>
        <br/>

        <button className='divbutton' onClick={() => {showEditHikes(hikes)}}>Edit</button>


        <section className='showhide' id={'edithike'+hikes._id}>
        <div className='editformbox'>
        <label>Name: </label><input className='forminput' type='text' placeholder={hikes.name} onChange={handleUpdateHikeName}/><br/>
        <label>State: </label><input className='forminput' type='text' placeholder={hikes.state}  onChange={handleUpdateHikeState}/><br/>
        <label>City: </label><input className='forminput' type='text' placeholder={hikes.city} onChange={handleUpdateHikeCity}/><br/>
        <label>Description: </label><input className='forminput' type='text' placeholder={hikes.description} onChange={handleUpdateHikeDescription}/><br/>
        <label>Length: </label><input className='forminput' type='text' placeholder={hikes.length} onChange={handleUpdateHikeLength}/><br/>
        <label>Elevation Gain: </label><input className='forminput' type='number' placeholder={hikes.elevationGain} onChange={handleUpdateHikeElevation}/><br/>
        <label>Difficulty: </label><input className='forminput' type='text' placeholder={hikes.difficulty} onChange={handleUpdateHikeDifficulty}/><br/>
        <label>Image: </label><input className='forminput' type='text' defaultValue={hikes.imageArray} onChange={handleUpdateHikeImage}/><br/>
        </div>
        <button onClick={(e) => {handleUpdateHike(hikes)} } type='submit' value='Update Hike'>
        Update hike
        </button>

        </section>




      </div>


    )
  })
}
</div>




</div>
)





}

export default App

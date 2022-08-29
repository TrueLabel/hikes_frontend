import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

const App = () => {
////////////// HOOKS /////////////////////////
// hike array state
const [hike, setHike] = useState([])
// display states
const [displayHike, setDisplayHike] = useState(false)
const [displayAddHike, setDisplayAddHike] = useState(false)
const [displayEditHike, setDisplayEditHike] = useState(false)

// model states
const [hikeName, setHikeName] = useState("")
const [hikeState, setHikeState] = useState("")
const [hikeCity, setHikeCity] = useState("")
const [hikeDescription, setHikeDescription] = useState("")
const [hikeLength, setHikeLength] = useState(Number)
const [hikeElevation, setHikeElevation] = useState(Number)
const [hikeDifficulty, setHikeDifficulty] = useState("")
// not sure about this one yet
const [hikeImages, setHikeImages] = useState([])
const [hikedYet, setHikedYet] = useState(false)

//// UPDATE HOOKS/////////////////////////////
const [hikeUpdateName, setUpdateHikeName] = useState("")
const [hikeUpdateState, setUpdateHikeState] = useState("")
const [hikeUpdateCity, setUpdateHikeCity] = useState("")
const [hikeUpdateDescription, setUpdateHikeDescription] = useState("")
const [hikeUpdateLength, setUpdateHikeLength] = useState(Number)
const [hikeUpdateElevation, setUpdateHikeElevation] = useState(Number)
const [hikeUpdateDifficulty, setUpdateHikeDifficulty] = useState("")
const [hikeUpdateImages, setUpdateHikeImages] = useState([])
const [hikedUpdateYet, setUpdateHikedYet] = useState(false)


/// DISPLAYS ///
const showAllHikes = () => {
  setDisplayHike(!displayHike)
  setDisplayAddHike(false)
  setDisplayEditHike(false)
}

const showAddHikes = () => {
  setDisplayAddHike(!displayAddHike)
  setDisplayHike(false)
  setDisplayEditHike(false)
}

const showEditHikes = () => {
  setDisplayEditHike(!displayEditHike)
  setDisplayAddHike(false)
  setDisplayEditHike(false)
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

/// IMAGES NEW & UPDATE////
const handleNewHikeImages = (e) => {
  setHikeImages(e.target.value)
}
const handleUpdateHikeImages = (e) => {
  setUpdateHikeImages(e.target.value)
}

///HIKED YET NEW & UPDATE////
const handlesNewHikeHikedYet = (e) => {
  setHikedYet(e.target.value)
}
const handleUpdateHikeHikedYet = (e) => {
  setUpdateHikedYet(e.target.value)
}


///////FETCH/////
useEffect(() => {
  axios
  .get('http://localhost:3000/state_hikes')
  .then((response)=>{
      setHike(response.data)
  })
}, [])

//////POST////////
const handleNewHike = (e) => {
  e.preventDefault()
  axios.post('http://localhost:3000/state_hikes', {
    name: hikeName,
    state: hikeState,
    city: hikeCity,
    description: hikeDescription,
    length: hikeLength,
    elevationGain: hikeElevation,
    difficulty: hikeDifficulty,
    imageArray: hikeImages,
    hiked: hikedYet


  }).then(() => {
    axios.get('http://localhost:3000/state_hikes').then((response) => {
      setHike(response.data)
    })
  })

}

///// DELETE /////
const handleDelete = (hike) => {
  axios.delete(`http://localhost:3000/state_hikes/${hike._id}`).then(() => {
    axios.get('http://localhost:3000/state_hikes').then((response) => {
      setHike(response.data)
    })
  })

}


////// UPDATE //////
const handleUpdateHike = (hike)=>{
  axios
    .put(
      `http://localhost:3000/state_hikes/${hike._id}`,
      {

        name: hikeUpdateName,
        state: hikeUpdateState,
        city: hikeUpdateCity,
        description: hikeUpdateDescription,
        length: hikeUpdateLength,
        elevationGain: hikeUpdateElevation,
        difficulty: hikeUpdateDifficulty,
        imageArray: hikeUpdateImages,
        hiked: hikedUpdateYet

      }
    ).then((response) => {
      axios
        .get('http://localhost:3000/state_hikes')
        .then((response) => {
          setHike(response.data);
        })
  })
}



return (

  <h1> State of Mind Hikes </h1>

)



}

export default App;

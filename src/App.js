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
const [hikeLength, setHikeLength] = useState("")
const [hikeElevation, setHikeElevation] = useState("")
const [hikeDifficulty, setHikeDifficulty] = useState("")
// not sure about this one yet

// const [hikeImages, setHikeImages] = useState([])

// const [hikedYet, setHikedYet] = useState(false)


//// UPDATE HOOKS/////////////////////////////
const [hikeUpdateName, setUpdateHikeName] = useState("")
const [hikeUpdateState, setUpdateHikeState] = useState("")
const [hikeUpdateCity, setUpdateHikeCity] = useState("")
const [hikeUpdateDescription, setUpdateHikeDescription] = useState("")
const [hikeUpdateLength, setUpdateHikeLength] = useState()
const [hikeUpdateElevation, setUpdateHikeElevation] = useState()
const [hikeUpdateDifficulty, setUpdateHikeDifficulty] = useState("")
// const [hikeUpdateImages, setUpdateHikeImages] = useState([])
// const [hikedUpdateYet, setUpdateHikedYet] = useState(false)


/// DISPLAYS ///
// const showAllHikes = () => {
//   setDisplayHike(!displayHike)
//   setDisplayAddHike(false)
//   setDisplayEditHike(false)
// }

// const showAddHikes = () => {
//   setDisplayAddHike(!displayAddHike)
//   setDisplayHike(false)
//   setDisplayEditHike(false)
// }

// const showEditHikes = () => {
//   setDisplayEditHike(!displayEditHike)
//   setDisplayAddHike(false)
//   setDisplayEditHike(false)
// }


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


// IMAGES NEW & UPDATE////
// const handleNewHikeImages = (e) => {
//   setHikeImages(e.target.value)
// }
// const handleUpdateHikeImages = (e) => {
//   setUpdateHikeImages(e.target.value)
// }

// const handlePushHikeImages = (e) => {
//   hikeImages.push(e.target.value)
// }
//HIKED YET NEW & UPDATE////
// const handlesNewHikedYet = (e) => {
//   setHikedYet(e.target.checked)
// }
// const handleUpdateHikedYet = (e) => {
//   setUpdateHikedYet(e.target.value)
// }

////// UPDATE //////
const handleUpdateHike = (hikes)=>{
  axios
    .put(
      `https://morning-meadow-41338.herokuapp.com/state_hikes/${hikes._id}`,
      {

        name: hikeUpdateName,
        state: hikeUpdateState,
        city: hikeUpdateCity,
        description: hikeUpdateDescription,
        length: hikeUpdateLength,
        elevationGain: hikeUpdateElevation,
        difficulty: hikeUpdateDifficulty,

      }
    ).then((response) => {
      axios
        .get('https://morning-meadow-41338.herokuapp.com/state_hikes')
        .then((response) => {
          setHike(response.data);
        })
  })
}

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






return (
<div>
  <h1> State of Mind Hikes </h1>

<section>
<h2> Post New Hike </h2>
<form onSubmit = {handleNewHike}>

name: <input type='text'  onChange={handleNewHikeName}/><br/>
state: <input type='text'  onChange={handleNewHikeState}/><br/>
city: <input type='text'  onChange={handleNewHikeCity}/><br/>
description: <input type='text'  onChange={handlesNewHikeDescription}/><br/>
length: <input type='number'  onChange={handleNewHikeLength}/><br/>
elevationGain: <input type='number'  onChange={handlesNewHikeElevation}/><br/>
difficulty: <input type='text'  onChange={handleNewHikeDifficulty}/><br/>




<input type='submit' value='Post New Hike'/>
</form>
</section>


<div>
  {hike.map((hikes) => {
    return (
      <div key={hikes._id}>
        <h2>{hikes.name} {hikes.city} {hikes.state} {hikes.description} {hikes.length} {hikes.elevationGain} {hikes.difficulty}</h2>
        <button onClick={(event) => {handleDelete(hikes)}}>Hiked</button>
        <button>Edit Hike</button>
        <div>
        <form onSubmit={()=>{handleUpdateHike(hikes)}}>
        name: <input type='text'  onChange={handleUpdateHikeName}/><br/>
        state: <input type='text'  onChange={handleUpdateHikeState}/><br/>
        city: <input type='text'  onChange={handleUpdateHikeCity}/><br/>
        description: <input type='text'  onChange={handleUpdateHikeDescription}/><br/>
        length: <input type='number'  onChange={handleUpdateHikeLength}/><br/>
        elevationGain: <input type='number'  onChange={handleUpdateHikeElevation}/><br/>
        difficulty: <input type='text'  onChange={handleUpdateHikeDifficulty}/><br/>  
        <input type='submit' value='Update' />
        </form>
        </div>
      </div>
    )
  })}
</div>




</div>
)





}
export default App;

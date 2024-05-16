import { useState, useReducer, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './assets/Weather'
import WeatherDashboard from './assets/WeatherDashboard'
import Header from './assets/Header'
import SearchIcon from '@mui/icons-material/Search';
import Weatherone from './assets/Weatherone'
import axios from 'axios'
import Weatherrrs from './assets/Weatherrrs'
function reducer(state, action) {
  switch (action.type) {
      case 'FETCH_REQUEST':
          return {
              ...state,
              loading: true,
          };
      case 'FETCH_SUCCESS':
          return {
              ...state,
              loading: false,
              data: action.payload
          };
      case 'FETCH_ERROR':
          return {
              ...state,
              loading: false,
              error: action.payload
          };
      
  }
}

function App() {
  const [select, setSelect] = useState('Kathmandu')
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: null,
    data: []
})
function handleSelect(e) {
  setSelect(e.target.value) 
}
  
let selectedData;

switch (select) {
  case 'Kathmandu':
    selectedData = state.data[0];
    break;
  case 'Pokhara':
    selectedData = state.data[1];
    break;
  case 'Bhaktapur':
    selectedData = state.data[2];
    break;
  case 'Patan':
    selectedData = state.data[16];
    break;
  default:
    // обработка для других значений, если нужно
    break;}
    
 
console.log(selectedData);
  useEffect(() => {
    dispatch({ type: 'FETCH_REQUEST' })
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f902ba7a8917e940f6f377a2da89b53e`, {
        headers: { 'content-type': 'application/json' },
    })
        .then(res => res.data)
        .then(data => {
            dispatch({ type: 'FETCH_SUCCESS', payload: data.list })
        })
        .catch(err => {
            dispatch({ type: 'FETCH_ERROR', payload: err.message })
        })
        
}, [])

  return (
    <>
      <section className=' w-[90%] m-auto flex items-start justify-start mt-5 gap-10'>
        <div><Header /></div>
        <div className='flex flex-col items-start gap-5'>
          <form action="" className='w-[400px] h-[50px] relative flex items-center'>
            <select onChange={handleSelect} className="  w-full h-full rounded-3xl px-[30px] text-white "style={{ backgroundColor: 'rgb(1, 81, 1, 0.616)' }}>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Pokhara">Pokhara</option>
              <option value="Bhaktapur">Bhaktapur</option>
              <option value="Patan">Patan</option>
            </select>
          </form>
          <div className='flex flex-row items-start flex-wrap gap-10'>
            <Weatherone clou={selectedData} name={select} />
            <Weatherrrs state={selectedData} name={select}/>
            <Weather state={state.data} name={select}/>
            <WeatherDashboard/>
          </div>
        </div>
      </section>
    

    </>
  )
}

export default App

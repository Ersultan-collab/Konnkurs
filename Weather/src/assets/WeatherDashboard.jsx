
import React from 'react';


const cities = [
  { name: 'New York', temperature: '25°C', weather: 'Sunny', icon: '☀️' },
  { name: 'Paris', temperature: '20°C', weather: 'Partly Cloudy', icon: '⛅️' },
 
];

function WeatherDashboard() {
  return (
    <div className=" w-[50%]  rounded-lg ">
      <h2 className="text-xl text-white font-bold mb-4">Other Cities</h2>
      <div className="flex w-full items-center gap-4">
        {cities.map((city, index) => (
          <div key={index} className="flex w-[300px] items-center justify-between p-4  rounded-lg shadow" style={{ backgroundColor: 'rgb(1, 81, 1, 0.616)' }}>
            <div className=''>
              <h3 className="text-xl font-semibold text-white">{city.name}</h3>
              <p className="text-gray-300">{city.weather}</p>
            </div>
            <div className="text-right">
              <span className="text-2xl">{city.icon}</span>
              <p className="text-xl font-bold text-white">{city.temperature}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDashboard;
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  const R = 6371; // Radius of the earth in km
  let dLat = deg2rad(lat2-lat1);  // deg2rad below
  let dLon = deg2rad(lon2-lon1); 
  let a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  let d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function inRange(lat1, lon1, lat2, lon2, radius) {
    return getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2)<radius;
}

function sortByRange(centerLat, centerLon, objArray) {
    objArray.sort((obj1, obj2) => getDistanceFromLatLonInKm(centerLat, centerLon, obj1.latitude, obj1.longitude)
        - getDistanceFromLatLonInKm(centerLat, centerLon, obj2.latitude, obj2.longitude));
}

module.exports = {
    inRange,
    sortByRange
}
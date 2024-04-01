const axiosService = require('./axiosService');
// const url = "https://kontests.net/api/v1/all";
const url = "http://localhost:3001";

const getAllEvents = async()=>{
  return await axiosService("get",url);
}

module.exports = {
  getAllEvents
}
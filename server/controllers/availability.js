const axios = require("axios");

exports.getAvailabilityData = async (req, res, next) => {
  try {
    const dataRes = await axios.get(
      "https://api.data.gov.sg/v1/transport/carpark-availability"
    );
    const data = dataRes.data;
    console.log(data);
    res.status(200).json({
      message: "Current carpark availabilites were fetched",
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
};

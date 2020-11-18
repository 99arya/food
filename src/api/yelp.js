import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer el_VwJTlDUhwhR9sQ-C0oFlP_O8NSF811m_lTUN__U5AoCjAtU0zBz8Hmrz5M4DymNlZ9IS9sKvgPA2vE4eT7e6SB9gmY-KV2FDG4nrIVFoN56kumCUchJgeRWy1X3Yx",
  },
});

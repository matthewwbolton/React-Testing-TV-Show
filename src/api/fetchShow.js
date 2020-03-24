import axios from "axios";

// export const fetchShow = () => {
//   axios
//     .get(
//       "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
//     )
//     .then(res => {
//       setShow(res.data);
//       setSeasons(formatSeasons(res.data._embedded.episodes));
//     });
// };

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log("error fetching data from api, err: ", err.message);
      return err;
    });
};

import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { http3 } from "../../utils/http3";

export const reduxGetMe = async () => {
  return await http3.get(API_ENDPOINTS.GET_ME);
}


const fetchUserData = async (query) => {
  console.log(query, "ini pencariannya")
  //   const [_key] = queryKey;
  const { data } = await http3.get(query)
  //     .then((value) => {
  //       let Datahasil = {
  //         Adinda: value.data.data.name,
  //         email: value.data.data.email
  //       }

  //       // console.log(value, "ini value")
  //       return { data: Datahasil }
  //     }).catch((err) => {

  //       if (err.response.status === 401) {
  //         window.location.href = "/"
  //       }
  //       console.log(err, "ini errornya")
  //     })
  return data
}
const useGetDataUser = (options) => {
  return useQuery([API_ENDPOINTS.GET_ME, options], fetchUserData);
};
export { fetchUserData, useGetDataUser };





// import { ADD_PRODUCTS , ADD_PRODUCTS_FAIL , ADD_PRODUCTS_SUCCESS , DELETE_PRODUCTS, DELETE_PRODUCTS_FAIL , DELETE_PRODUCTS_SUCCESS , EDIT_PRODUCTS,EDIT_PRODUCTS_FAIL, EDIT_PRODUCTS_SUCCESS , GET_PRODUCT , GET_PRODUCTS , GET_PRODUCTS_FAIL , GET_PRODUCTS_SUCCESS , GET_PRODUCT_FAIL , GET_PRODUCT_SUCCESS } from "../actionTypes";
// import axios from 'axios'

// export const getProduct = () => async(dispatch)

// dispatch({
//     type : GET_PRODUCT
// })
// try {
//     const {data} = await axios.get("/product/get_product")
//     dispatch ({
//         type: GET_PRODUCTS_SUCCESS,
//         payload:data
//     })
// } catch (error) {
    
    
//     dispatch({
//         type: ADD_PRODUCTS_FAIL,
//         payload: error.response.data
//       })  
//     }


// export const deleteProduct = (id) => async (dispatch) => {
//     const token = localStorage.getItem("token")
//     dispatch({
//         type:DELETE_PRODUCTS
//     })
//     const config = {
//         headers : {
//             Authorization:token
//         }}
  

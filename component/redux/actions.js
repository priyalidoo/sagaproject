import { Add_To_Cart, Remove_From_Cart, Set_User_Data } from "./constants";
export function addToCart(item) {
    return {
        type: Add_To_Cart,
        data: item
    }
}
export function removeFromCart(item) {
    return {
        type: Remove_From_Cart,
        data: item
    }
}
export function  getUserList(item) {
return{
    type: Set_User_Data,
    data:null
}
}

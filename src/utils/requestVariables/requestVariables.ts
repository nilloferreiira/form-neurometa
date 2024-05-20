import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";


const token: any = Cookies.get('jwtToken');
const header = 'Bearer ' + token;
const decodedToken: any = jwtDecode(token);
const userId = decodedToken.id;
const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

export const requestVariables = {
    token,
    header,
    userId,
    role
}
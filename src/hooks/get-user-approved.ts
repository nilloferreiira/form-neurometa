import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export interface UserApproved {
    sub: string,
    name: string,
    approved: boolean
}

export function getUserApproved() {
    const token = cookies().get("token")?.value;

    if(!token) {
        throw new Error('Unauthenticated.')
    }

    const user: UserApproved = jwtDecode(token!)

    return user
}
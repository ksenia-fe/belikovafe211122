export interface User {
    phone: string,
    name: string,
    nickname: string,
    email: string,
    position: string, 
    photo: string,
    url?: string,
}

export type UsersList = User[]
export interface AuthState {
    user: UserData | null;
}

export interface UserData {
    displayName: string
    uid: string
    email: string
    phoneNumber: string | null
    photoURL: string
}

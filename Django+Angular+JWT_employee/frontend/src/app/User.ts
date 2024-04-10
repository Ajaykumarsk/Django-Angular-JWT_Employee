export interface User {
    id: number;
    name: string;
    email: string;
    gender: string;
    dateOfJoining: string; // Assuming date_of_joining is a string in ISO format (e.g., "YYYY-MM-DD")
    department: string;
    location: string;
}
import z from "zod"

{/**
    export interface IUserData{
    firstName: string;
    ...
    role: "user"| admin| mod //"" baki xa
    birthdate:date|null
    gender: male|female| other
    }
    */}
    const strongPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W-_]).{8,25}$/
   export const CreateUserDTO = z.object({
        firstName: z.string("first name is required").min(2,"must be atleast of two character").max(50),
        lastName: z.string().min(2).max(50),
        email: z.string().email(),
        username: z.string().min(5).max(20),
        password: z.string().regex(strongPassword),
        confirmPassword: z.string().regex(strongPassword),
        gender: z.enum(["male", "female", "prefer_not_to_say"]),
        birthDate: z.string().min(1, "Birth date is required"),
        university: z.string().min(2).max(100),
        company: z.object({
            name: z.string().min(2),
            department: z.string().min(2),
            title: z.string().min(2),
        }),
        address: z.string().min(5),
        role: z.string().regex(/^(Admin|User|Mod)$/),  //this can be used in gender but not if imported
    }).refine((data)=> data.password ===data.confirmPassword,
    {message:"Password and conform password doesnot match",path: ['confirmPassword']},
    )
    export type ICreateUser = z.infer<typeof CreateUserDTO> & { 
        image: string, 
        address:{
            address: string,
            city: string,
            state: string,
            stateCode:string,
            postalCode:string,
            coordinates: {
              lat: number,
              lng: number,
        }
        country: string,
    
    }};  // converts zod to ICreateUser and adds image as string
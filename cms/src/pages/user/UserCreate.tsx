import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TextInput } from "../../componets/ui/form/input"
import { FormLabel } from "../../componets/ui/form/label"
import { FormActionButton } from "../../componets/ui/button/FormButtons"
import { GenderCheckbox } from "../../componets/ui/button/checkbox/checkbox"

import { PageHeading } from "../../componets/ui/typography/Title"
import { type ICreateUser, CreateUserDTO  } from "../../lib/types/AuthType"


export default function CreateUserForm() {
    const {
        control,
        handleSubmit,
        reset,
        register,
        formState: { errors, isSubmitting }
    } = useForm<ICreateUser>({
        defaultValues: {
            firstName: "", lastName: "", email: "", username: "",
            password: "",confirmPassword:"", gender: "male", birthDate: "",
            university: "",
            company: { name: "", department: "", title: "" },
            address: "", role: "user",
        },
        resolver: zodResolver(CreateUserDTO)
    })

    const handleCreate = (data: ICreateUser) => {
        console.log(data)
        reset()
    }

    return (
          <section className="w-7xl mx-auto flex flex-col gap-3 bg-gray-200 shadow rounded-md p-5 my-5">
        <form onSubmit={handleSubmit(handleCreate)} className="flex w-full max-w-2xl p-4 gap-4 flex-col">
            <div className="border-b border-b-indigo-900 pb-5">
                <PageHeading>Register User</PageHeading>
            </div>
            {/* Name */}
            <div className="flex gap-3">
                <div className="flex flex-col w-full">
                    <FormLabel htmlFor="firstName">First Name:</FormLabel>
                    <TextInput name="firstName" type="text" control={control} errMsg={errors?.firstName?.message} />
                </div>
                <div className="flex flex-col w-full">
                    <FormLabel htmlFor="lastName">Last Name:</FormLabel>
                    <TextInput name="lastName" type="text" control={control} errMsg={errors?.lastName?.message} />
                </div>
            </div>

            {/* Email & Username */}
            <div className="flex gap-3">
                <div className="flex flex-col w-full">
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <TextInput name="email" type="email" control={control} errMsg={errors?.email?.message} />
                </div>
                <div className="flex flex-col w-full">
                    <FormLabel htmlFor="userName">Username:</FormLabel>
                    <TextInput name="username" type="text" control={control} errMsg={errors?.username?.message} />
                </div>
            </div>

            {/* Password */}
            <div className="flex flex-col">
                <div>
                <FormLabel htmlFor="password">Password:</FormLabel>
                <TextInput name="password" type="password" control={control} errMsg={errors?.password?.message} />
                </div>
                <div>
                <FormLabel htmlFor="confirmPassword">Confirm Password:</FormLabel>
                
                <TextInput name="confirmPassword" type="confirmPassword" control={control} errMsg={errors?.password?.message} />
                </div>
            </div>

            {/* Gender */}
            <div className="flex flex-col">
                <FormLabel htmlFor="gender">Gender:</FormLabel>
                <GenderCheckbox register={register} errMsg={errors?.gender?.message} />
            </div>

            {/* Birth Date */}
            <div className="flex flex-col">
                <FormLabel htmlFor="birthdate">Birth Date:</FormLabel>
                <input
                    type="date"
                    {...register("birthDate")}
                    className="border border-gray-300 rounded-sm p-2 text-sm focus:outline-none focus:ring-1"
                />
                {errors?.birthDate && <span className="text-red-500 text-xs">{errors.birthDate.message}</span>}
            </div>

            {/* University & Address */}
            <div className="flex gap-3">
                <div className="flex flex-col w-full">
                    <FormLabel htmlFor="university">University:</FormLabel>
                    <TextInput name="university" type="text" control={control} errMsg={errors?.university?.message} />
                </div>
                <div className="flex flex-col w-full">
                    <FormLabel htmlFor="address">Address:</FormLabel>
                    <TextInput name="address" type="text" control={control} errMsg={errors?.address?.message} />
                </div>
            </div>

            {/* Company */}
            <fieldset className="border border-gray-300 rounded-sm p-3 flex flex-col gap-3">
                <legend className="text-sm font-semibold px-1">Company</legend>
                <div className="flex gap-3">
                    <div className="flex flex-col w-full">
                        <FormLabel htmlFor="name">Name:</FormLabel>
                        <TextInput name="company.name" type="text" control={control} errMsg={errors?.company?.name?.message} />
                    </div>
                    <div className="flex flex-col w-full">
                        <FormLabel htmlFor="department">Department:</FormLabel>
                        <TextInput name="company.department" type="text" control={control} errMsg={errors?.company?.department?.message} />
                    </div>
                    <div className="flex flex-col w-full">
                        <FormLabel htmlFor="title">Title:</FormLabel>
                        <TextInput name="company.title" type="text" control={control} errMsg={errors?.company?.title?.message} />
                    </div>
                </div>
            </fieldset>

            {/* Role */}
            <div className="flex flex-col">
                <FormLabel htmlFor="role">Role:</FormLabel>
                <select
                    {...register("role")}
                    className="border border-gray-300 rounded-sm p-2 text-sm focus:outline-none focus:ring-1"
                >
                    <option value="user">User</option>
                    <option value="moderator">Moderator</option>
                    <option value="admin">Admin</option>
                </select>
                {errors?.role && <span className="text-red-500 text-xs">{errors.role.message}</span>}
            </div>

            {/* Actions */}
            <div className="w-full flex gap-3">
                <FormActionButton
                    disabled={isSubmitting}
                    type="reset"
                    onClick={(e) => { e.preventDefault(); reset() }}
                >
                    Cancel
                </FormActionButton>
                <FormActionButton disabled={isSubmitting} type="submit">
                    Create User
                </FormActionButton>
            </div>

        </form>
        </section>
    )
}
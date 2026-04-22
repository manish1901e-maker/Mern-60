import type { FieldValues, Path, UseFormRegister } from "react-hook-form"

type FormWithGender = FieldValues & { gender: string }

interface IGenderCheckboxProps<T extends FormWithGender> {
    register: UseFormRegister<T>
    errMsg?: string
}

export function GenderCheckbox<T extends FormWithGender>({ register, errMsg }: IGenderCheckboxProps<T>) {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex gap-4">
                {["male", "female", "prefer_not_to_say"].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer text-sm select-none">
                        <input
                            type="radio"
                            value={option}
                            {...register("gender" as Path<T>)}
                            className="accent-green-700 cursor-pointer"
                        />
                        {option.replace("_", " ")}
                    </label>
                ))}
            </div>
            {errMsg && <span className="text-red-500 text-xs">{errMsg}</span>}
        </div>
    )
}

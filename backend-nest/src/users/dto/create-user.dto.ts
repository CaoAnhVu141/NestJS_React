import { IsInt, IsNotEmpty } from "class-validator";
import { Type } from 'class-transformer';

export class CreateUserDto {

    @IsNotEmpty({message: "Name không được để trống"})
    name: string;

    @IsNotEmpty({message: "Email không được để trống"})
    email: string;

    @IsNotEmpty({message: "Password không được để trống"})
    password: string;

    @IsNotEmpty({message: "Age không được để trống"})
    age: number;

    @IsNotEmpty({message: "Gender không được để trống"})
    gender: string;

    avatar: string;


}

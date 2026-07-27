import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsPositive, IsString, MinLength } from 'class-validator'


export class UserDto{
    @IsNotEmpty()
    @IsString()
    nombre: string = ""; 

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    edad: number = 0;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string = "";

    @IsEmail()
    @IsNotEmpty()
    email: string = "";

    @IsArray()
    @IsString({"each": true})
    historial: string[] = []
}
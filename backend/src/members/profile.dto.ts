import { IsEmail, ArrayMaxSize, IsArray, ValidateIf, IsString, MaxLength, MinLength, Matches } from 'class-validator';

export class UpdateProfileDto {
  @ValidateIf((_object, value) => value !== undefined) @IsString() @MinLength(2) @MaxLength(120) name?: string;
  @ValidateIf((_object, value) => value !== undefined) @IsString() @MaxLength(1200) bio?: string;
  @ValidateIf((_object, value) => value !== undefined) @IsString() @MaxLength(120) major?: string;
  @ValidateIf((_object, value) => value !== undefined) @IsString() @MaxLength(120) cohort?: string;
  @ValidateIf((_object, value) => value !== undefined) @IsArray() @ArrayMaxSize(20) @IsString({ each: true }) @MaxLength(40, { each: true }) skills?: string[];
  @ValidateIf((_object, value) => value !== undefined) @IsString() @MaxLength(500) @Matches(/^(https:\/\/[^\s]+)?$/) website?: string;
  @ValidateIf((_object, value) => value !== undefined) @IsString() @MaxLength(500) @Matches(/^(https:\/\/(www\.)?github\.com\/[^\s]+)?$/) github?: string;
  @ValidateIf((_object, value) => value !== undefined) @IsString() @MaxLength(500) @Matches(/^(https:\/\/(www\.)?linkedin\.com\/[^\s]+)?$/) linkedin?: string;
}
export class BindProfileDto {
  @IsEmail() @MaxLength(255) email!: string;
}

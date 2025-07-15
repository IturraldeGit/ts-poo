import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from 'class-validator';

import { AccessType, Category } from '../models/category.model';

export interface ICreateCategorytDto extends Omit<Category, 'id'>{}

export class CreateCategoryDto implements ICreateCategorytDto{
  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async() => {
  try {
    const dto = new CreateCategoryDto();

    dto.name = 'Test Category';
    dto.image = 'https://example.com/image.png';
    dto.access = AccessType.PUBLIC;

    await validateOrReject(dto);
    console.log(dto);

  } catch (errors) {
    console.error('Validation failed. errors: ', errors);
  }
})();

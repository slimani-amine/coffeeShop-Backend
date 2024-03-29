import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({
    description: 'The name of the coffee',
    example: 'NesCafé Expresso',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'The brand of the coffee', example: 'NesCafé' })
  @IsString()
  readonly brand: string;

  @ApiProperty({ example: ['coffee', 'milk'] })
  @IsString({ each: true })
  readonly flavors: string[];
}

import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Cappuccino',
      brand: 'Cappuccino',
      flavors: ['Vanilla', 'Cappuccino'],
    },
    {
      id: 2,
      name: 'Espresso',
      brand: 'Espresso',
      flavors: ['Vanilla', 'Espresso'],
    },
    {
      id: 3,
      name: 'Latte',
      brand: 'Latte',
      flavors: ['Vanilla', 'Latte'],
    },
  ];

  findAll(): Coffee[] {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((coffee) => coffee.id === +id);
    if (!coffee) {
      //   throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(coffee: CreateCoffeeDto) {
    console.log(
      '🚀 ~ CoffeesService ~ create ~ coffee:',
      coffee instanceof CreateCoffeeDto,
    );
    this.coffees.push(coffee);
    return coffee;
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      Object.assign(existingCoffee, updateCoffeeDto);
    }
    return existingCoffee;
  }

  remove(id: string) {
    const index = this.coffees.findIndex((coffee) => coffee.id === +id);
    if (index >= 0) {
      this.coffees.splice(index, 1);
    }
  }
}

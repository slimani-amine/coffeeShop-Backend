import { Injectable, Module, Scope } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

// class MockCoffeesService {}
// class ConfigService {}
// class DevelopmentConfigService {}
// class ProductConfigService {}

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}

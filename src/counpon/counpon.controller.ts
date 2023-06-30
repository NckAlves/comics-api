import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CounponService } from './counpon.service';
import { CreateCounponDto } from './dto/create-counpon.dto';
import { UpdateCounponDto } from './dto/update-counpon.dto';

@Controller('counpon')
export class CounponController {
  constructor(private readonly counponService: CounponService) {}

  @Post()
  create(@Body() createCounponDto: CreateCounponDto) {
    return this.counponService.create(createCounponDto);
  }

  @Get()
  findAll() {
    return this.counponService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.counponService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCounponDto: UpdateCounponDto) {
    return this.counponService.update(+id, updateCounponDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.counponService.remove(+id);
  }
}

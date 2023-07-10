import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComicService } from './comic.service';
import { CreateComicDto } from './dto/create-comic.dto';
import { UpdateComicDto } from './dto/update-comic.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('comic')
export class ComicController {
  constructor(private readonly comicService: ComicService) {}

  @ApiOperation({ summary: 'Creates a new Comic' })
  @Post()
  create(@Body() createComicDto: CreateComicDto) {
    return this.comicService.create(createComicDto);
  }

  @ApiOperation({ summary: 'Fetchs comics' })
  @Get()
  findAll() {
    return this.comicService.findAll();
  }

  @ApiOperation({ summary: 'Fetchs a specific Comic' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comicService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updates a Comic' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComicDto: UpdateComicDto) {
    return this.comicService.update(+id, updateComicDto);
  }

  @ApiOperation({ summary: 'Deletes a Comic' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comicService.remove(+id);
  }
}

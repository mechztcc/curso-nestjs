import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('list')
  findAll() {
    return 'Listagem de recursos';
  }

  @Get('list/:id')
  findOne(@Param() params) {
    const { id } = params

    return `Curso de id ${id}`;
  }

  @Post('teste')
  create(@Body() body) {
      return body;
  }

}

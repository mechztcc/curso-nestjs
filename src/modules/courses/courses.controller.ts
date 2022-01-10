import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('list')
  findAll() {
    return 'Listagem de recursos';
  }

  @Get(':id')
  findOne(@Param() params) {
    return `Curso de id ${params.id}`;
  }

}

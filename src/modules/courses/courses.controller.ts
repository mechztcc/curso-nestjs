import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Response } from '@nestjs/common';

@Controller('courses')
export class CoursesController {


  @Get('list')
  findAll(@Response() response) {
    return response.status(200).send('Listagem de recursos');
  }

  @Get('list/:id')
  findOne(@Param() params) {
    const { id } = params

    return `Curso de id ${id}`;
  }

  @Post('teste')
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
      return body;
  }

}

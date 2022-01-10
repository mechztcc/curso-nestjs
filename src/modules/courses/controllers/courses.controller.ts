import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
  Response,
} from '@nestjs/common';
import { Course } from '../entities/course.entity';
import { CoursesService } from '../services/courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('list')
  findAll() {
    const courses: Course[] = this.coursesService.findAll();
    return courses;
  }

  @Get('list/:id')
  findOne(@Param() params) {
    const { id } = params;

    const course = this.coursesService.findOne(id);
    return course;
  }

  @Post('teste')
  create(@Body() body) {
    this.coursesService.create(body);
    return;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    this.coursesService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.coursesService.remove(Number(id));
  }



}

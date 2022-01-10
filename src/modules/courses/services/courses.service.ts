import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from '../entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do framework',
      description: 'Descrição do framework',
      tags: ['Nodejs', 'Javascript', 'NestJs'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    const course = this.courses.find((course) => {
      return course.id == id;
    });

    if (!course) {
      throw new HttpException(`Course ${id} not found`, HttpStatus.NOT_FOUND);
    }

    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: number, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex((course) => course.id);

    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: number) {
    const indexCourse = this.courses.findIndex((course) => course.id);

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}

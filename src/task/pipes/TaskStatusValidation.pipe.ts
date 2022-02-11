import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatusEnum } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allAllowedStatus = [TaskStatusEnum.DONE, TaskStatusEnum.OPEN];
  transform(value: any) {
    value = value.toUpperCase();
    if (this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }
    return value;
  }
  private isStatusValid(status: any) {
    const idx = this.allAllowedStatus.indexOf(status);
    return idx !== -1;
  }
}

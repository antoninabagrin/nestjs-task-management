import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateTaskMetadataDto {
  @IsString()
  @IsNotEmpty()
  details: string;

  @IsString()
  @IsBoolean()
  isDeactivated: boolean;

  @IsUUID()
  @IsString()
  @IsNotEmpty()
  taskId: string;
}

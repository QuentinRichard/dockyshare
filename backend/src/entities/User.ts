import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  @IsString()
  @IsNotEmpty()
  identifiant!: string;

  @Column()
  @IsString()
  @MinLength(6)
  motDePasse!: string;
}

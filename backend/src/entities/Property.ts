import { Entity, PrimaryGeneratedColumn, Column, Tree, TreeChildren, TreeParent } from "typeorm";
import { IsNotEmpty, IsString, IsOptional } from "class-validator";

@Entity()
@Tree("materialized-path")
export class Property {
  @PrimaryGeneratedColumn({ type: "integer" })
  id!: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @Column({ nullable: true })
  @IsString()
  @IsOptional()
  content?: string;

  @TreeParent()
  parent!: Property | null;

  @TreeChildren()
  children!: Property[];
}

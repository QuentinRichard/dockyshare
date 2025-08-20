import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text',{nullable:false, unique: true })
  @IsString()
  @IsNotEmpty()
  identifiant?: string;

  @Column('text',{nullable:false})
  @IsString()
  @MinLength(6)
  motDePasse?: string;

  constructor(identifiant?: string, motDePasse?: string){
    super();
    this.identifiant = identifiant;
    this.motDePasse = motDePasse;
  }
}

import { Exclude } from 'class-transformer'
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  name: string

  @Column()
  email: string

  @Exclude()
  @Column()
  password: string

  @Column({ default: false })
  admin: boolean

  @UpdateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

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

  @Column()
  admin: boolean

  @UpdateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

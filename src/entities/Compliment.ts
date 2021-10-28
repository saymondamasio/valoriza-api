import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Tag } from './Tag'
import { User } from './User'

@Entity('compliments')
export class Compliment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  user_sender: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_sender' })
  userSender: User

  @Column()
  user_receiver: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_sender' })
  userReceiver: User

  @Column()
  tag_id: string

  @ManyToOne(() => Tag)
  @JoinColumn({ name: 'tag_id' })
  tag: Tag

  @Column()
  message: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

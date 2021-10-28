import { classToPlain } from 'class-transformer'
import { getCustomRepository } from 'typeorm'
import { TagsRepository } from '../repositories/TagsRepository'

export class ListTagsService {
  async execute() {
    const tagsRepository = getCustomRepository(TagsRepository)

    const tags = await tagsRepository.find()

    return classToPlain(tags)
  }
}

export class Result {
  public title: string
  public imagePath: string
  public comment: string

  constructor (title: string, imagePath: string, comment: string = '') {
    this.title = title
    this.imagePath = imagePath
    this.comment = comment
  }
}

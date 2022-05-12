import { IHeader } from '../interfaces/IHeader'

export function Header({ title }: IHeader) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {title}</span>
      </span>
    </header>
  )
}

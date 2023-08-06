import './style.css'

type ButtonProps = {
  title: string
  destination: string
}

const Index = ({ title, destination }: ButtonProps) => {
  return (
    <a href={`#${destination}`} className="btn-primary">
      {title}
    </a>
  )
}

export default Index

type Props = {
  title: string;
}

export default function Home({ title = 'Cepheus' }: Props) {
  return (
    <h1>{ title }</h1>
  )
}

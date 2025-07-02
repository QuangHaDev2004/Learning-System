export const Title = (
  props: {
    title: React.ReactNode
  }
) => {
  const { title } = props;

  return (
    <>
      <h1 className="text-2xl font-bold">{title}</h1>
    </>
  )
}
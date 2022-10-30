export default function Post(props: any) {
  console.log(props)

  return (
    <>
      <article>
        <strong>{props.post.title}</strong>
        <br />
        <small>{props.post.subtitle}</small>
      </article>
      <br />
    </>
  )
}

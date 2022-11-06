interface postButtonInterface {
  children: any
  onClick: any
  theme: string
}

export default function Button(props: postButtonInterface) {
  console.log(props.theme)

  return (
    <>
      {/* <button onClick={() => props.onRemove(props.post.id)}>Remover</button> */}
      <button onClick={props.onClick}>{props.children}</button>
    </>
  )
}

function Display(props) {
  return <h1>{`'${props.result}'` || 'O'}</h1>;
}

export default Display;
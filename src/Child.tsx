interface ChildProps{
    id: string;
    age: number
}

const Child : React.FC<ChildProps> = () => {
  return (
    <div>Child</div>
  )
}

export default Child
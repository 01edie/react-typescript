import { ReactNode } from "react";

interface ChildProps {
  id: string;
  age: number;
  children?:  ReactNode;
  onClickFN?:()=>void
}

// explicitly annotated
const Child: React.FC<ChildProps> = ({ id, age , children, onClickFN}) => {
  return (
    <div>
      <div>{id}</div>
      Child
      {children}
      <div>
        <button onClick={onClickFN}>Click Me</button>
      </div>
    </div>
  );
};


// all react components can optionally provide these properties
// propTypes, displayName, defaultProps, contextTypes
// it will also receive children prop , after React 18, it has to be mentioned

// In this case typeScript will not know that it is a react functional component
export const Child1 = ({ id }: ChildProps) => {
  return (
    <div>
      <div>{id}
      {/* <p>{lom}</p> */}
      </div>
      Child
    </div>
  );
};

export default Child;

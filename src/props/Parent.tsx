import Child, { Child1 } from "./Child";

const Parent = () => {
  const clickFunction = (): void => {
    window.alert("CLicked!");
  };
  return (
    <div>
      <Child id="test" age={23} onClickFN={clickFunction}>
        test child
      </Child>
      <Child1 id="test1" age={26} />
    </div>
  );
};

export default Parent;

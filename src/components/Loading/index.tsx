import * as s from "./styles";

const Loading = () => {
  return (
    <s.LoadingBackdrop>
      <s.LoadingSpinner>
        <s.EmptyLabel>Loading, please wait.</s.EmptyLabel>
      </s.LoadingSpinner>
    </s.LoadingBackdrop>
  );
};

export default Loading;

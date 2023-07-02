import './TitleBar.scss';
export { TitleBar }

function TitleBar({
  title
}: {
  title:string
  }) {
  return (
    <div className="title-bar">
      <h1>{title}</h1>
    </div>
  );
}
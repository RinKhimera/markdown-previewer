import React from "react";

interface MarkdownProps {}

interface MarkdownState {}

class Markdown extends React.Component<MarkdownProps, MarkdownState> {
  constructor(props: MarkdownProps) {
    super(props);
    this.state = { state: true };
  }
  render() {
    return (
      <div className="grid h-screen place-items-center">
        <div className="text-center bg-red-200">
          <div className="">
            <h1 className="bg-slate-300 text-3xl font-bold">
              Markdown Previewer
            </h1>
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Markdown;

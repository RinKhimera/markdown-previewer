import React from "react";
import { marked } from "marked";
interface MarkdownProps {}

interface MarkdownState {}

class Markdown extends React.Component<MarkdownProps, MarkdownState> {
  constructor(props: MarkdownProps) {
    super(props);
    this.state = {
      markdown: "",
    };
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  updateMarkdown(markdown: string) {
    this.setState({ markdown });
  }

  createMarkup() {
    return {
      __html: marked(this.state.markdown),
    };
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <div className="text-center">
          <h1 className="bg-slate-300 text-3xl font-bold p-3 rounded-lg">
            Markdown Previewer
          </h1>
        </div>
        <div className="flex mx-5 gap-5">
          <div className=" bg-red-200  p-3 flex-1">
            <div className="grid justify-items-center">
              <h1 className="bg-slate-300 text-2xl font-bold p-3 rounded-lg center">
                Titre
              </h1>
              <textarea
                className="h-96 bg-slate-100"
                value={this.state.markdown}
                onChange={(e) => {
                  this.updateMarkdown(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className=" bg-green-200 p-3 flex-1">
            <div className="grid justify-items-center">
              <h1 className="bg-slate-300 text-2xl font-bold p-3 rounded-lg center">
                Titre
              </h1>
              <div
                className="h-96 prose lg:prose-xl"
                dangerouslySetInnerHTML={this.createMarkup()}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Markdown;

import React from "react";
import { marked } from "marked";
import { Inconsolata } from "next/font/google";

const incon = Inconsolata({ subsets: ["latin"] });

interface MarkdownProps {}

interface MarkdownState {
  markdown: string;
}

class Markdown extends React.Component<MarkdownProps, MarkdownState> {
  constructor(props: MarkdownProps) {
    super(props);
    this.state = {
      markdown: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.
  
\`\`\`
// this is a multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\`\`' && lastLine == '\\\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course, there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That looks like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`,
    };
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
      <div className="flex flex-col gap-4 items-center my-5">
        <div className="w-4/5 ">
          <h1 className="bg-slate-300 text-3xl font-bold p-3 rounded-lg mb-5">
            Markdown Previewer
          </h1>
          <div>
            <h1 className="bg-slate-300 text-xl font-bold p-3">Editor</h1>
            <div className={incon.className}>
              <textarea
                className="bg-slate-100 w-full h-64 p-1"
                value={this.state.markdown}
                onChange={(e) => {
                  this.updateMarkdown(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="w-11/12">
          <h1 className="bg-slate-300 text-2xl font-bold p-3 ">Previewer</h1>
          <div
            className="prose lg:prose-xl bg-slate-100 min-w-full py-4 px-3"
            dangerouslySetInnerHTML={this.createMarkup()}
          ></div>
        </div>
      </div>
    );
  }
}

export default Markdown;

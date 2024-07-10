import { useEffect, useState, forwardRef } from 'react';
import { createHighlighter } from 'shiki';

interface CodeProps {
  code: string;
  lang?: string;
  className?: string;
  rendered?: () => void;
  style?: React.CSSProperties;
  highlightLines?: number[];
  highlightRange?: number[][];
  diffAddLines?: number[];
  diffRemoveLines?: number[];
}

const Code = forwardRef<HTMLDivElement, CodeProps>((props, ref) => {
  const {
    code,
    lang,
    diffAddLines = [],
    diffRemoveLines = [],
    highlightLines = [],
    highlightRange = [[]],
    rendered,
    ...rest
  } = props;
  const [html, setHtml] = useState('');
  const parseCode = async (code: string, lang = 'typescript') => {
    const highlighter = await createHighlighter({
      langs: ['typescript', 'javascript', 'html', 'css', 'bash'],
      themes: ['one-dark-pro']
    });
    const data = highlighter.codeToHtml(code, {
      lang,
      theme: 'one-dark-pro',
      transformers: [
        {
          line(node, line) {
            node.properties['data-line'] = line;
            // highlight
            if (highlightLines.includes(line)) this.addClassToHast(node, 'highlight-line');
            highlightRange.forEach((arr) => {
              if (line >= arr[0] && line <= arr[arr.length - 1]) {
                this.addClassToHast(node, 'highlight-line');
              }
            });
            // diffs
            if (diffAddLines.includes(line)) {
              this.addClassToHast(node, 'diff add');
            }
            if (diffRemoveLines.includes(line)) {
              this.addClassToHast(node, 'diff remove');
            }
          }
        }
      ]
    });

    setHtml(data);
  };
  useEffect(() => {
    parseCode(code, lang).then(rendered);
  }, [code, lang, html]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} {...rest}></div>;
});

Code.displayName = 'Code';
export default Code;

import { useEffect, useState } from 'react';
import { createHighlighter } from 'shiki';

interface CodeProps {
  code: string;
  lang?: string;
  className?: string;
  style?: React.CSSProperties;
  highlightLines?: number[];
  highlightRange?: number[][];
}
export default function Code(props: CodeProps) {
  const { code, lang, highlightLines = [], highlightRange = [[]], ...rest } = props;
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
            if (highlightLines.includes(line)) this.addClassToHast(node, 'highlight-line');
            highlightRange.forEach((arr) => {
              if (line >= arr[0] && line <= arr[arr.length - 1]) {
                this.addClassToHast(node, 'highlight-line');
              }
            });
          }
        }
      ]
    });

    setHtml(data);
  };
  useEffect(() => {
    parseCode(code, lang);
  }, [code, lang]);

  return <div dangerouslySetInnerHTML={{ __html: html }} {...rest}></div>;
}

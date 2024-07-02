import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

interface CodeProps {
  code: string;
  lang?: string;
  className?: string;
  style?: React.CSSProperties;
}
export default function Code(props: CodeProps) {
  const { code, lang, ...rest } = props;
  const [html, setHtml] = useState('');
  const parseCode = async (code: string, lang = 'typescript') => {
    const data = await codeToHtml(code, {
      lang,
      theme: 'one-dark-pro'
    });

    setHtml(data);
  };
  useEffect(() => {
    parseCode(code, lang);
  }, [code, lang]);

  return <div dangerouslySetInnerHTML={{ __html: html }} {...rest}></div>;
}

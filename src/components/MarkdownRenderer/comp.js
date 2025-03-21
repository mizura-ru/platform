import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown 
        children={content} 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw]} 
      />
    </div>
  );
};

export default MarkdownRenderer;
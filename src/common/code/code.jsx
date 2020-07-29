import React, { Component, Fragment } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl'


import './code.scss'


export default class Code extends Component {

    copyToClipboard (e) {
        const el = e.target.parentElement.nextElementSibling;
        el.focus();
        let range = document.createRange();
        try {
          range.selectNode(el);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          document.execCommand('copy');
          if (sel.removeRange) {
            sel.removeRange(range);
          }
          else {
            sel.removeAllRanges();
          }
        //   toastr.success(`Copied.`, { icon: 'success', position: 'bottom-left' });
        }
        catch (err) {
          console.error('Copy to Clipboar Error:', err);
        //   toastr.error('Something went wrong.', 'Failed to copy CSS Selector.', { icon: 'error', position: 'top-center' });
        }
    }

    
  render() {
    const {title, type} = this.props;
    const code = (this.props.code || '');

    return (
        <div className='code'>
            <div className='titleGroup'>
                <div className='title'>{title || 'JavaScript Snippet'}</div>
                <div className='expander'/>
                <button className='copyBtn' onClick={this.copyToClipboard}>Copy</button>
            </div>
            <div className='coding'>
                <Highlight {...defaultProps} className='line-numbers' theme={theme} code={code.trim()} language={type || 'js'}>
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className='line-numbers'>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </div>
        </div>
    );
  }
}
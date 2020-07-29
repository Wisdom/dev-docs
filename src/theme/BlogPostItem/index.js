/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import {MDXProvider} from '@mdx-js/react';

import Link from '@docusaurus/Link';
import MDXComponents from '@theme/MDXComponents';

import styles from './styles.module.css';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function BlogPostItem(props) {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isBlogPostPage = false,
    inlineFormat=false,
  } = props;
  const {date, permalink, tags, readingTime} = metadata;
  const {author, title} = frontMatter;

  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL = frontMatter.author_image_url || frontMatter.authorImageURL;
  
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  const match = date.substring(0, 10).split('-');
  const year = match[0];
  const month = MONTHS[parseInt(match[1], 10) - 1];
  const day = parseInt(match[2], 10);

  if (inlineFormat==true) {
    return (
      <Link to={permalink} className={styles.articleLink}>
        <article className={styles.article}>
          <h3 className={styles.title}>{title}</h3>

          <div className={styles.tags}>
            {(tags||[]).map(({label, permalink: tagPermalink}) => (
              <Link
                key={tagPermalink}
                className={styles.tag}
                to={tagPermalink}>
                {label}
              </Link>
            ))}
          </div>
        </article>
      </Link>
    );
            }

  const renderPostHeader = () => {
    return (
      <header>
        <TitleHeading
          className={classnames('margin-bottom--sm', styles.blogPostTitle)}>
          {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
        </TitleHeading>
        <div className="margin-vert--sm">
          <time dateTime={date} className={styles.blogPostDate}>
            {month} {day}, {year}{' '}
            {readingTime && <> · {Math.ceil(readingTime)} min read</>}
          </time>
        </div>
        <div className="avatar margin-vert--md">
          {authorImageURL && (
            <a
              className="avatar__photo-link avatar__photo"
              href={authorURL}
              target="_blank"
              rel="noreferrer noopener">
              <img src={authorImageURL} alt={author} />
            </a>
          )}
          <div className="avatar__intro">
            {author && (
              <>
                <h4 className="avatar__name">
                  <a href={authorURL} target="_blank" rel="noreferrer noopener">
                    {author}
                  </a>
                </h4>
                <small className="avatar__subtitle">{authorTitle}</small>
              </>
            )}
          </div>
        </div>
      </header>
    );
  };

  return (
    <article className={!isBlogPostPage ? 'margin-bottom--xl' : undefined}>
      {renderPostHeader()}
      <section className="markdown">
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </section>
      <div className="margin-vert--sm">
  

          {(tags.length > 0 || truncated) && (
            <footer className="row margin-vert--md">
              {/* <time dateTime={date} className={styles.blogPostDate}>
                {month} {day}, {year}{' '}
                {readingTime && <> · {Math.ceil(readingTime)} min read</>}
              </time> */}
              {tags.length > 0 && (
                <div className="col margin-vert--lg">
                  <strong>Tags:</strong>
                  {tags.map(({label, permalink: tagPermalink}) => (
                    <Link
                      key={tagPermalink}
                      className={classnames("margin-horiz--sm", styles.tag)}
                      to={tagPermalink}>
                      {label}
                    </Link>
                  ))}
                </div>
              )}
              {truncated && (
                <div className="col text--right">
                  <Link
                    to={metadata.permalink}
                    aria-label={`Read more about ${title}`}>
                    <strong>Read More</strong>
                  </Link>
                </div>
              )}
            </footer>
          )}
        </div>
    </article>
  );
}

export default BlogPostItem;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import Link from '@docusaurus/Link';

function pluralize(count, word) {
  return count > 1 ? `${word}s` : word;
}

function BlogTagsPostPage(props) {
  const {metadata, items} = props;
  const {allTagsPath, name: tagName, count} = metadata;

  return (
    <Layout
      title={`Snippets tagged "${tagName}"`}
      description={`Blog | Tagged "${tagName}"`}>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2 margin-vert--xl">
            <h1>
              {count} {pluralize(count, 'snippet')} tagged with &quot;{tagName}
              &quot;
            </h1>
            <Link href={allTagsPath}>View All Tags</Link>
            <div className="margin-vert--xl">
              {items.map(({content: BlogPostContent}) => (
                <BlogPostItem
                  key={BlogPostContent.metadata.permalink}
                  frontMatter={BlogPostContent.frontMatter}
                  metadata={BlogPostContent.metadata}
                  truncated
                  inlineFormat={true}
                >
                  <BlogPostContent />
                </BlogPostItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogTagsPostPage;

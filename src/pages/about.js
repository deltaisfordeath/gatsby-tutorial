import React from 'react';
import Layout from './layout';

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle='About Me'>
        <p>Hi there! My name is Kenny Heagle. I'm learning Gatsby, which is why I'm building this site!</p>
      </Layout>
    </main>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage;
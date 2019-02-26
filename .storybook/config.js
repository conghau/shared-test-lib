import React from 'react';
import styled from 'styled-components';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const Wrapper = styled.div`
  padding: 20px 40px;
`;

const context = require.context('../src/components', true, /\.stories\.js$/);

const loadStories = () => {
  context.keys().forEach(filename => context(filename));
}

addDecorator(withInfo({
  inline: true,
  header: false,
}));

addDecorator(story => <Wrapper>{story()}</Wrapper>);

configure(loadStories, module);

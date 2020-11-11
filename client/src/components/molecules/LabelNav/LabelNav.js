import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { font, palette } from 'styled-theme';
import { ifProp } from 'styled-tools';

import Tab from '@atoms/Tab';
import Button from '@atoms/Button';

const LabelNavStyle = styled.div`
  display: flex;
  height: 2.5em;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`;

const LabelNav = (props) =>
<LabelNavStyle>
  <Tab tabList={['Label', 'Milestone']} state={props.state} tabChange={props.tabChange} />
  <Button type={'create'} onClick={() => props.createLabel()}>New issue</Button>
</LabelNavStyle>;

LabelNav.propTypes = {};

LabelNav.defaultProps = {};

export default LabelNav;

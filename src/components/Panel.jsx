import React from 'react';
import styled from 'styled-components';

const Panel = props => <PanelDiv>{props.children}</PanelDiv>;

const PanelDiv = styled.div`
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.26), 0 7px 14px 0 rgba(0, 0, 0, 0.19);
  border-radius: 2px;
  margin-bottom: 25px;
`;

export default Panel;

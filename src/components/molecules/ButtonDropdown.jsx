import {useState} from 'react'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from 'styled-dropdown-component';

export const ButtonDropdown = ({hidden, setHidden, actionButton}) => {
  return (
    <Dropdown>
      <DropdownMenu right={false} hidden={hidden} toggle={() => setHidden()}>
        <DropdownItem onClick={actionButton}>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

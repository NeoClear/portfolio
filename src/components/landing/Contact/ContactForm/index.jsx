import React, { useContext } from 'react';
import { Contacts, Linker } from './styles';
import { ThemeContext } from 'providers/ThemeProvider';

import {
  contact,
} from 'data/config';

export default () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Contacts theme={theme}>
      <h1>
        Contact Me
      </h1>
      <p>
        Wanna discuss potential employment opportunities with me? Checkout my <Linker href={"mailto:" + contact.email + "?subject=Potential Software Developer Opportunity At <Company>"}>email</ Linker>!
      </p>
    </Contacts>
  );
};

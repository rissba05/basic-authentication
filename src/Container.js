import React from 'react';

const Container = ({ children }) => ( // <-- "(" is an expression evaluation, not a "{" which indicates 1 or more code statements
  <div 
    style={styles.container}
  >
    { children }
  </div>
);

const styles = {
  container: {
    margin: '0 auto',
    padding: '50px 100px'
  }
};

export default Container;
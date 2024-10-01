/* eslint-disable */
// @ts-nocheck

export default function DataComponent({ name = '', age, highlighted }) {
  let styles = {};

  if (highlighted) {
    styles = {
      ...styles,
      fontWeight: 'bold',
      color: 'blue',
      backgroundColor: 'aqua',
    };
  }

  return (
    <>
      <p style={styles}>
        My name is {name} and I am {age} years old and I am the co-found of CML
      </p>
    </>
  );
}

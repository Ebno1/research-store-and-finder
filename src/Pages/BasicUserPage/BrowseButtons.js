import React from 'react';
import classes from './BrowseButtons.module.css';

function BrowseButtons() {
  return (
    <div className={classes.group}>
      <button>College</button>
      <button>University</button>
      <button>Personal Researcher</button>
    </div>
  );
}

export default BrowseButtons;

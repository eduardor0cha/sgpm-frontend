import React from 'react';

import { humanizeDate } from '../../helpers/date';
import GenericProfile from '../../assets/img/generic-profile.jpg';

function Post({ author, authorSpecialty, content, date }) {
  return (
    <div className="sgpm-c-post">
      <div className="sgpm-c-post__content">
        <img src={GenericProfile} />
        <div className="sgpm-c-post__content--body">
          <h3>{author + `, ` + authorSpecialty.toLowerCase()}</h3>
          <p>
            {content}
            <br></br>
          </p>
        </div>
      </div>
      <div className="sgpm-c-post__footer">
        <span>{humanizeDate(date)}</span>
        <a href="">Responder</a>
      </div>
    </div>
  );
}

export default Post;

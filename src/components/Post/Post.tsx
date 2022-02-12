import GenericProfile from '../../assets/img/generic-profile.jpg';
import humanizeDate from '../../helpers/date';

type PostProps = {
  authorFirstName: String;
  authorLastName?: String;
  authorSpecialty: String;
  content: String;
  date: Date;
};

function Post({
  authorFirstName,
  authorLastName,
  authorSpecialty,
  content,
  date
}: PostProps) {
  return (
    <div className="sgpm-c-post">
      <div className="sgpm-c-post__content">
        <img alt="profile" src={GenericProfile} />
        <div className="sgpm-c-post__content--body">
          <h3>
            {authorLastName === null
              ? `${authorFirstName}, ${authorSpecialty}`
              : `${authorFirstName} ${authorLastName}, ${authorSpecialty.toLowerCase()}`}
          </h3>
          <p>
            {content}
            <br />
          </p>
        </div>
      </div>
      <div className="sgpm-c-post__footer">
        <span>{humanizeDate(date)}</span>
        <a href=".">Responder</a>
      </div>
    </div>
  );
}

export default Post;

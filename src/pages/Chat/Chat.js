/*
import { useEffect, useState } from 'react';

import classNames from 'classnames';

import { Button, Post, Input } from '../../components';
import getPosts from '../../services/Posts';

function Chat() {
  const [currentTab, setCurrentTab] = useState('posts');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getPosts();
      setPosts(data);
    }
    getData();
  }, []);

  posts.sort(function (a, b) {
    return a.publication.createdAt > b.publication.createdAt
      ? -1
      : a.publication.createdAt < b.publication.createdAt
      ? 1
      : 0;
  });

  return (
    <div className="sgpm-p-chat">
      <div className="sgpm-p-chat__switch-buttons">
        <div
          className={classNames(
            `sgpm-p-chat__switch-button`,
            `sgpm-p-chat__switch-button--posts`,
            currentTab === 'posts' ? 'sgpm-p-chat__switch--button active' : null
          )}
          onClick={() => setCurrentTab('posts')}
        >
          <h4>Mural</h4>
        </div>
        <div
          className={classNames(
            `sgpm-p-chat__switch-button`,
            `sgpm-p-chat__switch-button--conversation`,
            currentTab === 'conversation'
              ? 'sgpm-p-chat__switch--button active'
              : null
          )}
          onClick={() => setCurrentTab('conversation')}
        >
          <h4>Suas conversas</h4>
        </div>
      </div>
      <div
        className={classNames(
          `sgpm-p-chat__posts--top`,
          currentTab === 'posts' ? 'sgpm-p-chat__posts--top active' : null
        )}
      >
        <h2>Mural</h2>
        <Button color="blue" text="Fazer publicação" />
      </div>
      <div
        className={classNames(
          `sgpm-p-chat__posts--body`,
          currentTab === 'posts' ? 'sgpm-p-chat__posts--body active' : null
        )}
      >
        <ul>
          {posts?.map(post => {
            const { author } = post.publication;

            return (
              <li key={post.publication.id}>
                <Post
                  authorFirstName={author.user.firstName}
                  authorLastName={author.user.lastName}
                  authorSpecialty={author.specialty}
                  content={post.publication.content}
                  date={post.publication.createdAt}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={classNames(
          `sgpm-p-chat__conversation--top`,
          currentTab === 'conversation'
            ? 'sgpm-p-chat__conversation--top active'
            : null
        )}
      >
        <h2>Suas conversas</h2>
      </div>
      <div
        className={classNames(
          `sgpm-p-chat__conversation--body`,
          currentTab === 'conversation'
            ? 'sgpm-p-chat__conversation--body active'
            : null
        )}
      >
        <Input type="sb" placeHolder="Pesquisar nome e iniciar bate-papo" />
        <h1>{`<Sem conversas ainda>`}</h1>
      </div>
    </div>
  );
}

export default Chat;
*/

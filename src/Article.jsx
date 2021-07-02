import React, {useState} from 'react';
import LikeButton from './LikeButton'


const Article = (props) => {
  const [isPublished, togglePublished] = useState(false)

  return (
    <div>
      <h1>{props.title}</h1>
      <lavel htmlFor="check">公開状態：</lavel>
      <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished)} />
      <LikeButton count={ props.count}/>
    </div>
  );
}

export default Article;

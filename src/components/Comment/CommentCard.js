
import React from 'react';

export const CommentCard = ({ data }) => {
  return (
    <div className='border-l-2 border-black'>
      <div className='w-1/3 p-3 m-3 rounded-lg'>
        <span className='font-bold text-xl m-2'>{data.author}</span>
        <span>{data.content}</span>
      </div>
      {data.replies && data.replies.length > 0 && (
        <div className='ml-10'>
          <CommentData data={data.replies} />
        </div>
      )}
    </div>
  );
};

export const CommentData = ({ data }) => {
  return (
    <div>
      {data.map((d) => (
        <CommentCard key={d.id} data={d} />
      ))}
    </div>
  );
};


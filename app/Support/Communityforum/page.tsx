import React from 'react';

const CommunityForumPage = () => {
  return (
    <div className='bg-gradient-to-r bg-blue-950 text-white min-h-screen py-8 px-4 lg:px-8'>
      <h1 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '20px' }}>Community Forum</h1>

      <div className='bg-white text-black p-6 rounded-lg mb-6'>
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Create a New Post</h2>
          <form>
            <div className='mb-4'>
              <label htmlFor='title' className='block text-sm font-medium mb-2'>Title</label>
              <input
                type='text'
                id='title'
                name='title'
                placeholder='Enter the title of your post'
                className='w-full p-2 border border-gray-300 rounded'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='content' className='block text-sm font-medium mb-2'>Content</label>
              <textarea
                id='content'
                name='content'
                rows={5} // Changed from string to number
                placeholder='Write your post content here'
                className='w-full p-2 border border-gray-300 rounded'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
            >
              Post
            </button>
          </form>
        </section>
      </div>

      <div className='bg-white text-black p-6 rounded-lg mb-6'>
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Recent Posts</h2>
          <ul>
            <li className='border-b border-gray-300 pb-4 mb-4'>
              <h3 className='text-lg font-semibold'>Post Title 1</h3>
              <p className='text-sm text-gray-600'>Posted by User 1</p>
              <p className='mt-2'>This is a summary of the first post. It provides a brief overview of the content discussed.</p>
              <a href='#' className='text-blue-600 hover:underline mt-2 inline-block'>Read more</a>
            </li>
            <li className='border-b border-gray-300 pb-4 mb-4'>
              <h3 className='text-lg font-semibold'>Post Title 2</h3>
              <p className='text-sm text-gray-600'>Posted by User 2</p>
              <p className='mt-2'>This is a summary of the second post. It provides a brief overview of the content discussed.</p>
              <a href='#' className='text-blue-600 hover:underline mt-2 inline-block'>Read more</a>
            </li>
            {/* Add more posts as needed */}
          </ul>
        </section>
      </div>

      <div className='bg-white text-black p-6 rounded-lg mb-6'>
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Discussion Topics</h2>
          <ul>
            <li className='mb-4'>
              <a href='#' className='text-blue-600 hover:underline text-lg'>Topic 1: Discussion about Feature X</a>
            </li>
            <li className='mb-4'>
              <a href='#' className='text-blue-600 hover:underline text-lg'>Topic 2: Suggestions for Improvement</a>
            </li>
            <li className='mb-4'>
              <a href='#' className='text-blue-600 hover:underline text-lg'>Topic 3: General Questions</a>
            </li>
            {/* Add more topics as needed */}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CommunityForumPage;

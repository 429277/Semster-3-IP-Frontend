import FontysEinhoven from '../../Assets/FontysEindhoven.jpg';
import CommentSection from '../Forms/CommentSection';

function Post({ username, message, image }) {

  return (
    <div>
      <div className="flex my-2">
        <div className="w-full md:mx-2 mb-4 md:mb-0">
          <div className="bg-white rounded-lg overflow-hidden shadow relative">
            <div className="flex mr-3">
              <img className="mt-2 mx-2 my-1 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="" />
              <p className="my-3">{username}</p>
            </div>
            <img className="h-full w-full object-cover object-center" src={image} alt="" />
            <div className="p-4 h-auto md:h-40 lg:h-48">
              <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                {message}
              </div>
              <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                <a className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#something</a>
                <a className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#sky</a>
              </div>
            </div>
          </div>
        </div>
        <CommentSection />
      </div>
    </div>
  );
}

export default Post;
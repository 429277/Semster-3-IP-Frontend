
function Post({ user, message }) {

  return (
    <div class="w-full md:mx-2 mb-4 md:mb-0">
      <div class="bg-white rounded-lg overflow-hidden shadow relative">
        <img class="h-full w-full object-cover object-center" src={require('./Fontys-eindhoven.jpg')} alt="" />
        <div class="p-4 h-auto md:h-40 lg:h-48">
          <a href="#" class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
            {user}: {message}
          </a>
          <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem blanditiis unde asperiores? Officia amet perspiciatis ad quibusdam incidunt eaque, nobis, eveniet neque porro id commodi quisquam debitis!
          </div>
          <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
            <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#something</a>
            <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#sky</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
export default function RenderPosts(props) {
  return (
    <div className="flex justify-center py-3">
      <div className="w-2/5 bg-white shadow-lg rounded-lg p-4 hover:bg-gray-100">
        <div className="flex items-center mb-4">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Profile Picture"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <h2 className="text-lg font-bold">@{props.username}</h2>
            <p className="text-gray-500 text-sm">{props.time}</p>
          </div>
        </div>
        <p className="text-gray-800 mb-4 pl-5">{props.content}</p>
        <div className="flex justify-around">
          <div>
            <span onClick={() => props.clickLike(props.post)}>
              {props.icon}
            </span>{" "}
            {props.likes}
          </div>
          <div>Comment</div>
          <div>Share</div>
        </div>
      </div>
    </div>
  );
}
import { PhotoIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";

export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3 ">
      <img
        src="https://e7.pngegg.com/pngimages/708/311/png-clipart-icon-logo-twitter-logo-twitter-logo-blue-social-media-thumbnail.png"
        alt="user-img"
        className="h-11 w-11 rounder-full cursor-pointer hover:brightness-95"
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
            cols="30"
            rows="2"
            placeholder="What's happening?"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex ">
            <PhotoIcon className="h-10 w-10 hoverEffect p-2 test-sky-500 hover:bg-sky-100" />
            <HandThumbUpIcon className="h-10 w-10 hoverEffect p-2 test-sky-500 hover:bg-sky-100" />
          </div>
          <button className="bg-blue-400 text-white px-4 py-1.5 rounder-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

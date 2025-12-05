export default function Topbar(){
    return (
    <div className="w-full h-16 bg-gray-900 border-b border-gray-700 flex items-center px-4 gap-6">
      {/* Logo */}
      <div className="flex items-center gap-2 text-white text-lg font-semibold">
        <img
          src="/albion_icon.png"
          alt="icon"
          className="w-8 h-8 object-contain"
        />
        <span>Albion Kills</span>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-lg">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 px-4 rounded bg-gray-800 text-white outline-none border border-gray-700 focus:border-blue-500"
        />
      </div>

      {/* Catch Datas Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
        Catch Datas
      </button>
    </div>
  );
}
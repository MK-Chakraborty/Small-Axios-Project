export default function AddPost() {
  return (
    <section className="border-b border-[#3b3440]  pb-10">
      <div className="border-b border-[#3b3440] mt-5 mb-10">
        <h2 className="text-[#c1aed1] text-xl sm:text-2xl md:text-5xl text-end font-light px-5 pb-8">
          Add New Post
        </h2>
      </div>
      <form action="" className="px-5">
        <input
          type="text"
          placeholder="Post Title"
          className="block border border-[#3b3440] p-2 w-full mb-5 rounded-2xl"
        />
        <textarea
          type="text"
          placeholder="Post Description"
          className="block border border-[#3b3440] p-2 w-full mb-5 rounded-2xl"
        />
        <button
          type="submit"
          className="block border border-[#3b3440] p-2 rounded-2xl mx-auto hover:bg-[#c1aed1] hover:font-black hover:cursor-crosshair"
        >
          Add
        </button>
      </form>
    </section>
  );
}

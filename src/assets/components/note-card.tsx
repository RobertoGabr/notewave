export function NoteCard() {
  return (
    <button className="rounded-md bg-slate-800 p-5 space-y-3 outline-none  overflow-hidden relative hover:ring-2 hover:ring-slate-600 text-left focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-small font-medium text-slate-300">Há 4 dias</span>
      <p className="text-small font-normal text-slate-400 leading-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo placeat
        recusandae magni mollitia in optio quibusdam provident porro neque! Est
        eveniet commodi iure dolorum voluptas nisi suscipit at sequi? Ipsam.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
    </button>
  );
}
